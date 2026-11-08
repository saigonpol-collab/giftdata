'use client';

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LeadCaptureForm } from '@/components/ui/LeadCaptureForm';

export default function ContactPage() {
  const { lang } = useAppContext();
  const isVi = lang === 'vi';

  return (
    <div className="bg-[#F8FAFC] pb-16">
      <Breadcrumb
        items={[{ labelVi: 'Liên Hệ & Đăng Ký Nhận Data Demo', labelEn: 'Contact & Request Demo' }]}
      />

      {/* Page Header */}
      <section className="bg-[#102746] text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-mono uppercase tracking-widest font-bold text-[#3B82F6] bg-[#16355D] px-3 py-1 rounded mb-3">
            PAGE 08 · B2B CONVERSION & DEMO DISPATCH DESK
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isVi
              ? 'Đăng Ký Nhận DATA DEMO & Tư Vấn Khai Thác Dữ Liệu Hải Quan'
              : 'Request A Tailored Customs Data Demo & Consultation'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-3xl leading-relaxed">
            {isVi
              ? 'Điền thông tin sản phẩm, mã HS và quốc gia bạn đang quan tâm. Đội ngũ chuyên viên TradeIntel Global sẽ kiểm tra phạm vi dữ liệu thực tế và gửi bản mẫu DEMO phù hợp với nhu cầu của doanh nghiệp.'
              : 'Provide your product or HS Code and target countries below. Our specialists will verify source coverage and prepare a tailored Data Demo for your team.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Columns: Full Conversion Form */}
          <div className="lg:col-span-7">
            <LeadCaptureForm sourcePage="contact-page" />
          </div>

          {/* Right 5 Columns: Process, Zalo Guidance & FAQ Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-enterprise space-y-4">
              <div className="text-xs font-mono uppercase font-bold text-[#287CE0]">
                WHAT YOU WILL RECEIVE
              </div>
              <h2 className="text-lg font-extrabold text-[#102746]">
                {isVi
                  ? 'Quyền Lợi Khi Đăng Ký Kiểm Tra Data Demo'
                  : 'What Is Included In Your Pre-Sale Data Demo'}
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-[#102746]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#16A34A] font-bold">✓</span>
                  <span>
                    <strong>
                      {isVi
                        ? 'Xác nhận phạm vi quốc gia & mã HS:'
                        : 'Jurisdiction & HS Code Verification:'}
                    </strong>{' '}
                    {isVi
                      ? 'Kiểm tra rõ thị trường bạn cần thuộc diện AVAILABLE, PARTIALLY AVAILABLE hay cần Mirror Data.'
                      : 'Confirm exact availability status and source modality for your target country.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#16A34A] font-bold">✓</span>
                  <span>
                    <strong>
                      {isVi ? 'Bản ghi mẫu đúng ngành hàng:' : 'Relevant Sample Records:'}
                    </strong>{' '}
                    {isVi
                      ? 'Xem trước cấu trúc các trường Importer, Exporter, HS Code, Product Description, Quantity, Value, Port.'
                      : 'Inspect sample rows showing Importer, Exporter, HS Code, Description, Quantity, Value, and Ports.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#16A34A] font-bold">✓</span>
                  <span>
                    <strong>
                      {isVi ? 'Tư vấn giải pháp 1-1:' : '1-on-1 Solution Consultation:'}
                    </strong>{' '}
                    {isVi
                      ? 'Hướng dẫn cách lọc khách hàng B2B, phân tích đối thủ hoặc thẩm định nhà cung ứng.'
                      : 'Walkthrough on filtering active buyers, mapping competitor clients, or vetting suppliers.'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[#102746] text-white p-6 rounded-2xl space-y-3">
              <div className="text-xs font-mono uppercase text-[#3B82F6] font-bold">
                ZALO & DIRECT B2B SUPPORT
              </div>
              <h3 className="text-base font-bold">
                {isVi ? 'Hỗ Trợ Trao Đổi Nhanh Qua Zalo' : 'Direct Zalo & Specialist Callback'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isVi
                  ? 'Khi bạn nhập Số điện thoại / Zalo trong biểu mẫu bên cạnh, chuyên viên phụ trách ngành hàng sẽ kết nối trực tiếp qua Zalo để gửi file mẫu và giải đáp nhanh các câu hỏi về mã HS.'
                  : 'Include your Zalo or mobile number in the form so our sector specialist can send your sample file and coordinate a walkthrough.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/data-demo"
                  className="px-4 py-2 rounded-lg bg-[#16355D] hover:bg-[#287CE0] text-xs font-bold transition-colors"
                >
                  {isVi ? 'Xem trước Sandbox trực tuyến →' : 'Try Online Sandbox First →'}
                </Link>
                <Link
                  href="/data-coverage"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors"
                >
                  {isVi ? 'Tra cứu phạm vi quốc gia →' : 'Check Country Coverage →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
