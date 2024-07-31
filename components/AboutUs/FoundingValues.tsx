import Image from "next/image";
import compassion from "@/public/assets/compassion.png";
import innovation from "@/public/assets/innovation.png";
import integrity from "@/public/assets/integrity.png";
const FoundingValues = () =>
    {
        return (<section className="pb-16 xl:pb-20 pt-6 xl:pt-12 overflow-hidden">
            <div className="container mx-auto">
              <div className="text-center mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-darkOrange mb-2 px-4 xl:px-14 animate__ animate__fadeInDown animate__slow wow animated">Founding Values</h2>
                {/* <hr className="h-1.5 w-36 bg-brownCust mb-5 inline-block animate__ animate__fadeInDown animate__slow wow animated"/> */}
                <div className="mt-4 px-0 xl:px-14">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="card-box bg-white rounded-md p-2 sm:p-2 lg:p-6 text-center">
                      <Image
                          alt=""
                          loading="lazy"
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className="h-16 w-auto max-w-full rounded-lg mx-auto mb-5 pl-3"
                          sizes="100vw"
                          src={compassion}
                      />
                      <h3 className="text-brownCust mt-1 md:text-2xl text-xl font-extrabold">COMPASSION</h3>
                      <hr className="h-1 w-24 bg-darkBlue mb-1 mt-1 inline-block" />
                      <p className="text-darkBlue">We approach every interaction with empathy and understanding, recognizing the unique challenges patients face.</p>
                    </div>
                    <div className="card-box bg-white rounded-md p-2 lg:p-6 text-center">
                      <Image
                          alt=""
                          loading="lazy"
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className="h-16 w-auto max-w-full rounded-lg mx-auto mb-5 pl-5"
                          sizes="100vw"
                          src={innovation}
                      />
                      <h3 className="text-brownCust mt-1 md:text-2xl text-xl font-extrabold">INNOVATION</h3>
                      <hr className="h-1 w-24 bg-darkBlue mb-1 mt-1 inline-block" />
                      <p className="text-darkBlue">Our team thrives on pushing boundaries, constantly seeking innovative solutions to enhance patient support.</p>
                    </div>
                    <div className="card-box bg-white rounded-md p-2 lg:p-6 text-center">
                      <Image
                          alt=""
                          loading="lazy"
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className="h-16 w-auto max-w-full rounded-lg mx-auto mb-5"
                          sizes="100vw"
                          src={integrity}
                      />
                      <h3 className="text-brownCust mt-1 md:text-2xl text-xl font-extrabold">INTEGRITY</h3>
                      <hr className="h-1 w-24 bg-darkBlue mb-1 mt-1 inline-block" />
                      <p className="text-darkBlue">Trust is the foundation of our relationships. We uphold the highest standards of integrity in all our endeavors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>);
    }
    export default FoundingValues;