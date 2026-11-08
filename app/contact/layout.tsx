import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đăng Ký Nhận DATA DEMO & Liên Hệ Tư Vấn Dữ Liệu Hải Quan',
  description:
    'Đăng ký nhận dữ liệu mẫu (Data Demo) theo mã HS và thị trường mục tiêu. Tư vấn trực tiếp giải pháp tìm nhà nhập khẩu, xuất khẩu và phân tích đối thủ.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
