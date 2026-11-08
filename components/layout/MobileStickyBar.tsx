'use client';

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/components/layout/LanguageProvider';

export function MobileStickyBar() {
  const { lang, openDemoModal } = useAppContext();
  const isVi = lang === 'vi';
  const officialZaloUrl = process.env.NEXT_PUBLIC_OFFICIAL_ZALO_URL;

  return (
    <div
      role="region"
      aria-label={isVi ? 'Thanh công cụ chuyển đổi nhanh trên di động' : 'Mobile Quick Action Bar'}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E2E8F0] px-3 py-2.5 shadow-elevated"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {officialZaloUrl ? (
          <a
            href={officialZaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-lg border border-[#287CE0] text-[#287CE0] font-bold text-xs text-center flex items-center justify-center gap-1.5 bg-[#EBF4FF]/60"
          >
            <span>💬</span>
            <span>{isVi ? 'Tư Vấn Zalo' : 'Zalo Consult'}</span>
          </a>
        ) : (
          <Link
            href="/data-demo"
            className="py-2.5 px-3 rounded-lg border border-[#102746] text-[#102746] font-bold text-xs text-center flex items-center justify-center gap-1.5 bg-[#F8FAFC]"
          >
            <span>📊</span>
            <span>{isVi ? 'Xem Data Demo' : 'Try Data Demo'}</span>
          </Link>
        )}

        <button
          type="button"
          onClick={() => openDemoModal({ requirement: 'Find Importers' })}
          className="py-2.5 px-3 rounded-lg bg-[#287CE0] hover:bg-[#1F68C2] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-sm"
        >
          <span>⚡</span>
          <span>{isVi ? 'Nhận DATA DEMO' : 'Get Data Demo'}</span>
        </button>
      </div>
    </div>
  );
}
