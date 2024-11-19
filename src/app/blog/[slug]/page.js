import { recentPosts } from "@/app/data/posts";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = recentPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // Handle 404 if post is not found
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500">
          Published on {new Date(post.date).toLocaleDateString()}
        </p>
      </header>
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-lg mb-8"
      />
      <section className="prose max-w-none mb-8">
        <p>{post.excerpt}</p>
        {/* Replace this content with the actual blog content */}
        <p>
          This is a placeholder for your blog content. Add affiliate links,
          advertisements, or other monetization strategies here.
        </p>
      </section>
      <footer>
        <p className="text-gray-500 text-sm">Share this article!</p>
      </footer>
    </article>
  );
}

export async function generateStaticParams() {
  return recentPosts.map((post) => ({
    slug: post.slug,
  }));
}
