import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "coding" },
    { hobby: "playing games" },
    { hobby: "Watching Anima" },
    { hobby: "Tech Blog writing" },
    { hobby: "creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden border px-16 py-8 rounded backdrop-blur-sm">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>

      <div className="flex flex-col gap-12">
        <Heading>
          Software Developer <br /> from Istanbul, Turkey
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
            I am a Full Stack Developer from Istanbul, Turkey. I create
            beautiful websites and web applications that help businesses grow. I
            have solid experience in modern web technologies and I build
            scalable, secure, and performant web applications. I am passionate
            about creating cool projects and learning new technologies. I am
            also a tech blogger and I write about web development, programming,
            and software engineering.
          </p>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default page;
