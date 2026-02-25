"use client";

import Link from "next/link";
import styles from "@/styles/style";
import { pricing } from "@/constants";
import Image from "next/image";
import { star } from "@/public/assets";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={`${styles.paddingY} bg-primary relative`}>
      {/* Background gradient */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[30%] top-[20%] rounded-full blue__gradient opacity-20" />

      <div className={styles.boxWidth}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`${styles.heading2} text-center mb-4`}>
            Choose Your <span className="text-gradient">Transformation</span> Path
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mx-auto text-center`}>
            Two powerful ways to begin your inner journey — start free or go all in for lasting, inside-out transformation.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-black-gradient rounded-[20px] p-8 flex flex-col ${
                plan.popular ? "border-2 border-secondary transform md:scale-105" : ""
              } hover:translate-y-[-10px] transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-primary px-6 py-1 rounded-full font-poppins font-semibold text-[14px]">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="font-poppins font-semibold text-[24px] text-white mb-2">{plan.title}</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="font-poppins font-bold text-[48px] text-white">{plan.price}</span>
                </div>
                <p className={`${styles.paragraph} text-[14px]`}>{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="flex-grow mb-8">
                <ul className="list-none">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start mb-4">
                      <Image src={star} alt="check" width={20} height={20} className="object-contain mr-3 mt-1" />
                      <span className="font-poppins text-[15px] text-dimWhite">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`w-full py-4 px-6 rounded-[10px] font-poppins font-medium text-[16px] transition-all text-center ${
                  plan.popular ? "bg-secondary text-primary hover:opacity-90" : "bg-blue-gradient text-primary hover:opacity-90"
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-10 font-poppins text-[14px] text-dimWhite">
          All programs include a free discovery call to ensure we're the right fit for you.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
