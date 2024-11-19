import { notFound } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function generateStaticParams() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/posts`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const posts = await response.json();

    if (!Array.isArray(posts)) {
      console.error("Posts API did not return an array.");
      return [];
    }

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static paths:", error);
    return [];
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!slug) {
    console.error("Slug is missing from params.");
    return notFound();
  }

  try {
    // Fetch posts from the API
    const response = await fetch(`${API_BASE_URL}/api/posts`, {
      cache: "no-store", // Ensure fresh data
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`
      );
      return notFound();
    }

    const posts = await response.json();

    if (!Array.isArray(posts)) {
      console.error("Invalid response: Posts API did not return an array.");
      return notFound();
    }

    // Find the specific post by slug
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
      console.error(`Post not found for slug: ${slug}`);
      return notFound();
    }

    // Render the blog post
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">{post.excerpt}</p>
        <div className="mt-6">{post.content}</div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error.message || error);
    return notFound();
  }
}
