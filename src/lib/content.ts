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
    label: { en: "AI engineering", tr: "Yapay zekâ mühendisliği" },
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
      en: "Shared memory for a team and the agents in the repo. Context, saved notes, and a task queue tied to GitHub PRs. Diagrams and data models live there too.",
      tr: "Ekip ve repodaki ajanlar için ortak hafıza. Bağlam, kalıcı not, GitHub PR'ına bağlı görevler. Diyagram ve veri modeli de burada.",
    },
    role: {
      en: "My product",
      tr: "Kendi ürünüm",
    },
    body: {
      en: [
        "I build DevAtlas. An MCP server with OAuth gives an agent the project context, saved notes, and a task queue tied to GitHub PRs.",
        "Diagrams, notes, and data models sit in the same place. Most of the code is in private repos.",
      ],
      tr: [
        "DevAtlas'ı ben kuruyorum. OAuth'lu bir MCP sunucusu ajana proje bağlamı, kalıcı not ve PR'a bağlı görev kuyruğu veriyor.",
        "Diyagram, not ve veri modeli aynı yerde. Kodun çoğu özel repoda.",
      ],
    },
    stack: ["TypeScript", "MCP", "OAuth", "GitHub"],
    links: [],
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
      en: "Frontend for Vodafone Türkiye Yanımda Premium. Customer privileges are listed on that page.",
      tr: "Vodafone Türkiye, Yanımda Premium ön yüzü. Müşteri ayrıcalıkları bu sayfada.",
    },
    role: {
      en: "Frontend at Vodafone Türkiye",
      tr: "Vodafone'da ön yüz",
    },
    body: {
      en: [
        "At Vodafone we move old frontends onto React and Next.js. Yanımda Premium is one of them.",
        "My part is the frontend. It lives at vodafone.com.tr/premium.",
      ],
      tr: [
        "Vodafone'da eski ön yüzleri React ve Next.js'e taşıyoruz. Yanımda Premium de onlardan.",
        "Benim payım ön yüz. Adres vodafone.com.tr/premium.",
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
      en: "A home media server. Library, metadata, streaming, requests, automation. One Docker image.",
      tr: "Ev medya sunucusu. Kütüphane, metadata, yayın, istek, otomasyon. Tek Docker.",
    },
    role: {
      en: "With Somra Lab",
      tr: "Somra Lab ile",
    },
    body: {
      en: [
        "I build Somra with Somra Lab. One Docker image: library, metadata, transcoding, streaming, requests, automation. We keep the settings short.",
        "Playback, hardware acceleration, requests, and indexers are basically done. 1.0 is still open. License is AGPL-3.0-or-later. Backend is Go.",
      ],
      tr: [
        "Somra'yı Somra Lab ile yazıyoruz. Tek Docker imajı: kütüphane, metadata, transcoding, yayın, istek, otomasyon. Ayar az olsun diye.",
        "Oynatma, donanım hızlandırma, istek ve indeksleyiciler bitti sayılır. 1.0 hâlâ açık. Lisans AGPL-3.0-or-later. Backend Go.",
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
      en: "A news app. It pulls RSS, writes LLM summaries, flags clickbait titles, and pushes when something trends.",
      tr: "Haber uygulaması. RSS toplar, LLM özet yazar, clickbait başlığı işaretler, trend olunca bildirim atar.",
    },
    role: {
      en: "My product",
      tr: "Kendi ürünüm",
    },
    body: {
      en: [
        "RSS comes in. A model writes the summary, flags clickbait titles, and sends a push when something trends.",
        "There is a React Native app, a Next.js site, and an admin panel. The repo is private.",
      ],
      tr: [
        "RSS geliyor. Model özet yazıyor, clickbait başlığı işaretliyor, trend varsa bildirim gidiyor.",
        "React Native uygulama, Next.js site, bir de admin var. Repo açık değil.",
      ],
    },
    stack: ["React Native", "Next.js", "LLM"],
    links: [],
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
      en: "Frontend and delivery for the Vodafone home internet page.",
      tr: "Vodafone ev interneti sayfasının ön yüzü ve dağıtımı.",
    },
    role: {
      en: "Frontend and devops, Vodafone",
      tr: "Vodafone'da ön yüz ve devops",
    },
    body: {
      en: [
        "Evde İnternet is the Vodafone page for home internet customers. I did the frontend, and some of the delivery on the OSS side.",
        "Next.js and TypeScript. It is at vodafone.com.tr/evdeinternet.",
      ],
      tr: [
        "Evde İnternet, Vodafone'un ev interneti müşterisine bakan sayfa. Ön yüz bende. OSS tarafının dağıtımına da girdim.",
        "Next.js ve TypeScript. Adres vodafone.com.tr/evdeinternet.",
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
      en: "Invoices, orders, delivery notes, and price requests land as email or PDF. A model turns them into typed JSON. A person checks that in Next.js.",
      tr: "Mail ya da PDF gelen fatura, sipariş, irsaliye, fiyat talebi. Model JSON'a çeviriyor, insan Next.js'te bakıyor.",
    },
    role: {
      en: "My product",
      tr: "Kendi ürünüm",
    },
    body: {
      en: [
        "Workonlog DocAI reads paperwork that arrives as email or PDF and turns it into typed JSON.",
        "Invoices, orders, delivery notes, price requests. Someone checks the output in a Next.js screen.",
      ],
      tr: [
        "Workonlog DocAI, mail veya PDF gelen evrakı modele okutup tipli JSON yapıyor.",
        "Fatura, sipariş, irsaliye, fiyat talebi. Çıktıya bir kişi Next.js ekranında bakıyor.",
      ],
    },
    stack: ["Next.js", "LLM"],
    links: [],
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
      en: "Films and series, on the web and Android TV. HLS, remote navigation, its own CMS.",
      tr: "Film ve dizi. Web ve Android TV. HLS, kumandayla gezinme, kendi CMS'i.",
    },
    role: {
      en: "My product",
      tr: "Kendi ürünüm",
    },
    body: {
      en: [
        "Two clients: web and Android TV. Playback is HLS. The TV app is for a remote, not a mouse.",
        "The catalog runs from its own CMS. The repos are private.",
      ],
      tr: [
        "İki istemci var: web ve Android TV. Yayın HLS. TV tarafı fare için değil, kumanda için.",
        "Katalog kendi CMS'inden gidiyor. Repolar özel.",
      ],
    },
    stack: ["HLS", "Android TV", "CMS"],
    links: [],
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
      en: "Multi-tenant SaaS for SAP Basis work. Users, roles, transports, job monitoring over RFC. ECC, S/4HANA, BW, BTP.",
      tr: "SAP Basis işini toplayan çok kiracılı SaaS. Kullanıcı, rol, transport, RFC ile iş izleme. ECC, S/4HANA, BW, BTP.",
    },
    role: {
      en: "My product",
      tr: "Kendi ürünüm",
    },
    body: {
      en: [
        "It pulls Basis work that usually sits in separate systems into one place. Multi-tenant. Users and roles, transports, job monitoring over RFC.",
        "It talks to ECC, S/4HANA, BW, and BTP.",
      ],
      tr: [
        "Dağınık duran Basis işini tek yere topluyor. Çok kiracılı. Kullanıcı ve roller, transport, RFC üzerinden job izleme.",
        "Bağlandığı yerler ECC, S/4HANA, BW ve BTP.",
      ],
    },
    stack: ["SaaS", "RFC", "SAP"],
    links: [],
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
      en: "A native client for more than one database. One interface. Not finished.",
      tr: "Birden fazla veritabanı için native istemci. Tek arayüz. Bitmedi.",
    },
    role: {
      en: "My product",
      tr: "Kendi ürünüm",
    },
    body: {
      en: [
        "For people who keep a few databases open at once. One screen, not a different tool per engine.",
        "The site is querra.dev. Still going.",
      ],
      tr: [
        "Birkaç veritabanını bir arada açanlar için. Her motor için ayrı araç yerine tek ekran.",
        "Site querra.dev. Hâlâ sürüyor.",
      ],
    },
    stack: ["Native", "Databases"],
    links: [
      {
        href: "https://querra.dev",
        en: "Visit querra.dev",
        tr: "querra.dev sitesini aç",
      },
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
      en: "OHS software for OSGB units and the workplaces tied to them.",
      tr: "OSGB'ler ve bağlı işyerleri için iş sağlığı ve güvenliği yazılımı.",
    },
    role: {
      en: "My product",
      tr: "Kendi ürünüm",
    },
    body: {
      en: [
        "For OSGB units and the workplaces attached to them. Occupational health and safety.",
        "No public repo.",
      ],
      tr: [
        "OSGB birimleri ve onlara bağlı işyerleri için. İş sağlığı ve güvenliği.",
        "Açık repo yok.",
      ],
    },
    stack: ["TypeScript", "SaaS"],
    links: [],
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
      en: "An MCP server. A model can look through MySQL and run queries.",
      tr: "MCP sunucusu. Model MySQL'e bakıp sorgu atıyor.",
    },
    role: { en: "I wrote it", tr: "Ben yazdım" },
    body: {
      en: [
        "A public MCP server. The model browses the database and runs queries.",
        "TypeScript. Repo is bymustfa/mysql-mcp.",
      ],
      tr: [
        "Açık bir MCP sunucusu. Model veritabanını geziyor, sorgu çalıştırıyor.",
        "TypeScript. Repo bymustfa/mysql-mcp.",
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
      en: "A small TypeScript library that finds a close color in a palette. Runs in the browser and on the server.",
      tr: "Palette yakın rengi bulan küçük TypeScript kütüphanesi. Tarayıcıda da sunucuda da çalışır.",
    },
    role: { en: "I wrote it", tr: "Ben yazdım" },
    body: {
      en: [
        "You give it a palette and a color. It returns a near match.",
        "Same functions on the frontend and the backend. npm: get-similar-color. GitHub: bymustfa/get-similar-color.",
      ],
      tr: [
        "Palet ve bir renk veriyorsun, yakını dönüyor.",
        "Ön yüzde de backend'de de aynı fonksiyon. npm'de get-similar-color, GitHub'da bymustfa/get-similar-color.",
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
      en: "A macOS menu bar app. It splits a weekly Claude Code limit into a daily share.",
      tr: "macOS menü çubuğu. Haftalık Claude Code limitini güne bölüyor.",
    },
    role: { en: "I wrote it", tr: "Ben yazdım" },
    body: {
      en: [
        "It sits in the menu bar and splits a weekly limit into a daily share.",
        "Swift. Repo is bymustfa/claude-limit.",
      ],
      tr: [
        "Menü çubuğunda duruyor. Haftalık limiti güne bölüyor.",
        "Swift. Repo bymustfa/claude-limit.",
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
      en: "Diffs a VS Code or Cursor extension update before you install it. Pin, rollback, cooldown.",
      tr: "VS Code veya Cursor eklenti güncellemesini kurmadan önce diff'ler. Pin, geri alma, bekleme süresi.",
    },
    role: { en: "I wrote it", tr: "Ben yazdım" },
    body: {
      en: [
        "It opens an update against what you already have. Manifest, scripts, dependencies, files. It marks the risky bits.",
        "You can pin a version, roll back, or wait out a cooldown. TypeScript. On npm as vsx-diff. Repo is bymustfa/vsx-diff.",
      ],
      tr: [
        "Güncellemeyi elindekine göre açıyor. Manifest, betik, bağımlılık, dosya. Riskli olanı işaretliyor.",
        "Sürüm sabitleme, geri alma ve bekleme süresi var. TypeScript. npm'de vsx-diff. Repo bymustfa/vsx-diff.",
      ],
    },
    stack: ["TypeScript"],
    links: [
      {
        href: "https://github.com/bymustfa/vsx-diff",
        en: "View the repository",
        tr: "Depoyu aç",
      },
      {
        href: "https://www.npmjs.com/package/vsx-diff",
        en: "View on npm",
        tr: "npm'de aç",
      },
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
      en: "A CLI and GitHub Action. It checks that your own MCP server validates OAuth token audience, issuer, and expiry.",
      tr: "Kendi MCP sunucunda OAuth token'ın audience, issuer ve süresini kontrol eden CLI ve GitHub Action.",
    },
    role: { en: "I wrote it", tr: "Ben yazdım" },
    body: {
      en: [
        "It checks an MCP server you own: audience, issuer, and expiry on the bearer token.",
        "CLI and a GitHub Action, plus a local fake auth server so you can hit your own service. Python. Repo is bymustfa/mcp-audprobe.",
      ],
      tr: [
        "Sahibi olduğun MCP sunucusuna bakıyor: bearer token'da audience, issuer ve süre kontrolü var mı.",
        "CLI ve GitHub Action. Yanında yerel sahte bir auth sunucusu var, kendi servisine karşı deniyorsun. Python. Repo bymustfa/mcp-audprobe.",
      ],
    },
    stack: ["Python", "GitHub Actions"],
    links: [
      {
        href: "https://github.com/bymustfa/mcp-audprobe",
        en: "View the repository",
        tr: "Depoyu aç",
      },
      {
        href: "https://pypi.org/project/mcp-audprobe/",
        en: "View on PyPI",
        tr: "PyPI'de aç",
      },
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
      en: "A site that puts psychologists and counselors in one place.",
      tr: "Psikolog ve danışmanları bir araya getiren site.",
    },
    role: { en: "I built it", tr: "Ben yaptım" },
    body: {
      en: [
        "I built NDK Danışmanlık full-stack.",
        "Next.js, TypeScript, Express, MongoDB, Tailwind. The site is ndkdanismanlik.com.",
      ],
      tr: [
        "NDK Danışmanlık için full-stack yazdım.",
        "Next.js, TypeScript, Express, MongoDB, Tailwind. Site ndkdanismanlik.com.",
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
      en: "A financial consultancy site. Laravel.",
      tr: "Finansal danışmanlık sitesi. Laravel.",
    },
    role: { en: "I built it", tr: "Ben yaptım" },
    body: {
      en: [
        "The site for Horozoglu Consultants. Financial consultancy and management.",
        "Laravel, MySQL, Bootstrap. horozogluconsultants.com.",
      ],
      tr: [
        "Horozoglu Consultants'ın sitesi. Finansal danışmanlık ve yönetim.",
        "Laravel, MySQL, Bootstrap. Adres horozogluconsultants.com.",
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
      en: "An online shop for health supplies.",
      tr: "Sağlık malzemesi e-ticareti.",
    },
    role: { en: "I built it", tr: "Ben yaptım" },
    body: {
      en: [
        "An online shop for health supplies. PHP, Next.js, TypeScript, MongoDB, Tailwind.",
        "The old entry has no public URL.",
      ],
      tr: [
        "Sağlık malzemesi satan bir e-ticaret. PHP, Next.js, TypeScript, MongoDB, Tailwind.",
        "Eski kayıtta açık adres yok.",
      ],
    },
    stack: ["PHP", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    links: [],
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
      en: "An online shop for health supplies, with online payment.",
      tr: "Sağlık malzemesi e-ticareti. Online ödeme var.",
    },
    role: { en: "I built it", tr: "Ben yaptım" },
    body: {
      en: [
        "Health supplies again. PHP, MySQL, online payment.",
        "No public URL in the old entry.",
      ],
      tr: [
        "Yine sağlık malzemesi. PHP, MySQL, online ödeme.",
        "Eski kayıtta açık adres yok.",
      ],
    },
    stack: ["PHP", "MySQL"],
    links: [],
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
      en: "Old frontends, moved to React and Next.js. WebView too. Yanımda Premium and Evde İnternet are in this.",
      tr: "Eski ön yüzler, React ve Next.js. WebView de var. Yanımda Premium ve Evde İnternet bu iş.",
    },
  },
  {
    years: "2021 — 2022",
    place: "Smartiks Yazılım",
    role: { en: "Full-stack developer", tr: "Full-stack geliştirici" },
    location: "İstanbul",
    href: "https://www.smartiks.com.tr/",
    summary: {
      en: "Delivery on Koç Holding projects. A form builder, a datatable generator, and Express tools that spit out API endpoints.",
      tr: "Koç Holding işlerinin teslimatı. Form builder, datatable üretici, API ucu çıkaran Express araçları.",
    },
  },
  {
    years: "2021",
    place: "Gökkuşağı Yazılım",
    role: { en: "Full-stack developer", tr: "Full-stack geliştirici" },
    location: "İstanbul",
    href: "https://gokkusagiyazilim.com.tr/",
    summary: {
      en: "Web, mobile, ERP, CRM. I finished the frontends in React and Node.js.",
      tr: "Web, mobil, ERP, CRM. Ön yüzleri React ve Node.js ile bitirdim.",
    },
  },
  {
    years: "2020 — 2021",
    place: "Litesoft",
    role: { en: "Frontend developer", tr: "Ön yüz geliştirici" },
    location: "İstanbul",
    href: "https://litesoft.com.tr/",
    summary: {
      en: "Software support for a lot of companies. Web and mobile: React, ASP.NET, PHP. ERP and CRM too.",
      tr: "Birçok şirkete yazılım desteği. Web ve mobil: React, ASP.NET, PHP. ERP ve CRM de var.",
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
      en: "C#, SQL, and PHP. Game and mobile work outside class.",
      tr: "C#, SQL, PHP. Ders dışında oyun ve mobil.",
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
