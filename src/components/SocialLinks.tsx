import { cn } from "@/lib/utils";
import { Linkedin, Twitter, Github } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./FramerWrapper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialLinks = () => {
  const links = [
    {
      name: "Twitter | _bymustfa",
      link: "https://x.com/_bymustfa",
      icon: <Twitter />,
    },
    {
      name: "Linkedin | bymustfa",
      link: "https://www.linkedin.com/in/bymustfa/",
      icon: <Linkedin />,
    },
    {
      name: "Github | bymustfa",
      link: "https://github.com/bymustfa",
      icon: <Github />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <TooltipProvider key={itm.name} delayDuration={10}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    target="blank"
                    href={itm.link}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "icon" }),
                      "backdrop-blur-sm",
                      "hover:shadow-lg",
                    )}
                  >
                    {itm.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{itm.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
