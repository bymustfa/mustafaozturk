import logo from "../../public/images/me.jpg";
import Image from "next/image";

const HeroImage = () => {
  return (
    <Image
      src={logo}
      alt="logo"
      loading="eager"
      priority
      height={1000}
      width={1000}
      // black white effect, hover normal color, scale -10%
      className="rounded-xl shadow-2xl filter grayscale hover:filter-none transition-all duration-500 ease-in-out transform hover:scale-90"
    />
  );
};
export default HeroImage;
