import Link from "next/link";
import { useRouter } from "next/router";
import { Links } from "@/Constants/HomePage/Footer/Links";

const FooterLinks = () => {
  const router = useRouter();
  return (
    <div className="footer-links mt-8">
      <ul className="flex flex-row gap-3 justify-center">
        {Links.map((link, index) => (
          <>
            <li key={index}>
              <Link
                href={link.href}
                className={`hover:text-brownCust ${
                  router.pathname == link.href ? "text-brownCust" : ""
                }`}
              >
                {link.text}
              </Link>
            </li>
            {link.separator}
          </>
        ))}
      </ul>
    </div>
  );
};
export default FooterLinks;
