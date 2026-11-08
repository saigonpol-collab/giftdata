import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giải Pháp Dữ Liệu Hải Quan & Tình Báo Thương Mại B2B (Solutions)',
  description:
    'Khám phá 3 giải pháp cốt lõi của TradeIntel Global: Importer & Exporter Database, Competitor Trade Intelligence và Global Trade Market Analytics.',
  alternates: { canonical: '/solutions' },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
