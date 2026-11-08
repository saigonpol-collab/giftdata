'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { t } from '@/lib/i18n';

export function Header() {
  const { lang, setLang, openDemoModal } = useAppContext();
  const pathname = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const copy = t(lang);
  const isVi = lang === 'vi';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: copy.nav.home },
    { href: '/solutions', label: copy.nav.solutions, hasMega: true },
    { href: '/data-demo', label: copy.nav.dataDemo, badge: 'LIVE' },
    { href: '/data-coverage', label: copy.nav.dataCoverage },
    { href: '/applications', label: copy.nav.applications },
    { href: '/how-it-works', label: copy.nav.howItWorks },
    { href: '/about', label: copy.nav.about },
    { href: '/contact', label: copy.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-enterprise border-b border-[#E2E8F0]'
          : 'bg-[#FFFFFF] border-b border-[#E2E8F0]'
      }`}
    >
      {/* Top Enterprise Announcement Bar */}
      <div className="bg-[#102746] text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#16A34A]" />
            <span className="font-mono text-[11px] tracking-wider text-slate-200">
              {copy.sloganEn}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/data-demo"
              className="hidden sm:inline-flex items-center gap-1 text-[#3B82F6] hover:text-white font-medium transition-colors"
            >
              <span>{isVi ? 'Trải nghiệm Sandbox Tra cứu Mã HS →' : 'Launch HS Code Sandbox →'}</span>
            </Link>
            {/* Language Switcher */}
            <div
              role="group"
              aria-label="Language Switcher"
              className="inline-flex items-center bg-[#16355D] rounded p-0.5 border border-slate-700"
            >
              <button
                type="button"
                onClick={() => setLang('vi')}
                aria-pressed={lang === 'vi'}
                className={`px-2 py-0.5 text-[11px] font-bold rounded transition-colors ${
                  lang === 'vi' ? 'bg-[#287CE0] text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-2 py-0.5 text-[11px] font-bold rounded transition-colors ${
                  lang === 'en' ? 'bg-[#287CE0] text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-lg bg-[#102746] flex items-center justify-center text-white font-bold text-lg border border-[#287CE0]/40 group-hover:bg-[#287CE0] transition-colors">
            TI
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#102746] leading-none">
              TRADEINTEL <span className="text-[#287CE0]">GLOBAL</span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mt-1">
              CUSTOMS & TRADE INTELLIGENCE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const active =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            if (link.hasMega) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors inline-flex items-center gap-1 ${
                      active
                        ? 'text-[#287CE0] bg-[#EBF4FF]'
                        : 'text-[#102746] hover:text-[#287CE0] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px]" aria-hidden="true">
                      ▾
                    </span>
                  </Link>

                  {megaMenuOpen && (
                    <div className="absolute left-0 top-full pt-2 w-[560px] z-50">
                      <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-elevated p-5 grid grid-cols-1 gap-3">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] border-b border-[#E2E8F0] pb-2">
                          {isVi
                            ? '3 GIẢI PHÁP DỮ LIỆU HẢI QUAN & THƯƠNG MẠI CỐT LÕI'
                            : '3 CORE TRADE INTELLIGENCE SOLUTIONS'}
                        </div>
                        <Link
                          href="/solutions#importer-exporter-db"
                          className="p-3 rounded-lg hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all"
                        >
                          <div className="text-xs font-mono text-[#287CE0] font-semibold">
                            01 · IMPORTER & EXPORTER DATABASE
                          </div>
                          <div className="text-sm font-bold text-[#102746] mt-0.5">
                            {isVi
                              ? 'Tìm kiếm nhà nhập khẩu & xuất khẩu theo mã HS'
                              : 'Search Verified Importers & Exporters by HS Code'}
                          </div>
                        </Link>
                        <Link
                          href="/solutions#competitor-intelligence"
                          className="p-3 rounded-lg hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all"
                        >
                          <div className="text-xs font-mono text-[#287CE0] font-semibold">
                            02 · COMPETITOR TRADE INTELLIGENCE
                          </div>
                          <div className="text-sm font-bold text-[#102746] mt-0.5">
                            {isVi
                              ? 'Phân tích lịch sử giao dịch & khách hàng của đối thủ'
                              : 'Track Competitor Shipments & Buyer Networks'}
                          </div>
                        </Link>
                        <Link
                          href="/solutions#market-analytics"
                          className="p-3 rounded-lg hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all"
                        >
                          <div className="text-xs font-mono text-[#287CE0] font-semibold">
                            03 · GLOBAL TRADE MARKET ANALYTICS
                          </div>
                          <div className="text-sm font-bold text-[#102746] mt-0.5">
                            {isVi
                              ? 'Thống kê kim ngạch, đơn giá & xu hướng thị trường'
                              : 'Macro Trade Flows, Pricing & Supply Analytics'}
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors inline-flex items-center gap-1.5 ${
                  active
                    ? 'text-[#287CE0] bg-[#EBF4FF]'
                    : 'text-[#102746] hover:text-[#287CE0] hover:bg-[#F8FAFC]'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-[#16A34A]/15 text-[#16A34A] rounded">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => openDemoModal({ requirement: 'Find Importers' })}
            className="px-4 py-2.5 rounded-lg bg-[#287CE0] hover:bg-[#1F68C2] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            {copy.nav.ctaRegister}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Mobile Navigation Menu"
          className="xl:hidden p-2.5 rounded-lg border border-[#E2E8F0] text-[#102746] hover:bg-[#F8FAFC]"
        >
          <span className="font-mono text-sm font-bold">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E2E8F0] px-4 pt-3 pb-6 space-y-2 shadow-elevated">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                    active ? 'bg-[#EBF4FF] text-[#287CE0]' : 'text-[#102746] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#16A34A]/15 text-[#16A34A] rounded">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openDemoModal({ requirement: 'Find Importers' });
              }}
              className="w-full py-3 rounded-lg bg-[#287CE0] text-white font-bold text-sm text-center"
            >
              {copy.nav.ctaRegister}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
