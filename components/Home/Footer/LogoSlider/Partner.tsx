import Image from "next/image";
const Partner = ({ logos }: any) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 xl:gap-0 pt-14 px-0 xl:px-0 max-w-6xl m-auto">
      {logos.map((logo: any, index: number) => (
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
