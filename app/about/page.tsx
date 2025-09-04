

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
     

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
            <a href="#about" className="text-gray-700 hover:text-black transition-colors font-medium">
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
      <section className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">About BotSphere</h1>
        <p className="text-lg text-gray-600">
          BotSphere is your hub for exploring AI-powered tools, insights, and
          resources designed to make artificial intelligence simple, useful, and
          accessible.
        </p>
      </section>


     {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6 text-black">
          Welcome to botSphere
        </h1>
        <h2 className="text-2xl text-gray-600 font-light mb-8 italic">
          " your sphere of AI insights "
        </h2>



        <p className="mt-10 text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          Exploring the Future of Artificial Intelligence – stay updated with the
          latest trends, tools, and innovations in AI.
        </p>
      </div>



      {/* Latest Articles Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Latest Insights</h2>
          <p className="text-gray-600 text-lg">Discover the cutting-edge developments in artificial intelligence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                alt="Neural Networks" 
                className="object-cover object-center h-full w-full group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0" 
                src="neural_networks.jpeg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Neural Networks</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every neural network consists of layers of nodes or artificial neurons, an input layer, one or more hidden layers, and an output layer.
              </p>
              <a className="text-black hover:text-gray-600 font-medium inline-flex items-center transition-colors">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                alt="Computer Vision" 
                className="object-cover object-center h-full w-full group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0" 
                src="obj_detection.jpg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-3">Computer Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The ultimate goal of computer vision is to replicate human vision capabilities in machines. However, while humans use retinas, optic nerves, and complex processing.
              </p>
              <a className="text-black hover:text-gray-600 font-medium inline-flex items-center transition-colors">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                alt="AI in Neurology" 
                className="object-cover object-center h-full w-full group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0" 
                src="brain.jpg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-3">AI in Neurology</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In recent years, the field of neurology has witnessed a remarkable transformation thanks to the integration of artificial intelligence technologies.
              </p>
              <a className="text-black hover:text-gray-600 font-medium inline-flex items-center transition-colors">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

     <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stump.</p>
          <br></br>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm"> PRAKRITI GUPTA </h2>
          <p className="text-gray-500">Web Designer</p>
        </div>
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