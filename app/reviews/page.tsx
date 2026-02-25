"use client";

import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import { feedback } from "@/constants";
import Image from "next/image";

const ReviewsPage: React.FC = () => {
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
                Success <span className="text-gradient">Stories</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[700px] text-[18px]`}>
                Hear from women who have transformed their lives through our coaching programs. Real stories, real results.
              </p>
            </section>
          </div>
        </div>

        {/* Testimonials */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {feedback.map((testimonial) => (
                  <div key={testimonial.id} className="bg-black-gradient p-8 rounded-[20px]">
                    <Image src={testimonial.img} alt={testimonial.name} width={60} height={60} className="rounded-full object-cover mb-6" />
                    <p className={`${styles.paragraph} mb-6 italic`}>"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-poppins font-semibold text-[18px] text-white">{testimonial.name}</h4>
                      <p className="font-poppins text-[14px] text-secondary">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <h2 className={`${styles.heading2} text-center mb-12`}>
                Video <span className="text-gradient">Testimonials</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: "Priya Sharma", title: "Business Owner", placeholder: "Video testimonial placeholder" },
                  { name: "Anita Menon", title: "Marketing Director", placeholder: "Video testimonial placeholder" },
                ].map((video, index) => (
                  <div key={index} className="bg-black-gradient p-4 rounded-[20px]">
                    <div className="relative w-full h-[300px] bg-primary/50 rounded-[15px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-secondary/40 transition-colors">
                          <span className="text-secondary text-[30px]">▶</span>
                        </div>
                        <p className="font-poppins text-[14px] text-dimWhite">Watch Video</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-poppins font-semibold text-[18px] text-white">{video.name}</h4>
                      <p className="font-poppins text-[14px] text-secondary">{video.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Before/After Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <h2 className={`${styles.heading2} text-center mb-4`}>
                Transformational <span className="text-gradient">Journeys</span>
              </h2>
              <p className={`${styles.paragraph} text-center max-w-[600px] mx-auto mb-12`}>
                See the incredible transformations our clients have achieved through dedicated work with our coaching programs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    before: "Self-doubt and fear of speaking up",
                    after: "Confident communicator and leader",
                    name: "Sarah K.",
                    journey: "6 months in Transformation Program",
                  },
                  {
                    before: "Stuck in career, no direction",
                    after: "Started successful business",
                    name: "Jennifer M.",
                    journey: "3 months in VIP Experience",
                  },
                ].map((story, index) => (
                  <div key={index} className="bg-black-gradient p-8 rounded-[20px]">
                    <div className="flex gap-6">
                      <div className="flex-1">
                        <p className="font-poppins text-[12px] text-dimWhite mb-2 uppercase">Before</p>
                        <p className="font-poppins text-[16px] text-white">{story.before}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-secondary text-[24px]">→</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-poppins text-[12px] text-secondary mb-2 uppercase">After</p>
                        <p className="font-poppins text-[16px] text-white">{story.after}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-dimWhite/20">
                      <p className="font-poppins font-semibold text-[16px] text-white">{story.name}</p>
                      <p className="font-poppins text-[14px] text-dimWhite">{story.journey}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Stats */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <div className="bg-black-gradient p-8 md:p-12 rounded-[20px]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    { number: "95%", label: "Client Satisfaction" },
                    { number: "4.9/5", label: "Average Rating" },
                    { number: "500+", label: "Women Transformed" },
                    { number: "100%", label: "Would Recommend" },
                  ].map((stat, index) => (
                    <div key={index}>
                      <h3 className="font-poppins font-bold text-[36px] md:text-[48px] text-secondary mb-2">{stat.number}</h3>
                      <p className="font-poppins text-[14px] text-dimWhite">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY} text-center`}>
              <h2 className={`${styles.heading2} mb-6`}>
                Start Your <span className="text-gradient">Transformation</span>
              </h2>
              <p className={`${styles.paragraph} max-w-[600px] mx-auto mb-8`}>
                Join thousands of women who have already transformed their lives. Your success story could be next.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="py-4 px-10 bg-secondary font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:opacity-90 transition-all"
                >
                  Book Free Consultation
                </a>
                <a
                  href="/programs"
                  className="py-4 px-10 bg-black-gradient border border-dimWhite font-poppins font-medium text-[18px] text-white rounded-[10px] hover:border-secondary transition-all"
                >
                  View Programs
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

export default ReviewsPage;
