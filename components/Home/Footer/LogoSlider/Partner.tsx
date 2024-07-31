import Image from "next/image";
import { LogoImage, LogoTabImagesType } from "@/Interfaces/Home/LogoTabType";

const Partner = ({logo} : {logo: LogoTabImagesType}) => {
  return (
    <div className={logo.containerClass}>
      {logo.images.map((image: LogoImage, index: number) => (
        <div key={index} className="brand-logo">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="h-12 w-auto rounded-lg"
            src={image.image}
            alt=""
            style={image.style}
          />
        </div>
      ))}
    </div>
  );
};
export default Partner;
