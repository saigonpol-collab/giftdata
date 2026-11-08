import { Language } from '@/types';

export const UI_TRANSLATIONS = {
  vi: {
    brandSub: 'GLOBAL TRADE INTELLIGENCE PLATFORM',
    sloganEn: 'SEE THE MARKET. KNOW YOUR COMPETITORS. FIND YOUR CUSTOMERS.',
    sloganVi: 'Nhìn rõ thị trường – Thấu hiểu đối thủ – Tìm đúng khách hàng.',
    nav: {
      home: 'Trang chủ',
      solutions: 'Giải pháp',
      dataDemo: 'Data Demo',
      dataCoverage: 'Phạm vi quốc gia',
      applications: 'Ứng dụng & Ngành',
      howItWorks: 'Quy trình',
      about: 'Về chúng tôi',
      contact: 'Liên hệ & Demo',
      ctaRegister: 'Đăng Ký Nhận Data Demo',
      explorePlatform: 'Khám Phá Nền Tảng',
    },
    hero: {
      badge: 'TRADEINTEL GLOBAL · B2B CUSTOMS & TRADE INTELLIGENCE',
      headline: 'ĐỪNG KINH DOANH QUỐC TẾ BẰNG CẢM TÍNH!',
      subheadline:
        'Khai thác dữ liệu thương mại và hải quan quốc tế để tìm đúng khách hàng, phân tích đối thủ và khám phá cơ hội thị trường.',
      primaryCta: 'ĐĂNG KÝ NHẬN DATA DEMO',
      secondaryCta: 'KHÁM PHÁ NỀN TẢNG',
      bullet1: 'Tìm kiếm doanh nghiệp xuất nhập khẩu theo mã HS & tên sản phẩm.',
      bullet2: 'Khai thác lịch sử giao dịch và mạng lưới đối tác thương mại của đối thủ.',
      bullet3: 'Phân tích kim ngạch, đơn giá và xu hướng ngành hàng đa quốc gia.',
    },
    common: {
      sampleBadge: 'SAMPLE DATA / DEMONSTRATION DATA',
      sampleDisclaimer:
        'Dữ liệu hiển thị dưới đây là dữ liệu mô phỏng (Sample/Demonstration Data) nhằm minh họa chức năng lọc, tra cứu và phân tích của nền tảng. Không đại diện cho tờ khai thực tế khi chưa xác minh theo mã HS cụ thể.',
      requestDemoNow: 'Đăng Ký Nhận Data Demo',
      viewInteractiveDemo: 'Trải Nghiệm Data Demo Trực Quan',
      checkCountryCoverage: 'Kiểm Tra Phạm Vi Quốc Gia',
      consultZalo: 'Liên Hệ Tư Vấn Qua Zalo',
      zaloPendingNote: 'Kênh Zalo OA chính thức sẽ kích hoạt khi cấu hình tài khoản doanh nghiệp. Vui lòng để lại số Zalo trong form để chuyên viên kết nối trực tiếp.',
    },
  },
  en: {
    brandSub: 'GLOBAL TRADE INTELLIGENCE PLATFORM',
    sloganEn: 'SEE THE MARKET. KNOW YOUR COMPETITORS. FIND YOUR CUSTOMERS.',
    sloganVi: 'Evidence-Based B2B Customs & Global Trade Intelligence.',
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      dataDemo: 'Data Demo',
      dataCoverage: 'Data Coverage',
      applications: 'Applications',
      howItWorks: 'How It Works',
      about: 'About Us',
      contact: 'Request Demo',
      ctaRegister: 'Request Data Demo',
      explorePlatform: 'Explore Platform',
    },
    hero: {
      badge: 'TRADEINTEL GLOBAL · B2B CUSTOMS & TRADE INTELLIGENCE',
      headline: 'STOP RUNNING INTERNATIONAL TRADE ON GUESSWORK!',
      subheadline:
        'Leverage global trade and customs intelligence to find verified buyers, analyze competitors, and uncover high-growth market opportunities.',
      primaryCta: 'REQUEST DATA DEMO',
      secondaryCta: 'EXPLORE PLATFORM',
      bullet1: 'Search verified importers & exporters by HS Code and product keywords.',
      bullet2: 'Track competitor shipment history and global trading partner networks.',
      bullet3: 'Analyze trade value, unit pricing, and multi-country commodity trends.',
    },
    common: {
      sampleBadge: 'SAMPLE DATA / DEMONSTRATION DATA',
      sampleDisclaimer:
        'All records shown in this sandbox are simulated demonstration data designed to illustrate search, filtering, and analytical capabilities. No unverified real company customs filings are claimed.',
      requestDemoNow: 'Request Tailored Data Demo',
      viewInteractiveDemo: 'Launch Interactive Data Demo',
      checkCountryCoverage: 'Explore Global Coverage',
      consultZalo: 'Consult via Zalo / Direct',
      zaloPendingNote: 'Official Zalo OA link activates once enterprise credentials are set. Submit your Zalo/Phone number in the form for direct specialist callback.',
    },
  },
} as const;

export function t(lang: Language) {
  return UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.vi;
}
