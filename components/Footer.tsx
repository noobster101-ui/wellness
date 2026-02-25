"use client";

import styles from "@/styles/style";
import { logo } from "@/public/assets";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-primary`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full max-w-[1280px] border-t-[1px] border-t-[#3F3E45] pt-6`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <Link href="/">
          <Image src={logo} alt="Vidya Naik Wellness" width={200} height={60} className="object-contain" />
        </Link>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Empowering women to transform from the inside out. Break free from limiting beliefs and unlock your true potential.
        </p>
        {/* Social Media Icons */}
        <div className="flex flex-row mt-6">
          {socialMedia.map((social, index) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-[35px] h-[35px] bg-black-gradient rounded-full flex items-center justify-center mr-3 hover:bg-secondary transition-all ${
                index !== socialMedia.length - 1 ? "mr-3" : "mr-0"
              }`}
            >
              <Image src={social.icon} alt={social.id} width={18} height={18} className="object-contain" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}>{footerLink.title}</h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.link.startsWith("http") ? (
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.link}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full text-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] max-w-[1280px] px-6">
      <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
        © {new Date().getFullYear()} Vidya Naik Wellness. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
