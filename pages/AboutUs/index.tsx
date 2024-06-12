import Layout from "../Layout";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { getMetaTags } from "@/services/SeoService";
//import PageNotFound from "@/components/PageNotFound";
import { MetaProps } from "@/Interfaces/SEO/MetaProps";
import compassion from "@/public/assets/Medmonk-Network.png";
import find from "@/public/assets/find-w.png";
import teamMember from "@/public/assets/team-member.jpg";
import Link from "next/link";

const AboutUs = ({ metaTags }: { metaTags: MetaProps }) => {
  return (
    <>
      <Layout metaData={metaTags}>
        {/* <PageNotFound /> */}
        <>
        <section className="pt-36 pb-20 overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center max-w-7xl max-w- mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">MedMonk As A Team</h2>
              <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
              <div className="animate__ animate__fadeInDown animate__slow wow animated">
                <p className="mb-5">At Medmonk, we take pride in our long history of patient advocacy. From the very beginning, our focus has always been clear: patients are our top priority.</p>
                <p className="mb-5">Medmonk's story began in 2009 when co-founder Somaira Punjwani, an HIV specialty pharmacist, developed a unique process to help patients struggling with their co-pays instead of turning them away. For over three years, she managed this manually, receiving tremendous positive feedback. This innovative approach led to the founding of Medmonk in 2012. As a Silicon Valley-based company incubated by Y Combinator, we have leveraged our innovative roots to build a robust and impactful patient support system.</p>
                <p className="mb-5">Our team is composed of dedicated pharmacists, nurses, patient advocates, and reimbursement specialists who bring extensive experience and a shared passion for supporting patients with their life-saving medications. We understand the unique challenges faced by patients with rare diseases and are committed to going the extra mile to assist them. This dedication is reflected in Medmonk's impressive average brand retention of seven years.</p>
                <p>At Medmonk, patient care is not just a commitment—it's our mission. Join us in making a difference in patients' lives.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">Meet The Leadership Team</h2>
              <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
              <div className="animate__ animate__fadeInDown animate__slow wow animated">
                <p>At Medmonk, we're more than just a company; we're a passionate team of professionals committed to making a meaningful impact in the lives of patients. Our founding members, comprised of pharmacists and technologists, bring decades of collective experience in patient care and support.</p>
              </div>
            </div>
            <div className="pt-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-4 gap-3">
                  <div className="card-box bg-white rounded-md p-6">
                    <Image
                        alt=""
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="w-auto max-w-full rounded-lg mx-auto mb-5 shadow-2xl"
                        sizes="100vw"
                        src={teamMember}
                    />
                    <h3 className="text-darkBlue mt-1 md:text-2xl text-xl font-extrabold">ASHAR HASAN R.</h3>
                    <h4 className="text-darkBlue md:text-2xl text-md font-extrabold -mt-1"><small>Ph, MBA.</small></h4>
                    <p className="text-lightGray font-bold text-sm mt-1">Chief Executive Officer</p>
                    <p className="text-lightGray my-3">Transitioned from Chief Business Development Officer to Chief Executive Officer, bringing over a decade of experience in strategic innovation and business growth at Medmonk...</p>
                    <Link href="" className="text-darkBlue font-bold">READ MORE</Link>
                  </div>
                  <div className="card-box bg-white rounded-md p-6">
                    <Image
                        alt=""
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="w-auto max-w-full rounded-lg mx-auto mb-5 shadow-2xl"
                        sizes="100vw"
                        src={teamMember}
                    />
                    <h3 className="text-darkBlue mt-1 md:text-2xl text-xl font-extrabold">ABBAS MEHDI</h3>
                    <h4 className="text-darkBlue md:text-2xl text-md font-extrabold -mt-1"><small>BASc.</small></h4>
                    <p className="text-lightGray font-bold text-sm mt-1">Chief Executive Officer</p>
                    <p className="text-lightGray my-3">Abbas Mehdi recently transitioned to the role of Chief Product Officer after serving as CEO of Medmonk for eleven years. Under his visionary leadership...</p>
                    <Link href="" className="text-darkBlue font-bold">READ MORE</Link>
                  </div>
                  <div className="card-box bg-white rounded-md p-6">
                    <Image
                        alt=""
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="w-auto max-w-full rounded-lg mx-auto mb-5 shadow-2xl"
                        sizes="100vw"
                        src={teamMember}
                    />
                    <h3 className="text-darkBlue mt-1 md:text-2xl text-xl font-extrabold">SOMAIRA PUNJWANI</h3>
                    <h4 className="text-darkBlue md:text-2xl text-md font-extrabold -mt-1"><small>PharmD</small></h4>
                    <p className="text-lightGray font-bold text-sm mt-1">Chief Medical Officer & Co-Founder</p>
                    <p className="text-lightGray my-3">Somaira Punjwani, co-founder of Medmonk, brings over 15 years of pharmacy experience to the organization. Holding a Doctorate in Pharmaceutical Sciences, she has dedicated...</p>
                    <Link href="" className="text-darkBlue font-bold">READ MORE</Link>
                  </div>
                  <div className="card-box bg-white rounded-md p-6">
                    <Image
                        alt=""
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="w-auto max-w-full rounded-lg mx-auto mb-5 shadow-2xl"
                        sizes="100vw"
                        src={teamMember}
                    />
                    <h3 className="text-darkBlue mt-1 md:text-2xl text-xl font-extrabold">BRYAN LI</h3>
                    <h4 className="text-darkBlue md:text-2xl text-md font-extrabold -mt-1"><small>BASc</small></h4>
                    <p className="text-lightGray font-bold text-sm mt-1">Chief Technology Officer</p>
                    <p className="text-lightGray my-3">Bryan Li, Chief Technology Officer at Medmonk, brings a wealth of experience from leading technology companies to his role, where he spearheads Medmonk’s technology initiatives...</p>
                    <Link href="" className="text-darkBlue font-bold">READ MORE</Link>
                  </div>
                  <div className="card-box bg-white rounded-md p-6">
                    <Image
                        alt=""
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="w-auto max-w-full rounded-lg mx-auto mb-5 shadow-2xl"
                        sizes="100vw"
                        src={teamMember}
                    />
                    <h3 className="text-darkBlue mt-1 md:text-2xl text-xl font-extrabold">COURTNEY SMILEY</h3>
                    {/* <h4 className="text-darkBlue md:text-2xl text-md font-extrabold -mt-1"><small>PharmD</small></h4> */}
                    <p className="text-lightGray font-bold text-sm mt-1">Sr. Vice President Business Development</p>
                    <p className="text-lightGray my-3">Courtney spearheads Medmonk's business development initiatives, meticulously tracking industry trends and collaborating with biotechnology and pharmaceutical manufacturers...</p>
                    <Link href="" className="text-darkBlue font-bold">READ MORE</Link>
                  </div>
                  <div className="card-box bg-white rounded-md p-6">
                    <Image
                        alt=""
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="w-auto max-w-full rounded-lg mx-auto mb-5 shadow-2xl"
                        sizes="100vw"
                        src={teamMember}
                    />
                    <h3 className="text-darkBlue mt-1 md:text-2xl text-xl font-extrabold">MARY JERCICH</h3>
                    {/* <h4 className="text-darkBlue md:text-2xl text-md font-extrabold -mt-1"><small>BASc</small></h4> */}
                    <p className="text-lightGray font-bold text-sm mt-1">Director of Sales Support & Patient Services</p>
                    <p className="text-lightGray my-3">Mary Jercich brings over a decade of specialized experience in the pharmacy realm, making her an indispensable asset to Medmonk's mission. Since starting with...</p>
                    <Link href="" className="text-darkBlue font-bold">READ MORE</Link>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className="pb-20 overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">Our Journey</h2>
              <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
            </div>
            <div className="max-w-7xl mx-auto">
              <ul className="flex align-middle text-center gap-3 journy-step text-sm">
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
                <li>Lorem ipsum is a placeholder text commonly used</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="pb-20 pt-12 overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">Founding Values</h2>
              <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/>
              <div className="px-14">
                <div className="grid grid-cols-3 gap-4">
                  <div className="card-box bg-white rounded-md p-6 text-center">
                    <Image
                        alt=""
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="h-16 w-auto max-w-full rounded-lg mx-auto mb-5"
                        sizes="100vw"
                        src={compassion}
                    />
                    <h3 className="text-brownCust mt-1 md:text-2xl text-xl font-extrabold">COMPASSION</h3>
                    <hr className="h-1 w-24 bg-darkBlue mb-1 mt-1 inline-block" />
                    <p className="text-darkBlue">We approach every interaction with empathy and understanding, recognizing the unique challenges patients face.</p>
                  </div>
                  <div className="card-box bg-white rounded-md p-6 text-center">
                    <Image
                        alt=""
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="h-16 w-auto max-w-full rounded-lg mx-auto mb-5"
                        sizes="100vw"
                        src={compassion}
                    />
                    <h3 className="text-brownCust mt-1 md:text-2xl text-xl font-extrabold">INNOVATION</h3>
                    <hr className="h-1 w-24 bg-darkBlue mb-1 mt-1 inline-block" />
                    <p className="text-darkBlue">Our team thrives on pushing boundaries, constantly seeking innovative solutions to enhance patient support.</p>
                  </div>
                  <div className="card-box bg-white rounded-md p-6 text-center">
                    <Image
                        alt=""
                        loading="lazy"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="h-16 w-auto max-w-full rounded-lg mx-auto mb-5"
                        sizes="100vw"
                        src={compassion}
                    />
                    <h3 className="text-brownCust mt-1 md:text-2xl text-xl font-extrabold">INTEGRITY</h3>
                    <hr className="h-1 w-24 bg-darkBlue mb-1 mt-1 inline-block" />
                    <p className="text-darkBlue">Trust is the foundation of our relationships. We uphold the highest standards of integrity in all our endeavors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const meta: MetaProps | null = await getMetaTags("AboutUsPage");
  return { props: { metaTags: meta } };
};

export default AboutUs;
