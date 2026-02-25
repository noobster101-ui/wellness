"use client";

import Link from "next/link";
import styles from "@/styles/style";
import { baner } from "@/public/assets";
import Image from "next/image";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Image Section - Left */}

    {/* Content Section - Right */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <span className="text-white text-[14px] font-poppins font-medium">✨ Transform Your Life Today</span>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Unlock Your <br className="sm:block hidden" /> <span className="text-gradient">True Potential</span>{" "}
        </h1>
      </div>

      <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        From Within.
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Join thousands of women who have transformed their lives through our proven programs. Break free from limiting beliefs, build
        unshakeable confidence, and become the best version of yourself.
      </p>

      <div className="flex flex-row mt-8 gap-4">
        <Link
          href="/contact"
          className="py-4 px-8 bg-secondary font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:opacity-90 transition-all text-center"
        >
          Start Free Consultation
        </Link>
        <Link
          href="/programs"
          className="py-4 px-8 bg-black-gradient border border-dimWhite font-poppins font-medium text-[18px] text-white rounded-[10px] hover:border-secondary transition-all text-center"
        >
          View Programs
        </Link>
      </div>
    </div>
    <div className={`flex-1 flex md:my-0 my-10 relative`}>
      <Image src={baner} alt="Transformation" className="w-[100%] h-[100%] relative z-[5] rounded-2" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    {/* Mobile CTA */}
    <div className={`${styles.flexCenter} ss:hidden mt-8`}>
      <Link href="/contact" className="py-4 px-8 bg-secondary font-poppins font-medium text-[18px] text-primary rounded-[10px]">
        Get Started
      </Link>
    </div>
  </section>
);

export default Hero;
