import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/layout/LanguageProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import { LeadCaptureModal } from '@/components/layout/LeadCaptureModal';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://giftdata.vercel.app'),
  title: {
    default: 'TRADEINTEL GLOBAL | Dữ Liệu Hải Quan Toàn Cầu & Tra Cứu Xuất Nhập Khẩu Theo Mã HS',
    template: '%s | TRADEINTEL GLOBAL',
  },
  description:
    'Nền tảng tình báo thương mại và dữ liệu Hải quan quốc tế (Global Trade Intelligence). Tìm kiếm nhà nhập khẩu, nhà xuất khẩu theo mã HS, phân tích đối thủ và thống kê kim ngạch thị trường. Đăng ký nhận DATA DEMO.',
  keywords: [
    'Global Trade Intelligence',
    'Customs Data',
    'Import Export Database',
    'Importer Database',
    'Exporter Database',
    'HS Code Search',
    'Trade Data Analytics',
    'Competitor Trade Intelligence',
    'Dữ liệu hải quan quốc tế',
    'Tra cứu doanh nghiệp xuất nhập khẩu',
    'Tra cứu mã HS',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: 'en_US',
    siteName: 'TRADEINTEL GLOBAL',
    title: 'TRADEINTEL GLOBAL – Global Trade Intelligence & Customs Data Platform',
    description:
      'SEE THE MARKET. KNOW YOUR COMPETITORS. FIND YOUR CUSTOMERS. Khai thác dữ liệu thương mại và hải quan quốc tế để tìm đúng khách hàng, phân tích đối thủ và mở rộng thị trường.',
    url: 'https://giftdata.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TRADEINTEL GLOBAL',
    url: 'https://giftdata.vercel.app',
    slogan: 'SEE THE MARKET. KNOW YOUR COMPETITORS. FIND YOUR CUSTOMERS.',
    description:
      'Global Trade Intelligence & Customs Data Platform supporting B2B importer/exporter discovery, HS Code transaction lookup, competitor trade intelligence, and market analytics.',
  };

  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#102746] antialiased">
        <LanguageProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#287CE0] focus:text-white focus:rounded-lg"
          >
            Chuyển đến nội dung chính / Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileStickyBar />
          <LeadCaptureModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
