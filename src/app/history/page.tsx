import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink } from "lucide-react";
import cn from "clsx";
import Link from "next/link";

import { IEducation, IExperience } from "@/lib/utils";

const MyHistory = () => {
  const Experiences: IExperience[] = [
    {
      title: "Vodafone Turkey",
      subtitle: "Frontend Developer",
      location: "Istanbul",
      description:
        "Updating existing legacy frontend projects with React JS and Next JS. Editing with Webview technologies",
      years: "2022 - Present",
      link: "https://www.vodafone.com.tr/",
    },

    {
      title: "Smartiks Yazılım A.Ş.",
      subtitle: "Fullstack Developer",
      location: "Istanbul",
      description: `In particular, I took part in projects that produced solutions for Koç Holding 
          company. In this process, I developed a form builder and datattable generator 
          system to produce faster screens in our frontend works. 
          I prepared endpoint generator applications with Express JS so that we can 
          produce fast APIs in backend technologies.`,
      years: "2021 - 2022",
      link: "https://www.smartiks.com.tr/",
    },

    {
      title: "Gökkuşağı Yazılım",
      subtitle: "Fullstack Developer",
      location: "Istanbul",
      description: `We produce web and mobile solutions as well as solutions such as ERP and CRM. My task here is to complete frontend operations of projects with React and Node JS.`,
      years: "2021/01 - 2021/11",
      link: "https://gokkusagiyazilim.com.tr/",
    },

    {
      title: "Litesoft Yazılım Hizmetleri",
      subtitle: "Frontend Developer",
      location: "Istanbul",
      description: `In Litesoft Software Services, where we provide software support to many companies, we produce web and mobile solutions as well as solutions such as ERP and CRM. My task here is web and mobile software expertise using languages like React, ASP .Net, PHP .`,
      years: "2020 - 2021",
      link: "https://litesoft.com.tr/",
    },

    {
      title: "Special Education Institution",
      subtitle: "PHP Developer",
      location: "Istanbul",
      description: `I have done many web design and PHP programming jobs for educational institutions.`,
      years: "2019 - 2020",
    },

    {
      title: "Teknorium ARD Computer",
      subtitle: "Software Intern",
      location: "Mersin, Turkey",
      description: `I did web design and programming internship at Mersin Teknorium Bilgisayar within the scope of compulsory university internship. During this time, I had experience with web software and the ways to be followed in terms of design.`,
      years: "2016",
    },

    {
      title: "Special Provincial Administration",
      subtitle: "IT Intern",
      location: "Kastamonu, Turkey",
      description: `Within the scope of the compulsory high school internship program, I had an
                      internship in the field of information processing for a total of 9 months in
                      Kastamonu Special Provincial Administration. During this period, I got to know
                      the computer better, both in terms of software and hardware.`,
      years: "2015",
    },

    {
      title: "Teknik Reklam",
      subtitle: "Graphic Designer and Frontend Developer",
      location: "Kastamonu, Turkey",
      description: `Teknik Reklam, Graphic Designer and Frontend Developer
                    I started graphic design work at a very young age. I used to design small car
                    lettering stickers before. In the following years, I have done many works such as
                    illuminated and non-illuminated signage, facade cladding, social media
                    advertising design, web design and programming.`,
      years: "2012 - 2018",
    },
  ];

  const Edications: IEducation[] = [
    {
      title:
        "Software Specialist Certificate Program | Special Education Institution",
      description: "",
      years: "2019 - 2020",
    },

    {
      title: "Kastamonu University",
      description:
        "In addition to taking basic C#, SQL, PHP trainings, I graduated by working in non-\n" +
        "departmental trainings (Game Development, Mobile Development).",
      years: "2016 - 2018",
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden border px-16 py-8 rounded backdrop-blur-sm">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        History
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>WORK EXPERIENCES</Heading>
      </div>

      <div className="w-full h-fit flex flex-col">
        {Experiences.map((item, index) => (
          <div key={index} className="w-full h-fit flex border-b-2">
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35}
              className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base flex-col"
            >
              <p>{item.years}</p>
              <p className="text-sm -mt-5">{item.location}</p>
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
            >
              <div className="text-2xl font-rubik max-sm:text-xl">
                <Link
                  href={item.link ?? "#"}
                  target="_blank"
                  className={cn([
                    "flex",
                    item.link && "cursor-pointer hover:underline",
                  ])}
                >
                  {item.title}{" "}
                  <small className="italic font-normal text-gray-700">
                    {item.subtitle}
                  </small>
                  {item.link && (
                    <ExternalLink className="ml-2 mt-2" size={16} />
                  )}
                </Link>
              </div>
              <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                {item.description}
              </p>
            </FramerWrapper>
          </div>
        ))}
      </div>

      <hr />

      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>

      <div className="w-full h-fit flex flex-col">
        {Edications.map((item, index) => (
          <div key={index} className="w-full h-fit flex border-b-2">
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35}
              className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
            >
              {item.years}
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
            >
              <div className="text-2xl font-rubik max-sm:text-xl">
                {item.title}
              </div>
              <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                {item.description}
              </p>
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHistory;
