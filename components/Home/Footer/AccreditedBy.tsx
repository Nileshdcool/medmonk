const AccreditedBy = () => {
  const items = [
    { text: "Text/Logo?", href: "#" },
    { text: "Text/Logo?", href: "#" },
  ];
  return (
    <div className=" w-1/2 border-l-2 md:border-l-0 border-darkBlue pl-8 md:pl-0">
      <h3 className="font-semibold text-hBlack mb-2 text-lg">Accredited by</h3>
      <ul className="flex flex-col gap-1">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:text-brownCust">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AccreditedBy;
