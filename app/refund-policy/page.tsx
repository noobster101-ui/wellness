"use client";

import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";

const RefundPolicyPage: React.FC = () => {
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
                Refund <span className="text-gradient">Policy</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[600px] text-[18px]`}>Our commitment to transparency and customer satisfaction.</p>
            </section>
          </div>
        </div>

        {/* Content Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}  mx-auto`}>
              <div className="bg-black-gradient p-8 md:p-12 rounded-[20px] space-y-8">
                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">1. Our Commitment</h2>
                  <p className={`${styles.paragraph}`}>
                    We are committed to providing high-quality coaching services that help you achieve your personal development goals. We
                    understand that sometimes things don't work out as expected, and we want to make our refund process as fair and
                    transparent as possible.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">2. Refund Eligibility</h2>
                  <p className={`${styles.paragraph} mb-4`}>Refunds are available under the following conditions:</p>
                  <ul className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] ml-4">
                    <li>
                      <strong>7-Day Money-Back Guarantee:</strong> Full refund within 7 days of purchase if you have not attended any live
                      sessions
                    </li>
                    <li>
                      <strong>Program Not Started:</strong> If you have not begun using the program materials, you may request a full refund
                      within 30 days of purchase
                    </li>
                    <li>
                      <strong>Technical Issues:</strong> If you cannot access the program due to technical problems on our end, we will
                      provide a full refund
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">3. Non-Refundable Items</h2>
                  <p className={`${styles.paragraph}`}>Please note that the following are not eligible for refunds:</p>
                  <ul className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] ml-4 mt-4">
                    <li>Any program where live sessions have been attended</li>
                    <li>Digital products and downloadable materials once accessed</li>
                    <li>One-on-one coaching sessions once conducted</li>
                    <li>Programs purchased more than 30 days ago</li>
                    <li>Customized or personalized coaching packages</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">4. How to Request a Refund</h2>
                  <p className={`${styles.paragraph} mb-4`}>To request a refund, please contact us with the following information:</p>
                  <ul className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] ml-4">
                    <li>Your full name and email address</li>
                    <li>Program name purchased</li>
                    <li>Date of purchase</li>
                    <li>Reason for requesting refund</li>
                  </ul>
                  <p className={`${styles.paragraph} mt-4`}>
                    Contact us at: <span className="text-white">refunds@vidyanaikwellness.com</span>
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">5. Refund Processing</h2>
                  <p className={`${styles.paragraph}`}>
                    Once your refund request is approved, we will process the refund within 5-7 business days. The refund will be credited
                    to your original payment method. Please note that depending on your bank or payment provider, it may take an additional
                    5-10 business days for the refund to reflect in your account.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">6. Program Transfers</h2>
                  <p className={`${styles.paragraph}`}>
                    Instead of a refund, you may request to transfer to a different program. Program transfers are subject to availability
                    and will be evaluated on a case-by-case basis. If you transfer to a higher-priced program, you will need to pay the
                    difference. If you transfer to a lower-priced program, we will refund the difference.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">7. Cancellations</h2>
                  <p className={`${styles.paragraph}`}>
                    If you need to cancel a scheduled coaching session, please do so at least 24 hours before the scheduled time. Late
                    cancellations or no-shows will not be refunded and will count as a session used.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">8. Changes to This Policy</h2>
                  <p className={`${styles.paragraph}`}>
                    We reserve the right to modify this refund policy at any time. Any changes will be posted on this page and will take
                    effect immediately upon posting.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">9. Contact Us</h2>
                  <p className={`${styles.paragraph}`}>If you have any questions about our refund policy, please contact us:</p>
                  <p className={`${styles.paragraph} mt-2 text-white`}>
                    Email: refunds@vidyanaikwellness.com
                    <br />
                    Phone: +91 98765 43210
                  </p>
                </div>

                <div className="pt-6 border-t border-dimWhite/20">
                  <p className={`${styles.paragraph} text-white`}>
                    <strong>Last Updated:</strong>{" "}
                    {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                </div>
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

export default RefundPolicyPage;
