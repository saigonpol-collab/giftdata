'use client';

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/components/layout/LanguageProvider';

interface BreadcrumbItem {
  labelVi: string;
  labelEn: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const { lang } = useAppContext();

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#64748B]">
        <Link
          href="/"
          className="hover:text-[#287CE0] font-medium transition-colors flex items-center gap-1"
        >
          <span>TradeIntel Global</span>
        </Link>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-[#CBD5E1]" aria-hidden="true">
              /
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#287CE0] font-medium transition-colors"
              >
                {lang === 'vi' ? item.labelVi : item.labelEn}
              </Link>
            ) : (
              <span className="text-[#102746] font-semibold" aria-current="page">
                {lang === 'vi' ? item.labelVi : item.labelEn}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
