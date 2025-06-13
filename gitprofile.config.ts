// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'stefan-suttner', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Work in Progress',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Keck, A., Moser, C. and Suttner, S. (2025): Trade Dispute Settlement, Enforcement and the WTO',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
        {
          title: 'Moser, C. and Suttner, S. (2025): What You Get in Returns: Donor Country Incentives and Unilateral Trade Liberalization',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Stefan Suttner',
    description: 'Stefan Suttner | ',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.gg.rw.fau.de/team/stefan-suttner/',
    phone: '',
    email: 'stefan.suttner_at_fau.de',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'International Trade',
    'Trade Policy',
    'Political Economy',
    'International Institutions',
  ],
  experiences: [
    {
      company: 'Chair for Global Governance and International Trade, University of Erlangen-Nuremberg (FAU), DE',
      position: 'Research & Teaching Associate',
      from: 'October 2018',
      to: 'Present',
      companyLink: 'https://www.gg.rw.fau.de/team/stefan-suttner/',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Erlangen-Nuremberg (FAU), DE',
      degree: 'PhD in Economics',
      from: '2024',
      to: '',
    },
    {
      institution: 'University of Munich (LMU), DE',
      degree: 'MSc in Economics',
      from: '2015',
      to: '',
    },
   {
      institution: 'University of Munich (LMU), DE',
      degree: 'BSc in Economics',
      from: '2012',
      to: '',
    },
  ],
  publications: [
    {
      title: 'Issue Linkage and Trade Policy Uncertainty: Evidence from Trade Preferences for Developing Countries',
      conferenceName: 'mimeo, June 2025.',
      journalName: 'Earlier Version: FAU Discussion Paper in Economics 07/2023',
      authors: '',
      link: 'files/IssueLinkageAndTPU_Suttner_June25.pdf',
      description:
        'This paper quantifies potential costs of issue linkage examining trade preferences granted under the US Generalized System of Preferences (GSP). Preferential market access via US GSP is conditional on political practices by beneficiaries. Using monthly import data, I study trade policy uncertainty related to country-level GSP eligibility reviews conducted by the US administration. For cases initiated between 2003 and 2019, I find negative effects for trade flows from countries under review despite the fact that applied tariffs remained unchanged during the review process. The estimated trade effects of eligibility reviews are sizable and confined to eligible imports for which preferences have been actually claimed. The main findings also hold true for imports for which trade preferences eventually remain in force after the review ended. This can be explained by uncertainty, not anticipation. On average, there are also no anticipation effects prior to the reviews. Hence, the assumption of exogenous treatment is plausible. The results suggest that trade policy uncertainty induced by issue linkage may undermine trade-promoting incentives of trade preferences at stake.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
