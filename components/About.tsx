"use client";

import Link from "next/link";
import styles from "@/styles/style";
import { vidya } from "@/public/assets";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className={`${styles.paddingY} bg-primary`}>
      <div className={`${styles.boxWidth} flex md:flex-row flex-col items-center`}>
        {/* Image Section - Left */}
        <div className="flex-1 flex justify-center items-center md:mb-0 mb-10">
          <div className="relative w-[350px] h-[400px] md:w-[450px] md:h-[500px]">
            <Image
              src={vidya}
              alt="About Vidya Naik Wellness"
              fill
              className="object-cover rounded-2xl"
              style={{ objectPosition: "center top" }}
            />
            <div className="absolute -bottom-6 -right-6 w-[120px] h-[120px] bg-secondary rounded-full flex items-center justify-center z-10">
              <div className="text-center">
                <span className="block font-poppins font-bold text-[24px] text-primary">10+</span>
                <span className="block font-poppins font-medium text-[12px] text-primary">Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section - Right */}
        <div className="flex-1 md:ml-10 ml-0">
          <h2 className={styles.heading2}>
            About <span className="text-gradient">Vidya Naik</span> Wellness
          </h2>

          <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
            Welcome to Vidya Naik Wellness, where transformation happens from the inside out. We believe that true wellness encompasses not
            just the body, but the mind and spirit as well.
          </p>

          <p className={`${styles.paragraph} mt-4 max-w-[550px]`}>
            Our approach combines ancient wisdom with modern coaching techniques to help you unlock your full potential. Whether you're
            looking to overcome limiting beliefs, improve your communication skills, or find inner confidence, we're here to guide you.
          </p>

          <div className="mt-8">
            <h3 className="font-poppins font-semibold text-[20px] text-white mb-4">What We Offer:</h3>
            <ul className="list-none">
              {[
                "Personalized coaching programs",
                "NLP techniques for transformation",
                "Confidence building workshops",
                "Mindset reset programs",
                "One-on-one mentorship",
              ].map((item, index) => (
                <li key={index} className="flex items-center mb-3">
                  <span className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary text-[12px] font-bold">✓</span>
                  </span>
                  <span className="font-poppins text-[16px] text-dimWhite">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/about"
            className="inline-block mt-8 py-3 px-8 bg-blue-gradient font-poppins font-medium text-[16px] text-primary rounded-[10px] hover:opacity-90 transition-all"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
