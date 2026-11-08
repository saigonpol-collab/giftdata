import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ứng Dụng Dữ Liệu Hải Quan Cho 6 Phòng Ban & 6 Ngành Hàng',
  description:
    'Hướng dẫn ứng dụng dữ liệu thương mại quốc tế cho CEO, Sales B2B, Phòng XNK, Marketing, Mua hàng (Procurement) và Kế hoạch trong các ngành Sản xuất, Thương mại, Logistics.',
  alternates: { canonical: '/applications' },
};

export default function ApplicationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
