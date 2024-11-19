import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <img src={post.image} alt={post.title} className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="text-gray-600">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        {/* Remove <a> child as it is redundant */}
        <span className="text-blue-600 underline mt-4 inline-block">
          Read More
        </span>
      </Link>
    </div>
  );
}
