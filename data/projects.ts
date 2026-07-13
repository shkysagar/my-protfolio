import { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    slug: "ajio",
    index: "01",
    title: "AJIO",
    sub: "Social Rebranding",
    cat: "Branding · Social",

    role: "Art Direction",
    year: "Brand Social",
    doc: "ajio-social.psd",

    accent: "#ff3f8e",

    span: 7,
    tall: true,

    cover: "/images/work/ajio/ajio-01.jpg",

    tagline: "Every digital experience starts with a pixel.",

    brief:
      "Make AJIO's social presence feel younger, more fashionable, and native to the digital world.",

    approach:
      "We began with deep competitor analysis, trend research and visual referencing across fashion, culture and digital-first brands. One insight stood out: every digital experience starts with a pixel. We turned that fundamental building block of the internet into AJIO's visual language, using pixels as bold graphic elements alongside provocative, editorial-style photography. The result was a distinctive identity that felt youthful, fashion-forward and inherently made for the digital world.",

    contribution:
      "Shaped the design ideas, built and animated layouts, and guided and managed the team.",

    layout: "editorial",

    gallery: [
      {
        src: "/images/work/ajio/ajio-01.jpg",
        caption: "Pixels meet street style",
      },
      {
        src: "/images/work/ajio/ajio-03.jpg",
        caption: "Expression is contagious",
      },
      {
        src: "/images/work/ajio/ajio-04.jpg",
        caption: "Matcha, colour of the year",
      },
      {
        src: "/images/work/ajio/ajio-05.jpg",
        caption: "Listen to your fashion moms and dads",
      },
      {
        src: "/images/work/ajio/ajio-06.jpg",
        caption: "Beyond the crowd, drop launch",
      },
      {
        src: "/images/work/ajio/ajio-07.jpg",
        caption: "Trend talk, written like a friend",
      },
      {
        src: "/images/work/ajio/ajio-08.jpg",
        caption: "Product as poster",
      },
      {
        src: "/images/work/ajio/ajio-09.jpg",
        caption: "How they made an opera",
      },
      {
        src: "/images/work/ajio/ajio-10.jpg",
        caption: "Imagery direction, the moodboard",
      },
    ],

    links: [
      {
        label: "View the full set",
        href: "https://drive.google.com/drive/folders/15LDS3YmJLmhaaw9WUVedVRKZEy2GYcnf",
      },
    ],
  },

  {
    slug: "popeyes",
    index: "02",
    title: "Popeyes",
    sub: "Social Rebranding",
    cat: "Branding · Motion",

    role: "Art Direction",
    year: "Brand Social",
    doc: "popeyes-flavour.aep",

    accent: "#ff7a00",

    span: 5,
    tall: true,

    cover: "/images/work/popeyes/popeyes-03.jpg",

    tagline: "All for flavour. Flavour for all.",

    brief:
      "Stay within the Popeyes brand world while creating social-first visuals that feel fresh, engaging and premium.",

    approach:
      "Using the existing brand guidelines as the foundation, I evolved the visual system to feel more dynamic and contemporary.",

    contribution:
      "Shaped the design ideas, built and animated layouts, directed the motion work, and guided and managed the team.",

    layout: "reel",

    videos: [
      {
        src: "/images/work/popeyes/video/clip-01.mp4",
        poster: "/images/work/popeyes/video/poster-01.jpg",
        caption: "Flavour drop",
      },
      {
        src: "/images/work/popeyes/video/clip-03.mp4",
        poster: "/images/work/popeyes/video/poster-03.jpg",
        caption: "All for flavour",
      },
    ],

    gallery: [
      {
        src: "/images/work/popeyes/popeyes-01.jpg",
        caption: "All for flavour, the key visual",
      },
      {
        src: "/images/work/popeyes/popeyes-02.jpg",
        caption: "Flavour for all, the spread",
      },
    ],

    links: [
      {
        label: "Open the deck",
        href: "https://docs.google.com/presentation/d/131V5cqkqS36wGlwdQleTW5cVBzbZVSfmzae0-Fc7skU/edit",
      },
    ],
  },

  {
    slug: "amazon",
    index: "03",
    title: "Amazon Fashion",
    sub: "Mobile Landing Page",
    cat: "Product · UX · Personal",

    role: "UX / UI",
    year: "Self-initiated",
    doc: "amazon-fashion.fig",

    accent: "#2f80ff",

    span: 4,
    tall: false,

    cover: "/images/work/amazon/cover.jpg",

    tagline: "Make choosing easier, not louder.",

    brief:
      "Reimagine the Amazon Fashion landing page to improve product discovery and reduce decision fatigue.",

    approach:
      "The redesign focuses on simplifying product discovery through clearer hierarchy and progressive exploration.",

    contribution:
      "Conducted research, developed user flows, designed wireframes and the final UI.",

    layout: "mobile",

    phone: {
      proto:
        "https://www.figma.com/proto/c4O9crGI4Wmq31u7xkRZCR/Amazon-fashion-assignment",
    },

    gallery: [
      {
        src: "/images/work/amazon/amazon-hifi.jpg",
        caption: "High-fidelity mobile flow",
      },
      {
        src: "/images/work/amazon/amazon-wires.jpg",
        caption: "Paper wireframes",
      },
      {
        src: "/images/work/amazon/amazon-mood.jpg",
        caption: "Moodboard",
      },
    ],
  },

  {
    id: 4,
    slug: "rootcause",

    title: "RootCause",
    sub: "AI Plant Care App",
    cat: "Product · UX · Personal",

    accent: "#19b36b",
    cover: "/images/work/rootcause/rc-showcase.jpg",

    span: 8,
    tall: false,

    tagline: "Meet Bloomy, your AI plant friend.",

    role: "Product Design",
    type: "Self-initiated",

    brief:
      "Inspired by my own struggle to understand why my houseplants were unhealthy, I built an AI-powered plant care platform that helps people quickly diagnose plant issues and get simple, actionable guidance.",

    thinking:
      "The experience removes the complexity from plant care. By combining image recognition with an intuitive interface, the platform helps users identify problems, understand solutions and care for their plants with confidence.",

    roleDescription:
      "Conceived the idea, conducted research, developed the brand and product strategy, and designed the complete app and responsive website experience.",

    prototype: {
      figma: "https://www.figma.com/proto/xxxxxxxxxxxxxxxx",
    },

    gallery: [
      {
        src: "/images/work/rootcause/rc-showcase.jpg",
        caption: "Five key screens",
      },
      {
        src: "/images/work/rootcause/rc-03.jpg",
        caption: "Persona",
      },
      {
        src: "/images/work/rootcause/rc-04.jpg",
        caption: "User Journey",
      },
      {
        src: "/images/work/rootcause/rc-paper.jpg",
        caption: "Paper Wireframes",
      },
      {
        src: "/images/work/rootcause/rc-06.jpg",
        caption: "Low Fidelity",
      },
      {
        src: "/images/work/rootcause/rc-08.jpg",
        caption: "Takeaways",
      },
    ],

    links: [
      {
        label: "View Designs",
        href: "https://drive.google.com/drive/folders/11u9YyTGou5IOhHUPwvJ_aOcDydpJF2a-",
      },
      {
        label: "Presentation Deck",
        href: "https://docs.google.com/presentation/d/1vFYnxL5fwUY-OsD9DZiWJpANv7hAl-FwNX-PBbsbj8A/edit",
      },
    ],
  },
  {
    id: 5,
    slug: "bgmi",

    title: "The Great In-Game Wedding",
    sub: "BGMI Campaign",
    cat: "Campaign · Art Direction",

    accent: "#f4c430",
    cover: "/images/work/bgmi/bgmi-01.jpg",

    span: 12,
    tall: false,

    tagline: "We invited India to a wedding, inside a game.",

    role: "Art Direction",
    type: "Integrated Campaign",

    brief:
      "Show that BGMI is more than just a game by celebrating the stories, relationships and communities built within it.",

    thinking:
      "We blended two worlds that rarely meet—Indian weddings and gaming. Every touchpoint, from invitations to in-game ceremonies, was art directed to feel authentically Indian while remaining true to BGMI.",

    roleDescription:
      "Shaped the concept films, art directed the in-game world, collaborated with developers and vendors, and designed the invitation and visual identity.",

    videos: [
      {
        src: "/images/work/bgmi/video/film-01.mp4",
        poster: "/images/work/bgmi/video/poster-01.jpg",
        caption: "Brand Film",
      },
      {
        src: "/images/work/bgmi/video/film-02.mp4",
        poster: "/images/work/bgmi/video/poster-02.jpg",
        caption: "Stop Motion",
      },
    ],

    stats: [
      {
        label: "Earned Media",
        value: "174M",
      },
      {
        label: "Views",
        value: "20M+",
      },
      {
        label: "Positive Sentiment",
        value: "24%",
      },
      {
        label: "Non Gamers",
        value: "69%",
      },
      {
        label: "Time in Game",
        value: "12%",
      },
    ],

    gallery: [
      {
        src: "/images/work/bgmi/bgmi-01.jpg",
        caption: "Campaign Hero",
      },
    ],

    links: [
      {
        label: "View Case",
        href: "https://drive.google.com/drive/folders/1aVKa4XWum3AqbYizAqPW6h7HhTGRHsPv",
      },
    ],
  },
  {
    id: 6,
    slug: "chand",

    title: "Chand Delivery",
    sub: "Flipkart Minutes Film",
    cat: "Film · Motion",

    accent: "#2874f0",
    cover: "/images/work/chand/cover.jpg",

    span: 4,
    tall: false,

    tagline: "Fast enough to fetch the moon.",

    role: "Art Direction",
    type: "Campaign",

    brief:
      "Create a memorable campaign film highlighting Flipkart Minutes' rapid delivery.",

    thinking:
      "Motion graphics and storytelling compensated for limited shoot assets, making the film energetic and entertaining.",

    roleDescription:
      "Developed the visual storytelling, art directed the film and designed the motion graphics.",

    videos: [
      {
        src: "https://youtu.be/tffjVlQsowQ",
        caption: "YouTube",
      },
    ],

    links: [
      {
        label: "Watch on YouTube",
        href: "https://youtu.be/tffjVlQsowQ",
      },
    ],
  },
  {
    id: 7,
    slug: "jd",

    title: "Jack Daniel's",
    sub: "Brand Manifesto Film",
    cat: "Film · Brand",

    accent: "#c8962f",
    cover: "/images/work/jd/cover.jpg",

    span: 4,
    tall: false,

    tagline: "Heritage, with a younger pulse.",

    role: "Art Direction",
    type: "Manifesto Film",

    brief:
      "Create a premium manifesto film that balances Jack Daniel's heritage with modern energy.",

    thinking:
      "Premium cinematography, typography and motion create a timeless yet contemporary visual language.",

    roleDescription:
      "Developed the visual direction and designed the look and feel of the film.",

    videos: [
      {
        src: "https://youtu.be/jjppAm4G2H0",
        caption: "Manifesto Film",
      },
    ],

    links: [
      {
        label: "Watch on YouTube",
        href: "https://youtu.be/jjppAm4G2H0",
      },
    ],
  },
  {
    id: 8,
    slug: "acko",

    title: "Driving Change",
    sub: "Acko Campaign",
    cat: "Campaign · Film",

    accent: "#7d3cff",
    cover: "/images/work/acko/cover.jpg",

    span: 4,
    tall: false,

    tagline: "The roads are changing. So are the drivers.",

    role: "Concept · Art Direction",
    type: "Welcome Change",

    brief:
      "Develop a campaign that brings Acko's 'Welcome Change' brand philosophy to life through a culturally relevant insight.",

    thinking:
      "Most driving songs and road-trip stories celebrate male drivers. The campaign flips that narrative by celebrating women behind the wheel, turning a familiar cultural behaviour into a powerful brand message.",

    roleDescription:
      "Identified the insight, developed the campaign concept and designed the visual storytelling.",

    videos: [
      {
        src: "https://youtu.be/gHh1JsBNvW8",
        caption: "Campaign Film",
      },
    ],

    links: [
      {
        label: "Watch on YouTube",
        href: "https://youtu.be/gHh1JsBNvW8",
      },
    ],
  },
  {
    id: 9,
    slug: "bloodsugar",

    title: "Blood Sugar",
    sub: "Social Awareness",
    cat: "Social · Campaign",

    accent: "#e0433c",
    cover: "/images/work/bloodsugar/cover.jpg",

    span: 6,
    tall: false,

    tagline: "Making an invisible crisis impossible to ignore.",

    role: "Concept · Design",
    type: "Cause Campaign",

    brief:
      "Raise awareness about unnecessary hysterectomies affecting women in Beed district, Maharashtra.",

    thinking:
      "Translate a complex social issue into a simple and emotionally engaging story that educates people while encouraging discussion and action.",

    roleDescription:
      "Conducted research, developed the core campaign idea, crafted the narrative and designed the final execution.",

    videos: [
      {
        src: "https://youtu.be/NBfbIQJvBzc",
        caption: "Campaign Film",
      },
    ],

    links: [
      {
        label: "Watch on YouTube",
        href: "https://youtu.be/NBfbIQJvBzc",
      },
    ],
  },
  {
    id: 10,
    slug: "younglions",

    title: "The Real Cost",
    sub: "Young Lions 2026 Print",
    cat: "Print · Concept",

    accent: "#d9a441",
    cover: "/images/work/younglions/yl-01.jpg",

    span: 6,
    tall: false,

    tagline: "Track the order. Feel the effort.",

    role: "Concept · Design",
    type: "Awards",

    brief:
      "Create a print campaign revealing the hidden human effort behind instant delivery.",

    thinking:
      "Instead of tracking a delivery, the campaign visualises the delivery partner's heart rate, transforming a familiar interface into an emotional statement about the true cost of convenience.",

    roleDescription:
      "Developed the creative insight, designed the visual storytelling and created the final Young Lions submission.",

    gallery: [
      {
        src: "/images/work/younglions/yl-01.jpg",
        caption: "Print in Context",
      },
      {
        src: "/images/work/younglions/yl-03.jpg",
        caption: "Artwork Concept One",
      },
      {
        src: "/images/work/younglions/yl-02.jpg",
        caption: "Print in Context",
      },
      {
        src: "/images/work/younglions/yl-04.jpg",
        caption: "Artwork Concept Two",
      },
    ],

    links: [
      {
        label: "View Designs",
        href: "https://drive.google.com/drive/folders/1ma3f4lTBXw_hLbf3hUabzt3gVrQHA2Gu",
      },
    ],
  },
];
