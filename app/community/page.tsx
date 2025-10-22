// app/community/page.tsx

type Member = {
  name: string;
  role: string;
};

const members: Member[] = [
  { name: "Alice Johnson", role: "AI Enthusiast" },
  { name: "Bob Smith", role: "ML Researcher" },
  { name: "Clara Lee", role: "Data Scientist" },
  { name: "David Kim", role: "Developer Advocate" },
  { name: "Eva Wong", role: "AI Blogger" },
  { name: "Frank Lin", role: "ML Engineer" },
  { name: "Grace Park", role: "Data Analyst" },
  { name: "Henry Zhao", role: "Research Assistant" },
];

const activities = [
  { title: "Weekly AI Talks", description: "Discuss latest AI trends and research." },
  { title: "Hackathons", description: "Join community-driven coding challenges." },
  { title: "Open Source Projects", description: "Collaborate on AI/ML projects." },
  { title: "Mentorship Programs", description: "Get guidance from experienced members." },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Botsphere AI Community</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Join our vibrant AI community to learn, share, and grow together. Explore members, events, and activities.
        </p>
      </section>

      {/* Members Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Members</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="border border-black rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center mb-4">
                <span className="text-xl font-bold">{member.name[0]}</span>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

  {/* Activities Section */}
      <section className="py-12 px-4 bg-black">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Community Activities</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="border border-white rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{activity.title}</h3>
              <p className="text-gray-300">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / Join Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Stay updated with the latest news, events, and AI projects. Subscribe to our newsletter.
        </p>
        <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-black rounded-lg p-3 flex-1 text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white rounded-lg p-3 font-semibold hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-black">
        <p className="text-sm">&copy; {new Date().getFullYear()} Botsphere AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
