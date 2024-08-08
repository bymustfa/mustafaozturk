import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PackagePlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn, extractImageFromContent } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FramerWrapper from "@/components/FramerWrapper";
import Parser from "rss-parser";
import crypto from "crypto";
import Image from "next/image";

const morePage = async () => {
  // https://medium.com/feed/@bymustfa
  const parser = new Parser({
    requestOptions: {
      secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
    },
  });

  const feed = await parser.parseURL("https://medium.com/feed/@bymustfa");

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden border px-16 py-8 rounded backdrop-blur-sm">
      <Badge className=" gap-2">
        <PackagePlus className="h-5 w-5" />
        More
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>More</Heading>
      </div>

      <div className="h-auto w-full flex flex-wrap gap-3 p-2">
        {feed.items.map((value, index) => {
          return (
            <FramerWrapper
              key={index}
              className="max-w-[32%] max-lg:max-w-full"
              y={0}
              scale={0.8}
              delay={index / 4}
              duration={0.15}
            >
              <Card className="w-full h-full  flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex items-end justify-center h-full">
                  <img
                    src={extractImageFromContent(value["content:encoded"])}
                    alt={value.title as string}
                    width={300}
                    height={100}
                  />
                </CardContent>

                <CardFooter>
                  <Link
                    href={value.link as string}
                    target="blank"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "w-full gap-3",
                    )}
                  >
                    {" "}
                    <ExternalLink />
                    Read
                  </Link>
                </CardFooter>
              </Card>
            </FramerWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default morePage;
