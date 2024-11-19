import { notFound } from "next/navigation";

export async function generateStaticParams() {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
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

    // Map slugs for static generation
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static paths:", error);
    return []; // Return an empty array to prevent build failures
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  if (!slug) {
    console.error("Slug is missing from params.");
    notFound();
  }

  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`
      );
      notFound();
    }

    const posts = await response.json();

    if (!Array.isArray(posts)) {
      console.error("Posts API did not return an array.");
      notFound();
    }

    const post = posts.find((p) => p.slug === slug);

    if (!post) {
      console.error(`Post not found for slug: ${slug}`);
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">{post.excerpt}</p>
        <p className="mt-6">{post.content}</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    notFound();
  }
}
