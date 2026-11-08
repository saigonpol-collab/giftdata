import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Về TradeIntel Global – Triết Lý Minh Bạch Dữ Liệu Thương Mại Quốc Tế',
  description:
    'Tìm hiểu câu chuyện thương hiệu, sứ mệnh, tầm nhìn và cam kết minh bạch dữ liệu của nền tảng tình báo thương mại B2B TradeIntel Global.',
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
