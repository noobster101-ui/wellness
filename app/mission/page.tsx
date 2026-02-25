"use client";

import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import { mission } from "@/constants";
import { star, shield, send } from "@/public/assets";
import Image from "next/image";

const MissionPage: React.FC = () => {
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
                Our <span className="text-gradient">Mission</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[800px] text-[20px]`}>{mission.subtitle}</p>
            </section>
          </div>
        </div>

        {/* Core Values/Pillars */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <h2 className={`${styles.heading2} text-center mb-4`}>
                The Three Pillars of <span className="text-gradient">Transformation</span>
              </h2>
              <p className={`${styles.paragraph} text-center max-w-[700px] mx-auto mb-16`}>
                Our mission is built on three foundational principles that guide everything we do.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mission.points.map((point, index) => (
                  <div
                    key={point.id}
                    className="bg-black-gradient p-8 rounded-[20px] hover:transform hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                      {index === 0 && <Image src={shield} alt="Beliefs" width={32} height={32} className="object-contain" />}
                      {index === 1 && <Image src={send} alt="Emotions" width={32} height={32} className="object-contain" />}
                      {index === 2 && <Image src={star} alt="Communication" width={32} height={32} className="object-contain" />}
                    </div>
                    <h3 className="font-poppins font-semibold text-[24px] text-white mb-4">{point.title}</h3>
                    <p className={`${styles.paragraph}`}>{point.content}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Why This Mission Matters */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <div className="bg-black-gradient p-8 md:p-12 rounded-[20px]">
                <h2 className={`${styles.heading2} mb-6`}>
                  Why This <span className="text-gradient">Matters</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-poppins font-semibold text-[20px] text-white mb-4">The Problem</h3>
                    <p className={`${styles.paragraph}`}>
                      Millions of women live with self-doubt, limiting beliefs, and fear of standing out. They settle for less than they
                      deserve, hide their true potential, and live small.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-[20px] text-white mb-4">Our Solution</h3>
                    <p className={`${styles.paragraph}`}>
                      We provide the tools, techniques, and support needed to break free from these barriers. Through our proven programs,
                      women discover their true potential and learn to communicate with confidence and charisma.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Impact Stats */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY} text-center`}>
              <h2 className={`${styles.heading2} mb-12`}>
                Our <span className="text-gradient">Impact</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "500+", label: "Women Transformed" },
                  { number: "1000+", label: "Lives Impacted" },
                  { number: "100+", label: "Programs Delivered" },
                  { number: "10+", label: "Years Experience" },
                ].map((stat, index) => (
                  <div key={index} className="bg-black-gradient p-6 rounded-[20px]">
                    <h3 className="font-poppins font-bold text-[36px] md:text-[48px] text-secondary mb-2">{stat.number}</h3>
                    <p className="font-poppins text-[16px] text-dimWhite">{stat.label}</p>
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
                Join Our <span className="text-gradient">Mission</span>
              </h2>
              <p className={`${styles.paragraph} max-w-[600px] mx-auto mb-8`}>
                Be part of a community of women who are committed to transforming themselves and helping others do the same.
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
                  Get in Touch
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

export default MissionPage;
