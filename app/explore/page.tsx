

import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  image?: string;
};

export default async function ExplorePage() {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });
  const posts: Post[] = await res.json();
  // console.log("Fetched posts:", posts);

  return (
    <main className="bg-white min-h-screen text-black">
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-2">Explore Insights</h1>
          <p className="text-gray-500 text-lg">
            Dive into thoughts, trends, and innovations shaping the world of AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image || `https://picsum.photos/id/${post.id + 20}/600/400`}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">{post.body}</p>
                <Link
                  href={`/explore/${post.id}`}
                  className="mt-4 inline-block font-medium text-black border-b border-black hover:opacity-70 transition-opacity"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

