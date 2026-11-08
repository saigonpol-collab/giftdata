import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quy Trình Khai Thác Dữ Liệu Hải Quan Thực Chiến (How It Works)',
  description:
    'Hướng dẫn từng bước từ xác định mã HS, kiểm tra Data Demo đến triển khai tìm khách hàng nhập khẩu, phân tích đối thủ và thẩm định nhà cung ứng.',
  alternates: { canonical: '/how-it-works' },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
