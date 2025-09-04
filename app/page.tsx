import SplineScene from "./components/SplineScene";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black font-mono">
      <br></br>
      {/* <h1 className="text-4xl font-bold mb-6">Welcome to botSphere</h1>
      <h1 className="text-2xl  text-gray-700 font-small mb-6">“ your sphere of AI insights ”</h1> */}


      {/* navbar */}


      <nav className="w-full bg-white border-b-2 border-gray-200 sticky top-0 z-50 font-mono">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black hover:text-gray-700 transition-colors cursor-pointer">
              botSphere
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-black transition-colors font-medium">
              Home
            </a>
            <a href="about" className="text-gray-700 hover:text-black transition-colors font-medium">
              About
            </a>
            <a href="#explore" className="text-gray-700 hover:text-black transition-colors font-medium">
              Explore
            </a>
            <a href="#community" className="text-gray-700 hover:text-black transition-colors font-medium">
              Community
            </a>

          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </nav>
      

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

      {/* Footer */}
      <footer className="w-full bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                botSphere
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your premier destination for AI insights, cutting-edge research, and the future of artificial intelligence.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Latest Articles</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Research</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Community</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} botSphere. All rights reserved. 
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
