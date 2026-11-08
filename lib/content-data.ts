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

export {
  INDUSTRY_VERTICALS,
  HOW_IT_WORKS_STEPS,
  PLAYBOOK_SCENARIOS,
  FAQ_ITEMS,
} from "./content-extra";
