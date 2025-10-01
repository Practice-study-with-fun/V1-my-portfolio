import { Brain, MessageSquare, TrendingUp, Sparkles } from 'lucide-react';

const aiFeatures = [
  {
    id: 1,
    icon: MessageSquare,
    title: 'Intelligent Chatbots',
    description: 'Create conversational AI assistants that understand context and provide human-like interactions for customer support and engagement.',
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Leverage machine learning models to analyze data patterns and provide actionable insights for business decision-making.',
  },
  {
    id: 3,
    icon: Brain,
    title: 'Smart Recommendations',
    description: 'Build personalized recommendation engines that learn user preferences and deliver tailored content or product suggestions.',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Content Generation',
    description: 'Integrate AI-powered content creation tools for automated writing, image generation, and creative assistance.',
  },
];

export default function AIIntegration() {
  return (
    <section id="ai-integration" className="py-20 bg-gradient-to-br from-blue-900 via-teal-800 to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Brain className="text-teal-300" size={48} />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                AI Integration
              </h2>
            </div>
            <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Transform your web applications with cutting-edge artificial intelligence capabilities.
              I specialize in seamlessly integrating AI technologies to create intelligent, data-driven solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {aiFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transform hover:-translate-y-2 transition-all duration-300"
              >
                <feature.icon className="text-teal-300 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white border-opacity-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Why AI Integration Matters
                </h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-300 font-bold">→</span>
                    <span>Automate repetitive tasks and increase operational efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-300 font-bold">→</span>
                    <span>Provide personalized user experiences that drive engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-300 font-bold">→</span>
                    <span>Make data-driven decisions with predictive insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-300 font-bold">→</span>
                    <span>Stay competitive with innovative technology solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-green-600 rounded-xl p-8 text-center">
                <Sparkles className="text-white mx-auto mb-4" size={64} />
                <h4 className="text-2xl font-bold text-white mb-3">
                  Ready to Add AI to Your Project?
                </h4>
                <p className="text-white text-opacity-90 mb-6">
                  Let's discuss how AI can transform your business
                </p>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Start Your AI Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
