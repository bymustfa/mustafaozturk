export const menus = {
  tr: [
    {
      id: Math.floor(Math.random() * 9999),
      title: "Anasayfa",
      href: "/",
      icon: "",
    },
    {
      id: Math.floor(Math.random() * 9999),
      title: "Hakkımda",
      href: "/about",
      icon: "",
    },
    {
      id: Math.floor(Math.random() * 9999),
      title: "Projeler",
      href: "/projects",
      icon: "",
    },
    {
      id: Math.floor(Math.random() * 9999),
      title: "İletişim",
      href: "/contact",
      icon: "",
    },
  ],
  en: [
    {
      id: Math.floor(Math.random() * 9999),
      title: "Home",
      href: "/",
      icon: "",
    },
    {
      id: Math.floor(Math.random() * 9999),
      title: "About",
      href: "/about",
      icon: "",
    },
    {
      id: Math.floor(Math.random() * 9999),
      title: "Projects",
      href: "/projects",
      icon: "",
    },
    {
      id: Math.floor(Math.random() * 9999),
      title: "Contact",
      href: "/contact",
      icon: "",
    },
  ],
};

export const homeTexts = {
  tr: ["Web Tasarım", "Programlama", "Freelancer", "Mobil Programlama"],
  en: ["Web Design", "Development", "Freelancer", "Mobile Developer"],
};

export const skils = [
  "HTML",
  "JavaScript",
  "Css",
  "React",
  "React-Native",
  "PHP",
  "Python",
  "C#",
  "Asp.NET",
  "NodeJS",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Corel Draw",
];

export const projects = {
  langs: [
    { id: 1, title: "JavaScript", color: "javaScript" },
    { id: 2, title: "PHP", color: "php" },
    { id: 3, title: "CSS", color: "css" },
    { id: 4, title: "SCSS", color: "scss" },
    { id: 5, title: "HTML", color: "html" },
    { id: 6, title: "TypeScript ", color: "typeScript" },
    { id: 7, title: "Python  ", color: "python" },
    { id: 8, title: "React JS  ", color: "reactjs" },
    { id: 9, title: "React-Native", color: "reactnative" },
    { id: 10, title: "Next JS", color: "nextjs" },
    { id: 11, title: "Unity", color: "unity" },
    { id: 20, title: "Adobe Photoshop", color: "photoshop" },
    { id: 21, title: "Adobe Illustrator", color: "illustrator" },
  ],

  tags: {
    tr: [
      { id: 1, title: "Hepsi" },
      { id: 2, title: "Web" },
      { id: 3, title: "Mobil" },
      { id: 4, title: "Oyun" },
      { id: 5, title: "Grafik" },
    ],
    en: [
      { id: 1, title: "All" },
      { id: 2, title: "Web" },
      { id: 3, title: "Mobile" },
      { id: 4, title: "Game" },
      { id: 5, title: "Graphic" },
    ],
  },

  datas: [
    {
      id: Math.floor(Math.random() * 99999),
      title: {
        tr: "Litesoft Yazılım Hizmetleri FullStack Web Sitesi",
        en: "Litesoft Sofware Services FullStack Website",
      },
      description: {
        tr:
          "Firmanın kurumsal bir web sitesine ihtiyacını hızlıca NextJS kullanarak çözdüm. Ancak kullanılan sunucu sebebiyle bazı teknik sıkıntıları bulunuyor.",
        en:
          "I quickly solved the company's need for a corporate website using NextJS. However, there are some technical problems due to the server used.",
      },
      href: "https://litesoft.com.tr/",
      img: "",
      langs: [10, 1, 4, 8],
    },

    {
      id: Math.floor(Math.random() * 99999),
      title: {
        tr: "Gökkuşağı Yazılım A.Ş FullStack Web Sitesi",
        en: "Gökkuşağı Sofware Inc. FullStack Website",
      },
      description: {
        tr:
          "Linux tabalı sunucuda bir süre Wordpress sistem bulunuyordu. Teknik aksaklıklar yaşanınca tasarımı alıp PHP ile tekrar kodladım.",
        en:
          "The Linux-based server had a Wordpress system for a while. I took the design and recoded it with PHP while the techniques were going on.",
      },
      href: "https://gokkusagiyazilim.com.tr/",
      img: "",
      langs: [2, 4, 5],
    },

    {
      id: Math.floor(Math.random() * 99999),
      title: {
        tr: "Sigmoid Studio Web Sitesi",
        en: "Sigmoid Studio Website",
      },
      description: {
        tr:
          "Genel amacı blog ve ebülten kullanıcıları yakalamak olan projede tasarımı PHP ve Admin Panel Entegre ederek ortak oldum",
        en:
          "I became a partner in the project, whose general purpose is to capture blog and e-bulletin users, by integrating the design with PHP and Admin Panel.",
      },
      href: "https://sigmoidstudio.com/",
      img: "",
      langs: [2, 4, 5],
    },

    {
      id: Math.floor(Math.random() * 99999),
      title: {
        tr: "Math Basic | Android Mobil Oyun",
        en: "Math Basic | Android Mobile Game",
      },
      description: {
        tr:
          "Genel amacı basit 4 işlem matematik soruları ile 4 - 8 yaş arası çocuklara matematiği öğretmek olan mobil uygulama",
        en:
          "Mobile application whose general purpose is to teach mathematics to children aged 4 to 8 with simple 4 operation math questions.",
      },
      href:
        "https://play.google.com/store/apps/details?id=com.MustafaOzturk.MathBasic",
      img: "",
      langs: [11],
    },
  ],
};
