"use client";

import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogFilter from "@/components/blog/BlogFilter";
import { motion } from "framer-motion";
import { recentPosts } from "@/app/data/posts";

const categories = ["All", "Development", "Design", "Technology", "Business"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts =
    selectedCategory === "All"
      ? recentPosts
      : recentPosts.filter((post) => post.category === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <BlogFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={(category) => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          />
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          {currentPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No posts found for the selected category.
            </p>
          )}
        </section>

        {/* Pagination */}
        <section>
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={setCurrentPage}
          />
        </section>
      </motion.div>
    </div>
  );
}
