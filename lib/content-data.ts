import {
  DepartmentApplication,
  FAQItem,
  IndustryVertical,
  SolutionDetail,
} from '@/types';

export const CORE_SOLUTIONS: SolutionDetail[] = [
  {
    id: 'importer-exporter-db',
    code: 'SOLUTION 01',
    badgeEn: 'CUSTOMER & PARTNER DISCOVERY',
    badgeVi: 'TÌM ĐÚNG KHÁCH HÀNG & ĐỐI TÁC',
    titleEn: 'Importer & Exporter Database',
    titleVi: 'Cơ Sở Dữ Liệu Nhà Nhập Khẩu & Xuất Khẩu',
    subtitleEn:
      'Identify verified companies actively importing or exporting your exact product category and HS Code across target international markets.',
    subtitleVi:
      'Truy xuất danh sách các doanh nghiệp thực sự có hoạt động xuất nhập khẩu mặt hàng và mã HS bạn đang kinh doanh tại các thị trường mục tiêu.',
    painPointsEn: [
      'Relying on generic directory lists with outdated contacts and zero proof of actual import volume.',
      'Wasting trade show and B2B sales budgets pitching companies that do not buy your specific product specification.',
      'Inability to verify whether a prospective buyer is a genuine large-volume importer or a small intermediary.',
    ],
    painPointsVi: [
      'Phụ thuộc vào danh bạ đại trà, thông tin cũ kỹ, không rõ doanh nghiệp có thực sự nhập khẩu hàng hay không.',
      'Lãng phí ngân sách hội chợ quốc tế và đội ngũ Sales B2B khi tiếp cận sai đối tượng hoặc sai phân khúc sản phẩm.',
      'Không xác minh được quy mô mua hàng thực tế, tần suất nhập hàng và năng lực tài chính thương mại của đối tác.',
    ],
    howItSolvesEn: [
      'Filter companies by 6-to-10 digit HS Code, commercial product keywords, origin country, and destination market.',
      'Inspect historical transaction frequency, shipment volume, and seasonal purchasing cycles before initiating outreach.',
      'Segment prospects into Tier-1 volume buyers, growing mid-market importers, or niche specialty distributors.',
    ],
    howItSolvesVi: [
      'Lọc chính xác doanh nghiệp theo mã HS (6–10 số), từ khóa mô tả thương mại, quốc gia xuất xứ và thị trường đích.',
      'Kiểm tra lịch sử tần suất nhập hàng, sản lượng lô hàng và chu kỳ mua hàng theo mùa trước khi tiếp cận.',
      'Phân nhóm khách hàng tiềm năng theo quy mô kim ngạch: Nhà nhập khẩu lớn (Tier-1), doanh nghiệp đang tăng trưởng hoặc nhà phân phối ngách.',
    ],
    relatedFieldsEn: [
      'Importer Legal Name & Country',
      'Exporter / Supplier Name',
      'HS Code (6–10 Digits)',
      'Detailed Commercial Product Description',
      'Shipment Quantity & Unit',
      'Declared Trade Value (USD)',
      'Port of Loading & Port of Discharge',
      'Transaction Date & Shipment Frequency',
    ],
    relatedFieldsVi: [
      'Tên pháp nhân Nhà nhập khẩu & Quốc gia',
      'Tên Nhà xuất khẩu / Nhà cung ứng',
      'Mã HS (6–10 chữ số)',
      'Mô tả chi tiết hàng hóa thương mại',
      'Số lượng & Đơn vị tính',
      'Trị giá giao dịch (USD)',
      'Cảng xếp hàng (POL) & Cảng dỡ hàng (POD)',
      'Ngày giao dịch & Tần suất nhập hàng',
    ],
    workflowStepsEn: [
      {
        step: '01',
        title: 'Input HS Code & Product Spec',
        desc: 'Enter your 6-digit HS Code or commercial product keywords (e.g., "Robusta Green Coffee", HS 090111).',
      },
      {
        step: '02',
        title: 'Filter Target Markets & Volume',
        desc: 'Select target destination countries, date range, and minimum shipment value to isolate active buyers.',
      },
      {
        step: '03',
        title: 'Qualify & Prioritize Leads',
        desc: 'Review buyer purchase history, current supplier mix, and price sensitivity to craft an evidence-based pitch.',
      },
    ],
    workflowStepsVi: [
      {
        step: '01',
        title: 'Nhập Mã HS & Mô tả sản phẩm',
        desc: 'Cung cấp mã HS 6 số hoặc từ khóa thương mại (ví dụ: "Robusta Green Coffee", HS 090111).',
      },
      {
        step: '02',
        title: 'Lọc Thị trường & Quy mô giao dịch',
        desc: 'Chọn quốc gia mục tiêu, khoảng thời gian và giá trị lô hàng tối thiểu để lọc các nhà mua đang hoạt động.',
      },
      {
        step: '03',
        title: 'Đánh giá & Ưu tiên tiếp cận',
        desc: 'Xem lịch sử nhập hàng, danh sách nhà cung cấp hiện tại và đơn giá tham khảo để xây dựng kịch bản chào hàng sắc bén.',
      },
    ],
    realWorldCaseEn: {
      industry: 'Wooden Furniture Manufacturing (HS 940360)',
      scenario: 'A Vietnamese manufacturer wanted to expand into Germany and the Netherlands beyond traditional trade fairs.',
      action: 'Queried importers of HS 940360 with >15 FCL shipments/year from Southeast Asia.',
      outcome: 'Shortlisted 42 qualified European importers already sourcing similar acacia/oak lines and initiated targeted B2B outreach.',
    },
    realWorldCaseVi: {
      industry: 'Sản xuất Nội thất Gỗ xuất khẩu (HS 940360)',
      scenario: 'Nhà máy tại Bình Dương muốn mở rộng tệp khách hàng nhập khẩu tại Đức và Hà Lan thay vì chỉ chờ hội chợ.',
      action: 'Tra cứu các nhà nhập khẩu mã HS 940360 có tần suất >15 container/năm từ khu vực Đông Nam Á.',
      outcome: 'Xác định danh sách 42 nhà nhập khẩu châu Âu đang mua dòng sản phẩm tương đồng, rút ngắn thời gian thẩm định khách hàng.',
    },
  },
  {
    id: 'competitor-intelligence',
    code: 'SOLUTION 02',
    badgeEn: 'COMPETITOR MONITORING',
    badgeVi: 'THẤU HIỂU ĐỐI THỦ CẠNH TRANH',
    titleEn: 'Competitor Trade Intelligence',
    titleVi: 'Phân Tích Hoạt Động Thương Mại Đối Thủ',
    subtitleEn:
      'Uncover competitor shipment histories, trading partner networks, buyer retention patterns, and market expansion moves.',
    subtitleVi:
      'Theo dõi lịch sử giao dịch xuất nhập khẩu, mạng lưới đối tác mua bán, tần suất xuất hàng và biến động thị phần của đối thủ cạnh tranh.',
    painPointsEn: [
      'No visibility into who your domestic or international competitors are selling to overseas.',
      'Discovering too late that a competitor has captured a major distributor in your core export market.',
      'Guessing competitor pricing structures, shipment volumes, and product mix without factual benchmarks.',
    ],
    painPointsVi: [
      'Không biết các đối thủ cùng ngành trong nước và quốc tế đang xuất hàng cho những khách hàng nào.',
      'Phát hiện quá muộn khi đối thủ đã mở rộng sang thị trường mới hoặc chiếm lĩnh nhà phân phối lớn.',
      'Đoán mò về sản lượng xuất khẩu, cơ cấu dòng sản phẩm và đơn giá giao dịch của đối thủ mà không có dữ liệu kiểm chứng.',
    ],
    howItSolvesEn: [
      'Look up specific competitor corporate entities to inspect their recorded outbound/inbound shipment logs.',
      'Map the exact buyers/consignees working with your competitors and identify dual-sourcing opportunities.',
      'Track changes in shipment volume, new destination ports, and unit value trends over time.',
    ],
    howItSolvesVi: [
      'Tra cứu theo tên pháp nhân của đối thủ để xem lịch sử các lô hàng xuất/nhập khẩu được ghi nhận.',
      'Xây dựng bản đồ mạng lưới khách hàng (Consignee) của đối thủ và phát hiện các nhà mua có chính sách đa dạng hóa nguồn cung.',
      'Theo dõi biến động sản lượng theo quý, các cảng đích mới phát sinh và xu hướng đơn giá khai báo.',
    ],
    relatedFieldsEn: [
      'Exporter / Competitor Entity Name',
      'Consignee / Buyer Network',
      'Shipment Frequency & Seasonality',
      'HS Code & Product Line Mix',
      'Declared FOB/CIF Value & Unit Price Estimate',
      'Origin & Destination Ports',
      'Historical Partner Retention / Churn',
    ],
    relatedFieldsVi: [
      'Tên pháp nhân Đối thủ / Nhà xuất khẩu',
      'Mạng lưới Người nhận hàng (Consignee / Buyer)',
      'Tần suất giao hàng & Tính mùa vụ',
      'Cơ cấu mã HS & Dòng sản phẩm',
      'Trị giá khai báo & Ước tính đơn giá trung bình',
      'Tuyến cảng xuất (POL) & Cảng đích (POD)',
      'Biến động giữ chân / Rời bỏ của đối tác mua hàng',
    ],
    workflowStepsEn: [
      {
        step: '01',
        title: 'Select Competitor Entities',
        desc: 'Search by known competitor company names or filter top exporters under your HS Code.',
      },
      {
        step: '02',
        title: 'Map Trading Partner Graph',
        desc: 'Analyze all buyers receiving shipments from those competitors, ranked by value and shipment count.',
      },
      {
        step: '03',
        title: 'Spot Strategic Openings',
        desc: 'Identify buyers reducing orders from a competitor or seeking secondary suppliers for supply chain resilience.',
      },
    ],
    workflowStepsVi: [
      {
        step: '01',
        title: 'Xác định danh sách đối thủ',
        desc: 'Tìm kiếm theo tên công ty đối thủ đã biết hoặc lọc Top nhà xuất khẩu lớn nhất trong cùng mã HS.',
      },
      {
        step: '02',
        title: 'Phân tích mạng lưới khách hàng',
        desc: 'Liệt kê các nhà nhập khẩu đang mua hàng từ đối thủ, xếp hạng theo kim ngạch và số lượng lô hàng.',
      },
      {
        step: '03',
        title: 'Tìm điểm mở tiếp cận',
        desc: 'Phát hiện các nhà mua hàng đang giảm sản lượng từ một nhà cung cấp hoặc có nhu cầu tìm nhà cung ứng thứ hai.',
      },
    ],
    realWorldCaseEn: {
      industry: 'Seafood Processing & Export (HS 030617)',
      scenario: 'An exporter noticed declining inquiries from US foodservice distributors and needed to understand competitor activity.',
      action: 'Analyzed shipment logs of 5 regional competitors exporting frozen Vannamei shrimp to US East Coast ports.',
      outcome: 'Discovered a shift toward value-added retail pack specifications and adjusted product offering to win back 3 distributors.',
    },
    realWorldCaseVi: {
      industry: 'Chế biến & Xuất khẩu Thủy sản (HS 030617)',
      scenario: 'Doanh nghiệp nhận thấy lượng đơn hỏi hàng từ bờ Đông nước Mỹ chững lại và cần hiểu rõ động thái của đối thủ.',
      action: 'Phân tích lịch sử xuất hàng của 5 đối thủ lớn trong khu vực đối với mặt hàng tôm thẻ đông lạnh (HS 030617).',
      outcome: 'Phát hiện xu hướng dịch chuyển sang quy cách đóng gói bán lẻ (Retail Pack) và điều chỉnh chào hàng để tiếp cận 3 nhà phân phối.',
    },
  },
  {
    id: 'market-analytics',
    code: 'SOLUTION 03',
    badgeEn: 'MACRO & SECTOR INTELLIGENCE',
    badgeVi: 'PHÂN TÍCH THỊ TRƯỜNG & XU HƯỚNG',
    titleEn: 'Global Trade Market Analytics',
    titleVi: 'Phân Tích Kim Ngạch & Xu Hướng Thị Trường Quốc Tế',
    subtitleEn:
      'Quantify market size, track import/export growth trajectories, evaluate supply concentration, and optimize global sourcing.',
    subtitleVi:
      'Đo lường quy mô kim ngạch, theo dõi tốc độ tăng trưởng xuất nhập khẩu, đánh giá mức độ tập trung nguồn cung và hoạch định chiến lược thị trường.',
    painPointsEn: [
      'Entering new international markets based on intuition or outdated macro reports from 2–3 years ago.',
      'Over-relying on a single sourcing country without visibility into alternative global supply hubs.',
      'Misjudging seasonal demand peaks and inventory planning cycles across different geographical regions.',
    ],
    painPointsVi: [
      'Quyết định mở rộng thị trường quốc tế dựa trên cảm tính hoặc các báo cáo vĩ mô đã lỗi thời 2–3 năm.',
      'Phụ thuộc vào một quốc gia cung ứng nguyên liệu duy nhất mà không nắm rõ các nguồn cung thay thế tiềm năng.',
      'Dự báo sai chu kỳ cao điểm nhập khẩu theo mùa, dẫn đến lệch pha trong kế hoạch sản xuất và tồn kho.',
    ],
    howItSolvesEn: [
      'Aggregate trade value and volume by HS Code across countries, regions, and multi-quarter timelines.',
      'Compare average unit values and market share shifts among top supplying and importing nations.',
      'Evaluate market concentration (top 10 buyers/suppliers share) before committing capital to market entry.',
    ],
    howItSolvesVi: [
      'Tổng hợp kim ngạch và sản lượng theo mã HS qua từng quốc gia, khu vực và chuỗi thời gian nhiều quý.',
      'So sánh biến động đơn giá trung bình và sự dịch chuyển thị phần giữa các quốc gia xuất khẩu / nhập khẩu hàng đầu.',
      'Đánh giá mức độ tập trung của thị trường (thị phần Top 10 người mua/người bán) trước khi đầu tư mở rộng.',
    ],
    relatedFieldsEn: [
      'Total Trade Value (USD) by Period',
      'Total Shipment Volume & Weight',
      'Country Market Share (%)',
      'Quarter-over-Quarter & YoY Growth',
      'Average Unit Value Distribution',
      'Top Ports & Logistics Corridors',
      'Active Buyer / Supplier Count',
    ],
    relatedFieldsVi: [
      'Tổng kim ngạch thương mại (USD) theo kỳ',
      'Tổng sản lượng & Trọng lượng vận chuyển',
      'Thị phần theo quốc gia (%)',
      'Tốc độ tăng trưởng theo Quý / Năm',
      'Phân bổ đơn giá giao dịch trung bình',
      'Các tuyến cảng biển & hành lang logistics chính',
      'Số lượng nhà nhập khẩu / xuất khẩu đang hoạt động',
    ],
    workflowStepsEn: [
      {
        step: '01',
        title: 'Define Commodity Scope',
        desc: 'Select the HS Chapter or 6-digit heading to establish the global or regional baseline.',
      },
      {
        step: '02',
        title: 'Compare Corridors & Trends',
        desc: 'Benchmark growth rates, unit price ranges, and seasonal volume curves across countries.',
      },
      {
        step: '03',
        title: 'Drill Down to Entities',
        desc: 'Transition seamlessly from macro country charts down to the specific companies driving those trade flows.',
      },
    ],
    workflowStepsVi: [
      {
        step: '01',
        title: 'Xác định phạm vi ngành hàng',
        desc: 'Chọn chương HS hoặc phân nhóm HS 6 số để thiết lập bức tranh tổng thể theo khu vực hoặc toàn cầu.',
      },
      {
        step: '02',
        title: 'So sánh hành lang thương mại',
        desc: 'Đối chiếu tốc độ tăng trưởng, biên độ đơn giá và đường cong mùa vụ giữa các quốc gia.',
      },
      {
        step: '03',
        title: 'Đi sâu xuống từng doanh nghiệp',
        desc: 'Từ biểu đồ vĩ mô của một quốc gia, truy xuất trực tiếp danh sách các doanh nghiệp đang tạo ra dòng chảy đó.',
      },
    ],
    realWorldCaseEn: {
      industry: 'Industrial Raw Materials & Steel Procurement (HS 7210)',
      scenario: 'A procurement director needed to diversify coated steel coil sourcing across Asia to mitigate tariff and lead-time risks.',
      action: 'Compared export volumes, active mill exporters, and unit values across South Korea, Japan, and ASEAN.',
      outcome: 'Identified 6 qualified alternative mill suppliers with stable monthly shipment records to Southeast Asian ports.',
    },
    realWorldCaseVi: {
      industry: 'Thu mua Nguyên liệu Công nghiệp & Thép cuộn (HS 7210)',
      scenario: 'Giám đốc Mua hàng cần đa dạng hóa nguồn cung thép mạ tại Châu Á để giảm rủi ro phụ thuộc và tối ưu chi phí.',
      action: 'So sánh sản lượng xuất khẩu, danh sách nhà máy cung ứng và biến động giá giữa Hàn Quốc, Nhật Bản và nội khối châu Á.',
      outcome: 'Xác định 6 nhà cung ứng thay thế có lịch sử giao hàng đều đặn hàng tháng về các cảng Việt Nam.',
    },
  },
];

export const DEPARTMENT_APPLICATIONS: DepartmentApplication[] = [
  {
    id: 'ceo-management',
    departmentEn: 'CEO / Executive Management',
    departmentVi: 'Ban Giám Đốc / CEO',
    roleTagEn: 'Strategic Decision Making',
    roleTagVi: 'Hoạch định Chiến lược & Đầu tư',
    challengesEn: [
      'Making high-stakes international expansion decisions without objective transaction evidence.',
      'Difficulty benchmarking company export performance against true industry trade flows.',
    ],
    challengesVi: [
      'Đưa ra quyết định mở rộng thị trường hoặc đầu tư dây chuyền mới khi thiếu dữ liệu giao dịch khách quan.',
      'Khó đánh giá chính xác vị thế của doanh nghiệp so với tổng dung lượng giao dịch thực tế của ngành.',
    ],
    objectivesEn: [
      'Validate target country demand before allocating capital and sales resources.',
      'Monitor macro shifts in global supply chains and competitor market share.',
    ],
    objectivesVi: [
      'Kiểm chứng nhu cầu thực tế của thị trường mục tiêu trước khi phân bổ vốn và nhân sự.',
      'Theo dõi sự dịch chuyển chuỗi cung ứng toàn cầu và thị phần của các đối thủ lớn.',
    ],
    howDataUsedEn: [
      'Review multi-country import demand trends by HS Code.',
      'Assess buyer concentration and market entry barriers in new regions.',
    ],
    howDataUsedVi: [
      'Xem báo cáo tổng hợp xu hướng nhập khẩu đa quốc gia theo mã HS.',
      'Đánh giá mức độ tập trung của người mua và rào cản gia nhập ở từng thị trường mới.',
    ],
    workflowEn: [
      'Define strategic product lines & target regions → Review macro trade flow & top players report → Approve data-backed market entry roadmap.',
    ],
    workflowVi: [
      'Xác định dòng sản phẩm chiến lược & khu vực mục tiêu → Xem bức tranh dòng chảy thương mại & Top doanh nghiệp → Phê duyệt lộ trình thâm nhập thị trường dựa trên bằng chứng dữ liệu.',
    ],
    expectedOutcomesEn: [
      'Reduced market entry risk and higher capital allocation accuracy.',
      'Clear executive visibility into global competitive positioning.',
    ],
    expectedOutcomesVi: [
      'Giảm thiểu rủi ro đầu tư sai thị trường, nâng cao hiệu quả phân bổ nguồn lực.',
      'Nắm bắt rõ ràng vị thế cạnh tranh của doanh nghiệp trên bản đồ thương mại quốc tế.',
    ],
    ctaTextEn: 'Request Executive Market Briefing Demo',
    ctaTextVi: 'Đăng Ký Nhận Báo Cáo Demo Cho Ban Giám Đốc',
  },
  {
    id: 'sales-b2b',
    departmentEn: 'B2B International Sales',
    departmentVi: 'Phòng Kinh Doanh B2B Quốc Tế',
    roleTagEn: 'Lead Generation & Pipeline Acceleration',
    roleTagVi: 'Phát triển Khách hàng & Tăng tốc Doanh số',
    challengesEn: [
      'Cold outreach to unverified directory leads yields <1% response rates.',
      'Sales reps spend weeks guessing whether a prospect actually imports their product.',
    ],
    challengesVi: [
      'Chào hàng lạnh (Cold Outreach) tới danh sách không kiểm chứng mang lại tỷ lệ phản hồi rất thấp.',
      'Nhân viên kinh doanh mất nhiều tuần tìm kiếm thủ công mà không biết khách hàng có thực sự nhập mã hàng đó không.',
    ],
    objectivesEn: [
      'Build a high-intent pipeline of companies with proven customs import records.',
      'Tailor sales pitches using knowledge of the buyer’s current purchase volume and origins.',
    ],
    objectivesVi: [
      'Xây dựng phễu khách hàng B2B gồm các công ty có lịch sử nhập khẩu thực tế được ghi nhận.',
      'Cá nhân hóa kịch bản chào hàng dựa trên sản lượng, chu kỳ mua và nguồn hàng hiện tại của khách.',
    ],
    howDataUsedEn: [
      'Filter active importers by HS Code, country, and annual shipment count.',
      'Identify buyers whose current suppliers face capacity or tariff constraints.',
    ],
    howDataUsedVi: [
      'Lọc danh sách nhà nhập khẩu đang hoạt động theo mã HS, quốc gia và số lượng lô hàng/năm.',
      'Phát hiện các nhà mua hàng đang cần tìm thêm nhà cung cấp mới để tối ưu chi phí hoặc thuế quan.',
    ],
    workflowEn: [
      'Search HS Code in target market → Filter active importers → Analyze buyer shipment history → Execute targeted B2B outreach.',
    ],
    workflowVi: [
      'Tra cứu mã HS tại thị trường mục tiêu → Lọc nhà nhập khẩu đang hoạt động → Phân tích lịch sử mua hàng → Tiếp cận chào hàng trúng đích.',
    ],
    expectedOutcomesEn: [
      'Higher lead qualification speed and stronger B2B buyer engagement.',
      'Shorter sales cycles by focusing exclusively on verified importers.',
    ],
    expectedOutcomesVi: [
      'Rút ngắn thời gian tìm kiếm và thẩm định khách hàng tiềm năng (Lead Qualification).',
      'Tăng tỷ lệ phản hồi khi chào hàng nhờ hiểu rõ nhu cầu thực tế của người mua.',
    ],
    ctaTextEn: 'Get Sample Importer Leads for Your HS Code',
    ctaTextVi: 'Nhận Danh Sách Nhà Nhập Khẩu Mẫu Theo Mã HS',
  },
  {
    id: 'import-export',
    departmentEn: 'Import & Export Operations',
    departmentVi: 'Phòng Xuất Nhập Khẩu (Import & Export)',
    roleTagEn: 'Trade Execution & Logistics Intelligence',
    roleTagVi: 'Tối ưu Nghiệp vụ XNK & Tuyến Vận tải',
    challengesEn: [
      'Verifying accurate HS Code classifications and commercial descriptions across jurisdictions.',
      'Evaluating port congestion alternatives and optimal shipping corridors.',
    ],
    challengesVi: [
      'Cần đối chiếu cách áp mã HS và mô tả hàng hóa thương mại thực tế tại các thị trường đích.',
      'Đánh giá các tuyến cảng xếp/dỡ (POL/POD) tối ưu và đối tác giao nhận trên từng tuyến.',
    ],
    objectivesEn: [
      'Benchmark real-world HS Code declarations and shipping specifications.',
      'Optimize port routing and partner verification before shipment execution.',
    ],
    objectivesVi: [
      'Tham khảo cách khai báo mã HS, quy cách đóng gói và mô tả hàng hóa thực tế trên thị trường.',
      'Kiểm tra năng lực hoạt động xuất nhập khẩu của đối tác trước khi ký kết hợp đồng ngoại thương.',
    ],
    howDataUsedEn: [
      'Inspect historical transaction descriptions, HS subheadings, and container configurations.',
      'Verify counterparty shipment track records across ports of loading and discharge.',
    ],
    howDataUsedVi: [
      'Tra cứu mô tả hàng hóa, phân nhóm mã HS và quy cách container từ các bản ghi giao dịch lịch sử.',
      'Xác minh lịch sử giao nhận hàng thực tế của đối tác qua các cảng biển quốc tế.',
    ],
    workflowEn: [
      'Query product/HS Code → Inspect port routing & declaration patterns → Verify partner shipment history.',
    ],
    workflowVi: [
      'Tra cứu sản phẩm/mã HS → Kiểm tra tuyến cảng & mẫu mô tả hàng hóa → Xác minh lịch sử giao dịch của đối tác.',
    ],
    expectedOutcomesEn: [
      'More reliable counterparty due diligence and smoother trade documentation preparation.',
    ],
    expectedOutcomesVi: [
      'Thẩm định đối tác ngoại thương chặt chẽ hơn và chuẩn bị hồ sơ hàng hóa chính xác hơn.',
    ],
    ctaTextEn: 'Explore Shipment Records in Data Demo',
    ctaTextVi: 'Khám Phá Bản Ghi Lô Hàng Tại Trang Demo',
  },
  {
    id: 'marketing',
    departmentEn: 'B2B Trade Marketing',
    departmentVi: 'Phòng Marketing B2B Quốc Tế',
    roleTagEn: 'Market Segmentation & Campaign Targeting',
    roleTagVi: 'Phân khúc Thị trường & Định vị Chiến dịch',
    challengesEn: [
      'Running international digital ads or attending trade fairs without knowing which countries have rising import demand.',
      'Generic messaging that fails to resonate with regional product preferences.',
    ],
    challengesVi: [
      'Chạy quảng cáo quốc tế hoặc tham gia triển lãm mà không rõ quốc gia nào đang tăng trưởng nhu cầu nhập khẩu.',
      'Thông điệp truyền thông dàn trải, không bám sát quy cách sản phẩm mà từng thị trường đang ưa chuộng.',
    ],
    objectivesEn: [
      'Pinpoint high-growth geographic markets and seasonal buying windows.',
      'Align product positioning with actual commodity specifications imported by each region.',
    ],
    objectivesVi: [
      'Xác định đúng quốc gia đang có nhu cầu nhập khẩu tăng trưởng và thời điểm mua hàng cao điểm.',
      'Điều chỉnh thông điệp sản phẩm khớp với quy cách hàng hóa mà thị trường đó đang nhập nhiều nhất.',
    ],
    howDataUsedEn: [
      'Analyze country-by-country import growth and seasonal shipment spikes.',
      'Extract common product keywords, certifications (e.g., FSC, Organic, ASTM), and pack sizes from transaction descriptions.',
    ],
    howDataUsedVi: [
      'Phân tích tốc độ tăng trưởng nhập khẩu theo quốc gia và chu kỳ nhập hàng theo tháng/quý.',
      'Trích xuất từ khóa quy cách, tiêu chuẩn (FSC, Organic, ASTM...) xuất hiện nhiều trong mô tả hàng hóa.',
    ],
    workflowEn: [
      'Analyze regional trade growth → Identify peak procurement months → Launch geo-targeted B2B campaigns.',
    ],
    workflowVi: [
      'Phân tích tăng trưởng theo khu vực → Xác định tháng cao điểm đặt hàng → Triển khai chiến dịch Marketing đúng thời điểm.',
    ],
    expectedOutcomesEn: [
      'Higher ROI on international marketing and trade show investments.',
    ],
    expectedOutcomesVi: [
      'Tối ưu hóa ngân sách Marketing quốc tế và nâng cao hiệu quả đầu tư triển lãm thương mại.',
    ],
    ctaTextEn: 'Request Market Segmentation Demo',
    ctaTextVi: 'Nhận Tư Vấn Dữ Liệu Phân Khúc Thị Trường',
  },
  {
    id: 'procurement-sourcing',
    departmentEn: 'Procurement & Strategic Sourcing',
    departmentVi: 'Phòng Mua Hàng & Tìm Nguồn Cung (Sourcing)',
    roleTagEn: 'Supplier Discovery & Supply Chain Resilience',
    roleTagVi: 'Đa dạng hóa Nhà cung ứng & Tối ưu Giá mua',
    challengesEn: [
      'High risk from single-supplier or single-country dependency for critical raw materials.',
      'Difficulty verifying whether an overseas supplier is a genuine manufacturer/exporter with consistent capacity.',
    ],
    challengesVi: [
      'Rủi ro đứt gãy chuỗi cung ứng khi phụ thuộc vào một nhà cung cấp hoặc một quốc gia duy nhất.',
      'Khó kiểm chứng nhà cung cấp nước ngoài là nhà máy xuất khẩu thực sự hay chỉ là đơn vị trung gian nhỏ lẻ.',
    ],
    objectivesEn: [
      'Discover vetted alternative suppliers across multiple manufacturing countries.',
      'Benchmark declared unit values and shipment consistency before supplier onboarding.',
    ],
    objectivesVi: [
      'Tìm kiếm và thẩm định các nhà cung ứng thay thế tại nhiều quốc gia sản xuất khác nhau.',
      'Tham khảo mặt bằng giá giao dịch và kiểm tra tính ổn định giao hàng của nhà cung cấp.',
    ],
    howDataUsedEn: [
      'Search global exporters by raw material HS Code and filter by monthly export volume.',
      'Verify supplier track record with other international Tier-1 buyers.',
    ],
    howDataUsedVi: [
      'Tra cứu danh sách nhà xuất khẩu nguyên phụ liệu theo mã HS và lọc theo sản lượng xuất hàng định kỳ.',
      'Kiểm tra xem nhà cung cấp đó đang giao hàng cho những tập đoàn hoặc nhà mua quốc tế nào.',
    ],
    workflowEn: [
      'Input raw material HS Code → Filter global exporters by reliability & volume → Benchmark unit values → Shortlist qualified suppliers.',
    ],
    workflowVi: [
      'Nhập mã HS nguyên liệu → Lọc nhà xuất khẩu theo sản lượng & độ ổn định → Đối chiếu đơn giá → Lập danh sách nhà cung ứng đạt chuẩn.',
    ],
    expectedOutcomesEn: [
      'More resilient supply chain and stronger negotiation leverage with suppliers.',
    ],
    expectedOutcomesVi: [
      'Chủ động nguồn cung ứng, giảm rủi ro đứt gãy và có thêm cơ sở dữ liệu khi đàm phán giá mua.',
    ],
    ctaTextEn: 'Request Supplier Sourcing Data Demo',
    ctaTextVi: 'Đăng Ký Nhận Dữ Liệu Tìm Nhà Cung Ứng',
  },
  {
    id: 'business-planning',
    departmentEn: 'Business Planning & Market Research',
    departmentVi: 'Phòng Kế Hoạch & Nghiên Cứu Thị Trường',
    roleTagEn: 'Demand Forecasting & Feasibility Analysis',
    roleTagVi: 'Dự báo Nhu cầu & Phân tích Khả thi',
    challengesEn: [
      'Building annual production and inventory plans without granular trade flow data.',
      'Time-consuming manual compilation of disparate statistical tables.',
    ],
    challengesVi: [
      'Lập kế hoạch sản xuất, nguyên vật liệu và doanh thu năm mà thiếu số liệu chi tiết theo từng mã HS.',
      'Mất nhiều thời gian tổng hợp thủ công từ các nguồn thống kê rời rạc, thiếu tính nhất quán.',
    ],
    objectivesEn: [
      'Construct accurate supply-demand models grounded in shipment-level and macro trade records.',
      'Monitor emerging product subcategories and price elasticity across regions.',
    ],
    objectivesVi: [
      'Xây dựng mô hình dự báo cung – cầu dựa trên dữ liệu giao dịch và thống kê thương mại thực tế.',
      'Theo dõi sớm các phân nhóm sản phẩm mới nổi và biến động giá trên thị trường quốc tế.',
    ],
    howDataUsedEn: [
      'Combine macro country statistics with micro company-level transaction trends.',
      'Track multi-quarter volume and value trajectories by HS subheading.',
    ],
    howDataUsedVi: [
      'Kết hợp dữ liệu thống kê vĩ mô theo quốc gia với xu hướng giao dịch chi tiết của nhóm doanh nghiệp đầu ngành.',
      'Theo dõi chuỗi biến động sản lượng và kim ngạch qua nhiều quý theo từng phân nhóm mã HS.',
    ],
    workflowEn: [
      'Select industry HS basket → Extract historical trend series → Model seasonal & structural shifts → Deliver planning insights.',
    ],
    workflowVi: [
      'Chọn rổ mã HS ngành hàng → Trích xuất chuỗi dữ liệu lịch sử → Phân tích chu kỳ mùa vụ & xu hướng → Lập báo cáo kế hoạch.',
    ],
    expectedOutcomesEn: [
      'Evidence-based annual business plans and faster market feasibility studies.',
    ],
    expectedOutcomesVi: [
      'Nâng cao độ chính xác của kế hoạch kinh doanh hàng năm và rút ngắn thời gian nghiên cứu tiền khả thi.',
    ],
    ctaTextEn: 'Request Trade Analytics Sample Report',
    ctaTextVi: 'Nhận Mẫu Dữ Liệu Phân Tích Ngành Hàng',
  },
];

export const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    id: 'manufacturing',
    nameEn: 'Manufacturing & Industrial Production',
    nameVi: 'Nhà Sản Xuất & Nhà Máy Xuất Khẩu',
    summaryEn: 'Connect factory capacity directly with verified overseas importers and wholesale distributors.',
    summaryVi: 'Kết nối trực tiếp năng lực sản xuất của nhà máy với các nhà nhập khẩu và nhà phân phối sỉ quốc tế.',
    keyUseCasesEn: [
      'Find direct overseas buyers for wooden furniture, textiles, footwear, plastics, steel, and electronics.',
      'Source reliable industrial raw materials, chemicals, and machinery components.',
    ],
    keyUseCasesVi: [
      'Tìm khách hàng nhập khẩu trực tiếp cho ngành gỗ, dệt may, da giày, nhựa, cơ khí, điện tử, nông thủy sản.',
      'Tìm nguồn cung nguyên phụ liệu, hóa chất và linh kiện máy móc ổn định từ nước ngoài.',
    ],
    sampleHsCodes: ['9403', '6109', '6403', '3926', '7210', '8542'],
  },
  {
    id: 'trading',
    nameEn: 'International Import-Export Trading Companies',
    nameVi: 'Công Ty Thương Mại Quốc Tế (Trading)',
    summaryEn: 'Spot profitable arbitrage corridors, match global supply with regional demand, and expand commodity portfolios.',
    summaryVi: 'Khám phá cơ hội kết nối nguồn cung – cầu đa quốc gia và mở rộng danh mục mặt hàng thương mại.',
    keyUseCasesEn: [
      'Identify high-velocity commodities across ASEAN, East Asia, Europe, and the Americas.',
      'Vet both upstream overseas suppliers and downstream regional buyers.',
    ],
    keyUseCasesVi: [
      'Phát hiện các mặt hàng có nhu cầu giao dịch lớn giữa ASEAN, Đông Á, Châu Âu và Châu Mỹ.',
      'Thẩm định đồng thời nhà cung cấp đầu nguồn và khách hàng tiêu thụ đầu cuối.',
    ],
    sampleHsCodes: ['0901', '0801', '0306', '7606', '4011'],
  },
  {
    id: 'logistics',
    nameEn: 'Logistics, Freight Forwarders & Shipping Lines',
    nameVi: 'Logistics, Freight Forwarder & Vận Tải Quốc Tế',
    summaryEn: 'Target high-volume shippers and consignees on specific port-to-port maritime and air freight corridors.',
    summaryVi: 'Tìm kiếm các chủ hàng (Shipper/Consignee) có sản lượng container và tần suất xuất nhập khẩu đều đặn theo tuyến cảng.',
    keyUseCasesEn: [
      'Filter companies by Port of Loading (POL), Port of Discharge (POD), container type (FCL/Reefer), and shipment count.',
      'Pitch tailored freight solutions to active importers/exporters on your strongest trade lanes.',
    ],
    keyUseCasesVi: [
      'Lọc doanh nghiệp theo Cảng xếp (POL), Cảng dỡ (POD), loại container (FCL, Reefer) và tần suất đi hàng.',
      'Chào dịch vụ cước vận chuyển và thủ tục hải quan đúng tuyến thế mạnh của công ty.',
    ],
    sampleHsCodes: ['All Maritime FCL', 'Reefer Cold Chain', 'Air Cargo High-Tech'],
  },
  {
    id: 'distribution',
    nameEn: 'Wholesale Distributors & Brand Importers',
    nameVi: 'Nhà Phân Phối & Nhập Khẩu Độc Quyền',
    summaryEn: 'Discover reputable international manufacturers and monitor competing importer product launches.',
    summaryVi: 'Tìm kiếm các nhà máy sản xuất uy tín trên thế giới và theo dõi xu hướng nhập hàng của các nhà phân phối cùng ngành.',
    keyUseCasesEn: [
      'Evaluate overseas manufacturer export volume and client roster before signing distribution agreements.',
      'Track new product lines entering your domestic market.',
    ],
    keyUseCasesVi: [
      'Đánh giá năng lực xuất khẩu của nhà máy nước ngoài trước khi đàm phán hợp đồng phân phối.',
      'Theo dõi các dòng sản phẩm mới đang được nhập khẩu vào thị trường nội địa.',
    ],
    sampleHsCodes: ['8504', '8471', '3926', '9403'],
  },
  {
    id: 'sourcing',
    nameEn: 'Global Sourcing Agencies & Buying Offices',
    nameVi: 'Đơn Vị Sourcing & Văn Phòng Đại Diện Mua Hàng',
    summaryEn: 'Audit factory export histories across emerging manufacturing hubs to build resilient supplier shortlists.',
    summaryVi: 'Thẩm định lịch sử xuất khẩu thực tế của các nhà máy tại nhiều quốc gia để xây dựng mạng lưới cung ứng tin cậy.',
    keyUseCasesEn: [
      'Verify whether a factory has proven experience exporting to strict compliance markets (US, EU, Japan).',
      'Cross-check factory shipment capacity and seasonal stability.',
    ],
    keyUseCasesVi: [
      'Xác minh nhà máy đã có kinh nghiệm xuất khẩu thực tế sang các thị trường khó tính (Mỹ, EU, Nhật Bản) hay chưa.',
      'Kiểm tra chéo công suất giao hàng thực tế và tính ổn định theo mùa vụ.',
    ],
    sampleHsCodes: ['6109', '6403', '9403', '8708'],
  },
  {
    id: 'market-research',
    nameEn: 'Market Research, Consulting & Investment Advisory',
    nameVi: 'Nghiên Cứu Thị Trường & Tư Vấn Đầu Tư',
    summaryEn: 'Support commercial due diligence, sector feasibility studies, and supply chain mapping with empirical data.',
    summaryVi: 'Cung cấp dữ liệu thực chứng phục vụ thẩm định thương mại (Commercial Due Diligence) và nghiên cứu ngành hàng.',
    keyUseCasesEn: [
      'Quantify real import/export flows and market concentration for M&A or FDI feasibility reports.',
      'Validate target company trade activity and international customer diversification.',
    ],
    keyUseCasesVi: [
      'Đo lường dòng chảy xuất nhập khẩu và mức độ tập trung thị trường cho báo cáo FDI hoặc M&A.',
      'Kiểm chứng hoạt động thương mại quốc tế và độ đa dạng tệp khách hàng của doanh nghiệp mục tiêu.',
    ],
    sampleHsCodes: ['Macro Chapters 01–97', 'Custom Basket Analysis'],
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    titleEn: 'Define Your Business Requirement',
    titleVi: 'Bước 1: Xác Định Nhu Cầu Khai Thác',
    subtitleEn: 'Clarify your product, HS Code, target markets, and commercial objective.',
    subtitleVi: 'Làm rõ mặt hàng, mã HS, thị trường mục tiêu và bài toán kinh doanh cần giải quyết.',
    instructionsEn:
      'Share your commercial product description or 6-digit HS Code along with the specific countries you want to analyze (e.g., finding US buyers for HS 0901, or sourcing Korean steel under HS 7210).Even if you do not know your exact HS Code, our team helps map your product to the proper international harmonized classification.',
    instructionsVi:
      'Cung cấp tên thương mại của sản phẩm hoặc mã HS (nếu đã biết), quốc gia muốn tra cứu và mục tiêu ưu tiên (Tìm nhà nhập khẩu, Phân tích đối thủ, Tìm nhà cung ứng hay Thống kê thị trường). Ngay cả khi bạn chưa rõ mã HS quốc tế, đội ngũ tư vấn sẽ hỗ trợ tra cứu và đối chiếu phân nhóm mã HS phù hợp.',
    inputsEn: ['Product Name or Technical Spec', 'HS Code (4–8 digits, optional)', 'Target Origin / Destination Countries', 'Primary Goal (Sales, Sourcing, Competitor, Analytics)'],
    inputsVi: ['Tên sản phẩm hoặc quy cách kỹ thuật', 'Mã HS 4–8 số (nếu đã biết)', 'Quốc gia xuất xứ / Quốc gia đích mục tiêu', 'Mục tiêu chính (Tìm khách, Đối thủ, Mua hàng, Thống kê)'],
    outputsEn: ['Confirmed HS Code Classification', 'Feasibility & Country Coverage Assessment', 'Recommended Query Scope'],
    outputsVi: ['Bản xác nhận phân nhóm mã HS mục tiêu', 'Đánh giá phạm vi dữ liệu khả dụng tại quốc gia yêu cầu', 'Đề xuất phương án truy xuất tối ưu'],
    preparationEn: 'Prepare 1–3 core product keywords, any known HS Codes on your customs declarations, and your priority target countries.',
    preparationVi: 'Chuẩn bị 1–3 từ khóa sản phẩm chủ lực, mã HS trên tờ khai xuất nhập khẩu (nếu có) và danh sách thị trường ưu tiên.',
  },
  {
    stepNumber: '02',
    titleEn: 'Data Query & Live Sample Demonstration',
    titleVi: 'Bước 2: Tra Cứu & Trình Diễn Dữ Liệu Mẫu (Data Demo)',
    subtitleEn: 'Inspect real structure, available fields, and relevance before making any commitment.',
    subtitleVi: 'Trực tiếp kiểm tra cấu trúc bản ghi, các trường thông tin khả dụng và mức độ phù hợp thực tế.',
    instructionsEn:
      'Our specialists query the database according to your requirements and provide a structured Data Demo (or live walkthrough session). You can verify the exact fields available for that country—such as importer/exporter names, product descriptions, quantities, values, and ports.',
    instructionsVi:
      'Đội ngũ chuyên viên tiến hành truy vấn trên hệ thống theo đúng mã HS và thị trường bạn yêu cầu, sau đó gửi bản DATA DEMO (hoặc tổ chức buổi trình diễn trực tiếp). Bạn được kiểm tra rõ các trường dữ liệu thực tế tại quốc gia đó: tên nhà nhập khẩu, nhà xuất khẩu, mô tả hàng hóa, số lượng, trị giá và cảng giao nhận.',
    inputsEn: ['Verified Query Parameters from Step 1', 'Preferred Timeframe & Filtering Criteria'],
    inputsVi: ['Bộ tiêu chí truy vấn đã xác nhận ở Bước 1', 'Khoảng thời gian và tiêu chí lọc mong muốn'],
    outputsEn: ['Tailored Sample Dataset (Excel/CSV or Portal View)', 'Country Field Availability Matrix', '1-on-1 Consultation Walkthrough'],
    outputsVi: ['Bản dữ liệu mẫu (Data Demo) đúng ngành hàng', 'Bảng xác nhận chi tiết các trường dữ liệu có sẵn', 'Buổi tư vấn giải thích cách đọc và lọc dữ liệu'],
    preparationEn: 'Review the sample with your Sales or Import/Export team to confirm the product descriptions match your commercial segment.',
    preparationVi: 'Cùng bộ phận Kinh doanh hoặc Xuất nhập khẩu xem xét bản Demo để đánh giá độ khớp của mô tả hàng hóa với phân khúc của công ty.',
  },
  {
    stepNumber: '03',
    titleEn: 'Select Scope & Solution Package',
    titleVi: 'Bước 3: Lựa Chọn Phạm Vi & Giải Pháp Phù Hợp',
    subtitleEn: 'Customize your geographic coverage, historical depth, and update frequency.',
    subtitleVi: 'Tùy chỉnh phạm vi quốc gia, khoảng thời gian dữ liệu, số lượng mã HS và hình thức cung cấp.',
    instructionsEn:
      'Based on the verified Demo, choose the exact scope that fits your budget and workflow—whether you need a focused dataset for specific HS Codes and countries, periodic updates, or multi-market analytical access.',
    instructionsVi:
      'Dựa trên kết quả kiểm tra Demo thực tế, doanh nghiệp lựa chọn gói giải pháp phù hợp nhất với nhu cầu và ngân sách: theo nhóm mã HS cụ thể, theo từng quốc gia hoặc khu vực, theo khoảng thời gian lịch sử và tần suất cập nhật định kỳ.',
    inputsEn: ['Selected Countries & HS Codes', 'Historical Time Range & Update Schedule', 'Delivery Format Preference'],
    inputsVi: ['Danh sách quốc gia & Mã HS chốt triển khai', 'Khoảng thời gian dữ liệu & Chu kỳ cập nhật', 'Hình thức bàn giao (File chuẩn hóa / Tra cứu)'],
    outputsEn: ['Transparent Scope & Service Agreement', 'Clear Data Governance & Usage Terms', 'Implementation Schedule'],
    outputsVi: ['Báo giá minh bạch theo đúng phạm vi đã xác nhận', 'Thỏa thuận phạm vi dữ liệu & quyền khai thác rõ ràng', 'Lịch trình bàn giao và hỗ trợ kỹ thuật'],
    preparationEn: 'Align internal stakeholders (CEO, Sales Lead, Procurement) on who will receive and act on the data.',
    preparationVi: 'Thống nhất nhân sự phụ trách tiếp nhận và khai thác dữ liệu (Sales B2B, Mua hàng hoặc Kế hoạch).',
  },
  {
    stepNumber: '04',
    titleEn: 'Delivery, Onboarding & Actionable Execution',
    titleVi: 'Bước 4: Bàn Giao, Hướng Dẫn & Triển Khai Thực Chiến',
    subtitleEn: 'Turn trade records into qualified B2B pipelines, supplier shortlists, and market decisions.',
    subtitleVi: 'Chuyển hóa dữ liệu thành danh sách khách hàng mục tiêu, báo cáo đối thủ và hành động kinh doanh cụ thể.',
    instructionsEn:
      'We deliver the standardized dataset and/or platform access along with practical onboarding guidance. We show your team how to clean, segment, and prioritize importers/exporters so your sales and sourcing teams can take immediate action.',
    instructionsVi:
      'TradeIntel Global bàn giao dữ liệu đã chuẩn hóa theo thỏa thuận kèm tài liệu hướng dẫn khai thác thực chiến. Đội ngũ chuyên gia đồng hành hướng dẫn cách lọc phân khúc người mua, đọc lịch sử giao dịch và chuyển hóa thành kế hoạch tiếp cận B2B hiệu quả.',
    inputsEn: ['Confirmed Solution Package', 'Assigned Team Members for Onboarding'],
    inputsVi: ['Gói dịch vụ đã xác nhận', 'Đội ngũ nhân sự tham gia buổi hướng dẫn khai thác'],
    outputsEn: ['Standardized Trade Intelligence Dataset / Access', 'Buyer/Supplier Segmentation Playbook', 'Ongoing Periodic Updates & Support'],
    outputsVi: ['Bộ dữ liệu chuẩn hóa / Quyền truy cập theo gói', 'Hướng dẫn phân loại và ưu tiên khách hàng B2B', 'Cập nhật dữ liệu định kỳ & Hỗ trợ trong suốt quá trình sử dụng'],
    preparationEn: 'Prepare your CRM or outreach workflow to begin qualifying and contacting prioritized accounts.',
    preparationVi: 'Chuẩn bị quy trình CRM hoặc kịch bản tiếp cận của phòng Sales/Mua hàng để bắt đầu khai thác danh sách đối tác.',
  },
];

export const PLAYBOOK_SCENARIOS = [
  {
    id: 'scenario-find-importers',
    tagEn: 'SCENARIO 01 · B2B SALES',
    tagVi: 'TÌNH HUỐNG 01 · TÌM KHÁCH HÀNG B2B',
    questionEn: '“I want to find verified overseas importers for my product.”',
    questionVi: '“Tôi muốn tìm nhà nhập khẩu sản phẩm của mình ở nước ngoài.”',
    goalEn: 'Build a targeted list of active overseas buyers who are already importing your exact product category.',
    goalVi: 'Xây dựng danh sách các công ty nước ngoài đang thực sự nhập khẩu mặt hàng giống hoặc tương đồng với sản phẩm của bạn.',
    stepsEn: [
      'Filter by your 6-digit HS Code + commercial keyword (e.g., HS 940360 + "Acacia Dining Table").',
      'Select target destination countries (e.g., US, Germany, Australia) and filter shipments from the past 12 months.',
      'Sort importers by shipment count and total USD value to separate repeat commercial buyers from one-off shipments.',
      'Inspect each importer’s current supplier origins to see if they already buy from Vietnam/ASEAN.',
    ],
    stepsVi: [
      'Lọc theo mã HS 6 số kết hợp từ khóa mô tả hàng hóa (ví dụ: HS 940360 + "Acacia Dining Table").',
      'Chọn quốc gia nhập khẩu mục tiêu (ví dụ: Mỹ, Đức, Úc) trong khoảng thời gian 12 tháng gần nhất.',
      'Sắp xếp các nhà nhập khẩu theo số lượng lô hàng và tổng kim ngạch để lọc ra những nhà mua hàng thường xuyên.',
      'Kiểm tra xem họ đang nhập từ những quốc gia nào để đánh giá mức độ sẵn sàng mua hàng từ Việt Nam.',
    ],
    deliverableEn: 'A ranked shortlist of active importers with transaction volume, frequency, product spec, and current supplier mix.',
    deliverableVi: 'Danh sách nhà nhập khẩu tiềm năng được phân hạng theo quy mô mua, tần suất nhập, quy cách hàng và nhà cung cấp hiện tại.',
  },
  {
    id: 'scenario-competitor-clients',
    tagEn: 'SCENARIO 02 · COMPETITIVE INTELLIGENCE',
    tagVi: 'TÌNH HUỐNG 02 · PHÂN TÍCH ĐỐI THỦ',
    questionEn: '“I want to see who my competitors are selling to and how their volume is changing.”',
    questionVi: '“Tôi muốn tìm hiểu khách hàng của đối thủ và theo dõi hoạt động xuất khẩu của họ.”',
    goalEn: 'Understand competitor export activity, destination markets, and buyer relationships.',
    goalVi: 'Nắm bắt lịch sử xuất hàng, thị trường trọng điểm và mạng lưới khách hàng của các doanh nghiệp cạnh tranh.',
    stepsEn: [
      'Query the Exporter field using the legal English name (or known trading variations) of your competitor.',
      'Group their historical shipments by Consignee (Importer) and Destination Country.',
      'Analyze shipment frequency: identify which buyers purchase monthly vs. which buyers have recently reduced order volume.',
      'Compare product descriptions and declared values to understand their positioning.',
    ],
    stepsVi: [
      'Tra cứu trường Nhà xuất khẩu (Exporter) theo tên giao dịch quốc tế của đối thủ cạnh tranh.',
      'Nhóm toàn bộ các lô hàng ghi nhận được theo từng Người nhận hàng (Consignee/Importer) và Quốc gia đích.',
      'Phân tích tần suất giao dịch: xác định khách hàng ruột mua hàng tháng và những khách hàng đang có dấu hiệu giảm đơn.',
      'Đối chiếu mô tả quy cách sản phẩm và trị giá khai báo để hiểu rõ lợi thế cạnh tranh của đối thủ.',
    ],
    deliverableEn: 'Competitor partner network map, shipment trend timeline, and prospective accounts open to secondary suppliers.',
    deliverableVi: 'Bản đồ mạng lưới đối tác của đối thủ, biểu đồ biến động sản lượng xuất khẩu và danh sách khách hàng có thể tiếp cận.',
  },
  {
    id: 'scenario-find-suppliers',
    tagEn: 'SCENARIO 03 · STRATEGIC SOURCING',
    tagVi: 'TÌNH HUỐNG 03 · TÌM NHÀ CUNG ỨNG',
    questionEn: '“I want to find reliable overseas suppliers in a specific country.”',
    questionVi: '“Tôi muốn tìm nhà cung ứng nguyên vật liệu uy tín tại một quốc gia.”',
    goalEn: 'Identify and vet genuine overseas manufacturers/exporters with proven global shipment records.',
    goalVi: 'Tìm kiếm và xác minh các nhà sản xuất/xuất khẩu ở nước ngoài có lịch sử giao hàng thực tế và năng lực ổn định.',
    stepsEn: [
      'Filter by Raw Material HS Code and set Origin Country to your target sourcing hub (e.g., South Korea, India, Germany, Brazil).',
      'Rank exporters by total export volume, number of international buyers served, and shipment regularity.',
      'Verify that the supplier exports consistently throughout the year and check which reputable importers buy from them.',
      'Compare declared unit values across multiple suppliers to establish a realistic price negotiation baseline.',
    ],
    stepsVi: [
      'Lọc theo mã HS nguyên phụ liệu và chọn Quốc gia xuất xứ (Origin Country) mong muốn (ví dụ: Hàn Quốc, Ấn Độ, Đức, Brazil).',
      'Xếp hạng các nhà xuất khẩu theo tổng sản lượng, số lượng khách hàng quốc tế đang phục vụ và tính đều đặn của lô hàng.',
      'Kiểm tra lịch sử xuất hàng xuyên suốt các quý để phân biệt nhà máy có năng lực thực sự với đơn vị thương mại nhỏ.',
      'So sánh mặt bằng đơn giá khai báo giữa các nhà cung ứng để có cơ sở đàm phán mua hàng tốt nhất.',
    ],
    deliverableEn: 'Verified supplier shortlist with capacity indicators, client credibility proof, and unit price benchmarks.',
    deliverableVi: 'Danh sách nhà cung ứng đã được kiểm chứng qua lịch sử giao hàng thực tế kèm dữ liệu tham chiếu sản lượng và đơn giá.',
  },
  {
    id: 'scenario-market-potential',
    tagEn: 'SCENARIO 04 · MARKET EXPANSION',
    tagVi: 'TÌNH HUỐNG 04 · ĐÁNH GIÁ THỊ TRƯỜNG',
    questionEn: '“I want to evaluate the true potential of a new international market.”',
    questionVi: '“Tôi muốn đánh giá tiềm năng thực tế của một thị trường trước khi mở rộng.”',
    goalEn: 'Quantify total demand, growth trend, price range, and market concentration before investing.',
    goalVi: 'Đo lường dung lượng nhập khẩu, xu hướng tăng trưởng, mức độ cạnh tranh và biên độ giá trước khi đầu tư.',
    stepsEn: [
      'Aggregate all import records for your HS Code in the target country over the last 4–8 quarters.',
      'Measure total trade value, volume growth rate, and top supplying countries currently dominating that market.',
      'Calculate buyer concentration: check if 80% of volume is monopolized by 2 corporations or distributed across dozens of accessible mid-size importers.',
      'Inspect top ports of entry and seasonal peak months to plan logistics and sales timing.',
    ],
    stepsVi: [
      'Tổng hợp dữ liệu nhập khẩu của mã HS mục tiêu tại quốc gia đó trong 4–8 quý gần nhất.',
      'Đo lường tổng kim ngạch, tốc độ tăng trưởng sản lượng và thị phần của các quốc gia đang xuất khẩu vào thị trường đó.',
      'Đánh giá độ tập trung: kiểm tra xem thị trường bị chi phối bởi vài tập đoàn độc quyền hay có nhiều nhà nhập khẩu vừa và lớn dễ tiếp cận.',
      'Xác định các cảng nhập khẩu chính và các tháng cao điểm nhập hàng trong năm để lên kế hoạch tiếp cận.',
    ],
    deliverableEn: 'Comprehensive market attractiveness scorecard with volume trends, origin market share, and accessible buyer count.',
    deliverableVi: 'Bức tranh toàn diện về quy mô thị trường, cơ cấu nguồn cung, chu kỳ mùa vụ và số lượng khách hàng tiềm năng có thể tiếp cận.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'data',
    questionEn: 'Can I search and filter trade data by specific HS Code and product description?',
    questionVi: '1. Dữ liệu có thể tìm kiếm chi tiết theo mã HS và tên hàng hóa không?',
    answerEn:
      'Yes. You can query by 4-to-10 digit HS Codes as well as commercial product keywords in transaction descriptions. Note that the granularity of product descriptions and HS digits depends on the reporting standards and disclosure rules of each specific country.',
    answerVi:
      'Có. Hệ thống hỗ trợ tra cứu theo mã HS (từ 4 đến 10 chữ số tùy quốc gia) kết hợp với từ khóa mô tả thương mại của hàng hóa. Mức độ chi tiết của mô tả sản phẩm và số ký tự mã HS sẽ phụ thuộc vào quy chuẩn khai báo và nguồn dữ liệu của từng quốc gia cụ thể.',
  },
  {
    id: 'faq-2',
    category: 'data',
    questionEn: 'Can I get a list of actual overseas importers and exporters for my product?',
    questionVi: '2. Tôi có thể tìm được danh sách nhà nhập khẩu và xuất khẩu thực tế không?',
    answerEn:
      'Yes. Within the available coverage scope, the platform retrieves corporate entities (Importers/Consignees and Exporters/Shippers) recorded on customs declarations or maritime bills of lading, allowing you to see what they trade, how often, and in what volume.',
    answerVi:
      'Có. Trong phạm vi dữ liệu được cung cấp tại từng thị trường, bạn có thể truy xuất danh sách các doanh nghiệp (Nhà nhập khẩu / Người nhận hàng và Nhà xuất khẩu / Người gửi hàng) có ghi nhận giao dịch thực tế, kèm theo lịch sử mặt hàng, tần suất và quy mô lô hàng.',
  },
  {
    id: 'faq-3',
    category: 'data',
    questionEn: 'Can I view the transaction history and buyer network of my competitors?',
    questionVi: '3. Có thể xem lịch sử giao dịch và mạng lưới khách hàng của đối thủ không?',
    answerEn:
      'Yes, for jurisdictions and transport modes where exporter/shipper and consignee names are recorded and legally accessible. You can analyze recorded shipments, partner networks, product lines, and shipment frequency of competing firms.',
    answerVi:
      'Có thể nghiên cứu các giao dịch được ghi nhận và được phép cung cấp trong hệ thống dữ liệu tương ứng. Bạn có thể phân tích lịch sử xuất nhập khẩu, các đối tác mua/bán, nhóm mã HS giao dịch và tần suất xuất hàng của các doanh nghiệp cạnh tranh.',
  },
  {
    id: 'faq-4',
    category: 'coverage',
    questionEn: 'Does the database cover every country in the world with identical fields?',
    questionVi: '4. Dữ liệu có bao phủ tất cả quốc gia với các trường giống hệt nhau không?',
    answerEn:
      'No—and we believe in strict transparency on this point. Every country has different customs disclosure laws. Some nations publish detailed customs declarations, others release maritime Bills of Lading (e.g., US), while regions like the EU or Japan protect company names on direct filings and require Mirror Data from partner countries. Always check our Global Data Coverage page or request a pre-sale verification.',
    answerVi:
      'Không – và chúng tôi cam kết minh bạch tuyệt đối về điểm này. Phạm vi và các trường dữ liệu phụ thuộc vào quy định công bố của từng quốc gia: có nước cung cấp dữ liệu tờ khai chi tiết, có nước công bố vận đơn đường biển (như Mỹ), và có những khối (như EU, Nhật Bản) bảo mật tên công ty trên tờ khai nội địa nên cần truy xuất qua Dữ liệu đối ứng (Mirror Data) từ nước đối tác. Khách hàng luôn được xác nhận rõ trước khi đặt mua.',
  },
  {
    id: 'faq-5',
    category: 'demo',
    questionEn: 'Can I inspect a Data Demo for my specific product before purchasing?',
    questionVi: '5. Tôi có được xem dữ liệu mẫu (Data Demo) trước khi quyết định mua không?',
    answerEn:
      'Absolutely. You can explore our interactive Data Demo sandbox right on this website (using clearly labeled simulated sample records) and register to receive a tailored Data Demo verified for your specific HS Code and target country before making any purchasing decision.',
    answerVi:
      'Hoàn toàn được. Bạn có thể trải nghiệm ngay công cụ Data Demo trực quan trên website (với bộ dữ liệu mô phỏng minh họa chức năng) và đăng ký nhận bản DATA DEMO được kiểm tra riêng theo mã HS và thị trường doanh nghiệp bạn đang kinh doanh trước khi quyết định.',
  },
  {
    id: 'faq-6',
    category: 'demo',
    questionEn: 'How is service pricing calculated?',
    questionVi: '6. Chi phí dịch vụ được tính như thế nào?',
    answerEn:
      'Pricing is tailored based on your selected geographic scope (single country, regional, or global), historical timeframe, number of HS Codes/product lines, record volume, and update frequency. Our consultants provide a transparent quote after verifying data availability for your inquiry.',
    answerVi:
      'Chi phí phụ thuộc vào phạm vi quốc gia bạn lựa chọn, khoảng thời gian dữ liệu lịch sử, số lượng mã HS/nhóm ngành hàng, số lượng bản ghi và tần suất cập nhật định kỳ. Đội ngũ tư vấn sẽ gửi báo giá minh bạch ngay sau khi kiểm tra phạm vi dữ liệu phù hợp với nhu cầu của bạn.',
  },
  {
    id: 'faq-7',
    category: 'compliance',
    questionEn: 'Does customs data include personal phone numbers or private emails of company staff?',
    questionVi: '7. Dữ liệu hải quan có bao gồm số điện thoại cá nhân hay email riêng của nhân viên mua hàng không?',
    answerEn:
      'Official customs declarations and maritime bills of lading record corporate entity names, addresses, HS codes, cargo descriptions, weights, values, and ports—they generally do not contain personal mobile numbers or private individual emails. Our platform focuses on verified B2B corporate transaction intelligence and complies strictly with data protection regulations.',
    answerVi:
      'Chứng từ hải quan và vận đơn quốc tế bản chất ghi nhận thông tin pháp nhân doanh nghiệp (Importer/Exporter), địa chỉ công ty, mã HS, mô tả hàng hóa, số lượng, trị giá và cảng biển – thường không chứa số điện thoại di động cá nhân hay email riêng của từng nhân viên. Chúng tôi cung cấp tình báo giao dịch B2B xác thực và tuân thủ nghiêm ngặt quy định bảo vệ dữ liệu cá nhân.',
  },
  {
    id: 'faq-8',
    category: 'compliance',
    questionEn: 'What is the difference between Direct Customs Data, Bill of Lading Data, and Mirror Data?',
    questionVi: '8. Sự khác biệt giữa Dữ liệu Hải quan, Dữ liệu Vận đơn (B/L) và Dữ liệu Đối ứng (Mirror Data) là gì?',
    answerEn:
      '1) Commercial Customs Data originates from import/export declaration filings where permitted. 2) Bill of Lading (Manifest) Data comes from carrier cargo manifests ( primarily maritime, often showing weights/containers rather than invoice values). 3) Mirror Data reconstructs trade flows of a privacy-restricted country by capturing declarations recorded by its trading partner countries.',
    answerVi:
      '1) Dữ liệu tờ khai thương mại: tổng hợp từ nguồn dữ liệu xuất nhập khẩu tại các nước cho phép truy xuất, thường có trị giá và mã HS chi tiết. 2) Dữ liệu Vận đơn (B/L Manifest): trích xuất từ bản lược khai hàng hóa đường biển, mạnh về thông tin Shipper, Consignee, cảng và số container. 3) Dữ liệu Đối ứng (Mirror Data): tái tạo lịch sử giao dịch của các nước bảo mật nội địa (như EU) thông qua dữ liệu xuất/nhập khẩu từ các quốc gia đối tác giao dịch với họ.',
  },
];
