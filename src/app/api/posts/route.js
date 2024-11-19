import connectToDatabase from "@/lib/mongodb";
import BlogPost from "@/app/models/blogPost";

export async function GET(request) {
  console.log("GET request received for posts.");

  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch all posts from MongoDB
    const posts = await BlogPost.find().sort({ date: -1 }); // Most recent first
    console.log("Posts fetched from MongoDB:", posts);

    // Return the posts as JSON
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching posts from MongoDB:", error);

    return new Response(
      JSON.stringify({ error: "Failed to fetch posts from MongoDB" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST(request) {
  console.log("POST request received for creating a blog post.");

  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the request body
    const body = await request.json();

    // Validate required fields
    const { title, slug, excerpt, content, category } = body;
    if (!title || !slug || !excerpt || !content || !category) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create a new blog post
    const newPost = new BlogPost({
      title,
      slug,
      excerpt,
      content,
      category,
    });

    // Save the blog post to MongoDB
    await newPost.save();

    console.log("New blog post created:", newPost);

    // Return the created blog post
    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating a blog post:", error);

    return new Response(
      JSON.stringify({ error: "Failed to create a blog post." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
