import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Get instant responses powered by cutting-edge AI technology'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is encrypted and never shared with third parties'
    },
    {
      icon: '🎯',
      title: 'Highly Accurate',
      description: 'State-of-the-art models trained on vast amounts of data'
    },
    {
      icon: '💡',
      title: 'Smart Insights',
      description: 'Get intelligent analysis and actionable recommendations'
    },
    {
      icon: '🌐',
      title: 'Multi-Language',
      description: 'Support for over 50 languages and dialects'
    },
    {
      icon: '🔄',
      title: 'Always Learning',
      description: 'Continuously improving with the latest AI advancements'
    }
  ];

  return (
    <section className="py-20 px-6" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Everything you need to harness the power of AI in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
