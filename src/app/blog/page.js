"use client";

import { useState, useEffect } from "react";
import BlogCard from "@/components/blog/BlogCard";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogFilter from "@/components/blog/BlogFilter";

const categories = ["All", "Development", "Design", "Technology", "Business"];

export default function BlogListingPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("Fetching all blog posts...");
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    };

    fetchPosts();
  }, []);

  // Filter posts by category
  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? posts
        : posts.filter((post) => post.category === selectedCategory);
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page on category change
  }, [selectedCategory, posts]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <BlogFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={(category) => setSelectedCategory(category)}
        />
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        {currentPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts found for the selected category.</p>
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
    </div>
  );
}
