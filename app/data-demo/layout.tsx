import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Demo – Trải Nghiệm Tra Cứu Dữ Liệu Hải Quan Theo Mã HS (Sandbox)',
  description:
    'Trải nghiệm trực tiếp công cụ lọc dữ liệu xuất nhập khẩu theo Mã HS, Tên sản phẩm, Importer, Exporter, Quốc gia và Trị giá USD với 10 trường tiêu chuẩn và 5 biểu đồ phân tích.',
  alternates: { canonical: '/data-demo' },
};

export default function DataDemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
