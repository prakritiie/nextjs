import Link from "next/link";

export default async function BlogsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const blogs = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog: any) => (
          <li key={blog.id} className="border-b pb-2">
            <Link
              href={`/blogs/${blog.id}`}
              className="text-blue-600 hover:underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
