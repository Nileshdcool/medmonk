const FooterLinks = () => {
  const links = [
    { text: "Privacy policy", href: "#", separator: "|" },
    { text: "Legal statement", href: "#", separator: "|" },
    { text: "Cookies", href: "#" },
  ];
  return (
    <div className="footer-links mt-8">
      <ul className="flex flex-row gap-3 justify-center">
        {links.map((link, index) => (
          <>
            <li key={index}>
              <a href={link.href} className="hover:text-brownCust">
                {link.text}
              </a>
            </li>
            {link.separator}
          </>
        ))}
      </ul>
    </div>
  );
};
export default FooterLinks;
