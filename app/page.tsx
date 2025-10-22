import SplineScene from "./components/SplineScene";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black font-mono">
      <br></br>
      {/* <h1 className="text-4xl font-bold mb-6">Welcome to botSphere</h1>
      <h1 className="text-2xl  text-gray-700 font-small mb-6">“ your sphere of AI insights ”</h1> */}

      

          {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6 text-black ">
          Welcome to botSphere
        </h1>
        <h2 className="text-2xl text-gray-600 font-light mb-8 italic">
          "  your sphere of AI insights  "
        </h2>
        </div>

      <SplineScene />


       <p className="mt-10 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          Exploring the Future of Artificial Intelligence – stay updated with the
          latest trends, tools, and innovations in AI.
        </p>

       <br></br>

         {/* categories */}

      {/* Latest Articles Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Insights</h2>
          <p className="text-gray-600 text-lg">Discover the cutting-edge developments in artificial intelligence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                alt="Neural Networks" 
                className="object-cover object-center h-full w-full group-hover:scale-110 transition-transform duration-500" 
                src="neural_networks.jpeg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Neural Networks</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every neural network consists of layers of nodes or artificial neurons, an input layer, one or more hidden layers, and an output layer.
              </p>
              <a className="text-black-600 hover:text-gray-800 font-medium inline-flex items-center transition-colors">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                alt="Computer Vision" 
                className="object-cover object-center h-full w-full group-hover:scale-110 transition-transform duration-500" 
                src="obj_detection.jpg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Computer Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The ultimate goal of computer vision is to replicate human vision capabilities in machines. However, while humans use retinas, optic nerves, and complex processing.
              </p>
              <a className="text-black-600 hover:text-gray-800 font-medium inline-flex items-center transition-colors">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                alt="AI in Neurology" 
                className="object-cover object-center h-full w-full group-hover:scale-110 transition-transform duration-500" 
                src="brain.jpg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI in Neurology</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In recent years, the field of neurology has witnessed a remarkable transformation thanks to the integration of artificial intelligence technologies.
              </p>
              <a className="text-black-600 hover:text-gray-800 font-medium inline-flex items-center transition-colors">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Explore Topics Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Explore Topics</h2>
          <p className="text-gray-600 text-lg">Dive deep into specialized areas of artificial intelligence</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Machine Learning",
            "Computer Vision", 
            "Natural Language Processing",
            "Robotics",
            "AI in Finance",
            "Neural Networks",
            "Deep Learning",
            "AI Ethics"
          ].map((topic, index) => (
            <span 
              key={index}
              className="px-8 py-4 bg-white border-2 border-gray-200 rounded-full cursor-pointer hover:bg-black hover:text-white hover:border-black transform hover:-translate-y-1 transition-all duration-300 text-gray-700 font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      <br></br>

       {/* Features Section - Inverted Colors */}
<section className="w-full bg-black py-16 font-mono">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">Why Choose botSphere?</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="text-center group">
        <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">Expert Analysis</h3>
        <p className="text-gray-300 leading-relaxed">
          In-depth analysis and insights from industry experts and researchers.
        </p>
      </div>
      
      <div className="text-center group">
        <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">Real-time Updates</h3>
        <p className="text-gray-300 leading-relaxed">
          Stay ahead with real-time updates on emerging trends in AI technology.
        </p>
      </div>
      
      <div className="text-center group">
        <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">Community Driven</h3>
        <p className="text-gray-300 leading-relaxed">
          Join a vibrant community of AI enthusiasts, researchers, and professionals.
        </p>
      </div>
    </div>
  </div>
</section>



         {/* Newsletter Section */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest AI insights, research breakthroughs, and industry updates delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 bg-white text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors"
            />
            <button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            Join 50,000+ AI enthusiasts.
          </p>
        </div>
      </section>


    </main>
  );
}
