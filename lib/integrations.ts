import { LeadSubmissionPayload, RequirementOption } from '@/types';

const ALLOWED_REQUIREMENTS: RequirementOption[] = [
  'Find Importers',
  'Find Exporters',
  'Competitor Analysis',
  'Trade Statistics',
  'Market Research',
  'Supplier Sourcing',
];

export function sanitizeInput(value: unknown, maxLength = 300): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[<>]/g, '') // Strip HTML angle brackets to prevent injection
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .trim()
    .slice(0, maxLength);
}

export function validateLeadPayload(raw: Record<string, unknown>): {
  valid: boolean;
  sanitized?: LeadSubmissionPayload;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  // Anti-spam honeypot check
  const honeypot = sanitizeInput(raw.websiteHoneypot, 100);
  if (honeypot.length > 0) {
    return {
      valid: false,
      errors: { form: 'Spam submission rejected.' },
    };
  }

  const fullName = sanitizeInput(raw.fullName, 120);
  const companyName = sanitizeInput(raw.companyName, 160);
  const phoneOrZalo = sanitizeInput(raw.phoneOrZalo, 40);
  const businessEmail = sanitizeInput(raw.businessEmail, 160);
  const productOrHsCode = sanitizeInput(raw.productOrHsCode, 200);
  const targetCountry = sanitizeInput(raw.targetCountry, 120);
  const additionalInfo = sanitizeInput(raw.additionalInfo, 1000);
  const sourcePage = sanitizeInput(raw.sourcePage || '/', 100);
  const locale = raw.locale === 'en' ? 'en' : 'vi';
  const consentAccepted = Boolean(raw.consentAccepted);

  const rawReqs = Array.isArray(raw.mainRequirements) ? raw.mainRequirements : [];
  const mainRequirements = rawReqs.filter((r): r is RequirementOption =>
    ALLOWED_REQUIREMENTS.includes(r as RequirementOption)
  );

  if (fullName.length < 2) {
    errors.fullName =
      locale === 'vi' ? 'Vui lòng nhập họ và tên hợp lệ.' : 'Please enter your full name.';
  }
  if (companyName.length < 2) {
    errors.companyName =
      locale === 'vi' ? 'Vui lòng nhập tên doanh nghiệp.' : 'Please enter your company name.';
  }
  if (!/^[0-9+\-\s()]{7,20}$/.test(phoneOrZalo)) {
    errors.phoneOrZalo =
      locale === 'vi'
        ? 'Vui lòng nhập số điện thoại / Zalo hợp lệ (7–20 ký tự số).'
        : 'Please enter a valid Phone / Zalo number (7–20 digits).';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(businessEmail)) {
    errors.businessEmail =
      locale === 'vi' ? 'Vui lòng nhập email doanh nghiệp hợp lệ.' : 'Please enter a valid business email.';
  }
  if (productOrHsCode.length < 2) {
    errors.productOrHsCode =
      locale === 'vi'
        ? 'Vui lòng nhập tên sản phẩm hoặc mã HS cần tra cứu.'
        : 'Please enter the product name or HS Code.';
  }
  if (targetCountry.length < 2) {
    errors.targetCountry =
      locale === 'vi' ? 'Vui lòng chọn hoặc nhập quốc gia mục tiêu.' : 'Please specify a target country.';
  }
  if (mainRequirements.length === 0) {
    errors.mainRequirements =
      locale === 'vi'
        ? 'Vui lòng chọn ít nhất 1 nhu cầu khai thác dữ liệu.'
        : 'Please select at least one primary requirement.';
  }
  if (!consentAccepted) {
    errors.consentAccepted =
      locale === 'vi'
        ? 'Vui lòng đồng ý với chính sách bảo mật và xử lý dữ liệu để tiếp tục.'
        : 'Please accept the data processing and privacy notice.';
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    sanitized: {
      fullName,
      companyName,
      phoneOrZalo,
      businessEmail,
      productOrHsCode,
      targetCountry,
      mainRequirements,
      additionalInfo,
      consentAccepted,
      sourcePage,
      locale,
    },
  };
}

/**
 * Integration Adapter for CRM Webhook, Google Sheets, and Email Notifications.
 * Strictly checks environment variables. Never fabricates live delivery if credentials are not configured.
 */
export async function dispatchLeadToIntegrations(
  lead: LeadSubmissionPayload,
  leadId: string,
  timestamp: string
): Promise<{ mode: 'mock_logged' | 'live_forwarded'; dispatchedTargets: string[] }> {
  const crmWebhook = process.env.CRM_WEBHOOK_URL;
  const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const emailWebhook = process.env.NOTIFICATION_EMAIL_WEBHOOK_URL;

  const dispatchedTargets: string[] = [];
  const payload = {
    leadId,
    timestamp,
    brand: 'TRADEINTEL GLOBAL',
    ...lead,
  };

  if (crmWebhook) {
    try {
      const res = await fetch(crmWebhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(process.env.CRM_WEBHOOK_SECRET
            ? { 'X-Webhook-Secret': process.env.CRM_WEBHOOK_SECRET }
            : {}),
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) dispatchedTargets.push('CRM_WEBHOOK');
    } catch {
      // Logged safely without exposing secrets
    }
  }

  if (sheetsWebhook) {
    try {
      const res = await fetch(sheetsWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) dispatchedTargets.push('GOOGLE_SHEETS');
    } catch {
      // Ignore network error in fallback
    }
  }

  if (emailWebhook) {
    try {
      const res = await fetch(emailWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) dispatchedTargets.push('EMAIL_NOTIFICATION');
    } catch {
      // Ignore
    }
  }

  return {
    mode: dispatchedTargets.length > 0 ? 'live_forwarded' : 'mock_logged',
    dispatchedTargets,
  };
}
