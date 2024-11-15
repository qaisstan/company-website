"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample data - replace with actual data from your CMS or API
const featuredPost = {
  title: "The Future of Web Development: Trends to Watch in 2024",
  excerpt:
    "Explore the cutting-edge technologies and methodologies shaping the future of web development...",
  image: "/placeholder.svg?height=400&width=800",
  date: "2023-12-15",
  category: "Development",
  slug: "future-of-web-development-2024",
};

const categories = ["All", "Development", "Design", "Technology", "Business"];

const recentPosts = [
  {
    title: "10 Essential UI Design Principles for Creating Stunning Interfaces",
    excerpt:
      "Learn the fundamental principles that guide effective UI design and how to apply them...",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-12-10",
    category: "Design",
    slug: "essential-ui-design-principles",
  },
  {
    title: "Mastering React Hooks: A Comprehensive Guide",
    excerpt:
      "Dive deep into React Hooks and learn how to leverage them for more efficient and cleaner code...",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-12-05",
    category: "Development",
    slug: "mastering-react-hooks",
  },
  {
    title: "The Impact of AI on Modern Software Development",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the software development process...",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-11-30",
    category: "Technology",
    slug: "ai-impact-on-software-development",
  },
];

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Featured Post */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Featured Post</h2>
          <Card className="overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge>{featuredPost.category}</Badge>
                <div className="text-sm text-gray-500 flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                {featuredPost.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{featuredPost.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${featuredPost.slug}`} passHref>
                <Button>Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <Badge>{post.category}</Badge>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.slug}`} passHref>
                      <Button variant="outline">Read More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <section className="flex justify-center items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <span className="text-gray-600">
            Page {currentPage} of{" "}
            {Math.ceil(filteredPosts.length / postsPerPage)}
          </span>
          <Button
            variant="outline"
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filteredPosts.length / postsPerPage)
            }
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </section>
      </motion.div>
    </div>
  );
}
