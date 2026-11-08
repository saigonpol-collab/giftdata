import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phạm Vi Dữ Liệu Hải Quan Quốc Tế (Global Data Coverage)',
  description:
    'Bản đồ phạm vi dữ liệu thương mại và hải quan quốc tế tại Châu Á, Châu Âu, Bắc Mỹ, Nam Mỹ, Trung Đông, Châu Phi và Châu Đại Dương. Phân biệt rõ trạng thái AVAILABLE và PARTIALLY AVAILABLE.',
  alternates: { canonical: '/data-coverage' },
};

export default function DataCoverageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
