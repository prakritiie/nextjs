

export default function About() {
  return (

    <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white">
      {/* About Section */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">About BotSphere</h2>
      <p className="max-w-3xl text-gray-600 text-lg mb-8">
        BotSphere is your hub for exploring AI-powered tools, insights, and resources — 
        designed to make artificial intelligence <span className="font-medium text-gray-800">simple, useful,</span> 
        and <span className="font-medium text-gray-800">accessible</span>.
      </p>

      <blockquote className="italic text-gray-500 border-l-4 border-gray-300 pl-4 mt-6 max-w-2xl">
        "Empowering you to explore the future of AI — one insight at a time."
      </blockquote>

      {/* Creator Section */}
      <div className="mt-16 flex flex-col items-center">
        <img
          src="https://i.pinimg.com/1200x/42/50/b3/4250b353d4dc458f44d9494aa4932e59.jpg"
          alt="Creator Avatar"
          className="w-32 h-32 rounded-full shadow-md object-cover mb-4"
        />
        <h3 className="text-2xl font-semibold text-gray-900">Prakriti Gupta</h3>
        <p className="text-gray-500 text-sm">Creator & Designer of BotSphere</p>
      </div>
    </section>
  );
}
