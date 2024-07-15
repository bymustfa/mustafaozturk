import { cn, IPorjects } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface projectcardprops {
  value: IPorjects;
  num: number;
}
const ProjectCards: React.FC<projectcardprops> = ({ value, num }) => {
  const color = (tag: string) => {
    if (tag === "Nextjs") {
      return "bg-teal-100 text-teal-800";
    } else if (tag === "Freelancing") {
      return "bg-yellow-100 text-yellow-800";
    } else if (tag === "Shadcn Ui") {
      return "bg-blue-100 text-blue-800";
    } else if (tag === "Typescript") {
      return "bg-red-100 text-red-800";
    } else if (tag === "Express JS") {
      return "bg-green-100 text-green-800";
    } else if (tag === "MongoDB") {
      return "bg-yellow-100 text-yellow-800";
    } else if (tag === "Tailwind CSS") {
      return "bg-indigo-100 text-indigo-800";
    } else if (tag === "PHP") {
      return "bg-blue-100 text-blue-800";
    } else if (tag === "Mysql") {
      return "bg-yellow-100 text-yellow-800";
    } else if (tag === "Laravel") {
      return "bg-red-100 text-red-800";
    } else if (tag === "Bootstrap") {
      return "bg-green-100 text-green-800";
    } else {
      return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <FramerWrapper
      className={"max-w-[32%] min-h-[345px] max-lg:max-w-full"}
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>{value.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base font-poppins">{value.description}</p>
          <div className=" w-full h-fit flex mt-2 justify-center flex-row gap-3 flex-wrap">
            {value.tags.map((itm: string, indx: number) => {
              return (
                <span
                  className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${color(itm)}`}
                  key={indx}
                >
                  {itm}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="items-center justify-center flex">
          {value.link && (
            <Link
              href={value.link}
              target="blank"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "flex",
              )}
            >
              Visit Project <ArrowUpRight className="h-5 w-5 ml-1" />
            </Link>
          )}
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;