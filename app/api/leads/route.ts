import { NextRequest, NextResponse } from 'next/server';
import { dispatchLeadToIntegrations, validateLeadPayload } from '@/lib/integrations';

// In-memory sliding window rate limiter per IP
const rateLimitStore = new Map<string, number[]>();
const WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_SECONDS || 600) * 1000;
const MAX_REQ = Number(process.env.RATE_LIMIT_MAX_REQUESTS_PER_WINDOW || 10);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitStore.get(ip) || []).filter((ts) => now - ts < WINDOW_MS);
  if (timestamps.length >= MAX_REQ) {
    rateLimitStore.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'local-client';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          mode: 'mock_logged',
          message: 'Too many requests. Please wait a few minutes before submitting again.',
        },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Record<string, unknown>;
    const validation = validateLeadPayload(body);

    if (!validation.valid || !validation.sanitized) {
      return NextResponse.json(
        {
          success: false,
          mode: 'mock_logged',
          message:
            body.locale === 'en'
              ? 'Please check the highlighted form fields.'
              : 'Vui lòng kiểm tra lại các trường thông tin bắt buộc.',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const leadId = `TIG-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const dispatchResult = await dispatchLeadToIntegrations(
      validation.sanitized,
      leadId,
      timestamp
    );

    const isVi = validation.sanitized.locale === 'vi';
    const message =
      dispatchResult.mode === 'live_forwarded'
        ? isVi
          ? `Yêu cầu nhận DATA DEMO (Mã: ${leadId}) đã được ghi nhận và chuyển tới hệ thống tư vấn.`
          : `Your Data Demo request (Ref: ${leadId}) has been received and routed to our team.`
        : isVi
          ? `Yêu cầu nhận DATA DEMO (Mã: ${leadId}) đã được xác thực thành công (Chế độ Sandbox/Adapter sẵn sàng kết nối CRM Webhook).`
          : `Your Data Demo request (Ref: ${leadId}) has been validated and recorded (Sandbox/Adapter mode ready for CRM Webhook connection).`;

    return NextResponse.json(
      {
        success: true,
        leadId,
        timestamp,
        mode: dispatchResult.mode,
        message,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        mode: 'mock_logged',
        message: 'Unable to process request payload.',
      },
      { status: 500 }
    );
  }
}
