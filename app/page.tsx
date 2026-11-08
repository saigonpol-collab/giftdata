'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { t } from '@/lib/i18n';
import { DashboardMockup } from '@/components/sections/DashboardMockup';
import { LeadCaptureForm } from '@/components/ui/LeadCaptureForm';
import {
  CORE_SOLUTIONS,
  DEPARTMENT_APPLICATIONS,
  FAQ_ITEMS,
  HOW_IT_WORKS_STEPS,
  INDUSTRY_VERTICALS,
} from '@/lib/content-data';
import { DEMO_TRANSACTIONS } from '@/lib/demo-data';
import { COUNTRY_COVERAGE_DATA } from '@/lib/coverage-data';

export default function HomePage() {
  const { lang, openDemoModal } = useAppContext();
  const router = useRouter();
  const copy = t(lang);
  const isVi = lang === 'vi';

  const [quickSearch, setQuickSearch] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const handleQuickDemoSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = encodeURIComponent(quickSearch.trim());
    router.push(q ? `/data-demo?q=${q}` : '/data-demo');
  };

  return (
    <div className="bg-[#FFFFFF]">
      {/* SECTION 02 & 03: HERO BANNER + DASHBOARD PREVIEW */}
      <section className="relative bg-gradient-to-b from-[#102746] via-[#102746] to-[#0B1B32] text-white pt-10 pb-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Messaging & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16355D] border border-[#287CE0]/40 text-xs font-mono text-[#3B82F6]">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <span>{copy.hero.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15] text-white">
                {copy.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                {copy.hero.subheadline}
              </p>

              {/* 3 Value Bullets */}
              <ul className="space-y-2.5 text-sm text-slate-200 pt-1">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3B82F6] font-bold mt-0.5">✓</span>
                  <span>{copy.hero.bullet1}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3B82F6] font-bold mt-0.5">✓</span>
                  <span>{copy.hero.bullet2}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#3B82F6] font-bold mt-0.5">✓</span>
                  <span>{copy.hero.bullet3}</span>
                </li>
              </ul>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => openDemoModal({ requirement: 'Find Importers' })}
                  className="px-6 py-4 rounded-xl bg-[#287CE0] hover:bg-[#1F68C2] text-white font-extrabold text-sm tracking-wide shadow-elevated transition-all text-center"
                >
                  {copy.hero.primaryCta}
                </button>
                <Link
                  href="/data-demo"
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-slate-600 text-white font-bold text-sm tracking-wide transition-all text-center"
                >
                  {copy.hero.secondaryCta}
                </Link>
              </div>

              {/* Quick HS Code Search Bar inside Hero */}
              <form
                onSubmit={handleQuickDemoSearch}
                className="pt-2 flex flex-col sm:flex-row gap-2 max-w-xl"
              >
                <label htmlFor="hero-hs-search" className="sr-only">
                  {isVi ? 'Tra cứu nhanh mã HS hoặc tên sản phẩm' : 'Quick search HS Code or Product'}
                </label>
                <input
                  id="hero-hs-search"
                  type="text"
                  value={quickSearch}
                  onChange={(e) => setQuickSearch(e.target.value)}
                  placeholder={
                    isVi
                      ? 'Thử nhập Mã HS hoặc Sản phẩm (VD: 0901, 9403, Coffee, Shrimp)...'
                      : 'Try searching HS Code or Product (e.g. 0901, 9403, Coffee, Shrimp)...'
                  }
                  className="flex-1 px-4 py-3 rounded-lg bg-[#0B1B32] border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm font-mono focus:border-[#3B82F6] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-3 rounded-lg bg-[#16355D] hover:bg-[#287CE0] text-white font-semibold text-xs sm:text-sm shrink-0 transition-colors"
                >
                  {isVi ? 'Xem Demo Ngay →' : 'Try Search →'}
                </button>
              </form>
            </div>

            {/* Right Column: Interactive Dashboard Mockup */}
            <div className="lg:col-span-6">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: TRUST & VALUE PROPOSITION BAR */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-enterprise">
              <div className="text-xs font-mono font-bold text-[#287CE0] uppercase tracking-wider">
                01 · FIND CUSTOMERS
              </div>
              <h2 className="text-lg font-bold text-[#102746] mt-1">
                {isVi
                  ? 'Tìm đúng doanh nghiệp xuất nhập khẩu'
                  : 'Find Active Importers & Exporters'}
              </h2>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                {isVi
                  ? 'Truy xuất danh sách doanh nghiệp theo mã HS và mô tả hàng hóa thực tế thay vì mua danh bạ liên hệ đại trà không kiểm chứng.'
                  : 'Identify corporate buyers and suppliers with recorded shipment activity under your exact HS Code and product specifications.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-enterprise">
              <div className="text-xs font-mono font-bold text-[#287CE0] uppercase tracking-wider">
                02 · TRACK COMPETITORS
              </div>
              <h2 className="text-lg font-bold text-[#102746] mt-1">
                {isVi
                  ? 'Thấu hiểu lịch sử giao dịch đối thủ'
                  : 'Monitor Competitor Trade Networks'}
              </h2>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                {isVi
                  ? 'Khám phá mạng lưới khách hàng, tần suất xuất hàng, tuyến cảng và biến động sản lượng của các đối thủ cạnh tranh cùng ngành.'
                  : 'Analyze competitor shipment logs, buyer relationships, seasonal cadence, and market share shifts across key trade corridors.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-enterprise">
              <div className="text-xs font-mono font-bold text-[#287CE0] uppercase tracking-wider">
                03 · ANALYZE MARKETS
              </div>
              <h2 className="text-lg font-bold text-[#102746] mt-1">
                {isVi
                  ? 'Quyết định dựa trên bằng chứng dữ liệu'
                  : 'Evidence-Based Market Analytics'}
              </h2>
              <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                {isVi
                  ? 'Đánh giá dung lượng nhập khẩu, xu hướng kim ngạch và mặt bằng đơn giá khai báo trước khi đầu tư mở rộng thị trường.'
                  : 'Quantify import demand, unit price benchmarks, and supply concentration before committing capital to new international markets.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: BUSINESS PAIN POINTS */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#287CE0] bg-[#EBF4FF] px-3 py-1 rounded">
              {isVi ? '01 · BÀI TOÁN DOANH NGHIỆP' : '01 · THE B2B INFORMATION GAP'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102746] mt-3">
              {isVi
                ? 'Bạn Đang Đối Mặt Với Những Bài Toán Nào Trong Kinh Doanh Quốc Tế?'
                : 'What Challenges Are Holding Back Your International Growth?'}
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              {isVi
                ? 'Trong thương mại quốc tế, thiếu thông tin giao dịch thực chứng khiến doanh nghiệp tốn kém chi phí và bỏ lỡ những cơ hội thị trường quan trọng.'
                : 'In global B2B trade, operating without empirical transaction intelligence leads to wasted sales cycles and missed market opportunities.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#DC2626]/10 text-[#DC2626] font-mono font-bold flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#102746]">
                  {isVi
                    ? 'Không biết tìm khách hàng nhập khẩu thực sự ở đâu?'
                    : 'Struggling to find verified overseas buyers?'}
                </h3>
                <p className="text-sm text-[#64748B] mt-2.5 leading-relaxed">
                  {isVi
                    ? 'Đội ngũ Sales mất hàng tháng gửi email cho danh sách đại trà trên mạng mà không biết doanh nghiệp đó có thực sự nhập khẩu mã hàng của mình hay không.'
                    : 'Your B2B sales team spends months cold-emailing generic directory lists with zero proof that those companies actually import your HS Code.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-xs font-semibold text-[#16A34A]">
                {isVi
                  ? '→ Giải pháp: Lọc trực tiếp nhà nhập khẩu có lịch sử giao dịch theo mã HS.'
                  : '→ Solution: Filter active importers with recorded customs/B/L shipments.'}
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/15 text-[#F59E0B] font-mono font-bold flex items-center justify-center mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#102746]">
                  {isVi
                    ? 'Không biết đối thủ đang bán hàng cho ai?'
                    : 'Blind to competitor buyers and shipment volumes?'}
                </h3>
                <p className="text-sm text-[#64748B] mt-2.5 leading-relaxed">
                  {isVi
                    ? 'Bạn không nắm được mạng lưới đối tác mua hàng, tần suất xuất container, thị trường mới mở và quy cách sản phẩm chủ lực của đối thủ cạnh tranh.'
                    : 'You lack visibility into which overseas distributors your competitors supply, how frequently they ship, and where they are expanding.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-xs font-semibold text-[#16A34A]">
                {isVi
                  ? '→ Giải pháp: Phân tích mạng lưới đối tác & lịch sử lô hàng của đối thủ.'
                  : '→ Solution: Map competitor trading partner networks and shipment cadence.'}
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#287CE0]/15 text-[#287CE0] font-mono font-bold flex items-center justify-center mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#102746]">
                  {isVi
                    ? 'Không nắm được quy mô & biến động thị trường?'
                    : 'Uncertain about true market demand and pricing?'}
                </h3>
                <p className="text-sm text-[#64748B] mt-2.5 leading-relaxed">
                  {isVi
                    ? 'Ra quyết định mở rộng thị trường hoặc đàm phán giá mua nguyên liệu mà thiếu dữ liệu thống kê kim ngạch, sản lượng và biên độ đơn giá thực tế.'
                    : 'Entering new regions or negotiating raw material procurement without empirical trade volume trends and unit value benchmarks.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-xs font-semibold text-[#16A34A]">
                {isVi
                  ? '→ Giải pháp: Thống kê kim ngạch, thị phần quốc gia & xu hướng theo quý.'
                  : '→ Solution: Quantify market share, seasonal peaks, and unit value ranges.'}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-[#102746] uppercase tracking-wider">
              {isVi
                ? 'ĐÃ ĐẾN LÚC CHUYỂN TỪ TÌM KIẾM THỦ CÔNG SANG KHAI THÁC DỮ LIỆU THƯƠNG MẠI.'
                : 'IT IS TIME TO SHIFT FROM MANUAL GUESSWORK TO DATA-DRIVEN TRADE INTELLIGENCE.'}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 06: THREE CORE SOLUTIONS */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#287CE0] bg-[#EBF4FF] px-3 py-1 rounded">
                {isVi ? '02 · BA GIẢI PHÁP CỐT LÕI' : '02 · THREE CORE SOLUTIONS'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102746] mt-3">
                {isVi
                  ? 'Hệ Sinh Thái Tình Báo Thương Mại Toàn Diện'
                  : 'Comprehensive B2B Trade Intelligence Suite'}
              </h2>
            </div>
            <Link
              href="/solutions"
              className="text-sm font-bold text-[#287CE0] hover:underline shrink-0"
            >
              {isVi ? 'Xem chi tiết cả 3 giải pháp →' : 'Explore All 3 Solutions in Detail →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {CORE_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-enterprise hover:shadow-elevated transition-all p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-[#287CE0] bg-[#EBF4FF] px-2.5 py-1 rounded">
                      {sol.code}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      {isVi ? sol.badgeVi : sol.badgeEn}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#102746]">
                    {isVi ? sol.titleVi : sol.titleEn}
                  </h3>
                  <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                    {isVi ? sol.subtitleVi : sol.subtitleEn}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#E2E8F0]">
                    <div className="text-xs font-bold text-[#102746] uppercase tracking-wider mb-2.5">
                      {isVi ? 'Cách nền tảng giải quyết:' : 'Key Capabilities:'}
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#102746]">
                      {(isVi ? sol.howItSolvesVi : sol.howItSolvesEn).map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#287CE0] font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <Link
                    href={`/solutions#${sol.id}`}
                    className="text-xs font-bold text-[#102746] hover:text-[#287CE0]"
                  >
                    {isVi ? 'Xem quy trình & trường dữ liệu →' : 'View Fields & Workflow →'}
                  </Link>
                  <button
                    type="button"
                    onClick={() => openDemoModal({ requirement: 'Find Importers' })}
                    className="px-3.5 py-2 rounded-lg bg-[#287CE0] hover:bg-[#1F68C2] text-white text-xs font-bold transition-colors"
                  >
                    {isVi ? 'Nhận Demo' : 'Get Demo'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07: INTERACTIVE DATA PREVIEW */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#287CE0] bg-[#EBF4FF] px-3 py-1 rounded">
                  {isVi ? '03 · TRÌNH DIỄN DỮ LIỆU TRỰC QUAN' : '03 · INTERACTIVE DATA PREVIEW'}
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#F59E0B]/15 text-[#B45309] border border-[#F59E0B]/30">
                  SAMPLE DATA / DEMONSTRATION DATA
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746]">
                {isVi
                  ? 'Chúng Tôi Không Chỉ Giới Thiệu. Chúng Tôi Cho Bạn Xem Cấu Trúc Dữ Liệu.'
                  : 'Inspect Our 10-Field Transaction Structure Before You Decide'}
              </h2>
              <p className="text-sm text-[#64748B] mt-2 max-w-3xl">
                {copy.common.sampleDisclaimer}
              </p>
            </div>
            <Link
              href="/data-demo"
              className="px-5 py-3 rounded-xl bg-[#102746] hover:bg-[#287CE0] text-white font-bold text-xs sm:text-sm shrink-0 transition-colors text-center"
            >
              {isVi ? 'Mở Ứng Dụng Data Demo Đầy Đủ →' : 'Launch Full Interactive Sandbox →'}
            </Link>
          </div>

          {/* Sample Preview Table (5 rows, 10 columns) */}
          <div className="border border-[#E2E8F0] rounded-xl overflow-hidden shadow-enterprise">
            <div className="overflow-x-auto enterprise-table-scroll">
              <table className="w-full text-left border-collapse min-w-[980px]">
                <thead>
                  <tr className="bg-[#102746] text-white text-[11px] font-mono uppercase tracking-wider">
                    <th className="py-3.5 px-3">1. Importer</th>
                    <th className="py-3.5 px-3">2. Exporter</th>
                    <th className="py-3.5 px-3">3. HS Code</th>
                    <th className="py-3.5 px-3">4. Product Description</th>
                    <th className="py-3.5 px-3">5. Origin</th>
                    <th className="py-3.5 px-3">6. Destination</th>
                    <th className="py-3.5 px-3">7. Date</th>
                    <th className="py-3.5 px-3 text-right">8. Quantity</th>
                    <th className="py-3.5 px-3 text-right">9. Value USD</th>
                    <th className="py-3.5 px-3">10. Port & Info</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-xs">
                  {DEMO_TRANSACTIONS.slice(0, 5).map((row) => (
                    <tr key={row.id} className="hover:bg-[#F8FAFC] transition-colors">
                      <td className="py-3 px-3 font-semibold text-[#102746]">{row.importer}</td>
                      <td className="py-3 px-3 text-[#102746]">{row.exporter}</td>
                      <td className="py-3 px-3">
                        <span className="font-mono font-bold text-[#287CE0] bg-[#EBF4FF] px-2 py-0.5 rounded">
                          {row.hsCode}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#64748B] max-w-xs">
                        {isVi ? row.productDescriptionVi : row.productDescription}
                      </td>
                      <td className="py-3 px-3 font-medium text-[#102746]">{row.origin}</td>
                      <td className="py-3 px-3 font-medium text-[#102746]">{row.destination}</td>
                      <td className="py-3 px-3 font-mono text-[#64748B]">{row.transactionDate}</td>
                      <td className="py-3 px-3 font-mono text-right text-[#102746]">
                        {row.quantity.toLocaleString()} {row.quantityUnit}
                      </td>
                      <td className="py-3 px-3 font-mono font-bold text-right text-[#16A34A]">
                        ${row.tradeValueUsd.toLocaleString()}
                      </td>
                      <td className="py-3 px-3 text-[11px] font-mono text-[#64748B]">
                        {row.portOfLoading} → {row.portOfDischarge}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#F8FAFC] px-4 py-3 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#64748B]">
                {isVi
                  ? 'Hiển thị 5 / 16 bản ghi mẫu. Trang Data Demo hỗ trợ lọc theo Mã HS, Quốc gia, Khoảng giá trị, Biểu đồ và Xuất CSV.'
                  : 'Showing 5 of 16 simulated records. Full Data Demo supports HS filtering, sorting, 5 charts, and CSV export.'}
              </span>
              <div className="flex items-center gap-3">
                <Link href="/data-demo" className="font-bold text-[#287CE0] hover:underline">
                  {isVi ? 'Lọc & Phân tích toàn bộ trên Sandbox →' : 'Filter & Analyze All in Sandbox →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08: GLOBAL MARKET COVERAGE SUMMARY */}
      <section className="py-16 lg:py-20 bg-[#102746] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#3B82F6] bg-[#16355D] px-3 py-1 rounded">
                {isVi ? '04 · PHẠM VI DỮ LIỆU QUỐC TẾ' : '04 · GLOBAL MARKET COVERAGE'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3">
                {isVi
                  ? 'One Platform – Multiple International Markets'
                  : 'One Platform – Multi-Region Trade Visibility'}
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                {isVi
                  ? 'Phân loại minh bạch trạng thái dữ liệu tại từng quốc gia: AVAILABLE, PARTIALLY AVAILABLE (Mirror/B/L), UNDER VERIFICATION và NOT AVAILABLE.'
                  : 'Transparent country-by-country availability classification across Asia, Europe, North America, South America, Middle East, Africa, and Oceania.'}
              </p>
            </div>
            <Link
              href="/data-coverage"
              className="px-5 py-3 rounded-xl bg-[#287CE0] hover:bg-[#1F68C2] text-white font-bold text-xs sm:text-sm shrink-0 transition-colors text-center"
            >
              {isVi ? 'Khám Phá Bản Đồ Dữ Liệu Quốc Tế →' : 'Explore Interactive World Coverage Map →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COUNTRY_COVERAGE_DATA.slice(0, 8).map((c) => {
              const badgeColor =
                c.status === 'AVAILABLE'
                  ? 'bg-[#16A34A]/20 text-[#4ADE80] border-[#16A34A]/40'
                  : c.status === 'PARTIALLY AVAILABLE'
                  ? 'bg-[#3B82F6]/20 text-[#60A5FA] border-[#3B82F6]/40'
                  : 'bg-[#F59E0B]/20 text-[#FBBF24] border-[#F59E0B]/40';

              return (
                <Link
                  key={c.code}
                  href={`/data-coverage?country=${c.code}`}
                  className="p-5 rounded-xl bg-[#0B1B32] border border-slate-800 hover:border-[#287CE0] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {c.code} · {c.region}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badgeColor}`}
                      >
                        {c.status}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {isVi ? c.nameVi : c.nameEn}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 line-clamp-2">
                      {isVi ? c.dataSourceVi : c.dataSourceEn}
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-slate-800/80 text-[11px] font-semibold text-[#3B82F6]">
                    {isVi ? 'Xem chi tiết trường dữ liệu →' : 'Inspect available fields →'}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 09: BUSINESS APPLICATIONS BY DEPARTMENT */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#287CE0] bg-[#EBF4FF] px-3 py-1 rounded">
                {isVi ? '05 · ỨNG DỤNG THEO PHÒNG BAN' : '05 · DEPARTMENT APPLICATIONS'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746] mt-3">
                {isVi
                  ? 'Ứng Dụng Dữ Liệu Vào Từng Bộ Phận Trong Doanh Nghiệp'
                  : 'Empowering Every Department Across Your Organization'}
              </h2>
            </div>
            <Link
              href="/applications"
              className="text-sm font-bold text-[#287CE0] hover:underline"
            >
              {isVi ? 'Xem chi tiết 6 phòng ban & 6 ngành hàng →' : 'View Full Department & Industry Playbooks →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENT_APPLICATIONS.map((dept, i) => (
              <div
                key={dept.id}
                className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-enterprise flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-[#287CE0]">
                      DEPT 0{i + 1}
                    </span>
                    <span className="text-[11px] font-medium text-[#64748B] bg-[#F8FAFC] px-2.5 py-0.5 rounded border border-[#E2E8F0]">
                      {isVi ? dept.roleTagVi : dept.roleTagEn}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102746]">
                    {isVi ? dept.departmentVi : dept.departmentEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-2">
                    {(isVi ? dept.objectivesVi : dept.objectivesEn)[0]}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#E2E8F0]">
                  <Link
                    href={`/applications#${dept.id}`}
                    className="text-xs font-bold text-[#287CE0] hover:underline"
                  >
                    {isVi ? 'Xem quy trình ứng dụng →' : 'See Execution Workflow →'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: HOW IT WORKS (4 STEPS) */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#287CE0] bg-[#EBF4FF] px-3 py-1 rounded">
              {isVi ? '06 · QUY TRÌNH SỬ DỤNG DỊCH VỤ' : '06 · HOW IT WORKS'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102746] mt-3">
              {isVi
                ? '4 Bước Đơn Giản Để Bắt Đầu Khai Thác Dữ Liệu'
                : '4 Practical Steps From Inquiry To Actionable Trade Data'}
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              {isVi
                ? 'Được thiết kế trực quan ngay cả khi doanh nghiệp bạn lần đầu tiếp cận dữ liệu hải quan quốc tế.'
                : 'Designed for clarity and speed—even if your team is new to international customs intelligence.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((s) => (
              <div
                key={s.stepNumber}
                className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] relative flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block font-mono text-xs font-extrabold text-white bg-[#102746] px-2.5 py-1 rounded mb-3">
                    STEP {s.stepNumber}
                  </span>
                  <h3 className="text-base font-bold text-[#102746]">
                    {isVi ? s.titleVi : s.titleEn}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                    {isVi ? s.subtitleVi : s.subtitleEn}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] font-mono text-[#287CE0]">
                  {isVi ? `Đầu ra: ${s.outputsVi[0]}` : `Output: ${s.outputsEn[0]}`}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#102746] text-[#102746] hover:bg-[#102746] hover:text-white text-xs sm:text-sm font-bold transition-colors"
            >
              <span>
                {isVi
                  ? 'Xem hướng dẫn thực chiến & 4 tình huống mẫu chi tiết →'
                  : 'Explore Step-by-Step Guide & 4 Real-World Playbooks →'}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11 & 12: TARGET INDUSTRIES & CUSTOMER BENEFITS */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#287CE0] bg-[#EBF4FF] px-3 py-1 rounded">
              {isVi ? '07 · NGÀNH HÀNG & LỢI ÍCH CỐT LÕI' : '07 · TARGET INDUSTRIES & BENEFITS'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746] mt-3">
              {isVi
                ? 'Ai Nên Sử Dụng TradeIntel Global?'
                : 'Built For Global B2B Enterprises & Supply Chain Leaders'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {INDUSTRY_VERTICALS.map((ind) => (
              <div
                key={ind.id}
                className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-enterprise"
              >
                <h3 className="text-base font-bold text-[#102746]">
                  {isVi ? ind.nameVi : ind.nameEn}
                </h3>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                  {isVi ? ind.summaryVi : ind.summaryEn}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {ind.sampleHsCodes.map((hs) => (
                    <span
                      key={hs}
                      className="text-[10px] font-mono bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-0.5 rounded text-[#102746]"
                    >
                      HS: {hs}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 4 Customer Benefits Bar */}
          <div className="bg-[#102746] text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-xs font-mono text-[#3B82F6] font-bold">BENEFIT 01</div>
              <div className="text-base font-bold mt-1">
                {isVi ? 'Tiếp cận đúng người mua thực' : 'Verified Active Buyers'}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {isVi
                  ? 'Tập trung nguồn lực Sales vào các doanh nghiệp đã có lịch sử nhập khẩu mặt hàng của bạn.'
                  : 'Focus sales effort exclusively on companies with recorded import history.'}
              </p>
            </div>
            <div>
              <div className="text-xs font-mono text-[#3B82F6] font-bold">BENEFIT 02</div>
              <div className="text-base font-bold mt-1">
                {isVi ? 'Chủ động trước đối thủ' : 'Proactive Competitive Edge'}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {isVi
                  ? 'Theo dõi biến động lô hàng và mạng lưới đối tác của các đối thủ cạnh tranh.'
                  : 'Spot shifts in competitor shipment volume and buyer relationships early.'}
              </p>
            </div>
            <div>
              <div className="text-xs font-mono text-[#3B82F6] font-bold">BENEFIT 03</div>
              <div className="text-base font-bold mt-1">
                {isVi ? 'Đàm phán giá có căn cứ' : 'Data-Backed Price Negotiation'}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {isVi
                  ? 'Tham chiếu trị giá và đơn giá giao dịch khai báo trên thị trường quốc tế.'
                  : 'Benchmark declared transaction values before quoting or sourcing.'}
              </p>
            </div>
            <div>
              <div className="text-xs font-mono text-[#3B82F6] font-bold">BENEFIT 04</div>
              <div className="text-base font-bold mt-1">
                {isVi ? 'Xem Demo trước khi mua' : 'Verify Sample Before Purchase'}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {isVi
                  ? 'Kiểm tra rõ trường dữ liệu và phạm vi quốc gia trước khi quyết định đầu tư.'
                  : 'Confirm exact field availability for your HS Code prior to commitment.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FAQ ACCORDION */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#287CE0] bg-[#EBF4FF] px-3 py-1 rounded">
              {isVi ? '08 · CÂU HỎI THƯỜNG GẶP (FAQ)' : '08 · FREQUENTLY ASKED QUESTIONS'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746] mt-3">
              {isVi
                ? 'Giải Đáp Chi Tiết Về Dữ Liệu Hải Quan & Thương Mại Quốc Tế'
                : 'Transparent Answers on Customs Data Scope & Usage'}
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="border border-[#E2E8F0] rounded-xl overflow-hidden bg-[#F8FAFC]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-white hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#102746]">
                      {isVi ? item.questionVi : item.questionEn}
                    </span>
                    <span className="font-mono text-lg font-bold text-[#287CE0] shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#E2E8F0] bg-[#F8FAFC]">
                      {isVi ? item.answerVi : item.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 14: LEAD CAPTURE CTA */}
      <section id="register-demo" className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#287CE0] bg-[#EBF4FF] px-3 py-1 rounded">
                {isVi ? '09 · ĐĂNG KÝ NHẬN DATA DEMO' : '09 · REQUEST YOUR DATA DEMO'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746] leading-tight">
                {isVi
                  ? 'Thị Trường Đang Chuyển Động. Bạn Đang Nắm Giữ Bao Nhiêu Thông Tin?'
                  : 'Global Markets Move Fast. Arm Your Team With Verified Trade Evidence.'}
              </h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {isVi
                  ? 'Đừng để đối thủ có lợi thế chỉ vì họ hiểu thị trường và nắm danh sách khách hàng tốt hơn bạn. Đăng ký ngay để nhận tư vấn và dữ liệu mẫu theo ngành hàng doanh nghiệp đang kinh doanh.'
                  : 'Do not let competitors outmaneuver you simply because they have better visibility into active buyers and trade flows. Submit your HS Code or product below to receive a verified Data Demo.'}
              </p>

              <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
                <div className="text-xs font-mono uppercase font-bold text-[#102746]">
                  {isVi ? 'QUY TRÌNH XỬ LÝ YÊU CẦU DEMO:' : 'WHAT HAPPENS AFTER YOU SUBMIT:'}
                </div>
                <ol className="text-xs text-[#64748B] space-y-2 list-decimal list-inside">
                  <li>
                    {isVi
                      ? 'Phân loại nhu cầu theo sản phẩm, mã HS và quốc gia mục tiêu.'
                      : 'We classify your inquiry by HS Code, product spec, and target country.'}
                  </li>
                  <li>
                    {isVi
                      ? 'Kiểm tra nguồn dữ liệu thực tế và các trường thông tin khả dụng.'
                      : 'Our data team verifies coverage and available fields for that jurisdiction.'}
                  </li>
                  <li>
                    {isVi
                      ? 'Gửi bản DATA DEMO phù hợp và tư vấn phương án khai thác tối ưu.'
                      : 'We deliver a tailored sample dataset and walk your team through the insights.'}
                  </li>
                </ol>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadCaptureForm sourcePage="home-bottom-cta" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
