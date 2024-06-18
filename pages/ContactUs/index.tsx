import Layout from "../Layout";
import { GetServerSideProps } from "next";
import { getMetaTags } from "@/services/SeoService";
import PageNotFound from "@/components/PageNotFound";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import Link from "next/link";
import Image from "next/image";
//import banner from "@/public/assets/map.png";
//import innovation from "@/public/assets/Home.png";
import ContactIco from "@/public/assets/contact-ico.png";
import MailIco from "@/public/assets/mail-ico.png";

const ContactUs = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
      <section className="hreo-sec bg-center flex bg-no-repeat bg-contact-hero bg-cover py-20 items-end lg:items-center">
        <div className="container mx-auto justify-between items-center flex px-4">
          <div className="flex -mt-7">
            <div className="w-1/1 lg:w-1/2 pr-4">
              <h1 className="text-4xl md:text-6xl font-black text-darkBlue mb-4 animate__animated animate__fadeInDown animate__slow">
              Capitalize the U in Us
              </h1>

              <hr className=" h-1.5 w-36 bg-brownCust mb-5 hidden sm:inline-block animate__animated animate__fadeInDown animate__slow" />
              <p className="sm:text-lg text-md text-darkBlue mb-8  font-semibold animate__animated animate__fadeInUp animate__slow">
              We offer turn-key commercialization solutions htmlFor pharmaceutical brands. Through our various programs and services, we remove barriers to access and help patients get on and remain on therapy. To learn more, connect with one of our specialists today.
              </p>
              <button
                type="button"
                className="hidden animate__animated animate__fadeInUp animate__slow text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-md px-5 py-2.5 text-center me-2 mb-2 rounded-full animate__animated animate__fadeInDown"
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:py-16">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">Let's Connect!</h2>
              <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
              <div className="animate__ animate__fadeInDown animate__slow wow animated">
                <p className="mb-5">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
              </div>
            </div>
            <div className="max-w-5xl mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="contact-info order-2 md:order-1 mt-5 md:mt-0">
                        <ul>
                            <li className="mb-4">
                                <h3 className="text-lg font-bold mb-2 text-darkBlue">Email:</h3>
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
                                    /><div className="flex">Email: <Link href="mailto:info@medmonk.com">info@medmonk.com</Link></div>
                                </div>
                            </li>
                            <li>
                                <h3 className="text-lg font-bold mb-2 text-darkBlue">Telephone</h3>
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
                                    /><div className="flex"><Link href="tel:8662343732">866-234-3732</Link></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-form order-1 md:order-0">
                        <div className="flex items-center dark:bg-gray-900">
                            <div className="container mx-auto"> 
                                <form action="https://api.web3forms.com/submit" method="POST" id="form">
                                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                                    <input type="hidden" name="subject" value="New Submission from Web3Forms" />

                                    <div className="flex mb-3 space-x-3">
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="fname" className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold">First Name<span className="text-red-600">*</span></label>
                                            <input type="text" name="first_name" id="fname" placeholder="" required className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="lname" className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold">Last Name</label>
                                            <input type="text" name="last_name" id="lname" placeholder="" required className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold">Email<span className="text-red-600">*</span></label>
                                        <input type="email" name="email" id="email" placeholder="" required className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>

                                    <div className="flex mb-3 space-x-3">
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="phone" className="block text-sm mb-1 text-gray-600 dark:text-gray-400 font-semibold">Phone Number<span className="text-red-600">*</span></label>
                                            <input type="text" name="phone" id="phone" placeholder="" required className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <label htmlFor="organization" className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold">Organization<span className="text-red-600">*</span></label>
                                            <input type="text" name="organization" id="organization" placeholder="" required className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold">Subject<span className="text-red-600">*</span></label>
                                        <input type="text" name="organization" id="subject" placeholder="" required className="w-full text-sm h-9 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="block mb-1 text-sm text-gray-600 dark:text-gray-400 font-semibold">Message<span className="text-red-600">*</span></label>
                                        <textarea name="message" id="message" placeholder="" className="w-full text-sm h-16 px-3 py-2 placeholder-gray-300 border border-gray-300 focus:outline-none  focus:border-darkOrange dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-sm px-8 py-2 text-center rounded-full">
                                            Submit
                                        </button>
                                    </div>
                                    <p className="text-base text-center text-gray-400" id="result"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("ServicesPage");
  return { props: { metaTags: meta } };
};
export default ContactUs;
