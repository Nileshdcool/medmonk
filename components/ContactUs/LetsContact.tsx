import Link from "next/link";
import Image from "next/image";
import ContactIco from "@/public/assets/contact-ico.png";
import MailIco from "@/public/assets/mail-ico.png";
import { useRef, useState } from "react";
import { validateField, ValidateForm } from "@/Schemas/ContactUsSchema";
import { addContactUs } from "@/services/ContactUs";
import { Toaster, toast } from "sonner";

const defaultFormData: ContactUsFormData = {
  FirstName: "",
  LastName: "",
  Email: "",
  PhoneNumber: "",
  Organization: "",
  Subject: "",
  Message: "",
};
const LetsContact = () => {
  const timerRef = useRef<any>(null);
  const [formData, setFormData] = useState<ContactUsFormData>(defaultFormData);
  const [errors, setErrors] = useState<Partial<ContactUsFormData>>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let isValid = ValidateForm(formData, setErrors);
      if (isValid) {
        const transformedFormData = Object.fromEntries(
          Object.entries(formData).map(([key, value]) => [
            key,
            value ? value : null,
          ])
        );
        try {
          const docRef = await addContactUs(transformedFormData);
          console.log("Document written with ID: ", docRef);
          toast.success("Form is submitted Successfully");

          const emailResponse = await fetch("/api/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          const emailResult = await emailResponse.json();
          if (emailResult.success) {
            console.log("Email sent successfully!");
          } else {
            console.error("Failed to send email.");
          }
        } catch (error) {
          toast.error("Failed!");
          console.error("Error posting new data:", error);
        }
        finally{
          setFormData(defaultFormData);
        }
      }
    } catch (error) {
      toast.error("Failed!");
    } finally {
      setSubmitting(false);
    }
  };
  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };
  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    validateField(name, value, timerRef, setErrors);
  };
  const getErrorMessage = (fieldName: string) => {
    const field = Object.keys(errors).find(
      (filedName) => filedName == fieldName
    ) as keyof ContactUsFormData;
    return (
      (errors && field && errors[field] && (
        <p className="text-red-500 text-sm">{errors[field]}</p>
      )) ||
      null
    );
  };
  return (
    <section className="px-4 py-10 sm:py-16">
      <Toaster richColors expand={true} position="top-right" />
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">
            Lets Connect!
          </h2>
          <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated" />
          <div className="animate__ animate__fadeInDown animate__slow wow animated">
            <p className="mb-5">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="contact-info order-2 md:order-1 mt-5 md:mt-0">
              <ul>
                <li className="mb-4">
                  <h3 className="text-lg font-bold mb-2 text-darkBlue">
                    Email:
                  </h3>
                  <div className="flex items-center text-sm font-semibold">
                    <Image
                      alt=""
                      loading="lazy"
                      width="0"
                      height="0"
                      decoding="async"
                      data-nimg="1"
                      className="max-w-5 mr-2"
                      sizes="100vw"
                      src={MailIco}
                    />
                    <div className="flex">
                      Email:
                      <Link href="mailto:info@medmonk.com">
                        info@medmonk.com
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <h3 className="text-lg font-bold mb-2 text-darkBlue">
                    Telephone
                  </h3>
                  <div className="flex items-center text-sm font-semibold">
                    <Image
                      alt=""
                      loading="lazy"
                      width="0"
                      height="0"
                      decoding="async"
                      data-nimg="1"
                      className="max-w-5 mr-2"
                      sizes="100vw"
                      src={ContactIco}
                    />
                    <div className="flex">
                      <Link href="tel:8662343732">866-234-3732</Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="contact-form order-1 md:order-0">
              <div className="flex items-center dark:bg-gray-900">
                <div className="container mx-auto">
                  <form onSubmit={handleSubmit} method="POST" id="form">
                    <input
                      type="hidden"
                      name="access_key"
                      value="YOUR_ACCESS_KEY_HERE"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="New Submission from Web3Forms"
                    />

                    <div className="flex mb-3 space-x-3">
                      <div className="w-full md:w-1/2">
                        <label
                          htmlFor="fname"
                          className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold"
                        >
                          First Name<span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="FirstName"
                          id="fname"
                          placeholder=""
                          onChange={handleTextFieldChange}
                          value={formData.FirstName}
                          className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                        {getErrorMessage("FirstName")}
                      </div>
                      <div className="w-full md:w-1/2">
                        <label
                          htmlFor="lname"
                          className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="LastName"
                          id="lname"
                          placeholder=""
                          onChange={handleTextFieldChange}
                          value={formData.LastName}
                          className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                        {getErrorMessage("LastName")}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold"
                      >
                        Email<span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="Email"
                        id="email"
                        placeholder=""
                        onChange={handleTextFieldChange}
                        value={formData.Email}
                        className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                      {getErrorMessage("Email")}
                    </div>

                    <div className="flex mb-3 space-x-3">
                      <div className="w-full md:w-1/2">
                        <label
                          htmlFor="phone"
                          className="block text-sm mb-1 text-gray-600 dark:text-gray-400 font-semibold"
                        >
                          Phone Number<span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="PhoneNumber"
                          id="phone"
                          placeholder=""
                          onChange={handleTextFieldChange}
                          value={formData.PhoneNumber}
                          className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                        {getErrorMessage("PhoneNumber")}
                      </div>
                      <div className="w-full md:w-1/2">
                        <label
                          htmlFor="organization"
                          className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold"
                        >
                          Organization<span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="Organization"
                          id="organization"
                          placeholder=""
                          onChange={handleTextFieldChange}
                          value={formData.Organization}
                          className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                        {getErrorMessage("Organization")}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="subject"
                        className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold"
                      >
                        Subject<span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="Subject"
                        id="subject"
                        placeholder=""
                        onChange={handleTextFieldChange}
                        value={formData.Subject}
                        className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                      {getErrorMessage("Subject")}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="message"
                        className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold"
                      >
                        Message<span className="text-red-600">*</span>
                      </label>
                      <textarea
                        name="Message"
                        id="message"
                        placeholder=""
                        className="w-full text-sm h-16 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        onChange={handleTextAreaChange}
                        value={formData.Message}
                      ></textarea>
                      {getErrorMessage("Message")}
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-sm px-8 py-2 text-center rounded-full"
                      >{submitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                    <p
                      className="text-base text-center text-gray-400"
                      id="result"
                    ></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LetsContact;
