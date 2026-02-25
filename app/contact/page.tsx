"use client";

import { useState } from "react";
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import { instagram, linkedin, facebook, twitter } from "@/public/assets";
import Image from "next/image";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

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
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className={`${styles.paragraph} max-w-[600px] text-[18px]`}>
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </section>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-black-gradient p-8 rounded-[20px]">
                  <h2 className="font-poppins font-semibold text-[28px] text-white mb-6">
                    Send us a <span className="text-gradient">Message</span>
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="font-poppins text-[16px] text-white mb-2 block">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary border border-dimWhite/30 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-poppins text-[16px] text-white mb-2 block">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary border border-dimWhite/30 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="font-poppins text-[16px] text-white mb-2 block">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary border border-dimWhite/30 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="font-poppins text-[16px] text-white mb-2 block">Interested Program</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-primary border border-dimWhite/30 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors"
                      >
                        <option value="">Select a program</option>
                        <option value="free-call">Free Discovery Call</option>
                        <option value="transformation">Transformation Program</option>
                        <option value="vip">VIP Experience</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-poppins text-[16px] text-white mb-2 block">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-primary border border-dimWhite/30 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your goals and how we can help..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-secondary font-poppins font-medium text-[18px] text-primary rounded-[10px] hover:opacity-90 transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="font-poppins font-semibold text-[28px] text-white mb-6">
                    Contact <span className="text-gradient">Information</span>
                  </h2>

                  <div className="space-y-6">
                    <div className="bg-black-gradient p-6 rounded-[20px]">
                      <h3 className="font-poppins font-semibold text-[20px] text-white mb-2">📧 Email Us</h3>
                      <p className={`${styles.paragraph}`}>hello@vidyanaikwellness.com</p>
                    </div>

                    <div className="bg-black-gradient p-6 rounded-[20px]">
                      <h3 className="font-poppins font-semibold text-[20px] text-white mb-2">📱 Call Us</h3>
                      <p className={`${styles.paragraph}`}>+91 98765 43210</p>
                    </div>

                    <div className="bg-black-gradient p-6 rounded-[20px]">
                      <h3 className="font-poppins font-semibold text-[20px] text-white mb-2">🕐 Working Hours</h3>
                      <p className={`${styles.paragraph}`}>
                        Monday - Saturday: 9:00 AM - 7:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>

                    <div className="bg-black-gradient p-6 rounded-[20px]">
                      <h3 className="font-poppins font-semibold text-[20px] text-white mb-4">Follow Us</h3>
                      <div className="flex gap-4">
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Image src={instagram} alt="Instagram" width={20} height={20} className="object-contain" />
                        </a>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Image src={linkedin} alt="LinkedIn" width={20} height={20} className="object-contain" />
                        </a>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Image src={facebook} alt="Facebook" width={20} height={20} className="object-contain" />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Image src={twitter} alt="Twitter" width={20} height={20} className="object-contain" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <h2 className={`${styles.heading2} text-center mb-12`}>
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
                {[
                  {
                    q: "How do I book a discovery call?",
                    a: "Simply fill out the form above and we'll get back to you within 24 hours to schedule your free 30-minute consultation.",
                  },
                  {
                    q: "What programs do you offer?",
                    a: "We offer three main programs: Free Discovery Call, Transformation Program (3 months), and VIP Experience (6 months).",
                  },
                  {
                    q: "Are the sessions online or in-person?",
                    a: "We offer both online and in-person sessions. Our online programs are conducted via video call for convenience.",
                  },
                  {
                    q: "How long does it take to see results?",
                    a: "Most clients start seeing positive changes within the first few weeks. However, lasting transformation typically takes 3-6 months of dedicated work.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-black-gradient p-6 rounded-[20px]">
                    <h3 className="font-poppins font-semibold text-[18px] text-white mb-3">{faq.q}</h3>
                    <p className={`${styles.paragraph} text-[15px]`}>{faq.a}</p>
                  </div>
                ))}
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

export default ContactPage;
