"use client";

import Link from "next/link";
import styles from "@/styles/style";
import { coach } from "@/constants";
import { vidya } from "@/public/assets";
import Image from "next/image";

const Coach: React.FC = () => {
  return (
    <section id="coach" className={`${styles.paddingY} bg-primary`}>
      <div className={`${styles.boxWidth} flex md:flex-row flex-col-reverse items-center`}>
        {/* Content Section - Left */}
        <div className="flex-1 md:pr-10 pr-0">
          <h2 className={styles.heading2}>
            Meet Your <span className="text-gradient">Coach</span>
          </h2>

          <h3 className="font-poppins font-semibold text-[24px] text-white mt-2">{coach.name}</h3>

          <p className="font-poppins font-medium text-[16px] text-secondary mt-1">{coach.title}</p>

          <p className="font-poppins font-medium text-[14px] text-dimWhite mt-1 italic">{coach.tagline}</p>

          <p className={`${styles.paragraph} mt-6 max-w-[550px]`}>{coach.description}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="bg-black-gradient px-6 py-4 rounded-[15px]">
              <span className="font-poppins font-bold text-[32px] text-white">{coach.experience}</span>
              <span className="block font-poppins text-[14px] text-dimWhite">Years Experience</span>
            </div>
            <div className="bg-black-gradient px-6 py-4 rounded-[15px]">
              <span className="font-poppins font-bold text-[32px] text-white">{coach.specialization}</span>
              <span className="block font-poppins text-[14px] text-dimWhite">Coach</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href="/contact"
              className="py-3 px-8 bg-blue-gradient font-poppins font-medium text-[16px] text-primary rounded-[10px] hover:opacity-90 transition-all"
            >
              Book a Consultation
            </Link>
            {coach.linkedin && (
              <a
                href={coach.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-black-gradient border border-white/10 font-poppins font-medium text-[16px] text-white rounded-[10px] hover:border-secondary transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Image Section - Right */}
        <div className="flex-1 flex justify-center items-center md:mb-0 mb-10 md:ml-10 ml-0">
          <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[550px]">
            <Image src={vidya} alt={coach.name} fill className="object-cover rounded-2xl" style={{ objectPosition: "center top" }} />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-[80px] h-[80px] bg-secondary rounded-full flex items-center justify-center">
              <span className="text-primary font-poppins font-bold text-[14px] text-center">
                Certified
                <br />
                Coach
              </span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-[100px] h-[100px] bg-black-gradient rounded-[15px] p-4 flex items-center justify-center">
              <div className="text-center">
                <span className="block font-poppins font-bold text-[20px] text-white">500+</span>
                <span className="block font-poppins text-[10px] text-dimWhite">
                  Lives
                  <br />
                  Touched
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;
