interface BlogProps {
  params: { id: string };
}

export default async function BlogPage({ params }: BlogProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const blog = await res.json();

  if (!blog?.id) {
    return <h1 className="text-center mt-20 text-red-500">Blog Not Found</h1>;
  }

  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <br>
      </br>
      <p className="text-lg leading-relaxed text-gray-700">{blog.body}</p>
    </main>
  );
}
