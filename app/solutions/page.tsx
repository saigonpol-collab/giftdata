'use client';

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CORE_SOLUTIONS } from '@/lib/content-data';

export default function SolutionsPage() {
  const { lang, openDemoModal } = useAppContext();
  const isVi = lang === 'vi';

  return (
    <div className="bg-white">
      <Breadcrumb
        items={[{ labelVi: 'Giải Pháp Dữ Liệu (Solutions)', labelEn: 'Solutions' }]}
      />

      {/* Page Header */}
      <section className="bg-[#102746] text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-mono uppercase tracking-widest font-bold text-[#3B82F6] bg-[#16355D] px-3 py-1 rounded mb-3">
              PAGE 02 · ENTERPRISE TRADE INTELLIGENCE SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {isVi
                ? 'Ba Giải Pháp Dữ Liệu Cốt Lõi Cho Doanh Nghiệp Xuất Nhập Khẩu'
                : 'Three Core Intelligence Solutions For Global B2B Trade'}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              {isVi
                ? 'Không chỉ cung cấp những bảng dữ liệu thô. TradeIntel Global cấu trúc hóa dữ liệu thương mại quốc tế thành 3 giải pháp thực chiến giúp bạn tìm đúng khách hàng, thấu hiểu đối thủ và làm chủ xu hướng thị trường.'
                : 'We do not sell raw, unstructured spreadsheets. TradeIntel Global transforms international customs and shipping records into three operational solutions: Customer Discovery, Competitor Monitoring, and Market Analytics.'}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#importer-exporter-db"
                className="px-4 py-2 rounded-lg bg-[#16355D] hover:bg-[#287CE0] text-xs font-mono font-bold text-white transition-colors"
              >
                A. Importer & Exporter Database
              </a>
              <a
                href="#competitor-intelligence"
                className="px-4 py-2 rounded-lg bg-[#16355D] hover:bg-[#287CE0] text-xs font-mono font-bold text-white transition-colors"
              >
                B. Competitor Trade Intelligence
              </a>
              <a
                href="#market-analytics"
                className="px-4 py-2 rounded-lg bg-[#16355D] hover:bg-[#287CE0] text-xs font-mono font-bold text-white transition-colors"
              >
                C. Global Trade Market Analytics
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Solutions Breakdown */}
      <div className="divide-y divide-[#E2E8F0]">
        {CORE_SOLUTIONS.map((sol, idx) => (
          <section
            key={sol.id}
            id={sol.id}
            className={`py-16 lg:py-20 ${idx % 2 === 1 ? 'bg-[#F8FAFC]' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Solution Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-[#E2E8F0]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded bg-[#102746] text-white font-mono text-xs font-bold">
                      {sol.code}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#287CE0] uppercase tracking-wider">
                      {isVi ? sol.badgeVi : sol.badgeEn}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746] mt-3">
                    {isVi ? sol.titleVi : sol.titleEn}
                  </h2>
                  <p className="text-sm sm:text-base text-[#64748B] mt-2 max-w-3xl">
                    {isVi ? sol.subtitleVi : sol.subtitleEn}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 shrink-0">
                  <Link
                    href="/data-demo"
                    className="px-4 py-2.5 rounded-lg border border-[#102746] text-[#102746] hover:bg-[#102746] hover:text-white text-xs sm:text-sm font-bold transition-colors"
                  >
                    {isVi ? 'Trải Nghiệm Trên Sandbox' : 'Try in Sandbox'}
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      openDemoModal({
                        requirement:
                          sol.id === 'competitor-intelligence'
                            ? 'Competitor Analysis'
                            : sol.id === 'market-analytics'
                            ? 'Market Research'
                            : 'Find Importers',
                      })
                    }
                    className="px-5 py-2.5 rounded-lg bg-[#287CE0] hover:bg-[#1F68C2] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
                  >
                    {isVi ? 'Đăng Ký Nhận Demo Giải Pháp Này' : 'Request Solution Demo'}
                  </button>
                </div>
              </div>

              {/* Grid: Pain Points + How It Solves + Related Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                {/* Left 7 Cols: Pain Points & How Platform Solves */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-enterprise">
                    <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-[#DC2626] mb-3">
                      {isVi ? '1. VẤN ĐỀ KHÁCH HÀNG THƯỜNG GẶP PHẢI' : '1. CUSTOMER PAIN POINTS'}
                    </h3>
                    <ul className="space-y-2.5 text-sm text-[#102746]">
                      {(isVi ? sol.painPointsVi : sol.painPointsEn).map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#DC2626] font-bold">✕</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-enterprise">
                    <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-[#16A34A] mb-3">
                      {isVi
                        ? '2. CÁCH NỀN TẢNG TRADEINTEL GLOBAL GIẢI QUYẾT'
                        : '2. HOW TRADEINTEL GLOBAL SOLVES IT'}
                    </h3>
                    <ul className="space-y-2.5 text-sm text-[#102746]">
                      {(isVi ? sol.howItSolvesVi : sol.howItSolvesEn).map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#16A34A] font-bold">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Workflow Steps */}
                  <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-enterprise">
                    <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-[#287CE0] mb-4">
                      {isVi ? '3. QUY TRÌNH SỬ DỤNG 3 BƯỚC' : '3. 3-STEP EXECUTION WORKFLOW'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {(isVi ? sol.workflowStepsVi : sol.workflowStepsEn).map((wf) => (
                        <div
                          key={wf.step}
                          className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]"
                        >
                          <div className="text-xs font-mono font-bold text-[#287CE0]">
                            STEP {wf.step}
                          </div>
                          <div className="text-sm font-bold text-[#102746] mt-1">{wf.title}</div>
                          <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{wf.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 5 Cols: Related Data Fields + Real-World Case + Visual Mockup */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Related Data Fields */}
                  <div className="p-6 rounded-xl bg-[#102746] text-white">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-[#3B82F6]">
                        {isVi ? 'CÁC TRƯỜNG DỮ LIỆU LIÊN QUAN' : 'RELATED DATA FIELDS'}
                      </h3>
                      <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded">
                        SCHEMA PREVIEW
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(isVi ? sol.relatedFieldsVi : sol.relatedFieldsEn).map((field, i) => (
                        <div
                          key={i}
                          className="p-2.5 rounded bg-[#0B1B32] border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-2"
                        >
                          <span className="text-[#3B82F6]">▪</span>
                          <span>{field}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real-world Case Study Box */}
                  <div className="p-6 rounded-xl bg-[#EBF4FF]/60 border border-[#287CE0]/30">
                    <div className="text-xs font-mono uppercase tracking-wider font-bold text-[#287CE0] mb-1">
                      {isVi
                        ? 'VÍ DỤ ỨNG DỤNG THỰC TẾ (USE CASE)'
                        : 'REAL-WORLD APPLICATION SCENARIO'}
                    </div>
                    <h4 className="text-base font-bold text-[#102746]">
                      {isVi ? sol.realWorldCaseVi.industry : sol.realWorldCaseEn.industry}
                    </h4>
                    <div className="mt-3 space-y-2 text-xs sm:text-sm text-[#102746]">
                      <p>
                        <strong className="text-[#64748B]">
                          {isVi ? 'Bối cảnh: ' : 'Scenario: '}
                        </strong>
                        {isVi ? sol.realWorldCaseVi.scenario : sol.realWorldCaseEn.scenario}
                      </p>
                      <p>
                        <strong className="text-[#64748B]">
                          {isVi ? 'Cách khai thác: ' : 'Action: '}
                        </strong>
                        {isVi ? sol.realWorldCaseVi.action : sol.realWorldCaseEn.action}
                      </p>
                      <p className="p-2.5 rounded bg-white border border-[#287CE0]/20 font-semibold text-[#16A34A]">
                        {isVi ? 'Kết quả kỳ vọng: ' : 'Expected Outcome: '}
                        {isVi ? sol.realWorldCaseVi.outcome : sol.realWorldCaseEn.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
