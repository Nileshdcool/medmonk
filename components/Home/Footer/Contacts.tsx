import Image from "next/image";
const Contacts = () => {
  return (
    <div className="w-full">
      <a
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
      </a>
      <h3 className="font-semibold text-hBlack mb-2 text-lg">Contact us</h3>
      <ul className="flex flex-col gap-2">
        <li>
          <a href="#" className="hover:text-brownCust">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-6 inline-block align-middle mr-1"
              src="/assets/phone-ico.png"
              alt=""
            />{" "}
            +91-999999999
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-brownCust">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-6 inline-block align-middle mr-1"
              src="/assets/email-ico.png"
              alt=""
            />{" "}
            demogmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
