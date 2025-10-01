import { Check, Zap, Rocket, Crown } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: 'Starter',
    icon: Zap,
    price: '$999',
    description: 'Perfect for small businesses and startups',
    features: [
      'Responsive website design',
      'Up to 5 pages',
      'Basic SEO optimization',
      'Contact form integration',
      'Mobile-friendly layout',
      '1 month support',
    ],
    popular: false,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    name: 'Standard',
    icon: Rocket,
    price: '$2,499',
    description: 'Full-stack solution for growing businesses',
    features: [
      'Everything in Starter',
      'Custom backend API',
      'Database integration (PostgreSQL)',
      'User authentication (Better-Auth)',
      'Admin dashboard',
      'Payment gateway integration',
      '3 months support',
    ],
    popular: true,
    gradient: 'from-teal-500 to-green-600',
  },
  {
    id: 3,
    name: 'Premium',
    icon: Crown,
    price: '$4,999',
    description: 'AI-powered enterprise solution',
    features: [
      'Everything in Standard',
      'AI integration & implementation',
      'Docker containerization',
      'Nginx load balancing',
      'CI/CD pipeline setup',
      'Advanced analytics dashboard',
      'Real-time features',
      '6 months support',
    ],
    popular: false,
    gradient: 'from-purple-500 to-pink-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Service Packages
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
            Choose the perfect package for your project needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${
                  pkg.popular ? 'ring-4 ring-teal-500 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`bg-gradient-to-r ${pkg.gradient} p-8 rounded-t-2xl`}>
                  <pkg.icon className="text-white mb-4" size={48} />
                  <h3 className="text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-white text-opacity-90">{pkg.description}</p>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {pkg.price}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-4 rounded-lg font-semibold text-white bg-gradient-to-r ${pkg.gradient} hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Need a custom solution?{' '}
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Let's talk about your project
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
