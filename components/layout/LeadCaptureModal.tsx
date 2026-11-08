'use client';

import React, { useEffect } from 'react';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { LeadCaptureForm } from '@/components/ui/LeadCaptureForm';

export function LeadCaptureModal() {
  const { isModalOpen, closeDemoModal, modalContext, lang } = useAppContext();
  const isVi = lang === 'vi';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeDemoModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeDemoModal]);

  if (!isModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isVi ? 'Đăng ký nhận Data Demo' : 'Request Data Demo'}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#102746]/75 backdrop-blur-sm overflow-y-auto"
      onClick={closeDemoModal}
    >
      <div
        className="relative w-full max-w-2xl my-auto max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-elevated"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3.5 bg-[#102746] text-white rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
            <span className="text-xs font-mono uppercase tracking-wider font-semibold">
              TRADEINTEL GLOBAL · DATA DEMO DISPATCH
            </span>
          </div>
          <button
            type="button"
            onClick={closeDemoModal}
            aria-label={isVi ? 'Đóng cửa sổ' : 'Close modal'}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-bold text-sm transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-2 sm:p-4">
          <LeadCaptureForm
            sourcePage="modal-dialog"
            initialHsCode={modalContext.hsCode}
            initialCountry={modalContext.country}
            initialRequirement={modalContext.requirement}
            compact
          />
        </div>
      </div>
    </div>
  );
}
