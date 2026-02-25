"use client";

import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import { vidya } from "@/public/assets";
import Image from "next/image";

const AboutPage: React.FC = () => {
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
                About <span className="text-gradient">Vidya Naik Wellness</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[800px] text-[20px]`}>
                Empowering women to transform from the inside out — breaking free from limiting beliefs, unlocking their charisma, and
                confidently pursuing the life they truly deserve.
              </p>
            </section>
          </div>
        </div>

        {/* Our Story */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <div className="flex md:flex-row flex-col items-center">
                <div className="flex-1 md:pr-10 pr-0">
                  <h2 className={styles.heading2}>
                    Our <span className="text-gradient">Story</span>
                  </h2>
                  <p className={`${styles.paragraph} mt-5`}>
                    Vidya Naik Wellness was founded with a singular mission: to help women unlock their full potential and live lives of
                    purpose, confidence, and fulfillment. We believe that true transformation happens from the inside out.
                  </p>
                  <p className={`${styles.paragraph} mt-4`}>
                    Our founder, Vidya Naik, has dedicated her life to understanding the psychology of success, confidence, and personal
                    growth. Through years of research and practice, she developed comprehensive programs that address the root causes of
                    self-doubt and limited thinking.
                  </p>
                  <p className={`${styles.paragraph} mt-4`}>
                    Today, we have helped thousands of women transform their lives, build unshakeable confidence, and achieve their dreams.
                    Our approach combines ancient wisdom with modern coaching techniques, creating lasting, meaningful change.
                  </p>
                </div>
                <div className="flex-1 flex justify-center items-center md:mt-0 mt-10 md:ml-10 ml-0">
                  <div className="relative w-[350px] h-[400px]">
                    <Image src={vidya} alt="Our Story" fill className="object-cover rounded-2xl" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* What We Offer */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <h2 className={`${styles.heading2} text-center mb-12`}>
                What We <span className="text-gradient">Offer</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Personalized Coaching",
                    description:
                      "One-on-one sessions tailored to your unique needs and goals, helping you overcome specific challenges and achieve your dreams.",
                  },
                  {
                    title: "NLP Programs",
                    description: "Neuro-Linguistic Programming techniques to rewire your thinking patterns and eliminate limiting beliefs.",
                  },
                  {
                    title: "Confidence Building",
                    description:
                      "Comprehensive programs designed to help you build unshakeable confidence and command respect in any situation.",
                  },
                  {
                    title: "Mindset Transformation",
                    description: "Learn the secrets of successful mindset management and develop habits that lead to success.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-black-gradient p-8 rounded-[20px]">
                    <h3 className="font-poppins font-semibold text-[22px] text-white mb-3">{item.title}</h3>
                    <p className={`${styles.paragraph}`}>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Our Values */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <h2 className={`${styles.heading2} text-center mb-12`}>
                Our <span className="text-gradient">Values</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Authenticity",
                    description: "We believe in being true to yourself and honoring your unique journey.",
                  },
                  {
                    title: "Empowerment",
                    description: "We empower women to take control of their lives and create the future they desire.",
                  },
                  {
                    title: "Transformation",
                    description: "We are committed to creating lasting, meaningful change in every woman's life.",
                  },
                ].map((value, index) => (
                  <div key={index} className="text-center p-8">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-primary font-poppins font-bold text-[24px]">{index + 1}</span>
                    </div>
                    <h3 className="font-poppins font-semibold text-[22px] text-white mb-3">{value.title}</h3>
                    <p className={`${styles.paragraph}`}>{value.description}</p>
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
              <h2 className={`${styles.heading2} mb-6`}>
                Ready to Start Your <span className="text-gradient">Transformation</span>?
              </h2>
              <p className={`${styles.paragraph} max-w-[600px] mx-auto mb-8`}>
                Join thousands of women who have already transformed their lives. Take the first step towards a more confident, purposeful
                you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/programs"
                  className="py-4 px-10 bg-secondary font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:opacity-90 transition-all"
                >
                  View Programs
                </a>
                <a
                  href="/contact"
                  className="py-4 px-10 bg-black-gradient border border-dimWhite font-poppins font-medium text-[18px] text-white rounded-[10px] hover:border-secondary transition-all"
                >
                  Contact Us
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

export default AboutPage;
