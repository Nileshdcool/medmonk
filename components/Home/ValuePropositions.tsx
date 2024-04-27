import Image from "next/image";
import { ValuePropositionsData } from "@/Constants/HomePage/ValuePropositionsData";

const ValuePropositions = () => {
  return (
    <section className="bg-center flex px-4 xl:px-0">
      <div className="container mx-auto justify-between items-center flex">
        <div className="grid text-center md:text-left sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 xl:gap-8 py-8 xl:py-14 px-8 xl:px-14 bg-white shadow-xl rounded-md lg:-mt-36 -mt-10 mx-0 xl:mx-10">
          {ValuePropositionsData.map((value, index) => (
            <div key={index} className={value.containerClass}>
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className={value.imageClass}
                src={value.image}
                alt=""
              />
              <hr className=" h-0.5 w-24 bg-brownCust mb-2 mt-4 block ml-auto mr-auto md:ml-0" />
              <h3 className={value.headingClass}>{value.heading}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ValuePropositions;
