'use client';

import React, { useState, useMemo } from 'react';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { COUNTRY_COVERAGE_DATA, REGIONS } from '@/lib/coverage-data';
import { CountryCoverageRecord, DataAvailabilityStatus, GeographicalRegion } from '@/types';

export default function DataCoveragePage() {
  const { lang, openDemoModal } = useAppContext();
  const isVi = lang === 'vi';

  const [selectedRegion, setSelectedRegion] = useState<'All' | GeographicalRegion>('All');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | DataAvailabilityStatus>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCountry, setActiveCountry] = useState<CountryCoverageRecord | null>(
    COUNTRY_COVERAGE_DATA[0]
  );

  const filteredCountries = useMemo(() => {
    return COUNTRY_COVERAGE_DATA.filter((c) => {
      if (selectedRegion !== 'All' && c.region !== selectedRegion) return false;
      if (selectedStatus !== 'ALL' && c.status !== selectedStatus) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          c.nameEn.toLowerCase().includes(q) ||
          c.nameVi.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.region.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [selectedRegion, selectedStatus, searchQuery]);

  const getStatusStyle = (status: DataAvailabilityStatus) => {
    switch (status) {
      case 'AVAILABLE':
        return {
          badge: 'bg-[#16A34A]/15 text-[#16A34A] border-[#16A34A]/30',
          dot: '#16A34A',
        };
      case 'PARTIALLY AVAILABLE':
        return {
          badge: 'bg-[#287CE0]/15 text-[#287CE0] border-[#287CE0]/30',
          dot: '#287CE0',
        };
      case 'UNDER VERIFICATION':
        return {
          badge: 'bg-[#F59E0B]/15 text-[#B45309] border-[#F59E0B]/30',
          dot: '#F59E0B',
        };
      case 'NOT AVAILABLE':
        return {
          badge: 'bg-[#DC2626]/15 text-[#DC2626] border-[#DC2626]/30',
          dot: '#DC2626',
        };
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-16">
      <Breadcrumb
        items={[{ labelVi: 'Phạm Vi Dữ Liệu Quốc Tế', labelEn: 'Global Data Coverage' }]}
      />

      {/* Header */}
      <section className="bg-[#102746] text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-mono uppercase tracking-widest font-bold text-[#3B82F6] bg-[#16355D] px-3 py-1 rounded mb-3">
            PAGE 04 · GLOBAL DATA COVERAGE & TRANSPARENCY MATRIX
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isVi
              ? 'Phạm Vi Dữ Liệu Thương Mại & Hải Quan Theo Từng Quốc Gia'
              : 'Global Trade & Customs Data Coverage by Jurisdiction'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-3xl leading-relaxed">
            {isVi
              ? 'Chúng tôi phân biệt minh bạch giữa 4 trạng thái: AVAILABLE (Truy xuất trực tiếp), PARTIALLY AVAILABLE (Vận đơn đường biển B/L hoặc Dữ liệu đối ứng Mirror Data), UNDER VERIFICATION (Cần kiểm tra theo mã HS) và NOT AVAILABLE. Không tuyên bố độ bao phủ khi chưa xác minh nguồn.'
              : 'We strictly classify every jurisdiction into 4 transparent availability tiers: AVAILABLE, PARTIALLY AVAILABLE (Maritime B/L or Mirror Data), UNDER VERIFICATION, and NOT AVAILABLE.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* INTERACTIVE WORLD MAP + SELECTED COUNTRY INSPECTOR */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Interactive World Map Canvas */}
          <div className="lg:col-span-7 bg-[#0B1B32] rounded-2xl border border-slate-800 p-5 text-white shadow-elevated">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-[11px] font-mono text-[#3B82F6] uppercase font-bold">
                  INTERACTIVE GLOBAL COVERAGE MAP
                </span>
                <h2 className="text-sm sm:text-base font-bold">
                  {isVi
                    ? 'Nhấn vào các điểm quốc gia trên bản đồ để xem chi tiết nguồn dữ liệu'
                    : 'Click any country node on the map to inspect field availability'}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                <span className="flex items-center gap-1">
                  <i className="w-2.5 h-2.5 rounded-full bg-[#16A34A] inline-block" /> AVAILABLE
                </span>
                <span className="flex items-center gap-1">
                  <i className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] inline-block" /> PARTIALLY
                </span>
                <span className="flex items-center gap-1">
                  <i className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block" /> VERIFY
                </span>
                <span className="flex items-center gap-1">
                  <i className="w-2.5 h-2.5 rounded-full bg-[#DC2626] inline-block" /> N/A
                </span>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-xl bg-[#102746] border border-slate-800">
              <svg
                viewBox="0 0 1000 480"
                className="w-full h-auto block"
                role="img"
                aria-label="Interactive World Map of Trade Data Coverage"
              >
                {/* Grid lines */}
                {[80, 160, 240, 320, 400].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="1000"
                    y2={y}
                    stroke="#1E3A5F"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                ))}
                {[200, 400, 600, 800].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="480"
                    stroke="#1E3A5F"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                ))}

                {/* Stylized Continental Silhouettes */}
                {/* North America */}
                <path
                  d="M110,80 L280,75 L310,160 L250,235 L180,220 L130,150 Z"
                  fill="#16355D"
                  stroke="#287CE0"
                  strokeOpacity="0.4"
                />
                {/* South America */}
                <path
                  d="M260,255 L360,275 L345,425 L285,440 L265,330 Z"
                  fill="#16355D"
                  stroke="#287CE0"
                  strokeOpacity="0.4"
                />
                {/* Europe */}
                <path
                  d="M445,85 L575,80 L585,175 L455,180 Z"
                  fill="#16355D"
                  stroke="#287CE0"
                  strokeOpacity="0.4"
                />
                {/* Africa */}
                <path
                  d="M450,200 L585,205 L595,395 L515,410 L455,295 Z"
                  fill="#16355D"
                  stroke="#287CE0"
                  strokeOpacity="0.4"
                />
                {/* Middle East & Asia */}
                <path
                  d="M590,95 L875,90 L885,285 L680,295 L595,235 Z"
                  fill="#16355D"
                  stroke="#287CE0"
                  strokeOpacity="0.4"
                />
                {/* Oceania */}
                <path
                  d="M755,325 L885,325 L890,420 L760,415 Z"
                  fill="#16355D"
                  stroke="#287CE0"
                  strokeOpacity="0.4"
                />

                {/* Country Nodes */}
                {COUNTRY_COVERAGE_DATA.map((c) => {
                  const style = getStatusStyle(c.status);
                  const isSelected = activeCountry?.code === c.code;
                  return (
                    <g
                      key={c.code}
                      onClick={() => setActiveCountry(c)}
                      className="cursor-pointer"
                    >
                      {isSelected && (
                        <circle
                          cx={c.coordinates.x}
                          cy={c.coordinates.y}
                          r={16}
                          fill={style.dot}
                          fillOpacity="0.28"
                        />
                      )}
                      <circle
                        cx={c.coordinates.x}
                        cy={c.coordinates.y}
                        r={isSelected ? 8 : 6}
                        fill={style.dot}
                        stroke="#FFFFFF"
                        strokeWidth={isSelected ? 2.5 : 1.5}
                      />
                      <text
                        x={c.coordinates.x + 10}
                        y={c.coordinates.y + 4}
                        fill="#FFFFFF"
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {c.code}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Selected Country Inspector Drawer */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E2E8F0] shadow-enterprise p-6">
            {activeCountry ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2 border-b border-[#E2E8F0] pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#64748B]">
                      {activeCountry.code} · {activeCountry.region}
                    </span>
                    <h2 className="text-xl font-extrabold text-[#102746] mt-0.5">
                      {isVi ? activeCountry.nameVi : activeCountry.nameEn}
                    </h2>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${
                      getStatusStyle(activeCountry.status).badge
                    }`}
                  >
                    {activeCountry.status}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-[#102746] block">
                      {isVi ? '1. Loại dữ liệu có thể truy xuất:' : '1. Retrievable Data Types:'}
                    </span>
                    <ul className="list-disc list-inside text-[#64748B] mt-1 space-y-0.5">
                      {(isVi ? activeCountry.dataTypesVi : activeCountry.dataTypesEn).map(
                        (dt, i) => (
                          <li key={i}>{dt}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-[#102746] block">
                      {isVi ? '2. Phạm vi thời gian:' : '2. Historical Time Range:'}
                    </span>
                    <p className="text-[#64748B] mt-0.5">
                      {isVi ? activeCountry.timeRangeVi : activeCountry.timeRangeEn}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#102746] block">
                      {isVi ? '3. Các trường dữ liệu khả dụng:' : '3. Available Data Fields:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {(isVi
                        ? activeCountry.availableFieldsVi
                        : activeCountry.availableFieldsEn
                      ).map((f, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] font-mono text-[11px] text-[#102746]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-[#102746] block">
                      {isVi ? '4. Nguồn dữ liệu:' : '4. Data Source Modality:'}
                    </span>
                    <p className="text-[#64748B] mt-0.5">
                      {isVi ? activeCountry.dataSourceVi : activeCountry.dataSourceEn}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="font-bold text-[#102746] block text-xs">
                      {isVi
                        ? '5. Hạn chế tiếp cận & Lưu ý pháp lý:'
                        : '5. Access Restrictions & Compliance Notes:'}
                    </span>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      {isVi ? activeCountry.restrictionsVi : activeCountry.restrictionsEn}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#64748B] pt-1">
                    <span>
                      {isVi ? 'Ngày cập nhật thông tin:' : 'Information Last Updated:'}{' '}
                      <strong className="font-mono text-[#102746]">
                        {activeCountry.lastUpdated}
                      </strong>
                    </span>
                  </div>
                </div>

                {activeCountry.status !== 'NOT AVAILABLE' && (
                  <div className="pt-3 border-t border-[#E2E8F0]">
                    <button
                      type="button"
                      onClick={() =>
                        openDemoModal({
                          country: isVi ? activeCountry.nameVi : activeCountry.nameEn,
                          requirement: 'Find Importers',
                        })
                      }
                      className="w-full py-3 rounded-xl bg-[#287CE0] hover:bg-[#1F68C2] text-white font-bold text-xs sm:text-sm transition-colors"
                    >
                      {isVi
                        ? `Kiểm Tra Dữ Liệu Mẫu Tại ${activeCountry.nameVi}`
                        : `Request Coverage Verification for ${activeCountry.nameEn}`}
                    </button>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </section>

        {/* REGION & SEARCH FILTER BAR */}
        <section className="bg-white rounded-2xl border border-[#E2E8F0] p-5 shadow-enterprise space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Region Pills */}
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by Region">
              {REGIONS.map((reg) => (
                <button
                  key={reg.id}
                  type="button"
                  onClick={() => setSelectedRegion(reg.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedRegion === reg.id
                      ? 'bg-[#102746] text-white'
                      : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#102746] border border-[#E2E8F0]'
                  }`}
                >
                  {isVi ? reg.labelVi : reg.labelEn}
                </button>
              ))}
            </div>

            {/* Search & Status Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="text"
                aria-label="Search country name or code"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isVi ? 'Tìm tên quốc gia (VD: Mỹ, Đức, Nhật...)' : 'Search Country...'}
                className="px-3.5 py-2 rounded-lg border border-[#E2E8F0] text-xs sm:text-sm focus:border-[#287CE0] focus:outline-none"
              />
              <select
                aria-label="Filter by availability status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as typeof selectedStatus)}
                className="px-3 py-2 rounded-lg border border-[#E2E8F0] text-xs font-mono bg-white"
              >
                <option value="ALL">{isVi ? 'Tất cả trạng thái' : 'All Statuses'}</option>
                <option value="AVAILABLE">AVAILABLE</option>
                <option value="PARTIALLY AVAILABLE">PARTIALLY AVAILABLE</option>
                <option value="UNDER VERIFICATION">UNDER VERIFICATION</option>
                <option value="NOT AVAILABLE">NOT AVAILABLE</option>
              </select>
            </div>
          </div>

          {/* Country Directory Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
            {filteredCountries.map((country) => {
              const style = getStatusStyle(country.status);
              return (
                <div
                  key={country.code}
                  onClick={() => setActiveCountry(country)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    activeCountry?.code === country.code
                      ? 'border-[#287CE0] bg-[#EBF4FF]/30 shadow-enterprise'
                      : 'border-[#E2E8F0] bg-white hover:border-[#CBD5E1]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-[#64748B]">
                        {country.code} · {country.region}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${style.badge}`}
                      >
                        {country.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#102746]">
                      {isVi ? country.nameVi : country.nameEn}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1.5">
                      <strong>{isVi ? 'Nguồn:' : 'Source:'}</strong>{' '}
                      {isVi ? country.dataSourceVi : country.dataSourceEn}
                    </p>
                    <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                      <strong>{isVi ? 'Lưu ý:' : 'Note:'}</strong>{' '}
                      {isVi ? country.restrictionsVi : country.restrictionsEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-[#64748B]">
                      Updated: {country.lastUpdated}
                    </span>
                    <span className="font-bold text-[#287CE0]">
                      {isVi ? 'Xem chi tiết →' : 'Inspect →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
