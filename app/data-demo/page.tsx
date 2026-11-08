'use client';
import React, { useState, useMemo } from 'react';
import { useAppContext } from '@/components/layout/LanguageProvider';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { DEMO_TRANSACTIONS, SAMPLE_MONTHLY_TRENDS } from '@/lib/demo-data';
import { DemoTransactionRecord } from '@/types';
export default function DataDemoPage() {
const { lang, openDemoModal } = useAppContext();
const isVi = lang === 'vi';
const [productQuery, setProductQuery] = useState('');
const [hsCodeQuery, setHsCodeQuery] = useState('');
const [importerQuery, setImporterQuery] = useState('');
const [exporterQuery, setExporterQuery] = useState('');
const [originCountry, setOriginCountry] = useState('ALL');
const [destinationCountry, setDestinationCountry] = useState('ALL');
const [dateFrom, setDateFrom] = useState('2026-08-01');
const [dateTo, setDateTo] = useState('2026-11-30');
const [minValueUsd, setMinValueUsd] = useState('');
const [maxValueUsd, setMaxValueUsd] = useState('');
const [sortBy, setSortBy] = useState<'transactionDate' | 'tradeValueUsd' | 'quantity' | 'hsCode'>('transactionDate');
const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
const [page, setPage] = useState(1);
const [pageSize, setPageSize] = useState(8);
const [selectedRecord, setSelectedRecord] = useState<DemoTransactionRecord | null>(null);
const [toastMessage, setToastMessage] = useState<string | null>(null);
const uniqueOrigins = useMemo(
() => Array.from(new Set(DEMO_TRANSACTIONS.map((r) => r.origin))).sort(),
[]
);
const uniqueDestinations = useMemo(
() => Array.from(new Set(DEMO_TRANSACTIONS.map((r) => r.destination))).sort(),
[]
);
const filteredRecords = useMemo(() => {
return DEMO_TRANSACTIONS.filter((item) => {
if (productQuery.trim()) {
const q = productQuery.toLowerCase();
const matchDesc =
item.productDescription.toLowerCase().includes(q) ||
item.productDescriptionVi.toLowerCase().includes(q);
if (!matchDesc) return false;
}
if (hsCodeQuery.trim()) {
if (!item.hsCode.toLowerCase().includes(hsCodeQuery.trim().toLowerCase())) {
return false;
}
}
if (importerQuery.trim()) {
if (!item.importer.toLowerCase().includes(importerQuery.trim().toLowerCase())) {
return false;
}
}
if (exporterQuery.trim()) {
if (!item.exporter.toLowerCase().includes(exporterQuery.trim().toLowerCase())) {
return false;
}
}
if (originCountry !== 'ALL' && item.origin !== originCountry) {
return false;
}
if (destinationCountry !== 'ALL' && item.destination !== destinationCountry) {
return false;
}
if (dateFrom && item.transactionDate < dateFrom) {
return false;
}
if (dateTo && item.transactionDate > dateTo) {
return false;
}
if (minValueUsd !== '' && !Number.isNaN(Number(minValueUsd))) {
if (item.tradeValueUsd < Number(minValueUsd)) return false;
}
if (maxValueUsd !== '' && !Number.isNaN(Number(maxValueUsd))) {
if (item.tradeValueUsd > Number(maxValueUsd)) return false;
}
return true;
}).sort((a, b) => {
let comparison = 0;
if (sortBy === 'tradeValueUsd') {
comparison = a.tradeValueUsd - b.tradeValueUsd;
} else if (sortBy === 'quantity') {
comparison = a.quantity - b.quantity;
} else if (sortBy === 'hsCode') {
comparison = a.hsCode.localeCompare(b.hsCode);
} else {
comparison = a.transactionDate.localeCompare(b.transactionDate);
}
return sortOrder === 'asc' ? comparison : -comparison;
});
}, [
productQuery,
hsCodeQuery,
importerQuery,
exporterQuery,
originCountry,
destinationCountry,
dateFrom,
dateTo,
minValueUsd,
maxValueUsd,
sortBy,
sortOrder,
]);
const totalPages = Math.max(1, Math.ceil(filteredRecords.length / pageSize));
const currentPage = Math.min(page, totalPages);
const paginatedRecords = filteredRecords.slice(
(currentPage - 1) * pageSize,
currentPage * pageSize
);
const totalFilteredValue = useMemo(
() => filteredRecords.reduce((sum, r) => sum + r.tradeValueUsd, 0),
[filteredRecords]
);
const valueByCountry = useMemo(() => {
const map = new Map<string, number>();
filteredRecords.forEach((r) => {
map.set(r.destination, (map.get(r.destination) || 0) + r.tradeValueUsd);
});
return Array.from(map.entries())
.map(([country, value]) => ({ country, value }))
.sort((a, b) => b.value - a.value)
.slice(0, 5);
}, [filteredRecords]);
const topImporters = useMemo(() => {
const map = new Map<string, { value: number; count: number }>();
filteredRecords.forEach((r) => {
const prev = map.get(r.importer) || { value: 0, count: 0 };
map.set(r.importer, { value: prev.value + r.tradeValueUsd, count: prev.count + 1 });
});
return Array.from(map.entries())
.map(([name, stats]) => ({ name, ...stats }))
.sort((a, b) => b.value - a.value)
.slice(0, 4);
}, [filteredRecords]);
const topExporters = useMemo(() => {
const map = new Map<string, { value: number; count: number }>();
filteredRecords.forEach((r) => {
const prev = map.get(r.exporter) || { value: 0, count: 0 };
map.set(r.exporter, { value: prev.value + r.tradeValueUsd, count: prev.count + 1 });
});
return Array.from(map.entries())
.map(([name, stats]) => ({ name, ...stats }))
.sort((a, b) => b.value - a.value)
.slice(0, 4);
}, [filteredRecords]);
const categoryDistribution = useMemo(() => {
const map = new Map<string, number>();
filteredRecords.forEach((r) => {
const label = `HS ${r.hsCode.slice(0, 4)}`;
map.set(label, (map.get(label) || 0) + r.tradeValueUsd);
});
return Array.from(map.entries())
.map(([hs, value]) => ({ hs, value }))
.sort((a, b) => b.value - a.value);
}, [filteredRecords]);
const resetAllFilters = () => {
setProductQuery('');
setHsCodeQuery('');
setImporterQuery('');
setExporterQuery('');
setOriginCountry('ALL');
setDestinationCountry('ALL');
setDateFrom('2026-08-01');
setDateTo('2026-11-30');
setMinValueUsd('');
setMaxValueUsd('');
setPage(1);
setToastMessage(isVi ? 'Đã đặt lại toàn bộ bộ lọc Demo.' : 'All Demo filters have been reset.');
setTimeout(() => setToastMessage(null), 3000);
};
const handleSort = (col: typeof sortBy) => {
if (sortBy === col) {
setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
} else {
setSortBy(col);
setSortOrder('desc');
}
};
const handleExportSampleCsv = () => {
const headers = [
'Record_ID (SAMPLE DATA)',
'1_Importer',
'2_Exporter',
'3_HS_Code',
'4_Product_Description',
'5_Origin',
'6_Destination',
'7_Transaction_Date',
'8_Quantity',
'9_Trade_Value_USD',
'10_Port_And_Additional_Info',
];
const rows = filteredRecords.map((r) => [
r.id,
`"${r.importer}"`,
`"${r.exporter}"`,
r.hsCode,
`"${r.productDescription.replace(/"/g, '""')}"`,
r.origin,
r.destination,
r.transactionDate,
`${r.quantity} ${r.quantityUnit}`,
r.tradeValueUsd,
`"${r.portAndAdditionalInfo.replace(/"/g, '""')}"`,
]);
const csvContent =
'# SAMPLE DATA / DEMONSTRATION DATA - TRADEINTEL GLOBAL\n' +
[headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.setAttribute('download', 'tradeintel_sample_demo_data.csv');
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
setToastMessage(
isVi
? `Đã tải xuống ${filteredRecords.length} bản ghi mẫu (CSV).`
: `Exported ${filteredRecords.length} sample records to CSV.`
);
setTimeout(() => setToastMessage(null), 3500);
};
return (
<div className="bg-[#F8FAFC] min-h-screen pb-16">
<Breadcrumb
items={[{ labelVi: 'Trải Nghiệm Data Demo (Sandbox)', labelEn: 'Interactive Data Demo' }]}
/>
{toastMessage && (
<div
role="status"
aria-live="polite"
className="fixed bottom-20 lg:bottom-6 right-4 z-50 bg-[#102746] text-white px-4 py-3 rounded-xl shadow-elevated border border-[#287CE0] text-xs font-semibold flex items-center gap-2"
>
<span className="text-[#16A34A]">●</span>
<span>{toastMessage}</span>
</div>
)}
<section className="bg-[#102746] text-white py-10 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div>
<div className="inline-flex flex-wrap items-center gap-2 mb-3">
<span className="px-3 py-1 rounded bg-[#F59E0B] text-[#102746] font-mono text-xs font-extrabold uppercase tracking-wider">
SAMPLE DATA / DEMONSTRATION DATA
</span>
<span className="px-3 py-1 rounded bg-[#16355D] text-[#3B82F6] font-mono text-xs font-semibold">
PAGE 03 · INTERACTIVE TRADE INTELLIGENCE SANDBOX
</span>
</div>
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
{isVi
? 'Trải Nghiệm Tra Cứu & Phân Tích Dữ Liệu Hải Quan Trực Quan'
: 'Interactive Customs & Trade Intelligence Sandbox'}
</h1>
<p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
{isVi
? 'Khám phá trực tiếp cách lọc theo Mã HS, Tên sản phẩm, Nhà nhập khẩu, Nhà xuất khẩu, Quốc gia và Giá trị giao dịch trên 10 trường dữ liệu tiêu chuẩn. Lưu ý: Toàn bộ bản ghi dưới đây là dữ liệu mô phỏng (Sample Data) để minh họa tính năng hệ thống.'
: 'Test-drive multi-parameter filtering by HS Code, Product Keyword, Importer, Exporter, Origin/Destination, Date, and USD Value across all 10 standard fields. Note: All records below are simulated sample data for platform demonstration.'}
</p>
</div>
<div className="flex flex-wrap items-center gap-3 shrink-0">
<button
type="button"
onClick={handleExportSampleCsv}
className="px-4 py-2.5 rounded-lg bg-[#16355D] hover:bg-slate-700 text-white text-xs font-mono font-bold border border-slate-600 transition-colors"
>
⬇ {isVi ? 'Xuất File CSV Mẫu' : 'Export Sample CSV'}
</button>
<button
type="button"
onClick={() =>
openDemoModal({
hsCode: hsCodeQuery || productQuery,
country: destinationCountry !== 'ALL' ? destinationCountry : '',
requirement: 'Find Importers',
})
}
className="px-5 py-2.5 rounded-lg bg-[#287CE0] hover:bg-[#1F68C2] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
>
{isVi ? 'Đăng Ký Nhận Demo Theo Mã HS Của Bạn' : 'Request Custom HS Code Demo'}
</button>
</div>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
<section
aria-label={isVi ? 'Bộ lọc dữ liệu thương mại' : 'Trade Data Filter Panel'}
className="bg-white rounded-2xl border border-[#E2E8F0] shadow-enterprise p-5 sm:p-6"
>
<div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E2E8F0]">
<div className="flex items-center gap-2">
<span className="text-xs font-mono uppercase font-bold text-[#102746]">
{isVi ? 'BẢNG ĐIỀU KHIỂN TRA CỨU ĐA TIÊU CHÍ (8 FILTERS)' : 'MULTI-PARAMETER QUERY ENGINE (8 FILTERS)'}
</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-[#64748B]">
{isVi
? `Kết quả khớp: ${filteredRecords.length} bản ghi mẫu`
: `Matching Records: ${filteredRecords.length} sample shipments`}
</span>
<button
type="button"
onClick={resetAllFilters}
className="px-3 py-1.5 rounded-lg border border-[#E2E8F0] hover:border-[#102746] text-xs font-semibold text-[#102746] transition-colors"
>
↺ {isVi ? 'Đặt lại bộ lọc (Reset)' : 'Reset Filters'}
</button>
</div>
</div>
<div className="flex flex-wrap items-center gap-1.5 mb-4">
<span className="text-xs text-[#64748B] mr-1">
{isVi ? 'Gợi ý tra cứu nhanh:' : 'Quick Presets:'}
</span>
{[
{ hs: '0901', label: '0901 · Coffee' },
{ hs: '9403', label: '9403 · Furniture' },
{ hs: '8542', label: '8542 · Integrated Circuits' },
{ hs: '0306', label: '0306 · Frozen Shrimp' },
{ hs: '6109', label: '6109 · Cotton Apparel' },
{ hs: '7210', label: '7210 · Galvanized Steel' },
].map((p) => (
<button
key={p.hs}
type="button"
onClick={() => {
setHsCodeQuery(p.hs);
setPage(1);
}}
className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
hsCodeQuery === p.hs
? 'bg-[#287CE0] text-white font-bold'
: 'bg-[#F8FAFC] border border-[#E2E8F0] text-[#102746] hover:border-[#287CE0]'
}`}
>
{p.label}
</button>
))}
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div>
<label htmlFor="filter-product" className="block text-xs font-bold text-[#102746] mb-1">
{isVi ? '1. Tìm theo Tên / Mô tả sản phẩm' : '1. Search Product Description'}
</label>
<input
id="filter-product"
type="text"
value={productQuery}
onChange={(e) => {
setProductQuery(e.target.value);
setPage(1);
}}
placeholder={isVi ? 'VD: Robusta, Shrimp, Furniture, Steel...' : 'e.g. Robusta, Shrimp, Furniture...'}
className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#E2E8F0] focus:border-[#287CE0] focus:outline-none"
/>
</div>
<div>
<label htmlFor="filter-hs" className="block text-xs font-bold text-[#102746] mb-1">
{isVi ? '2. Tìm theo Mã HS (HS Code)' : '2. Search by HS Code'}
</label>
<input
id="filter-hs"
type="text"
value={hsCodeQuery}
onChange={(e) => {
setHsCodeQuery(e.target.value);
setPage(1);
}}
placeholder="e.g. 090111, 940360, 8542..."
className="w-full px-3 py-2 text-xs sm:text-sm font-mono rounded-lg border border-[#E2E8F0] focus:border-[#287CE0] focus:outline-none"
/>
</div>
<div>
<label htmlFor="filter-importer" className="block text-xs font-bold text-[#102746] mb-1">
{isVi ? '3. Lọc Nhà Nhập Khẩu (Importer)' : '3. Filter Importer Entity'}
</label>
<input
id="filter-importer"
type="text"
value={importerQuery}
onChange={(e) => {
setImporterQuery(e.target.value);
setPage(1);
}}
placeholder={isVi ? 'Nhập tên công ty nhập khẩu...' : 'Importer company name...'}
className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#E2E8F0] focus:border-[#287CE0] focus:outline-none"
/>
</div>
<div>
<label htmlFor="filter-exporter" className="block text-xs font-bold text-[#102746] mb-1">
{isVi ? '4. Lọc Nhà Xuất Khẩu (Exporter)' : '4. Filter Exporter Entity'}
</label>
<input
id="filter-exporter"
type="text"
value={exporterQuery}
onChange={(e) => {
setExporterQuery(e.target.value);
setPage(1);
}}
placeholder={isVi ? 'Nhập tên công ty xuất khẩu...' : 'Exporter company name...'}
className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#E2E8F0] focus:border-[#287CE0] focus:outline-none"
/>
</div>
<div>
<label htmlFor="filter-origin" className="block text-xs font-bold text-[#102746] mb-1">
{isVi ? '5. Quốc gia xuất xứ (Origin)' : '5. Origin Country'}
</label>
<select
id="filter-origin"
value={originCountry}
onChange={(e) => {
setOriginCountry(e.target.value);
setPage(1);
}}
className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#E2E8F0] bg-white focus:border-[#287CE0] focus:outline-none"
>
<option value="ALL">{isVi ? 'Tất cả quốc gia xuất xứ' : 'All Origin Countries'}</option>
{uniqueOrigins.map((c) => (
<option key={c} value={c}>
{c}
</option>
))}
</select>
</div>
<div>
<label htmlFor="filter-dest" className="block text-xs font-bold text-[#102746] mb-1">
{isVi ? '6. Quốc gia đích đến (Destination)' : '6. Destination Country'}
</label>
<select
id="filter-dest"
value={destinationCountry}
onChange={(e) => {
setDestinationCountry(e.target.value);
setPage(1);
}}
className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#E2E8F0] bg-white focus:border-[#287CE0] focus:outline-none"
>
<option value="ALL">{isVi ? 'Tất cả quốc gia đích' : 'All Destination Countries'}</option>
{uniqueDestinations.map((c) => (
<option key={c} value={c}>
{c}
</option>
))}
</select>
</div>
<div>
<label htmlFor="filter-date-from" className="block text-xs font-bold text-[#102746] mb-1">
{isVi ? '7. Khoảng thời gian (Từ - Đến)' : '7. Transaction Date Range'}
</label>
<div className="grid grid-cols-2 gap-1.5">
<input
id="filter-date-from"
type="date"
value={dateFrom}
onChange={(e) => {
setDateFrom(e.target.value);
setPage(1);
}}
className="px-2 py-2 text-xs font-mono rounded-lg border border-[#E2E8F0]"
/>
<input
id="filter-date-to"
type="date"
aria-label="Date To"
value={dateTo}
onChange={(e) => {
setDateTo(e.target.value);
setPage(1);
}}
className="px-2 py-2 text-xs font-mono rounded-lg border border-[#E2E8F0]"
/>
</div>
</div>
<div>
<label htmlFor="filter-min-val" className="block text-xs font-bold text-[#102746] mb-1">
{isVi ? '8. Khoảng trị giá USD (Min - Max)' : '8. Trade Value USD (Min - Max)'}
</label>
<div className="grid grid-cols-2 gap-1.5">
<input
id="filter-min-val"
type="number"
placeholder="Min USD"
value={minValueUsd}
onChange={(e) => {
setMinValueUsd(e.target.value);
setPage(1);
}}
className="px-2.5 py-2 text-xs font-mono rounded-lg border border-[#E2E8F0]"
/>
<input
id="filter-max-val"
type="number"
aria-label="Max USD"
placeholder="Max USD"
value={maxValueUsd}
onChange={(e) => {
setMaxValueUsd(e.target.value);
setPage(1);
}}
className="px-2.5 py-2 text-xs font-mono rounded-lg border border-[#E2E8F0]"
/>
</div>
</div>
</div>
</section>
<section aria-label="Trade Analytics Charts" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-enterprise">
<div className="flex items-center justify-between mb-3">
<div>
<span className="text-[10px] font-mono uppercase text-[#287CE0] font-bold">
CHART 01 · TIME SERIES
</span>
<h2 className="text-sm font-bold text-[#102746]">
{isVi ? 'Xu Hướng Xuất Nhập Khẩu (Import/Export Trend)' : 'Import / Export Value Trend (Simulated)'}
</h2>
</div>
<span className="text-[10px] font-mono bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#E2E8F0]">
USD Millions
</span>
</div>
<div className="space-y-2.5 pt-2">
{SAMPLE_MONTHLY_TRENDS.map((m) => (
<div key={m.month} className="text-xs">
<div className="flex justify-between font-mono text-[11px] text-[#64748B] mb-1">
<span>{m.month}</span>
<span>
Exp: ${m.exportVal}M | Imp: ${m.importVal}M ({m.shipments} B/Ls)
</span>
</div>
<div className="w-full h-3 bg-[#F1F5F9] rounded-full overflow-hidden flex">
<div
style={{ width: `${(m.exportVal / 12) * 100}%` }}
className="bg-[#287CE0] h-full"
title={`Export: $${m.exportVal}M`}
/>
<div
style={{ width: `${(m.importVal / 12) * 100}%` }}
className="bg-[#102746] h-full"
title={`Import: $${m.importVal}M`}
/>
</div>
</div>
))}
</div>
</div>
<div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-enterprise">
<div className="flex items-center justify-between mb-3">
<div>
<span className="text-[10px] font-mono uppercase text-[#287CE0] font-bold">
CHART 02 · CORRIDOR SHARE
</span>
<h2 className="text-sm font-bold text-[#102746]">
{isVi ? 'Kim Ngạch Theo Quốc Gia Đích' : 'Trade Value by Destination Country'}
</h2>
</div>
<span className="text-[11px] font-mono font-bold text-[#16A34A]">
${totalFilteredValue.toLocaleString()}
</span>
</div>
<div className="space-y-3 pt-2">
{valueByCountry.map((c) => {
const pct = totalFilteredValue > 0 ? Math.round((c.value / totalFilteredValue) * 100) : 0;
return (
<div key={c.country}>
<div className="flex justify-between text-xs mb-1">
<span className="font-semibold text-[#102746]">{c.country}</span>
<span className="font-mono text-[#64748B]">
${c.value.toLocaleString()} ({pct}%)
</span>
</div>
<div className="w-full h-2.5 bg-[#F1F5F9] rounded-full overflow-hidden">
<div
style={{ width: `${Math.max(pct, 6)}%` }}
className="h-full bg-[#287CE0] rounded-full"
/>
</div>
</div>
);
})}
</div>
</div>
<div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-enterprise">
<span className="text-[10px] font-mono uppercase text-[#287CE0] font-bold">
CHART 03 · HS DISTRIBUTION
</span>
<h2 className="text-sm font-bold text-[#102746] mb-3">
{isVi ? 'Phân Bổ Nhóm Mã HS' : 'Product HS Heading Mix'}
</h2>
<div className="space-y-2 max-h-52 overflow-y-auto pr-1">
{categoryDistribution.slice(0, 6).map((cat) => {
const pct =
totalFilteredValue > 0 ? Math.round((cat.value / totalFilteredValue) * 100) : 0;
return (
<div
key={cat.hs}
className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs"
>
<span className="font-mono font-bold text-[#102746]">{cat.hs}</span>
<span className="font-mono text-[#287CE0] font-semibold">{pct}%</span>
</div>
);
})}
</div>
</div>
<div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-enterprise">
<span className="text-[10px] font-mono uppercase text-[#287CE0] font-bold">
CHART 04 · BUYER LEADERBOARD
</span>
<h2 className="text-sm font-bold text-[#102746] mb-3">
{isVi ? 'Top Nhà Nhập Khẩu (Top Importers trong bộ lọc)' : 'Top Importers (Filtered View)'}
</h2>
<div className="space-y-2">
{topImporters.map((imp, idx) => (
<div
key={imp.name}
className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between gap-2 text-xs"
>
<div className="truncate">
<span className="font-mono font-bold text-[#287CE0] mr-2">#{idx + 1}</span>
<span className="font-semibold text-[#102746]">{imp.name}</span>
</div>
<div className="font-mono shrink-0 text-right">
<span className="font-bold text-[#16A34A]">${imp.value.toLocaleString()}</span>
<span className="text-[#64748B] ml-1.5">({imp.count} B/L)</span>
</div>
</div>
))}
</div>
</div>
<div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-enterprise">
<span className="text-[10px] font-mono uppercase text-[#287CE0] font-bold">
CHART 05 · SUPPLIER LEADERBOARD
</span>
<h2 className="text-sm font-bold text-[#102746] mb-3">
{isVi ? 'Top Nhà Xuất Khẩu (Top Exporters trong bộ lọc)' : 'Top Exporters (Filtered View)'}
</h2>
<div className="space-y-2">
{topExporters.map((exp, idx) => (
<div
key={exp.name}
className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between gap-2 text-xs"
>
<div className="truncate">
<span className="font-mono font-bold text-[#102746] mr-2">#{idx + 1}</span>
<span className="font-semibold text-[#102746]">{exp.name}</span>
</div>
<div className="font-mono shrink-0 text-right">
<span className="font-bold text-[#287CE0]">${exp.value.toLocaleString()}</span>
<span className="text-[#64748B] ml-1.5">({exp.count} B/L)</span>
</div>
</div>
))}
</div>
</div>
</section>
<section className="bg-white rounded-2xl border border-[#E2E8F0] shadow-enterprise overflow-hidden">
<div className="px-5 py-4 bg-[#102746] text-white flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2.5">
<span className="px-2.5 py-0.5 rounded bg-[#F59E0B] text-[#102746] font-mono text-[11px] font-extrabold">
SAMPLE DATA
</span>
<h2 className="text-sm sm:text-base font-bold">
{isVi
? 'Bảng Dữ Liệu Giao Dịch 10 Trường Tiêu Chuẩn (Nhấn vào dòng để xem Chi Tiết Vận Đơn)'
: '10-Field Transaction Records Table (Click any row to open Detail Manifest)'}
</h2>
</div>
<div className="flex items-center gap-2 text-xs">
<label htmlFor="page-size-select" className="text-slate-300">
{isVi ? 'Số dòng/trang:' : 'Rows:'}
</label>
<select
id="page-size-select"
value={pageSize}
onChange={(e) => {
setPageSize(Number(e.target.value));
setPage(1);
}}
className="bg-[#16355D] text-white border border-slate-600 rounded px-2 py-1 font-mono text-xs"
>
<option value={5}>5</option>
<option value={8}>8</option>
<option value={16}>16</option>
</select>
</div>
</div>
{filteredRecords.length === 0 ? (
/* Empty State */
<div className="p-12 text-center space-y-3">
<div className="text-3xl">🔍</div>
<h3 className="text-lg font-bold text-[#102746]">
{isVi
? 'Không tìm thấy bản ghi mẫu nào khớp với tiêu chí lọc hiện tại'
: 'No sample records match your current filter combination'}
</h3>
<p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
{isVi
? 'Bộ dữ liệu Sandbox chỉ chứa 16 bản ghi minh họa. Để nhận dữ liệu thực tế theo đúng mã HS của bạn, hãy nhấn nút Đặt lại bộ lọc hoặc Đăng ký nhận Demo.'
: 'The online sandbox contains 16 simulated demonstration records. Reset filters or request a custom Data Demo for your exact HS Code.'}
</p>
<div className="pt-2 flex justify-center gap-3">
<button
type="button"
onClick={resetAllFilters}
className="px-4 py-2 rounded-lg border border-[#102746] text-[#102746] text-xs font-bold"
>
{isVi ? 'Đặt Lại Bộ Lọc' : 'Reset Filters'}
</button>
<button
type="button"
onClick={() =>
openDemoModal({
hsCode: hsCodeQuery || productQuery,
requirement: 'Find Importers',
})
}
className="px-4 py-2 rounded-lg bg-[#287CE0] text-white text-xs font-bold"
>
{isVi ? 'Yêu Cầu Tra Cứu Mã HS Này' : 'Request Lookup for This HS Code'}
</button>
</div>
</div>
) : (
<>
<div className="overflow-x-auto enterprise-table-scroll">
<table className="w-full text-left border-collapse min-w-[1100px]">
<thead>
<tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#102746] text-[11px] font-mono uppercase">
<th className="py-3.5 px-3">1. Importer</th>
<th className="py-3.5 px-3">2. Exporter</th>
<th className="py-3.5 px-3">
<button
type="button"
onClick={() => handleSort('hsCode')}
className="font-bold hover:text-[#287CE0] flex items-center gap-1"
>
<span>3. HS Code</span>
<span>{sortBy === 'hsCode' ? (sortOrder === 'asc' ? '↑' : '↓') : '↕'}</span>
</button>
</th>
<th className="py-3.5 px-3">4. Product Description</th>
<th className="py-3.5 px-3">5. Origin</th>
<th className="py-3.5 px-3">6. Destination</th>
<th className="py-3.5 px-3">
<button
type="button"
onClick={() => handleSort('transactionDate')}
className="font-bold hover:text-[#287CE0] flex items-center gap-1"
>
<span>7. Date</span>
<span>
{sortBy === 'transactionDate' ? (sortOrder === 'asc' ? '↑' : '↓') : '↕'}
</span>
</button>
</th>
<th className="py-3.5 px-3 text-right">
<button
type="button"
onClick={() => handleSort('quantity')}
className="font-bold hover:text-[#287CE0] inline-flex items-center gap-1"
>
<span>8. Quantity</span>
<span>{sortBy === 'quantity' ? (sortOrder === 'asc' ? '↑' : '↓') : '↕'}</span>
</button>
</th>
<th className="py-3.5 px-3 text-right">
<button
type="button"
onClick={() => handleSort('tradeValueUsd')}
className="font-bold hover:text-[#287CE0] inline-flex items-center gap-1"
>
<span>9. Value USD</span>
<span>
{sortBy === 'tradeValueUsd' ? (sortOrder === 'asc' ? '↑' : '↓') : '↕'}
</span>
</button>
</th>
<th className="py-3.5 px-3">10. Port & Action</th>
</tr>
</thead>
<tbody className="divide-y divide-[#E2E8F0] text-xs">
{paginatedRecords.map((row) => (
<tr
key={row.id}
onClick={() => setSelectedRecord(row)}
className="hover:bg-[#EBF4FF]/50 cursor-pointer transition-colors"
>
<td className="py-3.5 px-3 font-semibold text-[#102746]">{row.importer}</td>
<td className="py-3.5 px-3 text-[#102746]">{row.exporter}</td>
<td className="py-3.5 px-3">
<span className="font-mono font-bold text-[#287CE0] bg-[#EBF4FF] px-2 py-0.5 rounded">
{row.hsCode}
</span>
</td>
<td className="py-3.5 px-3 text-[#64748B] max-w-xs">
{isVi ? row.productDescriptionVi : row.productDescription}
</td>
<td className="py-3.5 px-3 font-medium text-[#102746]">{row.origin}</td>
<td className="py-3.5 px-3 font-medium text-[#102746]">{row.destination}</td>
<td className="py-3.5 px-3 font-mono text-[#64748B]">
{row.transactionDate}
</td>
<td className="py-3.5 px-3 font-mono text-right text-[#102746]">
{row.quantity.toLocaleString()} {row.quantityUnit}
</td>
<td className="py-3.5 px-3 font-mono font-bold text-right text-[#16A34A]">
${row.tradeValueUsd.toLocaleString()}
</td>
<td className="py-3.5 px-3">
<div className="flex items-center justify-between gap-2">
<span className="font-mono text-[11px] text-[#64748B] truncate max-w-[170px]">
{row.portAndAdditionalInfo}
</span>
<button
type="button"
onClick={(e) => {
e.stopPropagation();
setSelectedRecord(row);
}}
className="px-2.5 py-1 rounded bg-[#102746] hover:bg-[#287CE0] text-white font-mono text-[10px] font-bold shrink-0"
>
{isVi ? 'Chi tiết' : 'Inspect'}
</button>
</div>
</td>
</tr>
))}
</tbody>
</table>
</div>
<div className="px-5 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 text-xs">
<div className="text-[#64748B]">
{isVi
? `Trang ${currentPage} / ${totalPages} (Tổng ${filteredRecords.length} bản ghi mô phỏng)`
: `Page ${currentPage} of ${totalPages} (${filteredRecords.length} total simulated records)`}
</div>
<div className="flex items-center gap-1.5">
<button
type="button"
disabled={currentPage <= 1}
onClick={() => setPage((p) => Math.max(1, p - 1))}
className="px-3 py-1.5 rounded border border-[#E2E8F0] bg-white disabled:opacity-40 font-semibold text-[#102746]"
>
← {isVi ? 'Trước' : 'Prev'}
</button>
{Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pNum) => (
<button
key={pNum}
type="button"
onClick={() => setPage(pNum)}
className={`w-8 h-8 rounded font-mono font-bold ${
currentPage === pNum
? 'bg-[#287CE0] text-white'
: 'bg-white border border-[#E2E8F0] text-[#102746]'
}`}
>
{pNum}
</button>
))}
<button
type="button"
disabled={currentPage >= totalPages}
onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
className="px-3 py-1.5 rounded border border-[#E2E8F0] bg-white disabled:opacity-40 font-semibold text-[#102746]"
>
{isVi ? 'Sau' : 'Next'} →
</button>
</div>
</div>
</>
)}
</section>
</div>
{selectedRecord && (
<div
role="dialog"
aria-modal="true"
aria-label="Shipment Record Detail Preview"
className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#102746]/75 backdrop-blur-sm overflow-y-auto"
onClick={() => setSelectedRecord(null)}
>
<div
className="w-full max-w-3xl bg-white rounded-2xl shadow-elevated overflow-hidden my-auto"
onClick={(e) => e.stopPropagation()}
>
<div className="bg-[#102746] text-white px-6 py-4 flex items-center justify-between">
<div>
<span className="px-2 py-0.5 rounded bg-[#F59E0B] text-[#102746] font-mono text-[10px] font-extrabold uppercase mr-2">
SAMPLE DATA / DEMONSTRATION RECORD
</span>
<span className="font-mono text-xs text-slate-300">{selectedRecord.id}</span>
<h3 className="text-base sm:text-lg font-bold mt-1">
{isVi
? `Chi Tiết Bản Ghi Giao Dịch Mẫu · HS ${selectedRecord.hsCode}`
: `Simulated Transaction Manifest · HS ${selectedRecord.hsCode}`}
</h3>
</div>
<button
type="button"
onClick={() => setSelectedRecord(null)}
className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold"
>
✕
</button>
</div>
<div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto text-xs sm:text-sm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
<div className="text-[11px] font-mono text-[#64748B] uppercase">
1. Importer (Consignee)
</div>
<div className="font-bold text-[#102746] mt-0.5">{selectedRecord.importer}</div>
<div className="text-xs text-[#287CE0] mt-1">
Destination: {selectedRecord.destination} ({selectedRecord.destinationCode})
</div>
</div>
<div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
<div className="text-[11px] font-mono text-[#64748B] uppercase">
2. Exporter (Shipper)
</div>
<div className="font-bold text-[#102746] mt-0.5">{selectedRecord.exporter}</div>
<div className="text-xs text-[#287CE0] mt-1">
Origin: {selectedRecord.origin} ({selectedRecord.originCode})
</div>
</div>
</div>
<div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
<div className="flex flex-wrap items-center justify-between gap-2">
<span className="font-mono font-bold text-[#287CE0]">
3. HS Code: {selectedRecord.hsCode}
</span>
<span className="font-mono text-[#64748B]">
7. Transaction Date: {selectedRecord.transactionDate}
</span>
</div>
<div>
<span className="text-[#64748B] block text-xs">4. Product Description:</span>
<p className="font-semibold text-[#102746] mt-0.5">
{isVi
? selectedRecord.productDescriptionVi
: selectedRecord.productDescription}
</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="p-3 rounded-lg border border-[#E2E8F0]">
<span className="text-[11px] text-[#64748B] block">8. Quantity</span>
<span className="font-mono font-bold text-base text-[#102746]">
{selectedRecord.quantity.toLocaleString()} {selectedRecord.quantityUnit}
</span>
</div>
<div className="p-3 rounded-lg border border-[#E2E8F0]">
<span className="text-[11px] text-[#64748B] block">9. Trade Value (USD)</span>
<span className="font-mono font-bold text-base text-[#16A34A]">
${selectedRecord.tradeValueUsd.toLocaleString()}
</span>
</div>
<div className="p-3 rounded-lg border border-[#E2E8F0]">
<span className="text-[11px] text-[#64748B] block">Estimated Unit Value</span>
<span className="font-mono font-bold text-base text-[#287CE0]">
${(selectedRecord.tradeValueUsd / selectedRecord.quantity).toFixed(2)} /{' '}
{selectedRecord.quantityUnit}
</span>
</div>
</div>
<div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs space-y-1">
<div className="font-bold text-[#102746]">
10. Port & Logistics Information:
</div>
<div className="font-mono text-[#64748B]">
{selectedRecord.portAndAdditionalInfo}
</div>
<div className="text-[#64748B]">
Transport Mode: {selectedRecord.transportMode} · Container:{' '}
{selectedRecord.containerCount || 'Standard'}
</div>
</div>
<div className="p-4 rounded-xl bg-[#EBF4FF] border border-[#287CE0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<div className="text-xs font-mono uppercase font-bold text-[#287CE0]">
🔒 {isVi ? 'MỞ KHÓA DỮ LIỆU THEO MÃ HS CỦA DOANH NGHIỆP BẠN' : 'UNLOCK FULL RECORDS FOR YOUR HS CODE'}
</div>
<p className="text-xs text-[#102746] mt-1">
{isVi
? 'Đăng ký nhận bản DATA DEMO được trích xuất riêng theo mã HS và thị trường mục tiêu của công ty bạn.'
: 'Register to receive a tailored Data Demo package verified for your exact product and target market.'}
</p>
</div>
<button
type="button"
onClick={() => {
const hs = selectedRecord.hsCode;
const dest = selectedRecord.destination;
setSelectedRecord(null);
openDemoModal({
hsCode: hs,
country: dest,
requirement: 'Find Importers',
});
}}
className="px-4 py-2.5 rounded-lg bg-[#287CE0] hover:bg-[#1F68C2] text-white font-bold text-xs shrink-0"
>
{isVi ? 'Nhận Data Demo Mã HS Này' : 'Get Demo for This HS'}
</button>
</div>
</div>
</div>
</div>
)}
</div>
);
}
