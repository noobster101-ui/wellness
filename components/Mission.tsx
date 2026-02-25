"use client";

import Link from "next/link";
import styles from "@/styles/style";
import { mission } from "@/constants";
import { star } from "@/public/assets";
import Image from "next/image";

const Mission: React.FC = () => {
  return (
    <section id="mission" className={`${styles.paddingY} bg-primary relative`}>
      {/* Background gradient effect */}
      <div className="absolute z-[0] w-[40%] h-[40%] -left-[10%] top-[30%] rounded-full pink__gradient opacity-30" />

      <div className={styles.boxWidth}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`${styles.heading2} text-center mb-4`}>{mission.title}</h2>
          <p className={`${styles.paragraph} max-w-[800px] mx-auto text-center text-white text-[20px] leading-[36px]`}>
            {mission.subtitle}
          </p>
        </div>

        {/* Mission Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mission.points.map((point, index) => (
            <div
              key={point.id}
              className="bg-black-gradient p-8 rounded-[20px] hover:translate-y-[-5px] transition-all duration-300 cursor-pointer feature-card"
            >
              <div className="w-14 h-14 bg-primary rounded-[10px] flex items-center justify-center mb-6">
                <Image src={star} alt={point.title} width={28} height={28} className="object-contain" />
              </div>
              <h3 className="font-poppins font-semibold text-[22px] text-white mb-4">{point.title}</h3>
              <p className={`${styles.paragraph} text-[15px] leading-[26px]`}>{point.content}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block py-4 px-10 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:opacity-90 transition-all"
          >
            Start Your Transformation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mission;
