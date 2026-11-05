export const site = {
  name: "Mustafa Öztürk",
  title: "Mustafa Öztürk — Software Developer",
  description:
    "Mustafa Öztürk is a full-stack developer and AI engineer in Istanbul, currently at Vodafone Türkiye.",
  url: "https://mustafaozturk.kim",
  locale: "en_US",
  twitter: "@_bymustfa",
  email: null as string | null,
  links: {
    github: "https://github.com/bymustfa",
    linkedin: "https://www.linkedin.com/in/bymustfa/",
    x: "https://x.com/_bymustfa",
    medium: "https://medium.com/@bymustfa",
  },
};

export type Tone = "cream" | "blue" | "red" | "ink";

export type Copy = { en: string; tr: string };

export type ProjectLink = Copy & { href: string };

export type Project = {
  slug: string;
  featured?: boolean;
  title: string;
  year?: string;
  context: Copy;
  tags: { label: Copy; tone: Exclude<Tone, "ink"> }[];
  summary: Copy;
  body: { en: string[]; tr: string[] };
  role?: Copy;
  stack: string[];
  links: ProjectLink[];
  tiles: { label: string; mark: string; tone: Tone }[];
};

export const placesAndTools = [
  "Vodafone Türkiye",
  "Smartiks",
  "Gökkuşağı Yazılım",
  "Litesoft",
  "TypeScript",
  "Next.js",
  "React",
  "React Native",
  "NestJS",
  "Go",
  ".NET",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "Redis",
  "Tailwind",
];

export const stackGroups: { label: Copy; items: string[] }[] = [
  {
    label: { en: "Languages", tr: "Diller" },
    items: ["TypeScript", "JavaScript", "Go", "PHP", "C#", "Swift", "Python"],
  },
  {
    label: { en: "Frontend & mobile", tr: "Ön yüz ve mobil" },
    items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    label: { en: "Backend", tr: "Backend" },
    items: ["NestJS", "Express", "Go", ".NET", "FastAPI", "Laravel"],
  },
  {
    label: { en: "Data & delivery", tr: "Veri ve dağıtım" },
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    label: { en: "AI", tr: "Yapay zekâ" },
    items: ["MCP servers", "LLM features", "Document AI"],
  },
];

export const projects: Project[] = [
  {
    slug: "devatlas",
    featured: true,
    title: "DevAtlas",
    context: { en: "Product", tr: "Ürün" },
    tags: [
      { label: { en: "Full-stack", tr: "Full-stack" }, tone: "cream" },
      { label: { en: "AI", tr: "Yapay zekâ" }, tone: "blue" },
      { label: { en: "MCP", tr: "MCP" }, tone: "red" },
    ],
    summary: {
      en: "Shared project memory for teams and coding agents: context, durable memory, and a task queue tied to GitHub pull requests, plus diagrams, notes, and data models.",
      tr: "Ekipler ve kod ajanları için ortak proje hafızası: bağlam, kalıcı bellek ve GitHub pull request'lerine bağlı bir görev kuyruğu; yanında diyagram, not ve veri modeli.",
    },
    role: {
      en: "Product I build",
      tr: "Üzerinde çalıştığım ürün",
    },
    body: {
      en: [
        "DevAtlas is shared project memory for a software team and the agents working in that repo. An MCP server with OAuth gives coding agents project context, durable memory, and a task queue connected to GitHub pull requests.",
        "The same workspace holds architecture diagrams, collaborative notes, and data models so a person and an agent read the same picture of the system. Most of the product lives in private repositories.",
      ],
      tr: [
        "DevAtlas, bir yazılım ekibi ve o depoda çalışan ajanlar için ortak proje hafızası. OAuth'lu bir MCP sunucusu, kod ajanlarına proje bağlamı, kalıcı bellek ve GitHub pull request'lerine bağlı bir görev kuyruğu veriyor.",
        "Aynı çalışma alanında mimari diyagramlar, ortak notlar ve veri modelleri duruyor; insan ve ajan sistemin aynı resmine bakıyor. Ürünün büyük kısmı özel depolarda.",
      ],
    },
    stack: ["TypeScript", "MCP", "OAuth", "GitHub"],
    links: [],
    tiles: [
      { label: "MCP", mark: "01", tone: "cream" },
      { label: "OAuth", mark: "02", tone: "blue" },
      { label: "Tasks", mark: "03", tone: "red" },
      { label: "ERD", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "yanimda-premium",
    featured: true,
    title: "Yanımda Premium",
    year: "2022",
    context: { en: "Vodafone Türkiye", tr: "Vodafone Türkiye" },
    tags: [
      { label: { en: "Frontend", tr: "Ön yüz" }, tone: "cream" },
      { label: { en: "Next.js", tr: "Next.js" }, tone: "blue" },
      { label: { en: "TypeScript", tr: "TypeScript" }, tone: "red" },
    ],
    summary: {
      en: "Frontend work on Vodafone Türkiye's Yanımda Premium experience, where customer privileges are presented.",
      tr: "Vodafone Türkiye'nin Yanımda Premium deneyiminde ön yüz işi. Müşteri ayrıcalıklarının sunulduğu yüzey.",
    },
    role: {
      en: "Frontend developer at Vodafone Türkiye",
      tr: "Vodafone Türkiye'de ön yüz geliştirici",
    },
    body: {
      en: [
        "At Vodafone Türkiye I work on large frontends, moving older interfaces onto React and Next.js. Yanımda Premium is one of those surfaces: the place Vodafone customers meet their privileges.",
        "My part is the frontend. The public experience lives at vodafone.com.tr/premium.",
      ],
      tr: [
        "Vodafone Türkiye'de büyük ön yüzlerde çalışıyorum; eski arayüzleri React ve Next.js'e taşıyoruz. Yanımda Premium bu yüzeylerden biri: Vodafone müşterisinin ayrıcalıklarıyla karşılaştığı yer.",
        "Benim payım ön yüz. Açık adres vodafone.com.tr/premium.",
      ],
    },
    stack: ["TypeScript", "Next.js", "React"],
    links: [
      {
        href: "https://www.vodafone.com.tr/premium",
        en: "Open the live site",
        tr: "Canlı siteyi aç",
      },
    ],
    tiles: [
      { label: "VF", mark: "TR", tone: "red" },
      { label: "Next", mark: "JS", tone: "cream" },
      { label: "TS", mark: "<>", tone: "blue" },
      { label: "Web", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "somra-media",
    featured: true,
    title: "Somra Media",
    context: { en: "Open source", tr: "Açık kaynak" },
    tags: [
      { label: { en: "Open source", tr: "Açık kaynak" }, tone: "cream" },
      { label: { en: "Go", tr: "Go" }, tone: "blue" },
      { label: { en: "Docker", tr: "Docker" }, tone: "red" },
    ],
    summary: {
      en: "Self-hosted home media server: library, metadata, streaming, requests, and automation in one Docker install.",
      tr: "Kendi sunucunda çalışan ev medya sunucusu: kütüphane, metadata, yayın, istek ve otomasyon tek Docker kurulumunda.",
    },
    role: {
      en: "Product I build with Somra Lab",
      tr: "Somra Lab ile üzerinde çalıştığım ürün",
    },
    body: {
      en: [
        "Somra is a home media server shipped as a single Docker image. The public repo describes the scope as library, metadata, transcoding and streaming, requests, and automation, with as little configuration as possible.",
        "The roadmap in the repository marks the path through playback, hardware acceleration, requests, and indexers as done. The 1.0 open-source release is still in progress. The license is AGPL-3.0-or-later. The backend is Go.",
      ],
      tr: [
        "Somra, tek bir Docker imajı olarak dağıtılan bir ev medya sunucusu. Açık depo kapsamı kütüphane, metadata, transcoding ve yayın, istek ve otomasyon olarak yazıyor; mümkün olduğunca az yapılandırma.",
        "Depodaki yol haritası oynatma, donanım hızlandırma, istek ve indeksleyicilere kadar olan kısmı tamamlanmış işaretliyor. 1.0 açık kaynak sürümü hâlâ sürüyor. Lisans AGPL-3.0-or-later. Backend Go.",
      ],
    },
    stack: ["Go", "Docker", "Web"],
    links: [
      {
        href: "https://github.com/somralab/somra-media",
        en: "View the repository",
        tr: "Depoyu aç",
      },
    ],
    tiles: [
      { label: "Go", mark: "GO", tone: "blue" },
      { label: "Docker", mark: "01", tone: "cream" },
      { label: "Media", mark: "02", tone: "red" },
      { label: "AGPL", mark: "03", tone: "ink" },
    ],
  },
  {
    slug: "popil",
    featured: true,
    title: "Popil",
    context: { en: "Product", tr: "Ürün" },
    tags: [
      { label: { en: "Mobile", tr: "Mobil" }, tone: "cream" },
      { label: { en: "AI", tr: "Yapay zekâ" }, tone: "blue" },
      { label: { en: "Full-stack", tr: "Full-stack" }, tone: "red" },
    ],
    summary: {
      en: "A news product with an AI layer: RSS ingestion, LLM summaries, clickbait-title detection, and trend-based push notifications.",
      tr: "Yapay zekâ katmanlı bir haber ürünü: RSS toplama, LLM özetleri, clickbait başlık tespiti ve trend bildirimleri.",
    },
    role: {
      en: "Product I build",
      tr: "Üzerinde çalıştığım ürün",
    },
    body: {
      en: [
        "Popil is a news app with an AI layer on top of an RSS ingestion pipeline. Language models write summaries, flag clickbait titles, and drive trend-based push notifications.",
        "The product has a React Native app, a Next.js web surface, and an admin dashboard. It is not a public repository.",
      ],
      tr: [
        "Popil, bir RSS toplama hattının üstüne oturan yapay zekâ katmanlı bir haber uygulaması. Dil modelleri özet yazıyor, clickbait başlıkları işaretliyor ve trend bildirimlerini besliyor.",
        "Ürünün bir React Native uygulaması, bir Next.js web yüzeyi ve bir yönetim paneli var. Açık bir depo değil.",
      ],
    },
    stack: ["React Native", "Next.js", "LLM"],
    links: [],
    tiles: [
      { label: "RSS", mark: "01", tone: "cream" },
      { label: "LLM", mark: "02", tone: "red" },
      { label: "RN", mark: "03", tone: "blue" },
      { label: "Web", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "evde-internet",
    title: "Evde İnternet",
    year: "2022",
    context: { en: "Vodafone Türkiye", tr: "Vodafone Türkiye" },
    tags: [
      { label: { en: "Frontend", tr: "Ön yüz" }, tone: "cream" },
      { label: { en: "Delivery", tr: "Dağıtım" }, tone: "blue" },
      { label: { en: "Next.js", tr: "Next.js" }, tone: "red" },
    ],
    summary: {
      en: "Frontend and delivery work for the experience used by Vodafone home internet customers.",
      tr: "Vodafone ev interneti müşterilerinin kullandığı deneyim için ön yüz ve dağıtım işi.",
    },
    role: {
      en: "Frontend and devops at Vodafone Türkiye",
      tr: "Vodafone Türkiye'de ön yüz ve devops",
    },
    body: {
      en: [
        "Evde İnternet is the Vodafone Türkiye surface for home internet customers. On this project I worked the frontend and the delivery side of the OSS experience those customers use.",
        "The stack on my side is Next.js and TypeScript. The public page is vodafone.com.tr/evdeinternet.",
      ],
      tr: [
        "Evde İnternet, Vodafone Türkiye'nin ev interneti müşterisine bakan yüzeyi. Bu projede ön yüzde ve müşterilerin kullandığı OSS deneyiminin dağıtım tarafında çalıştım.",
        "Benim taraftaki yığın Next.js ve TypeScript. Açık sayfa vodafone.com.tr/evdeinternet.",
      ],
    },
    stack: ["Next.js", "TypeScript"],
    links: [
      {
        href: "https://www.vodafone.com.tr/evdeinternet",
        en: "Open the live site",
        tr: "Canlı siteyi aç",
      },
    ],
    tiles: [
      { label: "VF", mark: "EV", tone: "red" },
      { label: "Next", mark: "JS", tone: "cream" },
      { label: "OSS", mark: "03", tone: "blue" },
      { label: "Web", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "workonlog",
    title: "Workonlog DocAI",
    context: { en: "Product", tr: "Ürün" },
    tags: [
      { label: { en: "Document AI", tr: "Doküman AI" }, tone: "cream" },
      { label: { en: "Full-stack", tr: "Full-stack" }, tone: "blue" },
      { label: { en: "Next.js", tr: "Next.js" }, tone: "red" },
    ],
    summary: {
      en: "Operations documents that arrive by email or PDF — invoices, orders, delivery notes, price requests — become typed JSON, then get reviewed in a Next.js app.",
      tr: "E-posta veya PDF ile gelen operasyon evrakı — fatura, sipariş, irsaliye, fiyat talebi — tipli JSON'a dönüyor, sonra bir Next.js uygulamasında inceleniyor.",
    },
    role: {
      en: "Product I build",
      tr: "Üzerinde çalıştığım ürün",
    },
    body: {
      en: [
        "Workonlog DocAI takes operational paperwork that shows up as email or PDF and turns it into typed JSON with a language-model extraction layer.",
        "A person reviews the result in a Next.js app. The documents in scope are invoices, orders, delivery notes, and price requests.",
      ],
      tr: [
        "Workonlog DocAI, e-posta veya PDF olarak gelen operasyon evrakını bir dil modeli çıkarma katmanıyla tipli JSON'a çeviriyor.",
        "Sonucu bir kişi Next.js uygulamasında inceliyor. Kapsamdaki evrak fatura, sipariş, irsaliye ve fiyat talebi.",
      ],
    },
    stack: ["Next.js", "LLM"],
    links: [],
    tiles: [
      { label: "PDF", mark: "01", tone: "cream" },
      { label: "JSON", mark: "02", tone: "blue" },
      { label: "LLM", mark: "03", tone: "red" },
      { label: "Next", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "mustiflix",
    title: "Mustiflix",
    context: { en: "Product", tr: "Ürün" },
    tags: [
      { label: { en: "Streaming", tr: "Yayın" }, tone: "cream" },
      { label: { en: "Android TV", tr: "Android TV" }, tone: "blue" },
      { label: { en: "Full-stack", tr: "Full-stack" }, tone: "red" },
    ],
    summary: {
      en: "Movie and series platform for web and Android TV: HLS playback, remote-friendly navigation, and its own CMS.",
      tr: "Web ve Android TV için film ve dizi platformu: HLS oynatma, kumandayla gezinme ve kendi CMS'i.",
    },
    role: {
      en: "Product I build",
      tr: "Üzerinde çalıştığım ürün",
    },
    body: {
      en: [
        "Mustiflix is a movie and series platform with two clients: the web and Android TV. Playback is HLS, and the TV client is built for a remote rather than a pointer.",
        "The catalog is run from its own CMS. This one stays in private repositories.",
      ],
      tr: [
        "Mustiflix, web ve Android TV olarak iki istemcisi olan bir film ve dizi platformu. Oynatma HLS. TV istemcisi imleç için değil, kumanda için kurulmuş.",
        "Katalog kendi CMS'inden yönetiliyor. Bu iş özel depolarda duruyor.",
      ],
    },
    stack: ["HLS", "Android TV", "CMS"],
    links: [],
    tiles: [
      { label: "HLS", mark: "01", tone: "red" },
      { label: "TV", mark: "02", tone: "cream" },
      { label: "CMS", mark: "03", tone: "blue" },
      { label: "Web", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "sap-basis",
    title: "SAP Basis Automation",
    context: { en: "SaaS", tr: "SaaS" },
    tags: [
      { label: { en: "SaaS", tr: "SaaS" }, tone: "cream" },
      { label: { en: "Backend", tr: "Backend" }, tone: "blue" },
      { label: { en: "Multi-tenant", tr: "Çok kiracılı" }, tone: "red" },
    ],
    summary: {
      en: "Multi-tenant SaaS that centralizes SAP Basis operations — users and roles, transports, and job monitoring over RFC — across ECC, S/4HANA, BW, and BTP.",
      tr: "SAP Basis operasyonunu toplayan çok kiracılı SaaS: kullanıcı ve roller, transport ve RFC üzerinden iş izleme. ECC, S/4HANA, BW ve BTP.",
    },
    role: {
      en: "Product I build",
      tr: "Üzerinde çalıştığım ürün",
    },
    body: {
      en: [
        "SAP Basis Automation is a multi-tenant, cloud-native SaaS for SAP Basis work that usually sits in separate landscapes. It covers users and roles, transports, and job monitoring over RFC.",
        "The landscapes it talks to are ECC, S/4HANA, BW, and BTP.",
      ],
      tr: [
        "SAP Basis Automation, normalde ayrı landscape'lerde duran SAP Basis işi için çok kiracılı, bulutta çalışan bir SaaS. Kullanıcı ve roller, transport ve RFC üzerinden iş izlemeyi kapsıyor.",
        "Konuştuğu landscape'ler ECC, S/4HANA, BW ve BTP.",
      ],
    },
    stack: ["SaaS", "RFC", "SAP"],
    links: [],
    tiles: [
      { label: "SAP", mark: "01", tone: "blue" },
      { label: "RFC", mark: "02", tone: "cream" },
      { label: "SaaS", mark: "03", tone: "red" },
      { label: "BTP", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "querra-ide",
    title: "Querra IDE",
    context: { en: "In progress", tr: "Sürüyor" },
    tags: [
      { label: { en: "Product", tr: "Ürün" }, tone: "cream" },
      { label: { en: "Databases", tr: "Veritabanı" }, tone: "blue" },
      { label: { en: "In progress", tr: "Sürüyor" }, tone: "red" },
    ],
    summary: {
      en: "A native multi-database client for working with more than one database from a single interface. Still in progress.",
      tr: "Birden fazla veritabanını tek arayüzden yönetmek için native bir istemci. Hâlâ geliştiriliyor.",
    },
    role: {
      en: "Product I build",
      tr: "Üzerinde çalıştığım ürün",
    },
    body: {
      en: [
        "Querra IDE is a native client for people who keep more than one database open. The aim is one interface instead of a different tool per engine.",
        "It is in progress, and there is no public repository to link yet.",
      ],
      tr: [
        "Querra IDE, birden fazla veritabanını açık tutanlar için native bir istemci. Hedef, her motor için ayrı araç yerine tek arayüz.",
        "Geliştirme sürüyor ve bağlanacak açık bir depo henüz yok.",
      ],
    },
    stack: ["Native", "Databases"],
    links: [],
    tiles: [
      { label: "SQL", mark: "01", tone: "cream" },
      { label: "IDE", mark: "02", tone: "blue" },
      { label: "DB", mark: "03", tone: "red" },
      { label: "WIP", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "ohs-platform",
    title: "OHS platform",
    context: { en: "Product", tr: "Ürün" },
    tags: [
      { label: { en: "SaaS", tr: "SaaS" }, tone: "cream" },
      { label: { en: "Full-stack", tr: "Full-stack" }, tone: "blue" },
    ],
    summary: {
      en: "Occupational health and safety management for OSGB units and the workplaces they serve.",
      tr: "OSGB birimleri ve hizmet verdikleri işyerleri için iş sağlığı ve güvenliği yönetimi.",
    },
    role: {
      en: "Product I build",
      tr: "Üzerinde çalıştığım ürün",
    },
    body: {
      en: [
        "This is an occupational health and safety platform for OSGB units — the joint health and safety practices in Türkiye — and the client workplaces attached to them.",
        "It is product work, not a public repository.",
      ],
      tr: [
        "Bu, OSGB birimleri ve onlara bağlı işyerleri için bir iş sağlığı ve güvenliği platformu.",
        "Ürün işi; açık bir depo değil.",
      ],
    },
    stack: ["TypeScript", "SaaS"],
    links: [],
    tiles: [
      { label: "OHS", mark: "01", tone: "cream" },
      { label: "OSGB", mark: "02", tone: "red" },
      { label: "SaaS", mark: "03", tone: "blue" },
      { label: "TR", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "mysql-mcp",
    title: "mysql-mcp",
    year: "2025",
    context: { en: "Open source", tr: "Açık kaynak" },
    tags: [
      { label: { en: "Open source", tr: "Açık kaynak" }, tone: "cream" },
      { label: { en: "MCP", tr: "MCP" }, tone: "blue" },
      { label: { en: "TypeScript", tr: "TypeScript" }, tone: "red" },
    ],
    summary: {
      en: "An MCP server that lets a language model explore and query MySQL.",
      tr: "Bir dil modelinin MySQL'i gezmesini ve sorgulamasını sağlayan MCP sunucusu.",
    },
    role: { en: "Author", tr: "Geliştiren" },
    body: {
      en: [
        "mysql-mcp is a public MCP server. It gives a language model a way to explore a MySQL database and run queries against it.",
        "The repository is TypeScript, published under bymustfa/mysql-mcp.",
      ],
      tr: [
        "mysql-mcp, açık bir MCP sunucusu. Bir dil modeline MySQL veritabanını gezme ve ona sorgu atma yolu veriyor.",
        "Depo TypeScript. Adres bymustfa/mysql-mcp.",
      ],
    },
    stack: ["TypeScript", "MySQL", "MCP"],
    links: [
      {
        href: "https://github.com/bymustfa/mysql-mcp",
        en: "View the repository",
        tr: "Depoyu aç",
      },
    ],
    tiles: [
      { label: "SQL", mark: "01", tone: "blue" },
      { label: "MCP", mark: "02", tone: "cream" },
      { label: "TS", mark: "03", tone: "red" },
      { label: "OSS", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "get-similar-color",
    title: "get-similar-color",
    year: "2023",
    context: { en: "Open source", tr: "Açık kaynak" },
    tags: [
      { label: { en: "Open source", tr: "Açık kaynak" }, tone: "cream" },
      { label: { en: "Library", tr: "Kütüphane" }, tone: "blue" },
      { label: { en: "TypeScript", tr: "TypeScript" }, tone: "red" },
    ],
    summary: {
      en: "A TypeScript library that finds a close color inside a palette. It runs in the browser or on the server.",
      tr: "Bir paletin içinde yakın rengi bulan TypeScript kütüphanesi. Tarayıcıda da sunucuda da çalışır.",
    },
    role: { en: "Author", tr: "Geliştiren" },
    body: {
      en: [
        "get-similar-color is a small TypeScript library. You give it a palette and a target color; it returns a nearby match.",
        "The same functions work in a frontend or a backend. It is published on npm as get-similar-color and on GitHub under bymustfa/get-similar-color.",
      ],
      tr: [
        "get-similar-color küçük bir TypeScript kütüphanesi. Bir palet ve bir hedef renk veriyorsun; yakın eşleşmeyi döndürüyor.",
        "Aynı fonksiyonlar ön yüzde de backend'de de çalışıyor. npm'de get-similar-color, GitHub'da bymustfa/get-similar-color.",
      ],
    },
    stack: ["TypeScript", "npm"],
    links: [
      {
        href: "https://github.com/bymustfa/get-similar-color",
        en: "View the repository",
        tr: "Depoyu aç",
      },
      {
        href: "https://www.npmjs.com/package/get-similar-color",
        en: "View on npm",
        tr: "npm'de aç",
      },
    ],
    tiles: [
      { label: "HEX", mark: "#", tone: "red" },
      { label: "TS", mark: "01", tone: "cream" },
      { label: "npm", mark: "02", tone: "blue" },
      { label: "OSS", mark: "03", tone: "ink" },
    ],
  },
  {
    slug: "claude-limit",
    title: "claude-limit",
    year: "2026",
    context: { en: "Open source", tr: "Açık kaynak" },
    tags: [
      { label: { en: "macOS", tr: "macOS" }, tone: "cream" },
      { label: { en: "Swift", tr: "Swift" }, tone: "blue" },
      { label: { en: "Open source", tr: "Açık kaynak" }, tone: "red" },
    ],
    summary: {
      en: "A macOS menu bar app that splits a weekly Claude Code limit into a daily share.",
      tr: "Haftalık Claude Code limitini günlük paya bölen bir macOS menü çubuğu uygulaması.",
    },
    role: { en: "Author", tr: "Geliştiren" },
    body: {
      en: [
        "claude-limit sits in the macOS menu bar. It takes a weekly Claude Code usage limit and divides it into a daily share so the week is easier to pace.",
        "The app is Swift. The repository is bymustfa/claude-limit.",
      ],
      tr: [
        "claude-limit macOS menü çubuğunda duruyor. Haftalık Claude Code kullanım limitini günlük paya bölüyor; haftayı tempo tutmak kolaylaşıyor.",
        "Uygulama Swift. Depo bymustfa/claude-limit.",
      ],
    },
    stack: ["Swift", "macOS"],
    links: [
      {
        href: "https://github.com/bymustfa/claude-limit",
        en: "View the repository",
        tr: "Depoyu aç",
      },
    ],
    tiles: [
      { label: "macOS", mark: "01", tone: "cream" },
      { label: "Swift", mark: "02", tone: "blue" },
      { label: "Menu", mark: "03", tone: "red" },
      { label: "OSS", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "vsx-diff",
    title: "vsx-diff",
    year: "2026",
    context: { en: "Open source", tr: "Açık kaynak" },
    tags: [
      { label: { en: "Tooling", tr: "Araç" }, tone: "cream" },
      { label: { en: "TypeScript", tr: "TypeScript" }, tone: "blue" },
      { label: { en: "Open source", tr: "Açık kaynak" }, tone: "red" },
    ],
    summary: {
      en: "Diffs a VS Code or Cursor extension update — manifest, scripts, dependencies, files — before you trust it, with pin, rollback, and cooldown.",
      tr: "Bir VS Code veya Cursor eklenti güncellemesini — manifest, betikler, bağımlılıklar, dosyalar — güvenmeden önce diff'ler. Pin, geri alma ve bekleme süresi var.",
    },
    role: { en: "Author", tr: "Geliştiren" },
    body: {
      en: [
        "vsx-diff compares an extension update for VS Code or Cursor against what you already have. It looks at the manifest, scripts, dependencies, and files, and calls out risky changes.",
        "You can pin a version, roll back, or hold updates behind a cooldown. The repository is TypeScript: bymustfa/vsx-diff.",
      ],
      tr: [
        "vsx-diff, VS Code veya Cursor eklenti güncellemesini elindekine göre karşılaştırıyor. Manifest'e, betiklere, bağımlılıklara ve dosyalara bakıp riskli değişimi işaretliyor.",
        "Bir sürümü sabitleyebilir, geri alabilir veya güncellemeyi bir bekleme süresinin arkasında tutabilirsin. Depo TypeScript: bymustfa/vsx-diff.",
      ],
    },
    stack: ["TypeScript"],
    links: [
      {
        href: "https://github.com/bymustfa/vsx-diff",
        en: "View the repository",
        tr: "Depoyu aç",
      },
    ],
    tiles: [
      { label: "Diff", mark: "01", tone: "red" },
      { label: "VSX", mark: "02", tone: "cream" },
      { label: "TS", mark: "03", tone: "blue" },
      { label: "Pin", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "mcp-audprobe",
    title: "mcp-audprobe",
    year: "2026",
    context: { en: "Open source", tr: "Açık kaynak" },
    tags: [
      { label: { en: "Tooling", tr: "Araç" }, tone: "cream" },
      { label: { en: "Python", tr: "Python" }, tone: "blue" },
      { label: { en: "Open source", tr: "Açık kaynak" }, tone: "red" },
    ],
    summary: {
      en: "A CLI and GitHub Action that checks whether MCP servers you own validate OAuth bearer-token audience, issuer, and expiry.",
      tr: "Sahip olduğun MCP sunucularının OAuth bearer token audience, issuer ve süre doğrulamasını kontrol eden CLI ve GitHub Action.",
    },
    role: { en: "Author", tr: "Geliştiren" },
    body: {
      en: [
        "mcp-audprobe is a test tool for MCP servers you own. It checks that those servers validate the audience, issuer, and expiry of OAuth bearer tokens.",
        "It ships as a CLI and a GitHub Action, with a local fake auth server so the check can run against your own service. The repository is Python: bymustfa/mcp-audprobe.",
      ],
      tr: [
        "mcp-audprobe, sahibi olduğun MCP sunucuları için bir test aracı. Bu sunucuların OAuth bearer token'larında audience, issuer ve süreyi doğrulayıp doğrulamadığına bakıyor.",
        "CLI ve GitHub Action olarak duruyor. Kontrolü kendi servisine karşı çalıştırman için yerel bir sahte auth sunucusu var. Depo Python: bymustfa/mcp-audprobe.",
      ],
    },
    stack: ["Python", "GitHub Actions"],
    links: [
      {
        href: "https://github.com/bymustfa/mcp-audprobe",
        en: "View the repository",
        tr: "Depoyu aç",
      },
    ],
    tiles: [
      { label: "OAuth", mark: "01", tone: "blue" },
      { label: "CLI", mark: "02", tone: "cream" },
      { label: "CI", mark: "03", tone: "red" },
      { label: "PY", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "ndk-danismanlik",
    title: "NDK Danışmanlık",
    context: { en: "Client work", tr: "Müşteri işi" },
    tags: [
      { label: { en: "Full-stack", tr: "Full-stack" }, tone: "cream" },
      { label: { en: "Next.js", tr: "Next.js" }, tone: "blue" },
      { label: { en: "MongoDB", tr: "MongoDB" }, tone: "red" },
    ],
    summary: {
      en: "A platform that brings psychologists and counselors together.",
      tr: "Psikolog ve danışmanları bir araya getiren bir platform.",
    },
    role: { en: "Full-stack build", tr: "Full-stack geliştirme" },
    body: {
      en: [
        "NDK Danışmanlık is a platform that brings psychologists and counselors together. I built it as a full-stack project.",
        "The stack is Next.js, TypeScript, Express, MongoDB, and Tailwind CSS. The site is ndkdanismanlik.com.",
      ],
      tr: [
        "NDK Danışmanlık, psikolog ve danışmanları bir araya getiren bir platform. Full-stack olarak ben geliştirdim.",
        "Yığın Next.js, TypeScript, Express, MongoDB ve Tailwind CSS. Site ndkdanismanlik.com.",
      ],
    },
    stack: ["Next.js", "TypeScript", "Express", "MongoDB", "Tailwind CSS"],
    links: [
      {
        href: "https://ndkdanismanlik.com/",
        en: "Open the site",
        tr: "Siteyi aç",
      },
    ],
    tiles: [
      { label: "Next", mark: "01", tone: "cream" },
      { label: "API", mark: "02", tone: "blue" },
      { label: "Mongo", mark: "03", tone: "red" },
      { label: "NDK", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "horozoglu",
    title: "Horozoglu Consultants",
    context: { en: "Client work", tr: "Müşteri işi" },
    tags: [
      { label: { en: "Laravel", tr: "Laravel" }, tone: "cream" },
      { label: { en: "PHP", tr: "PHP" }, tone: "blue" },
      { label: { en: "MySQL", tr: "MySQL" }, tone: "red" },
    ],
    summary: {
      en: "A financial consultancy and management site.",
      tr: "Finansal danışmanlık ve yönetim sitesi.",
    },
    role: { en: "Full-stack build", tr: "Full-stack geliştirme" },
    body: {
      en: [
        "Horozoglu Consultants is a financial consultancy and management project. I built the site on PHP.",
        "The stack is Laravel, MySQL, and Bootstrap. The site is horozogluconsultants.com.",
      ],
      tr: [
        "Horozoglu Consultants, finansal danışmanlık ve yönetim projesi. Siteyi PHP üzerine kurdum.",
        "Yığın Laravel, MySQL ve Bootstrap. Adres horozogluconsultants.com.",
      ],
    },
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    links: [
      {
        href: "https://horozogluconsultants.com",
        en: "Open the site",
        tr: "Siteyi aç",
      },
    ],
    tiles: [
      { label: "PHP", mark: "01", tone: "blue" },
      { label: "Laravel", mark: "02", tone: "red" },
      { label: "MySQL", mark: "03", tone: "cream" },
      { label: "Web", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "byk",
    title: "BYK",
    context: { en: "Client work", tr: "Müşteri işi" },
    tags: [
      { label: { en: "E-commerce", tr: "E-ticaret" }, tone: "cream" },
      { label: { en: "Next.js", tr: "Next.js" }, tone: "blue" },
      { label: { en: "PHP", tr: "PHP" }, tone: "red" },
    ],
    summary: {
      en: "An e-commerce platform for health supplies.",
      tr: "Sağlık malzemeleri için bir e-ticaret platformu.",
    },
    role: { en: "Full-stack build", tr: "Full-stack geliştirme" },
    body: {
      en: [
        "BYK is an e-commerce platform for health supplies. The published stack is PHP, Next.js, TypeScript, MongoDB, and Tailwind CSS.",
        "There is no public URL on the original portfolio entry, so this page stops at what was listed.",
      ],
      tr: [
        "BYK, sağlık malzemeleri için bir e-ticaret platformu. Yayımlanan yığın PHP, Next.js, TypeScript, MongoDB ve Tailwind CSS.",
        "Eski portfolyo kaydında açık bir adres yok; bu sayfa orada yazanla sınırlı.",
      ],
    },
    stack: ["PHP", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    links: [],
    tiles: [
      { label: "Shop", mark: "01", tone: "cream" },
      { label: "Next", mark: "02", tone: "blue" },
      { label: "PHP", mark: "03", tone: "red" },
      { label: "BYK", mark: "04", tone: "ink" },
    ],
  },
  {
    slug: "precaumed",
    title: "Precaumed",
    context: { en: "Client work", tr: "Müşteri işi" },
    tags: [
      { label: { en: "E-commerce", tr: "E-ticaret" }, tone: "cream" },
      { label: { en: "PHP", tr: "PHP" }, tone: "blue" },
      { label: { en: "Payments", tr: "Ödeme" }, tone: "red" },
    ],
    summary: {
      en: "An e-commerce platform for health supplies, with online payment.",
      tr: "Online ödemeli, sağlık malzemeleri için bir e-ticaret platformu.",
    },
    role: { en: "Full-stack build", tr: "Full-stack geliştirme" },
    body: {
      en: [
        "Precaumed is an e-commerce platform for health supplies. The published stack is PHP, MySQL, and an online payment service.",
        "The original portfolio entry has no public URL, so this page does not invent one.",
      ],
      tr: [
        "Precaumed, sağlık malzemeleri için bir e-ticaret platformu. Yayımlanan yığın PHP, MySQL ve bir online ödeme servisi.",
        "Eski portfolyo kaydında açık adres yok; bu sayfa adres uydurmuyor.",
      ],
    },
    stack: ["PHP", "MySQL"],
    links: [],
    tiles: [
      { label: "PHP", mark: "01", tone: "red" },
      { label: "MySQL", mark: "02", tone: "cream" },
      { label: "Pay", mark: "03", tone: "blue" },
      { label: "Shop", mark: "04", tone: "ink" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeatured() {
  return projects.filter((project) => project.featured);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return projects[0];
  return projects[(index + 1) % projects.length];
}

export type Experience = {
  years: string;
  place: string;
  role: Copy;
  location: string;
  summary: Copy;
  href?: string;
};

export const experience: Experience[] = [
  {
    years: "2022 —",
    place: "Vodafone Türkiye",
    role: { en: "Frontend developer", tr: "Ön yüz geliştirici" },
    location: "İstanbul",
    href: "https://www.vodafone.com.tr/",
    summary: {
      en: "I update legacy frontends with React and Next.js, including WebView work. Yanımda Premium and Evde İnternet are part of this.",
      tr: "Eski ön yüzleri React ve Next.js ile güncelliyorum; WebView işi de bunun içinde. Yanımda Premium ve Evde İnternet bu dönemin parçası.",
    },
  },
  {
    years: "2021 — 2022",
    place: "Smartiks Yazılım",
    role: { en: "Full-stack developer", tr: "Full-stack geliştirici" },
    location: "İstanbul",
    href: "https://www.smartiks.com.tr/",
    summary: {
      en: "I worked on delivery for Koç Holding projects. I built a form builder and a datatable generator so screens could ship faster, and Express tools that generated API endpoints.",
      tr: "Koç Holding projelerinin teslimatında çalıştım. Ekranları hızlandırmak için bir form builder ve datatable üretici yazdım; API uçlarını üreten Express araçları da buradan.",
    },
  },
  {
    years: "2021",
    place: "Gökkuşağı Yazılım",
    role: { en: "Full-stack developer", tr: "Full-stack geliştirici" },
    location: "İstanbul",
    href: "https://gokkusagiyazilim.com.tr/",
    summary: {
      en: "Web, mobile, ERP, and CRM work. I finished project frontends with React and Node.js.",
      tr: "Web, mobil, ERP ve CRM işleri. Proje ön yüzlerini React ve Node.js ile tamamladım.",
    },
  },
  {
    years: "2020 — 2021",
    place: "Litesoft",
    role: { en: "Frontend developer", tr: "Ön yüz geliştirici" },
    location: "İstanbul",
    href: "https://litesoft.com.tr/",
    summary: {
      en: "Software support across many companies: web and mobile with React, ASP.NET, and PHP, including ERP and CRM.",
      tr: "Birçok şirkete yazılım desteği: web ve mobilde React, ASP.NET ve PHP. ERP ve CRM de bu işlerin içindeydi.",
    },
  },
  {
    years: "2019 — 2020",
    place: "Özel eğitim kurumu",
    role: { en: "PHP developer", tr: "PHP geliştirici" },
    location: "İstanbul",
    summary: {
      en: "Web design and PHP work for education institutions.",
      tr: "Eğitim kurumları için web tasarımı ve PHP işleri.",
    },
  },
  {
    years: "2012 — 2018",
    place: "Teknik Reklam",
    role: {
      en: "Graphic designer and frontend developer",
      tr: "Grafik tasarımcı ve ön yüz geliştirici",
    },
    location: "Kastamonu",
    summary: {
      en: "I started in graphic design young: vehicle lettering, lit and unlit signage, facade cladding, social ads, then web design and programming.",
      tr: "Grafik tasarıma genç yaşta başladım: araç yazısı, ışıklı ve ışıksız tabela, cephe kaplama, sosyal medya ilanı, sonra web tasarımı ve programlama.",
    },
  },
  {
    years: "2016",
    place: "Teknorium",
    role: { en: "Software intern", tr: "Yazılım stajyeri" },
    location: "Mersin",
    summary: {
      en: "University internship in web design and programming at Teknorium Bilgisayar.",
      tr: "Teknorium Bilgisayar'da web tasarımı ve programlama üzerine üniversite stajı.",
    },
  },
  {
    years: "2015",
    place: "İl Özel İdaresi",
    role: { en: "IT intern", tr: "Bilgi işlem stajyeri" },
    location: "Kastamonu",
    summary: {
      en: "Nine months in information processing during high school, across software and hardware.",
      tr: "Lise stajında bilgi işlemde dokuz ay. Hem yazılım hem donanım tarafı.",
    },
  },
];

export const education: { years: string; title: Copy; summary?: Copy }[] = [
  {
    years: "2016 — 2018",
    title: { en: "Kastamonu University", tr: "Kastamonu Üniversitesi" },
    summary: {
      en: "C#, SQL, and PHP, plus game development and mobile development outside the core courses.",
      tr: "C#, SQL ve PHP. Bölüm dışı oyun geliştirme ve mobil geliştirme çalışmaları da bu döneme ait.",
    },
  },
  {
    years: "2019 — 2020",
    title: {
      en: "Software specialist certificate",
      tr: "Yazılım uzmanlığı sertifika programı",
    },
  },
];
