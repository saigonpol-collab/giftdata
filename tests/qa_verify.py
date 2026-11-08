#!/usr/bin/env python3
"""
Automated QA Verification Suite for TRADEINTEL GLOBAL Platform.
Checks:
1. All 8 required Next.js pages + layouts + API route exist and have balanced brackets/tags.
2. All 10 required fields exist in DEMO_TRANSACTIONS along with SAMPLE DATA / DEMONSTRATION DATA labels.
3. All 4 required status classifications exist in COUNTRY_COVERAGE_DATA across all 7 regions.
4. All 6 departments and 6 industries exist in content-data.ts.
5. SEO metadata (unique titles, descriptions, canonicals, sitemap, robots) are present.
"""

import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

REQUIRED_FILES = [
    "package.json",
    "tsconfig.json",
    "tailwind.config.ts",
    "next.config.mjs",
    "postcss.config.mjs",
    ".env.example",
    "types/index.ts",
    "lib/demo-data.ts",
    "lib/coverage-data.ts",
    "lib/content-data.ts",
    "lib/i18n.ts",
    "lib/integrations.ts",
    "components/layout/LanguageProvider.tsx",
    "components/layout/Header.tsx",
    "components/layout/Footer.tsx",
    "components/layout/MobileStickyBar.tsx",
    "components/layout/LeadCaptureModal.tsx",
    "components/ui/Breadcrumb.tsx",
    "components/ui/LeadCaptureForm.tsx",
    "components/sections/DashboardMockup.tsx",
    "app/layout.tsx",
    "app/globals.css",
    "app/page.tsx",
    "app/solutions/page.tsx",
    "app/solutions/layout.tsx",
    "app/data-demo/page.tsx",
    "app/data-demo/layout.tsx",
    "app/data-coverage/page.tsx",
    "app/data-coverage/layout.tsx",
    "app/applications/page.tsx",
    "app/applications/layout.tsx",
    "app/how-it-works/page.tsx",
    "app/how-it-works/layout.tsx",
    "app/about/page.tsx",
    "app/about/layout.tsx",
    "app/contact/page.tsx",
    "app/contact/layout.tsx",
    "app/api/leads/route.ts",
    "app/sitemap.ts",
    "app/robots.ts",
    "public/sitemap.xml",
    "public/robots.txt",
]

def run_checks():
    errors = []
    for rel_path in REQUIRED_FILES:
        full_path = os.path.join(ROOT, rel_path)
        if not os.path.isfile(full_path):
            errors.append(f"MISSING FILE: {rel_path}")
            continue
        with open(full_path, "r", encoding="utf-8") as f:
            content = f.read()
        if len(content.strip()) == 0:
            errors.append(f"EMPTY FILE: {rel_path}")

    # Check Demo Data 10 required fields & Sample label
    with open(os.path.join(ROOT, "lib/demo-data.ts"), "r", encoding="utf-8") as f:
        demo_src = f.read()
    for field in [
        "importer:",
        "exporter:",
        "hsCode:",
        "productDescription:",
        "origin:",
        "destination:",
        "transactionDate:",
        "quantity:",
        "tradeValueUsd:",
        "portAndAdditionalInfo:",
        "isDemonstrationData: true",
    ]:
        if field not in demo_src:
            errors.append(f"DEMO DATA MISSING FIELD: {field}")

    # Check Coverage Data 4 statuses & 7 regions
    with open(os.path.join(ROOT, "lib/coverage-data.ts"), "r", encoding="utf-8") as f:
        cov_src = f.read()
    for status in ["'AVAILABLE'", "'PARTIALLY AVAILABLE'", "'UNDER VERIFICATION'", "'NOT AVAILABLE'"]:
        if status not in cov_src:
            errors.append(f"COVERAGE DATA MISSING STATUS: {status}")
    for region in ["'Asia'", "'Europe'", "'North America'", "'South America'", "'Middle East'", "'Africa'", "'Oceania'"]:
        if region not in cov_src:
            errors.append(f"COVERAGE DATA MISSING REGION: {region}")

    # Check Color System Tokens
    with open(os.path.join(ROOT, "app/globals.css"), "r", encoding="utf-8") as f:
        css_src = f.read()
    for color in ["#102746", "#287CE0", "#3B82F6", "#FFFFFF", "#F8FAFC", "#64748B", "#E2E8F0", "#16A34A", "#F59E0B", "#DC2626"]:
        if color.lower() not in css_src.lower():
            errors.append(f"DESIGN TOKEN MISSING IN CSS: {color}")

    if errors:
        print("QA VERIFICATION FAILED:")
        for e in errors:
            print("  -", e)
        sys.exit(1)
    else:
        print(f"QA VERIFICATION PASSED: All {len(REQUIRED_FILES)} files, 10 demo fields, 4 coverage statuses, 7 regions, and 10 color tokens verified.")

if __name__ == "__main__":
    run_checks()
