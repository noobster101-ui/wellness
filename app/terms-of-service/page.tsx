"use client";

import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";

const TermsOfServicePage: React.FC = () => {
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
                Terms of <span className="text-gradient">Service</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[600px] text-[18px]`}>
                Please read these terms carefully before using our services.
              </p>
            </section>
          </div>
        </div>

        {/* Content Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}  mx-auto`}>
              <div className="bg-black-gradient p-8 md:p-12 rounded-[20px] space-y-8">
                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">1. Acceptance of Terms</h2>
                  <p className={`${styles.paragraph}`}>
                    By accessing and using the Vidya Naik Wellness website and services (the "Services"), you accept and agree to be bound
                    by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this
                    Service.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">2. Description of Service</h2>
                  <p className={`${styles.paragraph}`}>
                    Vidya Naik Wellness provides coaching and personal development programs designed to help individuals achieve personal
                    growth and transformation. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] ml-4 mt-4">
                    <li>One-on-one coaching sessions</li>
                    <li>Group programs and workshops</li>
                    <li>Online courses and training modules</li>
                    <li>Digital resources and materials</li>
                    <li>Mentorship programs</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">3. User Responsibilities</h2>
                  <p className={`${styles.paragraph} mb-4`}>As a user of our Services, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account</li>
                    <li>Not share your account credentials with others</li>
                    <li>Not use the Services for any unlawful purpose</li>
                    <li>Not attempt to gain unauthorized access to any part of the Services</li>
                    <li>Be respectful in all communications with coaches and staff</li>
                    <li>Participate actively in the program to achieve desired results</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">4. Payment and Refund Policy</h2>
                  <p className={`${styles.paragraph}`}>
                    All program fees must be paid in advance unless otherwise agreed upon. Payment plans may be available for certain
                    programs. Refunds are available under the following conditions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] ml-4 mt-4">
                    <li>
                      <strong>7-day refund:</strong> Full refund within 7 days of purchase if you have not attended any live sessions
                    </li>
                    <li>
                      <strong>After 7 days:</strong> No refunds will be provided
                    </li>
                    <li>
                      <strong>Program transfers:</strong> May be allowed at our discretion
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">5. Intellectual Property</h2>
                  <p className={`${styles.paragraph}`}>
                    All content, materials, and resources provided through our Services are protected by copyright and other intellectual
                    property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior
                    written consent. Personal use for your own development is permitted.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">6. Confidentiality</h2>
                  <p className={`${styles.paragraph}`}>
                    We value your privacy and are committed to keeping your personal information confidential. However, please note that
                    coaching is a collaborative process, and we cannot guarantee absolute confidentiality in group settings. Any information
                    shared in group programs may be visible to other participants.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">7. Disclaimer of Warranties</h2>
                  <p className={`${styles.paragraph}`}>
                    THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DO NOT GUARANTEE ANY SPECIFIC RESULTS FROM USING OUR
                    SERVICES. INDIVIDUAL RESULTS MAY VARY BASED ON PERSONAL EFFORT, COMMITMENT, AND CIRCUMSTANCES.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">8. Limitation of Liability</h2>
                  <p className={`${styles.paragraph}`}>
                    IN NO EVENT SHALL VIDYA NAIK WELLNESS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                    DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY
                    YOU FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">9. Professional Disclaimer</h2>
                  <p className={`${styles.paragraph}`}>
                    The information provided through our Services is for educational and personal development purposes only. Our coaching is
                    not a substitute for professional medical advice, diagnosis, or treatment. If you have mental health concerns, please
                    consult a qualified healthcare professional.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">10. Indemnification</h2>
                  <p className={`${styles.paragraph}`}>
                    You agree to indemnify, defend, and hold harmless Vidya Naik Wellness and its officers, directors, employees, and agents
                    from any claims, damages, losses, liabilities, costs, or expenses arising out of or related to your use of the Services
                    or any violation of these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">11. Termination</h2>
                  <p className={`${styles.paragraph}`}>
                    We reserve the right to terminate or suspend your access to the Services at our sole discretion, without notice, for any
                    conduct that we believe violates these Terms or is harmful to other users or the Service.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">12. Governing Law</h2>
                  <p className={`${styles.paragraph}`}>
                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these
                    Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">13. Changes to Terms</h2>
                  <p className={`${styles.paragraph}`}>
                    We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the
                    updated Terms on our website. Your continued use of the Services after such changes constitutes acceptance of the new
                    Terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">14. Contact Information</h2>
                  <p className={`${styles.paragraph}`}>If you have any questions about these Terms, please contact us at:</p>
                  <p className={`${styles.paragraph} mt-2 text-white`}>
                    Email: legal@vidyanaikwellness.com
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

export default TermsOfServicePage;
