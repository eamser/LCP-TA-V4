import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              ✨ Powered by Advanced AI
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              AI Assistance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Experience the next generation of AI-powered tools. Intelligent, intuitive, and designed for the modern world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transform">
              Try It Now
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-600">
              Learn More
            </button>
          </div>

          <div className="pt-12 flex items-center justify-center space-x-12 text-slate-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50M+</div>
              <div className="text-sm">Queries Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
