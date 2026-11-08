'use client';

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function AboutPage() {
  const { lang, openDemoModal } = useAppContext();
  const isVi = lang === 'vi';

  return (
    <div className="bg-white pb-16">
      <Breadcrumb
        items={[{ labelVi: 'Về Chúng Tôi (About Us)', labelEn: 'About TradeIntel Global' }]}
      />

      {/* Page Header */}
      <section className="bg-[#102746] text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-mono uppercase tracking-widest font-bold text-[#3B82F6] bg-[#16355D] px-3 py-1 rounded mb-3">
            PAGE 07 · ABOUT TRADEINTEL GLOBAL
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl">
            {isVi
              ? 'Kiến Tạo Nền Tảng Tình Báo Thương Mại Quốc Tế Minh Bạch & Thực Chiến'
              : 'Building Transparent, Evidence-Based Global Trade Intelligence'}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-3xl leading-relaxed">
            {isVi
              ? 'SEE THE MARKET. KNOW YOUR COMPETITORS. FIND YOUR CUSTOMERS. — Chúng tôi đồng hành cùng doanh nghiệp xuất nhập khẩu, nhà sản xuất và đơn vị chuỗi cung ứng đưa ra quyết định kinh doanh dựa trên bằng chứng dữ liệu.'
              : 'SEE THE MARKET. KNOW YOUR COMPETITORS. FIND YOUR CUSTOMERS. — We empower manufacturers, exporters, importers, and supply chain leaders to make international decisions grounded in empirical trade records.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-14">
        {/* 1. Brand Story & Data Intelligence Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase font-bold text-[#287CE0]">
              01 · BRAND STORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746]">
              {isVi
                ? 'Câu Chuyện Thương Hiệu TradeIntel Global'
                : 'The Story Behind TradeIntel Global'}
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              {isVi
                ? 'Trong thương mại quốc tế truyền thống, phần lớn doanh nghiệp xuất nhập khẩu phải ra quyết định dựa trên cảm tính, mối quan hệ hạn hẹp hoặc các danh bạ trung gian thiếu kiểm chứng. Điều đó dẫn đến chi phí phát triển thị trường cao và rủi ro chọn sai đối tác.'
                : 'In traditional cross-border trade, too many manufacturers and trading companies are forced to rely on intuition, fragmented directories, or outdated macro reports when expanding overseas.'}
            </p>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              {isVi
                ? 'TradeIntel Global được xây dựng với định hướng trở thành nền tảng tình báo thương mại B2B chuyên sâu: không bán những bảng dữ liệu khô khan, mà cung cấp khả năng nhìn rõ thị trường, thấu hiểu đối thủ và tìm đúng khách hàng thông qua hệ thống tra cứu theo mã HS và hướng dẫn thực chiến.'
                : 'TradeIntel Global was architected to close that information gap—not by selling raw, overwhelming spreadsheets, but by delivering structured HS Code search, competitor shipment visibility, and guided B2B workflows.'}
            </p>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
            <span className="text-xs font-mono uppercase font-bold text-[#287CE0]">
              02 · DATA INTELLIGENCE PHILOSOPHY
            </span>
            <h3 className="text-xl font-extrabold text-[#102746]">
              {isVi
                ? 'Triết Lý Khai Thác Tình Báo Dữ Liệu'
                : 'Our Data Intelligence Philosophy'}
            </h3>
            <ul className="space-y-3 text-sm text-[#102746]">
              <li className="flex items-start gap-2.5">
                <span className="text-[#287CE0] font-bold">01.</span>
                <span>
                  <strong>{isVi ? 'Bằng chứng trước cảm tính:' : 'Evidence Over Intuition:'}</strong>{' '}
                  {isVi
                    ? 'Mọi quyết định chào hàng, định giá hay chọn nhà cung ứng cần được tham chiếu với lịch sử giao dịch thực tế.'
                    : 'Every market entry, pricing, and sourcing decision should be backed by historical transaction evidence.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#287CE0] font-bold">02.</span>
                <span>
                  <strong>
                    {isVi ? 'Cấu trúc hóa thành hành động:' : 'Structured for Action:'}
                  </strong>{' '}
                  {isVi
                    ? 'Dữ liệu chỉ có giá trị khi đội ngũ Sales, Mua hàng và Ban giám đốc đọc hiểu và chuyển hóa được thành hành động.'
                    : 'Data is only valuable when Sales, Procurement, and Executive teams can immediately interpret and act upon it.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#287CE0] font-bold">03.</span>
                <span>
                  <strong>
                    {isVi ? 'Trung thực về nguồn và phạm vi:' : 'Absolute Source Honesty:'}
                  </strong>{' '}
                  {isVi
                    ? 'Luôn phân biệt rõ dữ liệu tờ khai thương mại, dữ liệu vận đơn (B/L) và dữ liệu đối ứng (Mirror Data).'
                    : 'We clearly distinguish between customs declarations, maritime bills of lading, and mirror trade statistics.'}
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 2. Mission, Vision, Core Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#102746] text-white">
            <div className="text-xs font-mono uppercase text-[#3B82F6] font-bold">MISSION</div>
            <h3 className="text-xl font-bold mt-2">
              {isVi ? 'Sứ Mệnh (Mission)' : 'Our Mission'}
            </h3>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              {isVi
                ? 'Giúp doanh nghiệp sản xuất và xuất nhập khẩu tiếp cận thông tin thương mại quốc tế một cách minh bạch, dễ hiểu và hiệu quả để mở rộng thị trường toàn cầu.'
                : 'Empower B2B exporters, importers, and manufacturers with clear, verifiable international trade intelligence to accelerate global market expansion.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#102746] text-white">
            <div className="text-xs font-mono uppercase text-[#3B82F6] font-bold">VISION</div>
            <h3 className="text-xl font-bold mt-2">
              {isVi ? 'Tầm Nhìn (Vision)' : 'Our Vision'}
            </h3>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              {isVi
                ? 'Trở thành đối tác tình báo dữ liệu thương mại B2B đáng tin cậy, nơi mọi doanh nghiệp đều có thể kiểm chứng dữ liệu mẫu trước khi ra quyết định đầu tư.'
                : 'To be the trusted B2B trade intelligence platform defined by clarity, pre-purchase sample verification, and ethical data governance.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#102746] text-white">
            <div className="text-xs font-mono uppercase text-[#3B82F6] font-bold">CORE VALUES</div>
            <h3 className="text-xl font-bold mt-2">
              {isVi ? 'Giá Trị Cốt Lõi (Core Values)' : 'Core Values'}
            </h3>
            <ul className="text-sm text-slate-300 mt-3 space-y-1.5">
              <li>• {isVi ? 'Minh bạch dữ liệu (Data Transparency)' : 'Data Transparency'}</li>
              <li>• {isVi ? 'Lấy người dùng làm trung tâm (User-Centric)' : 'User-Centric Clarity'}</li>
              <li>• {isVi ? 'Chính xác & Trung thực (Accuracy & Integrity)' : 'Accuracy & Integrity'}</li>
              <li>• {isVi ? 'Đồng hành thực chiến (Practical Guidance)' : 'Practical Execution Support'}</li>
            </ul>
          </div>
        </section>

        {/* 3. Working Principles & Data Transparency Commitment */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-6">
          <div>
            <span className="text-xs font-mono uppercase font-bold text-[#287CE0]">
              03 · DATA TRANSPARENCY & WORKING PRINCIPLES
            </span>
            <h2 className="text-2xl font-extrabold text-[#102746] mt-1">
              {isVi
                ? 'Nguyên Tắc Làm Việc & Cam Kết Minh Bạch Dữ Liệu'
                : 'Working Principles & Strict Data Transparency Standard'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#102746]">
            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0]">
              <h3 className="font-bold text-base mb-2">
                {isVi
                  ? '1. Kiểm tra phạm vi và xem mẫu trước khi cam kết'
                  : '1. Verify Scope & Sample Before Any Commitment'}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {isVi
                  ? 'Chúng tôi không bao giờ hứa hẹn mọi quốc gia đều có trường dữ liệu giống hệt nhau. Trước khi báo giá hay ký kết, đội ngũ tư vấn luôn kiểm tra mã HS tại thị trường mục tiêu và cung cấp bản DATA DEMO để khách hàng trực tiếp đánh giá.'
                  : 'We never claim that every country offers identical customs fields. Before any service agreement, our team verifies your specific HS Code and provides a Data Demo so you can inspect the exact fields available.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0]">
              <h3 className="font-bold text-base mb-2">
                {isVi
                  ? '2. Phân biệt rõ nguồn gốc dữ liệu từng thị trường'
                  : '2. Honest Distinction of Data Sources'}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {isVi
                  ? 'Chúng tôi giải thích rõ cho khách hàng sự khác biệt giữa dữ liệu tờ khai xuất nhập khẩu thương mại, dữ liệu vận đơn hàng hải (B/L Manifest) và dữ liệu thống kê đối ứng (Mirror Data) tại các khối bảo mật như EU.'
                  : 'We transparently explain whether a market’s records originate from commercial customs declarations, maritime bills of lading, or trading-partner mirror filings.'}
              </p>
            </div>
          </div>

          {/* Why TradeIntel Global */}
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-[#102746]">
                {isVi ? 'Sẵn sàng kiểm chứng dữ liệu cho ngành hàng của bạn?' : 'Ready to inspect sample trade data for your sector?'}
              </h3>
              <p className="text-xs text-[#64748B]">
                {isVi
                  ? 'Trải nghiệm trực tiếp trên Sandbox hoặc đăng ký nhận bản Demo theo mã HS riêng.'
                  : 'Explore our interactive sandbox or request a custom HS Code sample.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/data-demo"
                className="px-4 py-2.5 rounded-lg border border-[#102746] text-[#102746] font-bold text-xs"
              >
                {isVi ? 'Mở Data Demo Sandbox' : 'Open Data Demo'}
              </Link>
              <button
                type="button"
                onClick={() => openDemoModal({ requirement: 'Find Importers' })}
                className="px-5 py-2.5 rounded-lg bg-[#287CE0] text-white font-bold text-xs"
              >
                {isVi ? 'Đăng Ký Nhận Data Demo' : 'Request Data Demo'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
