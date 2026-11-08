'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { DEMO_TRANSACTIONS } from '@/lib/demo-data';

export function DashboardMockup() {
  const { lang, openDemoModal } = useAppContext();
  const isVi = lang === 'vi';
  const [selectedHs, setSelectedHs] = useState<'ALL' | '090111' | '940360' | '854231' | '030617'>('ALL');

  const filtered =
    selectedHs === 'ALL'
      ? DEMO_TRANSACTIONS.slice(0, 4)
      : DEMO_TRANSACTIONS.filter((r) => r.hsCode === selectedHs).slice(0, 4);

  return (
    <div className="bg-[#0B1B32] border border-slate-700/80 rounded-2xl shadow-elevated overflow-hidden text-white">
      {/* Window Header */}
      <div className="bg-[#102746] px-4 py-3 border-b border-slate-700/80 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
          <span className="ml-2 text-[11px] font-mono text-slate-300">
            TRADEINTEL TERMINAL · HS CODE LIVE PREVIEW
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40">
          SAMPLE / DEMONSTRATION DATA
        </span>
      </div>

      {/* Interactive Quick HS Switcher */}
      <div className="p-4 border-b border-slate-800 bg-[#0F2340]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs text-slate-300 font-medium">
            {isVi ? 'Chọn nhanh mã HS mẫu để xem bản ghi:' : 'Quick Filter Sample HS Code:'}
          </span>
          <Link
            href="/data-demo"
            className="text-xs font-semibold text-[#3B82F6] hover:underline"
          >
            {isVi ? 'Mở toàn bộ 10 trường dữ liệu →' : 'Open Full 10-Field Sandbox →'}
          </Link>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { code: 'ALL', labelVi: 'Tất cả ngành', labelEn: 'All Sectors' },
            { code: '090111', labelVi: 'HS 090111 · Cà phê', labelEn: 'HS 090111 · Coffee' },
            { code: '940360', labelVi: 'HS 940360 · Nội thất gỗ', labelEn: 'HS 940360 · Furniture' },
            { code: '854231', labelVi: 'HS 854231 · Vi mạch IC', labelEn: 'HS 854231 · Semiconductors' },
            { code: '030617', labelVi: 'HS 030617 · Tôm đông lạnh', labelEn: 'HS 030617 · Shrimp' },
          ].map((btn) => (
            <button
              key={btn.code}
              type="button"
              onClick={() => setSelectedHs(btn.code as typeof selectedHs)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                selectedHs === btn.code
                  ? 'bg-[#287CE0] text-white font-bold'
                  : 'bg-[#16355D] text-slate-300 hover:text-white'
              }`}
            >
              {isVi ? btn.labelVi : btn.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Metrics Row */}
      <div className="grid grid-cols-3 gap-2 p-4 bg-[#0B1B32] border-b border-slate-800">
        <div className="p-3 rounded-lg bg-[#102746] border border-slate-800">
          <div className="text-[10px] font-mono uppercase text-slate-400">
            {isVi ? 'TRƯỜNG DỮ LIỆU CHUẨN' : 'STANDARD FIELDS'}
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-white font-mono mt-0.5">
            10 Fields
          </div>
          <div className="text-[11px] text-[#16A34A] mt-0.5">
            Importer · Exporter · HS
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#102746] border border-slate-800">
          <div className="text-[10px] font-mono uppercase text-slate-400">
            {isVi ? 'KHU VỰC TRA CỨU' : 'REGIONAL SCOPE'}
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-[#3B82F6] font-mono mt-0.5">
            7 Regions
          </div>
          <div className="text-[11px] text-slate-300 mt-0.5">
            Asia · EU · US · LatAm
          </div>
        </div>
        <div className="p-3 rounded-lg bg-[#102746] border border-slate-800">
          <div className="text-[10px] font-mono uppercase text-slate-400">
            {isVi ? 'CHẾ ĐỘ KIỂM CHỨNG' : 'VERIFICATION'}
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-[#16A34A] font-mono mt-0.5">
            Pre-Demo
          </div>
          <div className="text-[11px] text-slate-300 mt-0.5">
            {isVi ? 'Xem mẫu trước khi mua' : 'Inspect before purchase'}
          </div>
        </div>
      </div>

      {/* Mini Shipment Table */}
      <div className="p-4 space-y-2.5">
        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
          <span>{isVi ? 'BẢN GHI GIAO DỊCH MÔ PHỎNG (SAMPLE RECORDS)' : 'SIMULATED TRANSACTION STREAM'}</span>
          <span>USD VALUE</span>
        </div>

        <div className="space-y-2">
          {filtered.map((tx) => (
            <div
              key={tx.id}
              className="p-3 rounded-lg bg-[#102746]/90 border border-slate-800 hover:border-[#287CE0] transition-colors"
            >
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-mono font-bold text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-0.5 rounded">
                  HS {tx.hsCode}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  {tx.originCode} → {tx.destinationCode} · {tx.transactionDate}
                </span>
                <span className="font-mono font-bold text-[#16A34A]">
                  ${tx.tradeValueUsd.toLocaleString()}
                </span>
              </div>
              <div className="text-xs font-semibold text-white mt-1.5 line-clamp-1">
                {tx.importer} ← {tx.exporter}
              </div>
              <div className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                {isVi ? tx.productDescriptionVi : tx.productDescription}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <Link
            href="/data-demo"
            className="w-full sm:w-auto text-center px-3.5 py-2 rounded-lg bg-[#16355D] hover:bg-[#287CE0] text-white text-xs font-semibold transition-colors"
          >
            {isVi ? '🔍 Tra cứu thử trên Sandbox đầy đủ' : '🔍 Open Interactive Data Sandbox'}
          </Link>
          <button
            type="button"
            onClick={() =>
              openDemoModal({
                hsCode: selectedHs === 'ALL' ? '' : selectedHs,
                requirement: 'Find Importers',
              })
            }
            className="w-full sm:w-auto text-center px-3.5 py-2 rounded-lg bg-[#287CE0] hover:bg-[#1F68C2] text-white text-xs font-bold transition-colors"
          >
            {isVi ? '⚡ Nhận mẫu theo Mã HS của bạn' : '⚡ Request Custom HS Sample'}
          </button>
        </div>
      </div>
    </div>
  );
}
