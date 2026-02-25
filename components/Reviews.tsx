"use client";

import Link from "next/link";
import styles from "@/styles/style";
import { feedback } from "@/constants";
import FeedbackCard from "./FeedbackCard";

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* Background gradient */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient opacity-30" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-10 relative z-[1]">
        <h1 className={styles.heading2}>
          What Our <br className="sm:block hidden" /> <span className="text-gradient">Clients Say</span>
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Real stories from women who have transformed their lives through our programs. Your transformation could be next.
          </p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-block py-4 px-10 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:opacity-90 transition-all"
        >
          Start Your Journey Today
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
