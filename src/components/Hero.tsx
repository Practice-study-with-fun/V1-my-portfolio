import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 dark:from-gray-900 dark:via-blue-950 dark:to-teal-900">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              Full-Stack Web Developer
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-teal-300 mb-8 animate-slide-up-delay-1">
              AI-Powered Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-slide-up-delay-2">
              Building scalable, modern, and intelligent web solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up-delay-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-900 font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Hire Me
              </button>
            </div>

            <div className="flex gap-6 justify-center animate-slide-up-delay-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-300 transform hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-300 transform hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-white hover:text-teal-300 transform hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
