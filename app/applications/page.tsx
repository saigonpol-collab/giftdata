'use client';

import React, { useState } from 'react';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { DEPARTMENT_APPLICATIONS, INDUSTRY_VERTICALS } from '@/lib/content-data';

export default function ApplicationsPage() {
  const { lang, openDemoModal } = useAppContext();
  const isVi = lang === 'vi';
  const [activeDeptId, setActiveDeptId] = useState(DEPARTMENT_APPLICATIONS[0].id);

  const selectedDept =
    DEPARTMENT_APPLICATIONS.find((d) => d.id === activeDeptId) || DEPARTMENT_APPLICATIONS[0];

  return (
    <div className="bg-white pb-16">
      <Breadcrumb
        items={[{ labelVi: 'Ứng Dụng Theo Phòng Ban & Ngành Hàng', labelEn: 'Industries & Applications' }]}
      />

      {/* Page Header */}
      <section className="bg-[#102746] text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-mono uppercase tracking-widest font-bold text-[#3B82F6] bg-[#16355D] px-3 py-1 rounded mb-3">
            PAGE 05 · DEPARTMENTAL & INDUSTRY APPLICATIONS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl">
            {isVi
              ? 'Ứng Dụng Dữ Liệu Thương Mại Cho 6 Phòng Ban & 6 Nhóm Ngành Trọng Điểm'
              : 'Actionable Trade Intelligence Across 6 Departments & 6 Core Industries'}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-3xl leading-relaxed">
            {isVi
              ? 'Từ Ban Giám Đốc hoạch định chiến lược thị trường, Phòng Sales B2B tìm kiếm nhà nhập khẩu, đến Phòng Mua Hàng thẩm định nhà cung ứng quốc tế – mỗi bộ phận đều có quy trình khai thác dữ liệu chuyên biệt.'
              : 'From CEO market expansion decisions and B2B Sales lead generation to Strategic Sourcing and Logistics route optimization—see how each team turns trade records into measurable business outcomes.'}
          </p>
        </div>
      </section>

      {/* PART A: 6 DEPARTMENTS INTERACTIVE TABS + FULL CARDS */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase font-bold text-[#287CE0]">
              PART 01 · 6 CORPORATE DEPARTMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746] mt-1">
              {isVi
                ? 'Chọn Bộ Phận Của Bạn Để Xem Quy Trình Ứng Dụng'
                : 'Select Your Department To Inspect The Intelligence Playbook'}
            </h2>
          </div>

          {/* Interactive Department Selector Tabs */}
          <div
            role="tablist"
            aria-label="Departments"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8"
          >
            {DEPARTMENT_APPLICATIONS.map((dept, idx) => {
              const isSelected = dept.id === activeDeptId;
              return (
                <button
                  key={dept.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveDeptId(dept.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#102746] text-white border-[#102746] shadow-enterprise'
                      : 'bg-white text-[#102746] border-[#E2E8F0] hover:border-[#287CE0]'
                  }`}
                >
                  <div
                    className={`text-[10px] font-mono font-bold ${
                      isSelected ? 'text-[#3B82F6]' : 'text-[#64748B]'
                    }`}
                  >
                    DEPT 0{idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm font-bold mt-1 line-clamp-2">
                    {isVi ? dept.departmentVi : dept.departmentEn}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Department Spotlight Panel */}
          <div
            id={selectedDept.id}
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-elevated p-6 sm:p-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
              <div>
                <span className="text-xs font-mono font-bold text-[#287CE0] bg-[#EBF4FF] px-2.5 py-1 rounded">
                  {isVi ? selectedDept.roleTagVi : selectedDept.roleTagEn}
                </span>
                <h3 className="text-2xl font-extrabold text-[#102746] mt-2">
                  {isVi ? selectedDept.departmentVi : selectedDept.departmentEn}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => openDemoModal({ requirement: 'Find Importers' })}
                className="px-5 py-3 rounded-xl bg-[#287CE0] hover:bg-[#1F68C2] text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
              >
                {isVi ? selectedDept.ctaTextVi : selectedDept.ctaTextEn}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-xs font-mono uppercase font-bold text-[#DC2626] mb-2">
                  {isVi ? '1. THÁCH THỨC HIỆN TẠI' : '1. KEY CHALLENGES'}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#102746]">
                  {(isVi ? selectedDept.challengesVi : selectedDept.challengesEn).map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-xs font-mono uppercase font-bold text-[#287CE0] mb-2">
                  {isVi ? '2. MỤC TIÊU CẦN ĐẠT' : '2. CORE OBJECTIVES'}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#102746]">
                  {(isVi ? selectedDept.objectivesVi : selectedDept.objectivesEn).map((o, i) => (
                    <li key={i}>• {o}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h4 className="text-xs font-mono uppercase font-bold text-[#102746] mb-2">
                  {isVi ? '3. CÁCH SỬ DỤNG DỮ LIỆU' : '3. HOW DATA IS USED'}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#102746]">
                  {(isVi ? selectedDept.howDataUsedVi : selectedDept.howDataUsedEn).map((u, i) => (
                    <li key={i}>• {u}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#16A34A]/5 border border-[#16A34A]/30">
                <h4 className="text-xs font-mono uppercase font-bold text-[#16A34A] mb-2">
                  {isVi ? '4. KẾT QUẢ KỲ VỌNG' : '4. EXPECTED OUTCOMES'}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#102746] font-medium">
                  {(isVi ? selectedDept.expectedOutcomesVi : selectedDept.expectedOutcomesEn).map(
                    (out, i) => (
                      <li key={i}>✓ {out}</li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#102746] text-white text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-mono text-[#3B82F6] font-bold uppercase mr-2">
                  {isVi ? 'QUY TRÌNH THỰC HIỆN:' : 'EXECUTION WORKFLOW:'}
                </span>
                <span>{(isVi ? selectedDept.workflowVi : selectedDept.workflowEn)[0]}</span>
              </div>
            </div>
          </div>

          {/* All 6 Departments Quick Reference Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {DEPARTMENT_APPLICATIONS.map((dept, idx) => (
              <div
                key={dept.id}
                className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-enterprise flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#287CE0] font-bold">
                    0{idx + 1} · {isVi ? dept.roleTagVi : dept.roleTagEn}
                  </span>
                  <h3 className="text-lg font-bold text-[#102746] mt-1">
                    {isVi ? dept.departmentVi : dept.departmentEn}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-2">
                    <strong>{isVi ? 'Thách thức:' : 'Challenge:'}</strong>{' '}
                    {(isVi ? dept.challengesVi : dept.challengesEn)[0]}
                  </p>
                  <p className="text-xs text-[#102746] mt-2">
                    <strong>{isVi ? 'Ứng dụng:' : 'Data Usage:'}</strong>{' '}
                    {(isVi ? dept.howDataUsedVi : dept.howDataUsedEn)[0]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => openDemoModal({ requirement: 'Find Importers' })}
                    className="text-xs font-bold text-[#287CE0] hover:underline"
                  >
                    {isVi ? dept.ctaTextVi : dept.ctaTextEn} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PART B: 6 TARGET INDUSTRY VERTICALS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase font-bold text-[#287CE0]">
              PART 02 · 6 TARGET INDUSTRY VERTICALS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746] mt-1">
              {isVi
                ? 'Giải Pháp Chuyên Biệt Theo Nhóm Ngành Kinh Doanh'
                : 'Tailored Intelligence Across 6 Key Industry Sectors'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_VERTICALS.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-extrabold text-[#102746]">
                    {isVi ? ind.nameVi : ind.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    {isVi ? ind.summaryVi : ind.summaryEn}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-[#102746]">
                    {(isVi ? ind.keyUseCasesVi : ind.keyUseCasesEn).map((uc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#287CE0] font-bold">✓</span>
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {ind.sampleHsCodes.slice(0, 3).map((hs) => (
                      <span
                        key={hs}
                        className="text-[10px] font-mono bg-white border border-[#E2E8F0] px-2 py-0.5 rounded"
                      >
                        {hs}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => openDemoModal({ requirement: 'Find Importers' })}
                    className="px-3 py-1.5 rounded-lg bg-[#102746] hover:bg-[#287CE0] text-white text-xs font-bold transition-colors shrink-0"
                  >
                    {isVi ? 'Nhận Demo Ngành Này' : 'Get Sector Demo'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
