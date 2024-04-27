import { Links } from "@/Constants/HomePage/Footer/Links";

const FooterLinks = () => {
  return (
    <div className="footer-links mt-8">
      <ul className="flex flex-row gap-3 justify-center">
        {Links.map((link, index) => (
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
