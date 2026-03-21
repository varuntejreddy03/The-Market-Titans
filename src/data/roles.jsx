import React from 'react';
import { 
  Code, Landmark, Headphones, Megaphone, Users,
  Globe, Shield, Database, Layout, Smartphone,
  Calculator, BarChart, BookOpen, CreditCard, Receipt,
  MessageSquare, LifeBuoy, Target, Share2, PenTool,
  Briefcase, FileText, UserPlus, HardHat
} from 'lucide-react';

export const roleCategories = [
  {
    slug: 'it-software',
    title: 'IT & Software Development',
    icon: <Code />,
    count: 10,
    roles: [
      { 
        id: 1, name: 'Software Development', 
        desc: 'Custom software solutions and application maintenance.', 
        avgUSSalary: 115000 
      },
      { 
        id: 2, name: 'Web Development', 
        desc: 'Modern, responsive web applications built with latest tech stacks.', 
        avgUSSalary: 95000 
      },
      { 
        id: 3, name: 'App Developer', 
        desc: 'Native and cross-platform mobile application development.', 
        avgUSSalary: 105000 
      },
      { 
        id: 4, name: 'Full Stack Developer', 
        desc: 'Versatile developers handling both front-end and back-end ecosystems.', 
        avgUSSalary: 120000 
      },
      { 
        id: 5, name: 'Back-end Developer', 
        desc: 'Managing server-side logic, databases, and API integrations.', 
        avgUSSalary: 110000 
      },
      { 
        id: 6, name: 'Front-end Development', 
        desc: 'Crafting intuitive user interfaces and seamless experiences.', 
        avgUSSalary: 100000 
      },
      { 
        id: 7, name: 'Cloud Developer', 
        desc: 'Specialists in AWS, Azure, and Google Cloud infrastructure.', 
        avgUSSalary: 125000 
      },
      { 
        id: 8, name: 'Shopify Developer', 
        desc: 'Expert customization and app development for Shopify stores.', 
        avgUSSalary: 90000 
      },
      { 
        id: 9, name: 'Cyber Security Specialist', 
        desc: 'Protecting your digital assets and ensuring data compliance.', 
        avgUSSalary: 130000 
      },
      { 
        id: 10, name: 'Quality Engineer', 
        desc: 'Ensuring bug-free deployments with automated and manual testing.', 
        avgUSSalary: 85000 
      }
    ]
  },
  {
    slug: 'finance-accounting',
    title: 'Finance & Accounting',
    icon: <Landmark />,
    count: 6,
    roles: [
      { 
        id: 1, name: 'Accountant', 
        desc: 'General ledger management, tax prep, and financial reporting.', 
        avgUSSalary: 75000 
      },
      { 
        id: 2, name: 'Financial Analyst', 
        desc: 'Forecasting, budgeting, and deep-dive financial modeling.', 
        avgUSSalary: 85000 
      },
      { 
        id: 3, name: 'Bookkeeper', 
        desc: 'Handling day-to-day accounts, reconciliations, and ledgers.', 
        avgUSSalary: 55000 
      },
      { 
        id: 4, name: 'Payroll Processor', 
        desc: 'Accurate and timely payroll management and compliance.', 
        avgUSSalary: 60000 
      },
      { 
        id: 5, name: 'Accounts Receivable', 
        desc: 'Managing collections, invoicing, and credit control.', 
        avgUSSalary: 50000 
      },
      { 
        id: 6, name: 'Accounts Payable', 
        desc: 'Vendor management, bill processing, and expense audits.', 
        avgUSSalary: 50000 
      }
    ]
  },
  {
    slug: 'customer-support',
    title: 'Customer Support & Sales',
    icon: <Headphones />,
    count: 3,
    roles: [
      { 
        id: 1, name: 'Customer Service', 
        desc: 'Professional multi-channel support to delight your customers.', 
        avgUSSalary: 45000 
      },
      { 
        id: 2, name: 'Live Chat & Email Support', 
        desc: 'Real-time response and ticket resolution via modern tools.', 
        avgUSSalary: 42000 
      },
      { 
        id: 3, name: 'Help Desk', 
        desc: 'Technical troubleshooting and first-tier support resolution.', 
        avgUSSalary: 48000 
      }
    ]
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: <Megaphone />,
    count: 5,
    roles: [
      { 
        id: 1, name: 'Marketing Manager', 
        desc: 'Strategic planning and execution of holistic marketing plans.', 
        avgUSSalary: 95000 
      },
      { 
        id: 2, name: 'Social Media Manager', 
        desc: 'Boosting brand presence across all social platforms.', 
        avgUSSalary: 65000 
      },
      { 
        id: 3, name: 'SEO Specialist', 
        desc: 'Driving organic growth through keyword and on-page optimization.', 
        avgUSSalary: 75000 
      },
      { 
        id: 4, name: 'Content Marketing', 
        desc: 'Creating high-value assets that engage and convert leads.', 
        avgUSSalary: 70000 
      },
      { 
        id: 5, name: 'Copywriting', 
        desc: 'Compelling ad copy, blogs, and marketing communications.', 
        avgUSSalary: 68000 
      }
    ]
  },
  {
    slug: 'admin-hr',
    title: 'Admin, HR & Recruitment',
    icon: <Users />,
    count: 5,
    roles: [
      { 
        id: 1, name: 'Executive Assistant', 
        desc: 'High-level admin support for busy executives and founders.', 
        avgUSSalary: 70000 
      },
      { 
        id: 2, name: 'Office Administration', 
        desc: 'Managing operational logistics and day-to-day office tasks.', 
        avgUSSalary: 48000 
      },
      { 
        id: 3, name: 'Personal Assistant', 
        desc: 'Dedicated support for personal and professional organization.', 
        avgUSSalary: 52000 
      },
      { 
        id: 4, name: 'Recruiter', 
        desc: 'Sourcing, screening, and onboarding top-tier global talent.', 
        avgUSSalary: 75000 
      },
      { 
        id: 5, name: 'HR Support', 
        desc: 'Assisting with employee relations and administrative HR.', 
        avgUSSalary: 60000 
      }
    ]
  }
];
