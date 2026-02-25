"use client";

import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";

const PrivacyPolicyPage: React.FC = () => {
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
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[600px] text-[18px]`}>
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">1. Introduction</h2>
                  <p className={`${styles.paragraph}`}>
                    Vidya Naik Wellness ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                    your personal information is collected, used, and disclosed by Vidya Naik Wellness when you use our website, mobile
                    applications, and services (collectively, the "Services").
                  </p>
                  <p className={`${styles.paragraph} mt-4`}>
                    By accessing or using our Services, you signify that you have read, understood, and agree to our collection, storage,
                    use, and disclosure of your personal information as described in this Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">2. Information We Collect</h2>
                  <p className={`${styles.paragraph} mb-4`}>We collect information you provide directly to us, including:</p>
                  <ul className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] ml-4">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Account information (username, password)</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                    <li>Communications and messages you send to us</li>
                    <li>Information you provide when participating in our programs</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">3. How We Use Your Information</h2>
                  <p className={`${styles.paragraph} mb-4`}>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] ml-4">
                    <li>Provide, maintain, and improve our Services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, investigate, and prevent fraudulent transactions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">4. Information Sharing</h2>
                  <p className={`${styles.paragraph}`}>
                    We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following
                    circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] ml-4 mt-4">
                    <li>
                      <strong>Service Providers:</strong> We may share your information with third-party vendors who help us operate our
                      business and provide Services
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose information when required by law or in response to valid requests
                      by public authorities
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> Information may be transferred as part of a merger, acquisition, or sale of
                      company assets
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">5. Data Security</h2>
                  <p className={`${styles.paragraph}`}>
                    We implement appropriate technical and organizational security measures to protect your personal information. However,
                    no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
                    security.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">6. Your Rights</h2>
                  <p className={`${styles.paragraph} mb-4`}>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] ml-4">
                    <li>Access and obtain a copy of your personal information</li>
                    <li>Request correction of inaccurate personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your personal information</li>
                    <li>Request restriction of processing your personal information</li>
                    <li>Request transfer of your personal information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">7. Children's Privacy</h2>
                  <p className={`${styles.paragraph}`}>
                    Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from
                    children under 13. If you are a parent or guardian and believe your child has provided us with personal information,
                    please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">8. Third-Party Links</h2>
                  <p className={`${styles.paragraph}`}>
                    Our Services may contain links to third-party websites, services, or applications that are not operated by us. We are
                    not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any
                    third-party sites you visit.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">9. Changes to This Policy</h2>
                  <p className={`${styles.paragraph}`}>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy
                    on this page and updating the "last updated" date at the top. You are advised to review this Privacy Policy periodically
                    for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins font-semibold text-[24px] text-white mb-4">10. Contact Us</h2>
                  <p className={`${styles.paragraph}`}>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <p className={`${styles.paragraph} mt-2 text-white`}>
                    Email: privacy@vidyanaikwellness.com
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

export default PrivacyPolicyPage;
