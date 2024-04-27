import { AccreditedByList } from "@/Constants/HomePage/Footer/AccreditedByList";

const AccreditedBy = () => {
  return (
    <div className=" w-1/2 border-l-2 md:border-l-0 border-darkBlue pl-8 md:pl-0">
      <h3 className="font-semibold text-hBlack mb-2 text-lg">Accredited by</h3>
      <ul className="flex flex-col gap-1">
        {AccreditedByList.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:text-brownCust">
              {item.text}/{item.logo}?
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AccreditedBy;
