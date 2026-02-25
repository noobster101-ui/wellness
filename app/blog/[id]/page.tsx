"use client";

import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import { blogPosts } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { people01, vidya } from "@public/assets";

const BlogPostPage: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.paddingY} text-center`}>
          <h1 className="text-white text-[32px]">Post not found</h1>
          <Link href="/blog" className="text-secondary mt-4 block">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        {/* Navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className={`bg-primary ${styles.paddingX} pt-6`}>
          <div className={`${styles.boxWidth}`}>
            <div className="flex items-center gap-2 text-[14px] text-dimWhite mb-6">
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-secondary transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white">{post.title}</span>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY} pb-0`}>
              <div className="mx-auto">
                <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary font-poppins text-[14px] font-semibold rounded-full mb-6">
                  {post.category}
                </span>
                <h1 className="font-poppins font-bold text-[36px] md:text-[52px] text-white leading-tight mb-6">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Image src={vidya} alt={post.author} width={40} height={40} className="rounded-full object-cover" />
                    <span className="font-poppins text-[16px] text-white">{post.author}</span>
                  </div>
                  <span className="font-poppins text-[14px] text-dimWhite">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                  <span className="font-poppins text-[14px] text-dimWhite">{post.readTime}</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Featured Image */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="mx-auto">
              <div className="relative w-full h-[300px] md:h-[500px] rounded-[20px] overflow-hidden mb-12">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <div className="mx-auto">
                <div className="prose prose-invert max-w-none">
                  {post.content.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <h3 key={index} className="font-poppins font-semibold text-[24px] text-white mt-8 mb-4">
                          {paragraph.replace(/\*\*/g, "")}
                        </h3>
                      );
                    }
                    if (paragraph.includes("•")) {
                      return (
                        <ul
                          key={index}
                          className="list-disc list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] my-4 ml-4"
                        >
                          {paragraph.split("\n").map((item, i) => (
                            <li key={i}>{item.replace("• ", "")}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (paragraph.match(/^\d+\./)) {
                      return (
                        <ol
                          key={index}
                          className="list-decimal list-inside space-y-2 text-dimWhite font-poppins text-[16px] leading-[28px] my-4 ml-4"
                        >
                          {paragraph.split("\n").map((item, i) => (
                            <li key={i}>{item.replace(/^\d+\.\s*/, "")}</li>
                          ))}
                        </ol>
                      );
                    }
                    return (
                      <p key={index} className="font-poppins text-[16px] leading-[28px] text-dimWhite my-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-dimWhite/20">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-poppins text-[16px] text-white">Share this article:</span>
                    <div className="flex gap-3">
                      {["Facebook", "Twitter", "LinkedIn"].map((social) => (
                        <button
                          key={social}
                          className="px-4 py-2 bg-black-gradient border border-dimWhite/30 text-white font-poppins text-[14px] rounded-[8px] hover:border-secondary transition-all"
                        >
                          {social}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <section className={`${styles.paddingY}`}>
                <h2 className={`${styles.heading2} mb-8`}>
                  Related <span className="text-gradient">Articles</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="bg-black-gradient rounded-[20px] overflow-hidden flex flex-col">
                      <div className="relative h-[180px]">
                        <Image src={relatedPost.image} alt={relatedPost.title} fill className="object-cover" />
                        <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-primary font-poppins text-[12px] rounded-full">
                          {relatedPost.category}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-poppins font-semibold text-[18px] text-white mb-3 line-clamp-2">{relatedPost.title}</h3>
                        <p className={`${styles.paragraph} text-[14px] mb-4 flex-1`}>{relatedPost.excerpt}</p>
                        <Link href={`/blog/${relatedPost.id}`} className="mt-auto">
                          <button className="w-full py-2 bg-transparent border border-dimWhite/30 font-poppins font-medium text-[14px] text-white rounded-[10px] hover:border-secondary transition-all">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY} text-center`}>
              <div className="bg-black-gradient p-8 md:p-12 rounded-[20px]">
                <h2 className={`${styles.heading2} mb-4`}>
                  Ready for <span className="text-gradient">Transformation</span>?
                </h2>
                <p className={`${styles.paragraph} max-w-[600px] mx-auto mb-8`}>
                  Get personalized coaching to overcome your challenges and achieve your goals.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/programs"
                    className="py-3 px-8 bg-secondary font-poppins font-medium text-[16px] text-primary rounded-[10px] hover:opacity-90 transition-all"
                  >
                    View Programs
                  </Link>
                  <Link
                    href="/contact"
                    className="py-3 px-8 bg-black-gradient border border-dimWhite font-poppins font-medium text-[16px] text-white rounded-[10px] hover:border-secondary transition-all"
                  >
                    Contact Us
                  </Link>
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

export default BlogPostPage;
