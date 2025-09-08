

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
    

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
{/* 


      Latest Articles Section
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

      
      </section> */}

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


    </main>
  );
}