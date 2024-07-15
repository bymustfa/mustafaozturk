import { Fragment } from "react";
import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import FramerWrapper from "@/components/FramerWrapper";

export default function Home() {
  return (
    <Fragment>
      <FramerWrapper
        className=" h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
      </FramerWrapper>
      <FramerWrapper
        className="h-full w-[47%] relative block max-lg:hidden"
        y={0}
        x={100}
      >
        <HeroImage />
      </FramerWrapper>
    </Fragment>
  );
}
