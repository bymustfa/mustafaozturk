import React from "react";
import { Github, Instagram, Twitter } from "@/components/icons";

//2013 yılından beri PHP ve C# ile uğraşıyorum. 2015 yılında hobi olarak
//       oyun geliştirme, 2018 yılında Node JS ve React JS teknolojilerine
//       ilgilenmeye başladım. React, React Native, PHP, Python vb. birçok kişi ve
//       kuruma mobil çözümler geliştirdim.

const myAge = () => {
  const today = new Date();
  const birthDate = new Date("1997-02-03");
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const aboutTexts = {
  tr: myAge() + " yaşında. Full Stack Geliştirici.",
  en: myAge() + " years old. Full Stack Developer.",
};

export const experiences = [
  {
    id: 0,
    title: "Frontend Developer",
    years: "2022 - Devam",
    company: "Vodafone Telekomünikasyon A.Ş.",
    location: "İSTANBUL",
  },
  {
    id: 1,
    title: "Fullstack Developer",
    years: "2021 - 2022",
    company: "Smartiks Yazılım A.Ş.",
    location: "İSTANBUL",
  },
  {
    id: 2,
    title: "Frontend Developer",
    years: "2020 - 2021",
    company: "Gökkuşağı Yazılım ve Danışmanlık",
    location: "İSTANBUL",
  },

  {
    id: 3,
    title: "Fullstack Developer",
    years: "2020 - 2021",
    company: "Litesoft Yazılım Hizmetleri A.Ş.",
    location: "İSTANBUL",
  },
  {
    id: 4,
    title: "Fullstack Developer",
    years: "2019 - 2020",
    company: "Özel Bir Eğitim Kurumu",
    location: "İSTANBUL",
  },
  {
    id: 5,
    title: "Web Tasarım Stajyeri",
    years: "2016 - Yaz",
    company: "Teknorium ARD Bilgisayar",
    location: "MERSİN",
  },
  {
    id: 6,
    title: "Bilgi işlem Stajyeri",
    years: "2014 - 2015",
    company: "İl Özel İdaresi",
    location: "KASTAMONU",
  },
  {
    id: 7,
    title: "Grafik ve Web Tasarım Uzmanı",
    years: "2012 - 2018",
    company: "Teknik Reklam",
    location: "KASTAMONU",
  },
];

export const educations = [
  {
    id: 1,
    title: "Yazılım Uzmanlığı Sertifika Programı",
    years: "2019",
    location: "İSTANBUL",
  },
  {
    id: 2,
    title: "Kastamonu Ünivertsitesi",
    years: "2016 - 2018",
    location: "KASTAMONU",
  },
  {
    id: 3,
    title: "Kastamonu Anadolu ve Meslek Lisesi",
    years: "2011 - 2015",
    location: "KASTAMONU",
  },
];

export const social = [
  {
    id: 1,
    text: "Github",
    icon: <Github />,
    href: "https://github.com/bymustfa",
  },

  {
    id: 2,
    text: "Twitter",
    icon: <Twitter />,
    href: "https://twitter.com/_bymustfa",
  },

  {
    id: 3,
    text: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/bymustfa/",
  },
];
