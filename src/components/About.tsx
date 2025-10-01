import { Code, Database, Server, Shield, GitBranch, Container } from 'lucide-react';

const skills = [
  { name: 'Next.js', icon: Code, color: 'text-blue-600 dark:text-blue-400' },
  { name: 'Django', icon: Server, color: 'text-green-600 dark:text-green-400' },
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-500 dark:text-blue-300' },
  { name: 'Better-Auth', icon: Shield, color: 'text-teal-600 dark:text-teal-400' },
  { name: 'Git & GitHub', icon: GitBranch, color: 'text-orange-600 dark:text-orange-400' },
  { name: 'Docker & Nginx', icon: Container, color: 'text-blue-700 dark:text-blue-500' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full-Stack Web Developer specializing in building modern, scalable
                web applications. With expertise in both frontend and backend technologies, I create
                seamless digital experiences that drive results.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My focus is on leveraging cutting-edge technologies like Next.js and Django, combined
                with AI integration, to deliver innovative solutions. From database design to deployment
                with Docker and Nginx, I handle the complete development lifecycle.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and following best practices to ensure
                projects are not only functional but also secure, performant, and future-proof.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <skill.icon className={`${skill.color}`} size={32} />
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-700 dark:to-teal-700 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-2">AI Integration Specialist</h4>
                <p className="text-blue-100">
                  Expert in integrating AI capabilities into web applications for intelligent,
                  data-driven solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
