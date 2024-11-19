import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{post.category}</p> {/* Display category */}
      <p className="text-gray-600">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <span className="text-blue-600 underline mt-4 inline-block">
          Read More
        </span>
      </Link>
    </div>
  );
}
