"use client";

import { useState } from "react";
import styles from "@/styles/style";
import { Navbar, Footer } from "@/components";
import { blogPosts } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

  // Get featured post (first post of selected category or first overall)
  const featuredPost = selectedCategory === "All" ? filteredPosts[0] : filteredPosts[0];

  // Get remaining posts for grid
  const gridPosts = filteredPosts.slice(1);

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
                <span className="text-gradient">Blog</span> & Articles
              </h1>
              <p className={`${styles.paragraph} max-w-[700px] text-[18px]`}>
                Insights, tips, and inspiration for your personal growth journey. Empower yourself with knowledge and transform your life.
              </p>
            </section>
          </div>
        </div>

        {/* Categories */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY} pt-0`}>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`px-6 py-2 font-poppins text-[14px] rounded-full cursor-pointer transition-all ${
                    selectedCategory === "All"
                      ? "bg-secondary text-primary"
                      : "bg-black-gradient border border-dimWhite/30 text-white hover:border-secondary"
                  }`}
                >
                  All
                </button>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 font-poppins text-[14px] rounded-full cursor-pointer transition-all ${
                      selectedCategory === category
                        ? "bg-secondary text-primary"
                        : "bg-black-gradient border border-dimWhite/30 text-white hover:border-secondary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <section className={`${styles.paddingY} pt-0`}>
                <div className="bg-black-gradient rounded-[20px] overflow-hidden flex md:flex-row flex-col">
                  <div className="md:w-1/2 w-full relative h-[400px] md:h-[500px]">
                    <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" />
                  </div>
                  <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-secondary font-poppins text-[14px] font-semibold mb-3">{featuredPost.category}</span>
                    <h2 className="font-poppins font-bold text-[28px] md:text-[36px] text-white mb-4">{featuredPost.title}</h2>
                    <p className={`${styles.paragraph} mb-6 line-clamp-3`}>{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-poppins text-[14px] text-dimWhite">{featuredPost.author}</span>
                      <span className="font-poppins text-[14px] text-dimWhite">{featuredPost.readTime}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <button className="py-3 px-8 bg-secondary font-poppins font-medium text-[16px] text-primary rounded-[10px] hover:opacity-90 transition-all w-fit">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* All Posts Grid */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`${styles.paddingY}`}>
              <h2 className={`${styles.heading2} mb-8`}>
                Latest <span className="text-gradient">Articles</span>
              </h2>
              {gridPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gridPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-black-gradient rounded-[20px] overflow-hidden flex flex-col hover:transform hover:-translate-y-2 transition-transform duration-300"
                    >
                      <div className="relative h-[200px]">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                        <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-primary font-poppins text-[12px] rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-poppins font-semibold text-[20px] text-white mb-3 line-clamp-2">{post.title}</h3>
                        <p className={`${styles.paragraph} text-[14px] mb-4 flex-1`}>{post.excerpt}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-poppins text-[12px] text-dimWhite">{post.author}</span>
                          <span className="font-poppins text-[12px] text-dimWhite">{post.readTime}</span>
                        </div>
                        <Link href={`/blog/${post.id}`} className="mt-auto">
                          <button className="w-full py-3 bg-transparent border border-dimWhite/30 font-poppins font-medium text-[14px] text-white rounded-[10px] hover:border-secondary transition-all">
                            Read Article
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className={`${styles.paragraph} text-[18px]`}>No articles found in this category.</p>
                </div>
              )}
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

export default BlogPage;
