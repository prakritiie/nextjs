// import Link from 'next/link';

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

// // Receive dynamic params
// interface Props {
//   params: { blogID: string };
// }

// export default async function BlogPage({ params }: Props) {
//   const { blogID } = params;

//   // Fetch single post using blogID
// const res = await fetch(`http://localhost:3000/api/posts`, { cache: "no-store" });
// const posts = await res.json();
// const post = posts.find((p: Post) => p.id === Number(params.blogID));


//   if (!res.ok) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-3xl font-bold text-red-500">Failed to load post</h1>
//       </div>
//     );
//   }

// //   const post: Post = await res.json();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-col text-center w-full mb-20">
//           <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
//             {post.title}
//           </h1>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
//             {post.body}
//           </p>
//         </div>

//         <div className="flex justify-center">
//           <img
//             alt={post.title}
//             className="object-cover object-center w-full max-w-xl rounded-lg shadow-md"
//             src={`https://picsum.photos/id/${post.id + 20}/600/400`}
//           />
//         </div>

//         <div className="mt-6 text-center">
//           <Link
//             href="/explore"
//             className="text-blue-600 hover:text-blue-800 font-semibold"
//           >
//             Back to Explore
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  image?: string;
}

interface Props {
  params: { blogID: string };
}

export default async function BlogPage({ params }: Props) {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });
  const posts: Post[] = await res.json();
  const post = posts.find((p) => p.id === Number(params.blogID));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-gray-500">
        Post not found.
      </div>
    );
  }

  return (
    <main className="bg-white text-black min-h-screen">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="overflow-hidden rounded-2xl mb-10 shadow-md">
          <img
            src={post.image || `https://picsum.photos/id/${post.id + 20}/900/500`}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">{post.body}</p>

        <div className="text-center">
          <Link
            href="/explore"
            className="inline-block px-6 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all"
          >
            ← Back to Explore
          </Link>
        </div>
      </article>
    </main>
  );
}

