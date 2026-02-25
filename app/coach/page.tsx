"use client";

import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import { coach } from "@/constants";
import { vidya } from "@/public/assets";
import Image from "next/image";

const CoachPage: React.FC = () => {
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
                Meet The <span className="text-gradient">Coach</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[600px] text-[18px]`}>Empowering women to transform from the inside out</p>
            </section>
          </div>
        </div>

        {/* Coach Profile Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-1 flex justify-center items-center md:pr-10 pr-0 md:mb-0 mb-8">
                  <div className="relative w-[350px] h-[400px] md:w-[450px] md:h-[500px]">
                    <Image src={vidya} alt={coach.name} fill className="object-cover rounded-2xl" />
                    <div className="absolute -bottom-6 -right-6 bg-secondary p-4 rounded-[20px] hidden md:block">
                      <p className="font-poppins font-bold text-[24px] text-primary">{coach.experience}</p>
                      <p className="font-poppins text-[12px] text-primary">Years Experience</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 md:pl-10 pl-0">
                  <h2 className="font-poppins font-bold text-[36px] text-white mb-2">{coach.name}</h2>
                  <p className="font-poppins font-medium text-[20px] text-secondary mb-6">{coach.title}</p>
                  <p className={`${styles.paragraph} text-[17px] leading-[30px]`}>{coach.description}</p>

                  {/* Achievements */}
                  <div className="mt-8">
                    <h3 className="font-poppins font-semibold text-[20px] text-white mb-4">Key Achievements</h3>
                    <div className="flex flex-wrap gap-3">
                      {coach.achievements.map((achievement, index) => (
                        <span key={index} className="px-4 py-2 bg-secondary/20 text-secondary font-poppins text-[14px] rounded-full">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="mt-8">
                    <h3 className="font-poppins font-semibold text-[20px] text-white mb-4">Specialization</h3>
                    <div className="flex gap-4">
                      <span className="px-6 py-3 bg-gradient-to-r from-secondary/30 to-primary border border-secondary/50 text-white font-poppins text-[16px] rounded-[10px]">
                        {coach.specialization} Practitioner
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="/contact"
                      className="py-4 px-8 bg-secondary font-poppins font-medium text-[16px] text-primary rounded-[10px] hover:opacity-90 transition-all"
                    >
                      Book a Consultation
                    </a>
                    <a
                      href="/programs"
                      className="py-4 px-8 bg-black-gradient border border-dimWhite font-poppins font-medium text-[16px] text-white rounded-[10px] hover:border-secondary transition-all"
                    >
                      View Programs
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Journey Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <h2 className={`${styles.heading2} text-center mb-12`}>
                The <span className="text-gradient">Journey</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black-gradient p-8 rounded-[20px]">
                  <h3 className="font-poppins font-semibold text-[22px] text-white mb-4">Corporate to Coaching</h3>
                  <p className={`${styles.paragraph}`}>
                    After 10+ years of working at top MNCs like Siemens and Cisco, I discovered my true calling in personal development. The
                    corporate world taught me valuable skills, but I felt a deeper pull towards helping others transform their lives.
                  </p>
                </div>
                <div className="bg-black-gradient p-8 rounded-[20px]">
                  <h3 className="font-poppins font-semibold text-[22px] text-white mb-4">Building KarizmaticU</h3>
                  <p className={`${styles.paragraph}`}>
                    In 2019, I co-founded KarizmaticU with a mission to help others unlock their charismatic potential. Since then, we've
                    helped thousands of women break free from self-doubt and embrace their true power.
                  </p>
                </div>
                <div className="bg-black-gradient p-8 rounded-[20px]">
                  <h3 className="font-poppins font-semibold text-[22px] text-white mb-4">Certification & Training</h3>
                  <p className={`${styles.paragraph}`}>
                    I'm an internationally certified 'Train The Trainer' by T. Harv Eker, and a certified NLP Practitioner. These powerful
                    modalities allow me to help clients create lasting transformation at the deepest level.
                  </p>
                </div>
                <div className="bg-black-gradient p-8 rounded-[20px]">
                  <h3 className="font-poppins font-semibold text-[22px] text-white mb-4">Speaking & Workshops</h3>
                  <p className={`${styles.paragraph}`}>
                    As a TEDx speaker and corporate trainer, I've had the privilege of empowering thousands through my programs and talks. I
                    believe in spreading the message of empowerment to as many women as possible.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <div className="bg-black-gradient p-8 md:p-12 rounded-[20px] text-center">
                <h2 className={`${styles.heading2} mb-6`}>
                  My <span className="text-gradient">Philosophy</span>
                </h2>
                <p className={`${styles.paragraph} max-w-[800px] mx-auto text-[20px]`}>
                  "True transformation happens from the inside out. It's not about becoming someone else – it's about peeling back the
                  layers to reveal the authentic, confident, charismatic woman that's already within you."
                </p>
                <p className="font-poppins font-semibold text-[20px] text-secondary mt-6">— {coach.name}</p>
              </div>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY} text-center`}>
              <h2 className={`${styles.heading2} mb-6`}>
                Ready to <span className="text-gradient">Transform</span>?
              </h2>
              <p className={`${styles.paragraph} max-w-[600px] mx-auto mb-8`}>
                Let's work together to unlock your full potential and create the life you truly deserve.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="py-4 px-10 bg-secondary font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:opacity-90 transition-all"
                >
                  Book Free Consultation
                </a>
                <a
                  href="/programs"
                  className="py-4 px-10 bg-black-gradient border border-dimWhite font-poppins font-medium text-[18px] text-white rounded-[10px] hover:border-secondary transition-all"
                >
                  View Programs
                </a>
              </div>
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

export default CoachPage;
