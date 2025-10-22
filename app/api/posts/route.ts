import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// Mock data (you can edit via Thunder Client)
let posts = [
    {
    id: 1,
    userId: 101,
    title: "AI in Fiction: Shaping Tomorrow's Stories",
    body: "AI is here, it’s real, and many writers are wondering how they can best integrate real-world questions and developments in AI.",
    image: "https://i.pinimg.com/1200x/d1/21/73/d12173cbec1d86ce5900bc8c469a0927.jpg"
  },
  {
    id: 2,
    userId: 102,
    title: "Computer Vision in Modern Web Apps",
    body: "The ultimate goal of computer vision is to replicate human vision capabilities in machines.",
    image: "https://i.pinimg.com/1200x/ca/16/58/ca165805ac203941004d087bc2216a79.jpg"
  },
  {
    id: 3,
    userId: 103,
    title: "How AI Is Transforming Design",
    body: "Discover how designers use generative AI tools to create, ideate, and iterate faster than ever.",
    image: "https://i.pinimg.com/1200x/a4/5d/73/a45d735a79b12e3fabd4f1fe9e876e81.jpg"
  },
  {
    id: 4,
    userId: 104,
    title: "Exploring the Future of AI Agents",
    body: "The future of AI promises significant advancements that will reshape industries, enhance human capabilities.",
    image: "https://i.pinimg.com/736x/c0/ae/4c/c0ae4c20c47282d86217d1cb91ec9cee.jpg"
  },
];

//   GET: Fetch all posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST: Add a new post
export async function POST(req: Request) {
  const newPost = await req.json();
  newPost.id = posts.length + 1;
  posts.push(newPost);
  return NextResponse.json({ message: "Post added successfully!", post: newPost });
}

// PUT: Update an existing post
export async function PUT(req: Request) {
  const updatedPost = await req.json();
  const index = posts.findIndex((p) => p.id === updatedPost.id);

  if (index === -1) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  posts[index] = { ...posts[index], ...updatedPost };
  return NextResponse.json({ message: "Post updated successfully", post: posts[index] });
}

// DELETE: Delete a post by ID
export async function DELETE(req: Request) {
  const { id } = await req.json();
  posts = posts.filter((p) => p.id !== id);
  return NextResponse.json({ message: "Post deleted successfully" });
}
