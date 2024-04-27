import Image from "next/image";
import { LogoTabImagesType } from "@/Interfaces/Home/LogoTabType";

const Partner = ({ containerClass, images }: LogoTabImagesType) => {
  return (
    <div className={containerClass}>
      {images.map((logo: any, index: number) => (
        <div key={index} className="brand-logo">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="h-12 w-auto rounded-lg"
            src={logo}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};
export default Partner;
