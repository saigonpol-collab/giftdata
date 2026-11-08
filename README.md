# TRADEINTEL GLOBAL – Enterprise B2B Trade Intelligence & Customs Data Platform

> **SEE THE MARKET. KNOW YOUR COMPETITORS. FIND YOUR CUSTOMERS.**  
> *Nhìn rõ thị trường – Thấu hiểu đối thủ – Tìm đúng khách hàng.*

Production URL Target: `https://giftdata.vercel.app`

---

## 1. Information Architecture & Sitemap (8 Multi-Page Routes)

| Route | Page Title | Purpose & Core Features |
|---|---|---|
| `/` | **01. Home** | 15-section enterprise overview, Hero + Interactive Dashboard Mockup, Pain Points, 3 Core Solutions, 10-Field Sample Preview, Coverage Summary, FAQ, and B2B Lead Capture. |
| `/solutions` | **02. Solutions** | Deep-dive into **Importer & Exporter Database**, **Competitor Trade Intelligence**, and **Global Trade Market Analytics** with fields, 3-step workflows, and real-world use cases. |
| `/data-demo` | **03. Data Demo** | Interactive Trade Intelligence Sandbox (`SAMPLE DATA / DEMONSTRATION DATA`) with 8 filters (Product, HS Code, Importer, Exporter, Origin, Destination, Date, USD Value), 10-field table, sorting, pagination, 5 dynamic charts, CSV export, and Manifest Detail Modal. |
| `/data-coverage` | **04. Global Data Coverage** | Interactive SVG World Map, Region filter (Asia, Europe, North America, South America, Middle East, Africa, Oceania), and strict 4-tier classification (`AVAILABLE`, `PARTIALLY AVAILABLE`, `UNDER VERIFICATION`, `NOT AVAILABLE`). |
| `/applications` | **05. Industries & Applications** | Playbooks for **6 Departments** (CEO, Sales B2B, Import/Export, Marketing, Procurement, Business Planning) and **6 Industries** (Manufacturing, Trading, Logistics, Distribution, Sourcing, Market Research). |
| `/how-it-works` | **06. How It Works** | 4-step operational guide (Inputs, Outputs, Preparation) + 4 interactive scenario playbooks for beginners and specialists. |
| `/about` | **07. About Us** | Brand Story, Mission, Vision, Core Values, Data Intelligence Philosophy, and Strict Data Transparency Policy. |
| `/contact` | **08. Contact & Request Demo** | High-conversion B2B Demo Request form with multi-select requirements, validation, anti-spam honeypot, and `/api/leads` backend endpoint. |

---

## 2. Design System Tokens

- **Primary Navy**: `#102746`
- **Accent Blue**: `#287CE0`
- **Secondary Blue**: `#3B82F6`
- **Background**: `#FFFFFF` / Soft Background: `#F8FAFC`
- **Text Primary**: `#102746` / Text Secondary: `#64748B`
- **Border**: `#E2E8F0`
- **Semantic Status**: Success `#16A34A` · Warning `#F59E0B` · Danger `#DC2626`
- **Typography**: `Plus Jakarta Sans`, `Inter` (Vietnamese diacritics optimized), `JetBrains Mono` (HS Codes & trade metrics).

---

## 3. Local Development & Production Deployment

### Prerequisites (Next.js / Vercel)
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

---

## 4. Environment Variables & Integrations (`.env.example`)

Copy `.env.example` to `.env.local` and configure only verified credentials:

- `NEXT_PUBLIC_SITE_URL`: Canonical base URL (default: `https://giftdata.vercel.app`)
- `NEXT_PUBLIC_OFFICIAL_ZALO_URL`: Official Zalo OA or B2B consultation link
- `CRM_WEBHOOK_URL` & `CRM_WEBHOOK_SECRET`: Server-side webhook endpoint for CRM lead ingestion
- `GOOGLE_SHEETS_WEBHOOK_URL`: Apps Script / Webhook endpoint for Google Sheets logging
- `NOTIFICATION_EMAIL_WEBHOOK_URL`: Email dispatch webhook endpoint
- `NEXT_PUBLIC_GA4_MEASUREMENT_ID`: Google Analytics 4 ID
- `NEXT_PUBLIC_META_PIXEL_ID`: Meta Pixel ID
- `NEXT_PUBLIC_GOOGLE_ADS_ID`: Google Ads Conversion Tracking ID

> **Transparency Note**: When webhook environment variables are not configured, `/api/leads` operates in validated Sandbox/Adapter mode (`mode: "mock_logged"`) and never fabricates live external CRM delivery.
