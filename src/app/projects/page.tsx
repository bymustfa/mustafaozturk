import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { IPorjects } from "@/lib/utils";

const projectsPage = () => {
  const Projects: IPorjects[] = [
    {
      title: "Yanımda Premium | Vodafone",
      description:
        "I worked as a front end developer in the Yanimda Premium project, where privileges were provided to Vodafone's customers.",
      tags: ["Typescript", "Nextjs"],
      link: "https://www.vodafone.com.tr/premium",
    },

    {
      title: "Evde Internet | Vodafone",
      description:
        "I worked as frontend and devops for the OSS project used by Vodafone Home Internet users.",
      tags: ["Nextjs", "Typescript"],
      link: "https://www.vodafone.com.tr/evdeinternet",
    },

    {
      title: "NDK Danışmanlık",
      description:
        "A multi-purpose platform that brings together psychologists and counselors.",
      tags: ["Nextjs", "Typescript", "Express JS", "MongoDB", "Tailwind CSS"],
      link: "https://ndkdanismanlik.com/",
    },

    {
      title: "Horozoglu Consultants",
      description: "Financial consultancy and management project",
      tags: ["PHP", "Mysql", "Bootstrap", "Laravel"],
      link: "horozogluconsultants.com",
    },

    {
      title: "BYK",
      description: "Health supplies e-commerce platform",
      tags: ["PHP", "Nextjs", "Typescript", "MongoDB", "Tailwind CSS"],
    },

    {
      title: "Precaumed",
      description: "Health supplies e-commerce platform",
      tags: ["PHP", "Mysql", "Online Payment Service"],
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden border px-16 py-8 rounded backdrop-blur-sm">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
