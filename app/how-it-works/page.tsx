'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { HOW_IT_WORKS_STEPS, PLAYBOOK_SCENARIOS } from '@/lib/content-data';

export default function HowItWorksPage() {
  const { lang, openDemoModal } = useAppContext();
  const isVi = lang === 'vi';
  const [activeScenarioId, setActiveScenarioId] = useState(PLAYBOOK_SCENARIOS[0].id);

  const activeScenario =
    PLAYBOOK_SCENARIOS.find((s) => s.id === activeScenarioId) || PLAYBOOK_SCENARIOS[0];

  return (
    <div className="bg-white pb-16">
      <Breadcrumb
        items={[{ labelVi: 'Quy Trình Sử Dụng Thực Chiến', labelEn: 'How It Works' }]}
      />

      {/* Hero Header */}
      <section className="bg-[#102746] text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-mono uppercase tracking-widest font-bold text-[#3B82F6] bg-[#16355D] px-3 py-1 rounded mb-3">
            PAGE 06 · PRACTICAL STEP-BY-STEP GUIDE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl">
            {isVi
              ? 'Hướng Dẫn Từng Bước Khai Thác Dữ Liệu Hải Quan Cho Người Mới & Chuyên Gia'
              : 'Practical Step-by-Step Guide To Extracting B2B Value From Customs Data'}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-3xl leading-relaxed">
            {isVi
              ? 'Ngay cả khi doanh nghiệp bạn chưa từng sử dụng dữ liệu hải quan quốc tế hay chưa nhớ rõ mã HS 6 số, quy trình 4 bước dưới đây sẽ hướng dẫn chi tiết thông tin đầu vào, kết quả đầu ra và cách ứng dụng vào thực tế.'
              : 'Even if your team has never worked with raw customs declarations or HS classifications before, our 4-step guided process makes onboarding effortless and transparent.'}
          </p>
        </div>
      </section>

      {/* 4 PRACTICAL STEPS */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase font-bold text-[#287CE0]">
              PART 01 · 4-STEP OPERATIONAL WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746] mt-1">
              {isVi
                ? '4 Bước Triển Khai Từ Lúc Xác Định Nhu Cầu Đến Khi Khai Thác Thực Chiến'
                : '4 Structured Steps From Initial Requirement To Commercial Execution'}
            </h2>
          </div>

          <div className="space-y-6">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-enterprise p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Step Description */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="inline-flex items-center gap-2">
                      <span className="px-3 py-1 rounded bg-[#102746] text-white font-mono text-xs font-extrabold">
                        STEP {step.stepNumber}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#102746]">
                      {isVi ? step.titleVi : step.titleEn}
                    </h3>
                    <p className="text-sm font-semibold text-[#287CE0]">
                      {isVi ? step.subtitleVi : step.subtitleEn}
                    </p>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {isVi ? step.instructionsVi : step.instructionsEn}
                    </p>
                  </div>

                  {/* Right: Inputs, Outputs, Preparation */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="text-xs font-mono uppercase font-bold text-[#102746] mb-2">
                        📥 {isVi ? 'THÔNG TIN ĐẦU VÀO' : 'REQUIRED INPUTS'}
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#64748B]">
                        {(isVi ? step.inputsVi : step.inputsEn).map((inp, i) => (
                          <li key={i}>• {inp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#EBF4FF]/50 border border-[#287CE0]/30">
                      <div className="text-xs font-mono uppercase font-bold text-[#287CE0] mb-2">
                        📤 {isVi ? 'KẾT QUẢ ĐẦU RA' : 'DELIVERABLE OUTPUTS'}
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#102746] font-medium">
                        {(isVi ? step.outputsVi : step.outputsEn).map((out, i) => (
                          <li key={i}>✓ {out}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="text-xs font-mono uppercase font-bold text-[#16A34A] mb-2">
                        📋 {isVi ? 'CẦN CHUẨN BỊ GÌ?' : 'WHAT TO PREPARE'}
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {isVi ? step.preparationVi : step.preparationEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 REAL-WORLD PLAYBOOK SCENARIOS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase font-bold text-[#287CE0]">
              PART 02 · 4 PRACTICAL SCENARIOS FOR BEGINNERS & TEAMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102746] mt-1">
              {isVi
                ? '4 Tình Huống Minh Họa Thực Tế: Bạn Đang Muốn Giải Quyết Bài Toán Nào?'
                : '4 Concrete Playbook Scenarios: Which Goal Matches Yours?'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {PLAYBOOK_SCENARIOS.map((sc) => {
              const selected = sc.id === activeScenarioId;
              return (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setActiveScenarioId(sc.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selected
                      ? 'bg-[#102746] text-white border-[#102746] shadow-enterprise'
                      : 'bg-[#F8FAFC] text-[#102746] border-[#E2E8F0] hover:border-[#287CE0]'
                  }`}
                >
                  <div
                    className={`text-[10px] font-mono font-bold ${
                      selected ? 'text-[#3B82F6]' : 'text-[#287CE0]'
                    }`}
                  >
                    {isVi ? sc.tagVi : sc.tagEn}
                  </div>
                  <div className="text-xs sm:text-sm font-bold mt-1.5">
                    {isVi ? sc.questionVi : sc.questionEn}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Scenario Detail */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-enterprise">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
              <div>
                <span className="text-xs font-mono font-bold text-[#287CE0]">
                  {isVi ? activeScenario.tagVi : activeScenario.tagEn}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#102746] mt-1">
                  {isVi ? activeScenario.questionVi : activeScenario.questionEn}
                </h3>
                <p className="text-sm text-[#64748B] mt-1">
                  <strong>{isVi ? 'Mục tiêu:' : 'Objective:'}</strong>{' '}
                  {isVi ? activeScenario.goalVi : activeScenario.goalEn}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/data-demo"
                  className="px-4 py-2.5 rounded-lg border border-[#102746] text-[#102746] font-bold text-xs"
                >
                  {isVi ? 'Thử Trên Sandbox' : 'Try on Sandbox'}
                </Link>
                <button
                  type="button"
                  onClick={() => openDemoModal({ requirement: 'Find Importers' })}
                  className="px-5 py-2.5 rounded-lg bg-[#287CE0] text-white font-bold text-xs"
                >
                  {isVi ? 'Nhận Tư Vấn Tình Huống Này' : 'Request Guided Demo'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {(isVi ? activeScenario.stepsVi : activeScenario.stepsEn).map((st, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block w-6 h-6 rounded-full bg-[#EBF4FF] text-[#287CE0] font-mono text-xs font-bold text-center leading-6 mb-2">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#102746] leading-relaxed">{st}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#102746] text-white text-xs sm:text-sm">
              <strong className="text-[#3B82F6] font-mono uppercase mr-2">
                {isVi ? 'KẾT QUẢ NHẬN ĐƯỢC:' : 'FINAL DELIVERABLE:'}
              </strong>
              <span>{isVi ? activeScenario.deliverableVi : activeScenario.deliverableEn}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
