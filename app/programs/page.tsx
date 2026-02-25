"use client";

import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import { pricing } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const ProgramsPage: React.FC = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        {/* Navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Hero Section */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} w-full`}>
            <section className={`${styles.paddingY} flex flex-col items-center text-center`}>
              <h1 className="font-poppins font-bold text-[48px] md:text-[64px] text-white leading-tight mb-6">
                Our <span className="text-gradient">Programs</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[700px] text-[18px]`}>
                Choose the transformation path that's right for you. Each program is designed to help you unlock your full potential and
                create lasting change.
              </p>
            </section>
          </div>
        </div>

        {/* Programs Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.map((program) => (
                  <div
                    key={program.id}
                    id={program.id}
                    className={`relative bg-black-gradient p-8 rounded-[20px] flex flex-col ${
                      program.popular ? "border-2 border-secondary transform md:scale-105" : "border border-dimWhite/20"
                    }`}
                  >
                    {program.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-secondary text-primary font-poppins font-semibold text-[14px] px-4 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="font-poppins font-semibold text-[24px] text-white mb-2">{program.title}</h3>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="font-poppins font-bold text-[36px] text-secondary">{program.price}</span>
                      </div>
                      <p className={`${styles.paragraph} text-[14px]`}>{program.description}</p>
                    </div>

                    <div className="flex-1 mb-6">
                      <ul className="space-y-3">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-secondary">✓</span>
                            <span className="font-poppins text-[14px] text-dimWhite">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact" className="w-full">
                      <button
                        className={`w-full py-3 rounded-[10px] font-poppins font-medium text-[16px] transition-all ${
                          program.popular
                            ? "bg-secondary text-primary hover:opacity-90"
                            : "bg-transparent border border-dimWhite text-white hover:border-secondary"
                        }`}
                      >
                        {program.buttonText}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Detailed Program Information */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <h2 className={`${styles.heading2} text-center mb-12`}>
                Program <span className="text-gradient">Details</span>
              </h2>

              {pricing.map((program) => (
                <div key={program.id} id={`${program.id}-details`} className="bg-black-gradient p-8 md:p-12 rounded-[20px] mb-8">
                  <div className="flex md:flex-row flex-col items-start gap-8">
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-[28px] text-white mb-4">{program.title}</h3>
                      <p className={`${styles.paragraph} mb-6`}>{program.detailedDescription}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-primary/50 p-4 rounded-[10px]">
                          <p className="font-poppins text-[12px] text-dimWhite mb-1">Duration</p>
                          <p className="font-poppins font-semibold text-white">{program.duration}</p>
                        </div>
                        <div className="bg-primary/50 p-4 rounded-[10px]">
                          <p className="font-poppins text-[12px] text-dimWhite mb-1">Format</p>
                          <p className="font-poppins font-semibold text-white">{program.format}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-poppins font-semibold text-[18px] text-white mb-3">Who is this for?</h4>
                        <p className={`${styles.paragraph}`}>{program.whoIsThisFor}</p>
                      </div>
                    </div>

                    {program.whatsIncluded && (
                      <div className="flex-1">
                        <h4 className="font-poppins font-semibold text-[18px] text-white mb-4">What's Included</h4>
                        <ul className="space-y-3">
                          {program.whatsIncluded.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="text-secondary">✓</span>
                              <span className="font-poppins text-[14px] text-dimWhite">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <h2 className={`${styles.heading2} text-center mb-12`}>
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
                {[
                  {
                    q: "How do I know which program is right for me?",
                    a: "Start with a free discovery call! We'll discuss your goals and help you choose the program that best fits your needs.",
                  },
                  {
                    q: "Can I upgrade to a higher program later?",
                    a: "Absolutely! Many clients start with the Transformation Program and upgrade to VIP Experience for more intensive support.",
                  },
                  {
                    q: "What if I miss a session?",
                    a: "Life happens! We offer flexible rescheduling. Sessions can be rescheduled up to 24 hours before the scheduled time.",
                  },
                  {
                    q: "Are the programs conducted online or in-person?",
                    a: "Our programs are primarily conducted online via video call for convenience. The VIP Experience includes in-person workshop sessions.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-black-gradient p-6 rounded-[20px]">
                    <h3 className="font-poppins font-semibold text-[18px] text-white mb-3">{faq.q}</h3>
                    <p className={`${styles.paragraph} text-[15px]`}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY} text-center`}>
              <h2 className={`${styles.heading2} mb-6`}>Still Not Sure?</h2>
              <p className={`${styles.paragraph} max-w-[600px] mx-auto mb-8`}>
                Book a free discovery call and let's discuss which program is right for you.
              </p>
              <Link
                href="/contact"
                className="inline-block py-4 px-10 bg-secondary font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:opacity-90 transition-all"
              >
                Book Free Consultation
              </Link>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className={`bg-primary ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramsPage;
