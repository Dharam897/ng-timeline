import { ICompany } from "./timeline.interface";

export const comapnies: ICompany[] = [
    {
      companyName: 'Own Master',
      companyLogo: 'https://www.wipro.com/content/dam/nexus/staticsites/homepage/header/Wipro_Primary%20Logo_Color_RGB.svg',
      experiences: [
        {
          designation: 'Self-employed',
          duration: 'Mar 2022 - Present · 10 mos'
        }
      ]
    },
    {
      companyName: 'BharatPe',
      companyLogo: 'https://www.wipro.com/content/dam/nexus/staticsites/homepage/header/Wipro_Primary%20Logo_Color_RGB.svg',
      experiences: [
        {
          designation: 'MD & Co-Founder',
          duration: 'Aug 2021 - Mar 2022 · 8 mos',
          jobLocation: 'Delhi, India'
        },
        {
          designation: 'CEO & Co-Founder',
          duration: 'Oct 2018 - Aug 2021 · 2 yrs 11 mos',
          jobDescription: "Building the largest offline merchant network in India by making mobile payments acceptance free and ubiquitous.",
          jobLocation: 'New Delhi Area, India'
        }
      ]
    },
    {
      companyName: 'Head Of New Business',
      companyLogo: 'https://www.wipro.com/content/dam/nexus/staticsites/homepage/header/Wipro_Primary%20Logo_Color_RGB.svg',
      experiences: [
        {
          duration: 'Nov 2017 - Oct 2018 · 1 yr',
          jobLocation: 'New Delhi Area, India',
          jobDescription: 'Led digital transformation and strategy at the second largest Jewellery retailer in India. Enabled PayTM, PhonePe, Pine Labs, Magic Pin and QwikCilver. Consolidated e-comm operations under a single brand PCJ. Set the company up for next phase of consumer experience driven growth and diversification into adjacent businesses.'
        }
      ]
    }
];