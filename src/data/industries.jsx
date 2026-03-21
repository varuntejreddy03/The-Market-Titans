import React from 'react';
import { 
  Calculator, ClipboardList, HardHat, Headphones, Megaphone, 
  ShoppingCart, GraduationCap, Settings, Landmark, Stethoscope, 
  Coffee, ShieldCheck, Code, Cpu, Gavel, Truck, Factory, 
  BarChart3, Pickaxe, Briefcase, Home, Rocket, PhoneCall, 
  Globe, Zap, Package, ArrowRight 
} from 'lucide-react';

export const industries = [
  {
    slug: 'accounting',
    title: 'Accounting',
    icon: <Calculator />,
    shortDesc: 'Reliable offshore bookkeeping and tax support services.',
    description: 'Scale your accounting firm with pre-vetted offshore CPAs and bookkeepers. We handle the heavy lifting of data entry and reconciliation so you can focus on high-level advisory.',
    roles: [
      { id: 1, name: 'Bookkeeper', desc: 'Daily transactions and bank reconciliations' },
      { id: 2, name: 'Tax Preparer', desc: 'Personal and corporate tax filing support' },
      { id: 3, name: 'Accounts Payable', desc: 'Vendor management and bill payments' },
      { id: 4, name: 'Payroll Specialist', desc: 'Processing salary and compliance reports' }
    ]
  },
  {
    slug: 'administration',
    title: 'Administration',
    icon: <ClipboardList />,
    shortDesc: 'Streamlining operations with dedicated admin assistants.',
    description: 'Optimize your business processes with dedicated administrative support. Our teams manage everything from scheduling to document control.',
    roles: [
      { id: 1, name: 'Executive Assistant', desc: 'Calendar management and travel planning' },
      { id: 2, name: 'Data Entry Clerk', desc: 'High-speed data processing and CRM updates' },
      { id: 3, name: 'Office Coordinator', desc: 'Supply management and internal comms' },
      { id: 4, name: 'Operations Assistant', desc: 'Supporting daily business workflows' }
    ]
  },
  {
    slug: 'construction',
    title: 'Construction',
    icon: <HardHat />,
    shortDesc: 'Project coordination and estimating for construction firms.',
    description: 'Modern construction requires seamless coordination. Our offshore experts handle estimating, procurement, and project management support.',
    roles: [
      { id: 1, name: 'Estimator Assistant', desc: 'Material takeoffs and bid preparation' },
      { id: 2, name: 'Project Coordinator', desc: 'Scheduling and subcontractor follow-ups' },
      { id: 3, name: 'Procurement Specialist', desc: 'Sourcing materials and vendor management' },
      { id: 4, name: 'Safety Compliance Officer', desc: 'Monitoring safety reports and regulations' }
    ]
  },
  {
    slug: 'customer-support-sales',
    title: 'Customer Support & Sales',
    icon: <Headphones />,
    shortDesc: '24/7 support and revenue-generating sales teams.',
    description: 'Build a world-class support team that delights customers around the clock. Our sales reps are trained to drive revenue and close deals.',
    roles: [
      { id: 1, name: 'Customer Success Rep', desc: 'Ticket resolution and account management' },
      { id: 2, name: 'Outbound Sales Agent', desc: 'Cold calling and lead generation' },
      { id: 3, name: 'Technical Support', desc: 'Troubleshooting and software assistance' },
      { id: 4, name: 'Live Chat Specialist', desc: 'Real-time customer engagement' }
    ]
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: <Megaphone />,
    shortDesc: 'Content, SEO, and social media management teams.',
    description: 'Dominate your market with a full-stack digital marketing engine. From SEO to social media, we provide the talent to grow your online presence.',
    roles: [
      { id: 1, name: 'SEO Specialist', desc: 'Keywords, backlinks, and on-page optimization' },
      { id: 2, name: 'Social Media Manager', desc: 'Content creation and community engagement' },
      { id: 3, name: 'PPC Specialist', desc: 'Ad campaign management and ROI tracking' },
      { id: 4, name: 'Content Writer', desc: 'Blogs, whitepapers, and copy development' }
    ]
  },
  {
    slug: 'ecommerce-retail',
    title: 'Ecommerce & Retail',
    icon: <ShoppingCart />,
    shortDesc: 'Inventory management and store operations support.',
    description: 'Scale your online store with ecommerce operations experts. We handle listing management, inventory tracking, and customer inquiries.',
    roles: [
      { id: 1, name: 'Store Manager', desc: 'Overall Shopify/Amazon store operations' },
      { id: 2, name: 'Inventory Planner', desc: 'Stock level optimization and ordering' },
      { id: 3, name: 'Product Lister', desc: 'Optimizing product titles and descriptions' },
      { id: 4, name: 'Return Specialist', desc: 'Handling refunds and exchanges' }
    ]
  },
  {
    slug: 'education',
    title: 'Education',
    icon: <GraduationCap />,
    shortDesc: 'Tech support and admin for educational institutions.',
    description: 'Empower learning with dedicated support for schools and EdTech firms. We provide student support, course management, and admin assistance.',
    roles: [
      { id: 1, name: 'Student Success Coach', desc: 'Guiding students through course material' },
      { id: 2, name: 'LMS Administrator', desc: 'Managing online learning platforms' },
      { id: 3, name: 'Admissions Support', desc: 'Processing applications and enrollment' },
      { id: 4, name: 'Academic Researcher', desc: 'Sourcing data for course development' }
    ]
  },
  {
    slug: 'engineering',
    title: 'Engineering',
    icon: <Settings />,
    shortDesc: 'CAD design and technical support for engineering teams.',
    description: 'Boost your engineering output with specialized offshore talent. From CAD design to project documentation, we handle the technical details.',
    roles: [
      { id: 1, name: 'CAD Designer', desc: '2D/3D modeling and blueprint drafting' },
      { id: 2, name: 'BIM Coordinator', desc: 'Building information modeling management' },
      { id: 3, name: 'Technical Writer', desc: 'Drafting manuals and specifications' },
      { id: 4, name: 'QA Engineer', desc: 'Testing and quality control protocols' }
    ]
  },
  {
    slug: 'finance-accounting',
    title: 'Finance & Accounting',
    icon: <Landmark />,
    shortDesc: 'Strategic financial planning and analysis support.',
    description: 'Strengthen your financial department with high-level analysts and controllers. We provide deep financial insights and rigorous accounting standards.',
    roles: [
      { id: 1, name: 'Financial Analyst', desc: 'Budgeting, forecasting, and reporting' },
      { id: 2, name: 'Controller Assistant', desc: 'Supporting fiscal management and audit' },
      { id: 3, name: 'Tax Compliance', desc: 'Monitoring regulatory requirements' },
      { id: 4, name: 'Investment Associate', desc: 'Research and portfolio analysis' }
    ]
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: <Stethoscope />,
    shortDesc: 'Medical billing and patient coordination services.',
    description: 'Focus on patient care while we handle the administration. We provide HIPAA-compliant medical billing, scheduling, and back-office support.',
    roles: [
      { id: 1, name: 'Medical Biller', desc: 'Claims submission and AR management' },
      { id: 2, name: 'Patient Coordinator', desc: 'Scheduling and insurance verification' },
      { id: 3, name: 'Medical Scribe', desc: 'Real-time documentation for physicians' },
      { id: 4, name: 'Telehealth Support', desc: 'Coordinating virtual appointments' }
    ]
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    icon: <Coffee />,
    shortDesc: 'Reservations and guest relations for the travel sector.',
    description: 'Give your guests a 5-star experience with 24/7 hospitality support. We manage bookings, guest inquiries, and review management.',
    roles: [
      { id: 1, name: 'Reservation Agent', desc: 'Booking management and guest relations' },
      { id: 2, name: 'Concierge Support', desc: 'Local recommendations and planning' },
      { id: 3, name: 'Review Manager', desc: 'Engaging with guest feedback online' },
      { id: 4, name: 'Event Coordinator', desc: 'Planning and logistics for group bookings' }
    ]
  },
  {
    slug: 'insurance',
    title: 'Insurance',
    icon: <ShieldCheck />,
    shortDesc: 'Claims processing and policy management solutions.',
    description: 'Modernize your insurance operations with offshore support. We handle claims processing, policy renewals, and customer inquiries.',
    roles: [
      { id: 1, name: 'Claims Specialist', desc: 'Processing claims and documentation' },
      { id: 2, name: 'Policy Administrator', desc: 'Renewals and policy updates' },
      { id: 3, name: 'Insurance Sales Rep', desc: 'Generating leads for agents' },
      { id: 4, name: 'Underwriting Assistant', desc: 'Gathering data for risk assessment' }
    ]
  },
  {
    slug: 'it-software-development',
    title: 'IT & Software Development',
    icon: <Code />,
    shortDesc: 'Full-stack development and devops infrastructure.',
    description: 'Accelerate your product roadmap with elite offshore developers. We build scalable software solutions tailored to your business goals.',
    roles: [
      { id: 1, name: 'Full-Stack Developer', desc: 'Building web and mobile applications' },
      { id: 2, name: 'DevOps Engineer', desc: 'Managing cloud infrastructure and CI/CD' },
      { id: 3, name: 'UI/UX Designer', desc: 'Creating intuitive user experiences' },
      { id: 4, name: 'Solution Architect', desc: 'Designing system-level architectures' }
    ]
  },
  {
    slug: 'it-outsourcing',
    title: 'IT Outsourcing',
    icon: <Cpu />,
    shortDesc: 'Managed IT services and helpdesk support.',
    description: 'Keep your systems running smoothly with managed IT teams. We provide helpdesk support, network monitoring, and security management.',
    roles: [
      { id: 1, name: 'IT Helpdesk Support', desc: 'Resolving hardware and software issues' },
      { id: 2, name: 'Network Admin', desc: 'Monitoring and maintaining infrastructure' },
      { id: 3, name: 'Cybersecurity Analyst', desc: 'Protecting data and threat detection' },
      { id: 4, name: 'Cloud Specialist', desc: 'Managing AWS, Azure, or GCP environments' }
    ]
  },
  {
    slug: 'legal',
    title: 'Legal',
    icon: <Gavel />,
    shortDesc: 'Paralegal and legal research support services.',
    description: 'Scale your law firm with specialized legal support. Our paralegals handle research, document review, and administrative workflows.',
    roles: [
      { id: 1, name: 'Paralegal', desc: 'Legal research and case preparation' },
      { id: 2, name: 'Legal Secretary', desc: 'Drafting documents and scheduling' },
      { id: 3, name: 'Contract Admin', desc: 'Reviewing and organizing agreements' },
      { id: 4, name: 'Litigation Support', desc: 'Managing discovery and case files' }
    ]
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    icon: <Truck />,
    shortDesc: 'Supply chain management and dispatching support.',
    description: 'Optimize your supply chain with logistics coordination. We handle dispatching, tracking, and vendor communication around the clock.',
    roles: [
      { id: 1, name: 'Dispatch Coordinator', desc: 'Managing fleet schedules and routes' },
      { id: 2, name: 'Freight Broker Asst', desc: 'Sourcing carriers and negotiating rates' },
      { id: 3, name: 'Track & Trace Spec', desc: 'Monitoring shipments in real-time' },
      { id: 4, name: 'Supply Chain Analyst', desc: 'Optimizing inventory flow and costs' }
    ]
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    icon: <Factory />,
    shortDesc: 'Production planning and procurement solutions.',
    description: 'Improve manufacturing efficiency with backend support. We handle production scheduling, procurement, and quality control documentation.',
    roles: [
      { id: 1, name: 'Production Planner', desc: 'Scheduling factory workflows' },
      { id: 2, name: 'Purchasing Agent', desc: 'Sourcing raw materials and vendors' },
      { id: 3, name: 'Quality Specialist', desc: 'Monitoring standards and reports' },
      { id: 4, name: 'Inventory Controller', desc: 'Managing warehouse stock levels' }
    ]
  },
  {
    slug: 'marketing-development',
    title: 'Marketing & Development',
    icon: <BarChart3 />,
    shortDesc: 'Growth marketing and performance analytics teams.',
    description: 'Build a combined marketing and tech engine for rapid growth. We provide data-driven talent to scale your customer acquisition.',
    roles: [
      { id: 1, name: 'Growth Marketer', desc: 'Omni-channel acquisition strategies' },
      { id: 2, name: 'Marketing Analyst', desc: 'Measuring campaign performance and ROI' },
      { id: 3, name: 'Campaign Manager', desc: 'Executing cross-platform ad buys' },
      { id: 4, name: 'Marketing Automator', desc: 'Setting up CRM and email sequences' }
    ]
  },
  {
    slug: 'mining',
    title: 'Mining',
    icon: <Pickaxe />,
    shortDesc: 'Asset management and safety monitoring for mines.',
    description: 'Support your mining operations with remote asset management. We provide safety coordination, data monitoring, and admin support.',
    roles: [
      { id: 1, name: 'Asset Planner', desc: 'Equipment maintenance scheduling' },
      { id: 2, name: 'Safety Monitor', desc: 'Remote tracking of safety protocols' },
      { id: 3, name: 'Geology Assistant', desc: 'Assisting with data entry and mapping' },
      { id: 4, name: 'HR & Payroll Admin', desc: 'Managing large-scale shift workforce' }
    ]
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    icon: <Briefcase />,
    shortDesc: 'Consulting support and client relationship management.',
    description: 'Scale your consulting or professional service firm. We provide research, client support, and business development task execution.',
    roles: [
      { id: 1, name: 'Business Researcher', desc: 'Market analysis and data gathering' },
      { id: 2, name: 'Client Success Manager', desc: 'Maintaining high-level relationships' },
      { id: 3, name: 'Proposal Writer', desc: 'Drafting bids and service agreements' },
      { id: 4, name: 'Accountant', desc: 'Managing firm-level financial records' }
    ]
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    icon: <Home />,
    shortDesc: 'Property management and lead generation for realtors.',
    description: 'Become a top-producing agency with real estate ISAs and admins. We handle high-volume cold calling, lead nurture, and listing management.',
    roles: [
      { id: 1, name: 'Inside Sales Agent', desc: 'Outbound prospecting and lead nurture' },
      { id: 2, name: 'Transaction Coordinator', desc: 'Managing paperwork from contract to close' },
      { id: 3, name: 'Property Manager Asst', desc: 'Handling tenant requests and maintenance' },
      { id: 4, name: 'Marketing Assistant', desc: 'Managing MLS listings and social media' }
    ]
  },
  {
    slug: 'startup',
    title: 'Startup',
    icon: <Rocket />,
    shortDesc: 'Scrappy, multi-talented teams for hyper-growth.',
    description: 'Move fast and break things with a team that grows with you. We provide versatile talent that can handle multiple roles in a fast-paced environment.',
    roles: [
      { id: 1, name: 'Founding VA', desc: 'Doing whatever it takes to scale' },
      { id: 2, name: 'Product Coordinator', desc: 'Assisting with launches and roadmaps' },
      { id: 3, name: 'Community Manager', desc: 'Building and engaging your early users' },
      { id: 4, name: 'Outreach Specialist', desc: 'Driving initial sales and partnerships' }
    ]
  },
  {
    slug: 'telecommunications',
    title: 'Telecommunications',
    icon: <PhoneCall />,
    shortDesc: 'Network support and customer connectivity services.',
    description: 'Ensure constant connectivity with 24/7 telecom support. We provide technical helpdesk, billing inquiries, and network coordination.',
    roles: [
      { id: 1, name: 'Network Technician', desc: 'Remote monitoring and troubleshooting' },
      { id: 2, name: 'Billing Specialist', desc: 'Resolving invoice and payment issues' },
      { id: 3, name: 'Customer Engagement', desc: 'Managing plan upgrades and retention' },
      { id: 4, name: 'Field Dispatcher', desc: 'Coordinating on-site technician visits' }
    ]
  },
  {
    slug: 'tourism',
    title: 'Tourism',
    icon: <Globe />,
    shortDesc: 'Travel itinerary and booking agency support.',
    description: 'Scale your travel agency with travel planners and support reps. We handle complex itineraries, group bookings, and guest communication.',
    roles: [
      { id: 1, name: 'Travel Consultant', desc: 'Designing custom itineraries' },
      { id: 2, name: 'Flight Specialist', desc: 'Managing ticketing and changes' },
      { id: 3, name: 'Tour Coordinator', desc: 'Logistics for group and luxury tours' },
      { id: 4, name: 'Destination Researcher', desc: 'Sourcing hotels and local activities' }
    ]
  },
  {
    slug: 'utilities-energy',
    title: 'Utilities & Energy',
    icon: <Zap />,
    shortDesc: 'Customer billing and resource management solutions.',
    description: 'Modernize utility management with dedicated service teams. We handle billion inquiries, account setups, and field service dispatch.',
    roles: [
      { id: 1, name: 'Account Representative', desc: 'Managing utility meter and billing data' },
      { id: 2, name: 'Energy Analyst', desc: 'Monitoring usage patterns and reporting' },
      { id: 3, name: 'Field Service Coord', desc: 'Dispatching repair and maintenance crews' },
      { id: 4, name: 'Renewable Consultant', desc: 'Assisting with solar and green initiatives' }
    ]
  },
  {
    slug: 'wholesale',
    title: 'Wholesale',
    icon: <Package />,
    shortDesc: 'Bulk order processing and distributor management.',
    description: 'Optimize your wholesale engine with distribution experts. We handle high-volume orders, vendor relationships, and warehouse logistics.',
    roles: [
      { id: 1, name: 'Order Processor', desc: 'Managing bulk buy purchase orders' },
      { id: 2, name: 'Vendor Liaison', desc: 'Negotiating with suppliers and distributors' },
      { id: 3, name: 'Logistics Planner', desc: 'Coordinating large-scale LTL shipments' },
      { id: 4, name: 'Pricing Analyst', desc: 'Managing margins and bulk discounts' }
    ]
  }
];
