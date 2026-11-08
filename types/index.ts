export type Language = 'vi' | 'en';

export type DataAvailabilityStatus =
  | 'AVAILABLE'
  | 'PARTIALLY AVAILABLE'
  | 'UNDER VERIFICATION'
  | 'NOT AVAILABLE';

export type GeographicalRegion =
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'South America'
  | 'Middle East'
  | 'Africa'
  | 'Oceania';

export interface DemoTransactionRecord {
  id: string;
  importer: string;
  exporter: string;
  hsCode: string;
  productDescription: string;
  productDescriptionVi: string;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  transactionDate: string;
  quantity: number;
  quantityUnit: string;
  tradeValueUsd: number;
  portAndAdditionalInfo: string;
  portOfLoading: string;
  portOfDischarge: string;
  transportMode: 'Maritime' | 'Air Freight' | 'Land Border' | 'Multimodal';
  containerCount?: string;
  grossWeightKg?: number;
  isDemonstrationData: true;
}

export interface DemoFilterState {
  productQuery: string;
  hsCodeQuery: string;
  importerQuery: string;
  exporterQuery: string;
  originCountry: string;
  destinationCountry: string;
  dateFrom: string;
  dateTo: string;
  minValueUsd: string;
  maxValueUsd: string;
  sortBy: keyof DemoTransactionRecord;
  sortOrder: 'asc' | 'desc';
  page: number;
  pageSize: number;
}

export interface CountryCoverageRecord {
  code: string;
  nameEn: string;
  nameVi: string;
  region: GeographicalRegion;
  status: DataAvailabilityStatus;
  dataTypesEn: string[];
  dataTypesVi: string[];
  timeRangeEn: string;
  timeRangeVi: string;
  availableFieldsEn: string[];
  availableFieldsVi: string[];
  dataSourceEn: string;
  dataSourceVi: string;
  restrictionsEn: string;
  restrictionsVi: string;
  lastUpdated: string;
  directionSupport: ('Import' | 'Export' | 'Transit')[];
  coordinates: { x: number; y: number }; // Normalized SVG map coordinates (viewBox 0 0 1000 480)
}

export type RequirementOption =
  | 'Find Importers'
  | 'Find Exporters'
  | 'Competitor Analysis'
  | 'Trade Statistics'
  | 'Market Research'
  | 'Supplier Sourcing';

export interface LeadSubmissionPayload {
  fullName: string;
  companyName: string;
  phoneOrZalo: string;
  businessEmail: string;
  productOrHsCode: string;
  targetCountry: string;
  mainRequirements: RequirementOption[];
  additionalInfo?: string;
  consentAccepted: boolean;
  sourcePage: string;
  locale: Language;
  websiteHoneypot?: string; // Anti-spam honeypot field
}

export interface LeadSubmissionResponse {
  success: boolean;
  leadId?: string;
  timestamp?: string;
  mode: 'mock_logged' | 'live_forwarded';
  message: string;
  errors?: Record<string, string>;
}

export interface SolutionDetail {
  id: 'importer-exporter-db' | 'competitor-intelligence' | 'market-analytics';
  code: string;
  badgeEn: string;
  badgeVi: string;
  titleEn: string;
  titleVi: string;
  subtitleEn: string;
  subtitleVi: string;
  painPointsEn: string[];
  painPointsVi: string[];
  howItSolvesEn: string[];
  howItSolvesVi: string[];
  relatedFieldsEn: string[];
  relatedFieldsVi: string[];
  workflowStepsEn: { step: string; title: string; desc: string }[];
  workflowStepsVi: { step: string; title: string; desc: string }[];
  realWorldCaseEn: {
    industry: string;
    scenario: string;
    action: string;
    outcome: string;
  };
  realWorldCaseVi: {
    industry: string;
    scenario: string;
    action: string;
    outcome: string;
  };
}

export interface DepartmentApplication {
  id: string;
  departmentEn: string;
  departmentVi: string;
  roleTagEn: string;
  roleTagVi: string;
  challengesEn: string[];
  challengesVi: string[];
  objectivesEn: string[];
  objectivesVi: string[];
  howDataUsedEn: string[];
  howDataUsedVi: string[];
  workflowEn: string[];
  workflowVi: string[];
  expectedOutcomesEn: string[];
  expectedOutcomesVi: string[];
  ctaTextEn: string;
  ctaTextVi: string;
}

export interface IndustryVertical {
  id: string;
  nameEn: string;
  nameVi: string;
  summaryEn: string;
  summaryVi: string;
  keyUseCasesEn: string[];
  keyUseCasesVi: string[];
  sampleHsCodes: string[];
}

export interface FAQItem {
  id: string;
  category: 'data' | 'coverage' | 'demo' | 'compliance';
  questionEn: string;
  questionVi: string;
  answerEn: string;
  answerVi: string;
}
