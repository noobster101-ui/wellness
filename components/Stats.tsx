"use client";

import styles from "@/styles/style";
import { stats } from "@/constants";
import Counter from "./Counter";

const Stats: React.FC = () => {
  // Parse the numeric value from stats (e.g., "5000+" -> 5000)
  const getNumericValue = (value: string) => {
    const num = parseInt(value.replace(/[^0-9]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  // Get suffix if any (e.g., "+")
  const getSuffix = (value: string) => {
    return value.replace(/[0-9]/g, "");
  };

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            <Counter end={getNumericValue(stat.value)} duration={2500} suffix={getSuffix(stat.value)} />
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
