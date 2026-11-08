'use client';

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/components/layout/LanguageProvider';

export function Footer() {
  const { lang, openDemoModal } = useAppContext();
  const isVi = lang === 'vi';

  return (
    <footer className="bg-[#102746] text-white border-t border-slate-800 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#287CE0] flex items-center justify-center text-white font-bold">
                TI
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-tight text-white">
                  TRADEINTEL <span className="text-[#3B82F6]">GLOBAL</span>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-300">
                  GLOBAL TRADE INTELLIGENCE PLATFORM
                </div>
              </div>
            </div>

            <p className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] font-semibold">
              SEE THE MARKET. KNOW YOUR COMPETITORS. FIND YOUR CUSTOMERS.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              {isVi
                ? 'Giải pháp khai thác dữ liệu Hải quan và thương mại quốc tế phục vụ nghiên cứu thị trường, phát triển khách hàng B2B, phân tích đối thủ và hoạch định chuỗi cung ứng đa quốc gia.'
                : 'Enterprise B2B customs and international trade intelligence platform empowering manufacturers, exporters, importers, and logistics leaders with evidence-based market decisions.'}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openDemoModal({ requirement: 'Find Importers' })}
                className="px-4 py-2.5 rounded-lg bg-[#287CE0] hover:bg-[#1F68C2] text-white text-xs font-bold transition-colors"
              >
                {isVi ? 'ĐĂNG KÝ NHẬN DATA DEMO' : 'REQUEST DATA DEMO'}
              </button>
            </div>
          </div>

          {/* Column 2: Sitemap Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              {isVi ? 'CẤU TRÚC NỀN TẢNG (SITEMAP)' : 'PLATFORM ARCHITECTURE'}
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {isVi ? '01. Trang chủ (Home)' : '01. Home Overview'}
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  {isVi ? '02. Giải pháp cốt lõi (Solutions)' : '02. Core Solutions'}
                </Link>
              </li>
              <li>
                <Link href="/data-demo" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>{isVi ? '03. Trải nghiệm Data Demo' : '03. Interactive Data Demo'}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#16A34A]/20 text-[#16A34A]">
                    SANDBOX
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/data-coverage" className="hover:text-white transition-colors">
                  {isVi ? '04. Phạm vi dữ liệu quốc tế' : '04. Global Data Coverage'}
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-white transition-colors">
                  {isVi ? '05. Ứng dụng theo phòng ban & ngành' : '05. Industries & Applications'}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  {isVi ? '06. Quy trình sử dụng thực chiến' : '06. How It Works'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {isVi ? '07. Về TradeIntel Global' : '07. About TradeIntel Global'}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {isVi ? '08. Liên hệ & Đăng ký Demo' : '08. Contact & Request Demo'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              {isVi ? '3 GIẢI PHÁP DỮ LIỆU CHÍNH' : 'THREE CORE SOLUTIONS'}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/solutions#importer-exporter-db" className="hover:text-white transition-colors block">
                  <span className="font-semibold text-white block">Importer & Exporter Database</span>
                  <span className="text-xs text-slate-400">
                    {isVi ? 'Tra cứu doanh nghiệp XNK theo mã HS' : 'Find active buyers & suppliers by HS Code'}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#competitor-intelligence" className="hover:text-white transition-colors block">
                  <span className="font-semibold text-white block">Competitor Trade Intelligence</span>
                  <span className="text-xs text-slate-400">
                    {isVi ? 'Theo dõi lịch sử giao dịch đối thủ' : 'Monitor competitor shipments & clients'}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/solutions#market-analytics" className="hover:text-white transition-colors block">
                  <span className="font-semibold text-white block">Global Trade Market Analytics</span>
                  <span className="text-xs text-slate-400">
                    {isVi ? 'Phân tích kim ngạch & xu hướng thị trường' : 'Quantify volume, pricing & market share'}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Compliance */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              {isVi ? 'KẾT NỐI TƯ VẤN' : 'B2B CONSULTATION'}
            </h3>
            <div className="text-xs text-slate-300 space-y-2">
              <p>
                <span className="text-slate-400 block">{isVi ? 'Kênh tiếp nhận:' : 'Inquiry Channel:'}</span>
                <Link href="/contact" className="text-[#3B82F6] hover:underline font-semibold">
                  {isVi ? 'Biểu mẫu Đăng ký Data Demo' : 'Online Data Demo Form'}
                </Link>
              </p>
              <p>
                <span className="text-slate-400 block">Zalo B2B Desk:</span>
                <span>
                  {isVi
                    ? 'Để lại số Zalo tại Form để chuyên viên gửi mẫu dữ liệu theo mã HS.'
                    : 'Submit your Zalo/Phone in the Demo Form for direct HS Code sample delivery.'}
                </span>
              </p>
              <p>
                <span className="text-slate-400 block">Technical SEO:</span>
                <a href="/sitemap.xml" className="hover:text-white underline mr-3">
                  Sitemap.xml
                </a>
                <a href="/robots.txt" className="hover:text-white underline">
                  Robots.txt
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Transparency & Legal Notice */}
        <div className="pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
          <div className="p-4 rounded-lg bg-[#0B1B32] border border-slate-800">
            <p className="font-semibold text-slate-200 mb-1">
              {isVi
                ? 'THÔNG BÁO MINH BẠCH DỮ LIỆU & PHẠM VI CUNG CẤP (DATA TRANSPARENCY NOTICE):'
                : 'DATA GOVERNANCE & TRANSPARENCY DISCLAIMER:'}
            </p>
            <p>
              {isVi
                ? 'Dữ liệu được cung cấp theo phạm vi, điều kiện khai thác và quyền sử dụng của từng nguồn dữ liệu hợp pháp (bao gồm dữ liệu tờ khai thương mại, vận đơn hàng hải B/L và dữ liệu thống kê đối ứng Mirror Data). Khả năng truy cập, độ trễ cập nhật và các trường dữ liệu có thể khác nhau giữa các quốc gia tùy theo quy định pháp luật sở tại. Các bản ghi hiển thị tại khu vực Sandbox trên website đều được gắn nhãn SAMPLE DATA / DEMONSTRATION DATA phục vụ mục đích minh họa tính năng. Dữ liệu lịch sử không đồng nghĩa với cam kết giao dịch hiện tại hoặc bảo đảm kết quả kinh doanh.'
                : 'Trade data is provided strictly in accordance with the scope, licensing terms, and legal disclosure rules of each respective source (including commercial customs filings, maritime Bills of Lading, and international Mirror Data). Field availability and update frequency vary by jurisdiction. Records displayed in the interactive website sandbox are clearly labeled SAMPLE DATA / DEMONSTRATION DATA for functional illustration only. Historical trade records do not guarantee current purchasing commitments or commercial outcomes.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>© {new Date().getFullYear()} TRADEINTEL GLOBAL. All rights reserved.</p>
            <p className="font-mono text-[11px] text-slate-400">
              USER FIRST · CLARITY FIRST · DATA TRANSPARENCY FIRST
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
