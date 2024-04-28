import Link from "next/link";
import Image from "next/image";
import { ContactsList } from "@/Constants/HomePage/Footer/ContactsList";
const Contacts = () => {
  return (
    <div className="w-full">
      <Link
        href="https://flowbite.com/"
        className="flex items-center space-x-3 rtl:space-x-reverse mb-4"
      >
        <Image
          className="object-fill h-auto w-100"
          width={220}
          height={58}
          src="/assets/medmonk-logo.png"
          alt="MedMonk Logo"
        />
      </Link>
      <h3 className="font-semibold text-hBlack mb-2 text-lg">Contact us</h3>
      <ul className="flex flex-col gap-2">
        {ContactsList.map((contact, index) => (
          <li key={index}>
            <Link href="#" className="hover:text-brownCust">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="w-6 inline-block align-middle mr-1"
                src={contact.image}
                alt=""
              />{" "}
              {contact.contact}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
