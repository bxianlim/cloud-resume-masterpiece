
import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const ModernResumeLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 via-white to-mint-100 relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-mint-500 blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 rounded-full bg-mint-400 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-mint-600 blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-mint-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-black font-bold text-xl tracking-wide">Bing Xian Lim</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-mint-600 transition-all duration-300 text-sm font-medium hover:scale-105">About</a>
              <a href="#experience" className="text-gray-700 hover:text-mint-600 transition-all duration-300 text-sm font-medium hover:scale-105">Experience</a>
              <a href="#skills" className="text-gray-700 hover:text-mint-600 transition-all duration-300 text-sm font-medium hover:scale-105">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-mint-600 transition-all duration-300 text-sm font-medium hover:scale-105">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-mint-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <div className="inline-block animate-float mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-mint-400 to-mint-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-glow">
                  BX
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8 leading-tight">
                Cloud Infrastructure
                <span className="bg-gradient-to-r from-mint-500 to-mint-700 bg-clip-text text-transparent block animate-slide-up">
                  Specialist
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Experienced Data Center Engineer with expertise in deploying, maintaining, and 
                troubleshooting hardware and networking systems in secure cloud environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="bg-mint-500 hover:bg-mint-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Get In Touch
                </a>
                <a 
                  href="#experience" 
                  className="border-2 border-mint-500 text-mint-600 hover:bg-mint-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  View Experience
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="text-4xl font-bold text-mint-600 mb-3 group-hover:scale-110 transition-transform duration-300">40%</div>
                <div className="text-black font-semibold text-lg mb-2">Reduction in Downtime</div>
                <div className="text-sm text-gray-500">Achieved through optimized troubleshooting</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="text-4xl font-bold text-mint-600 mb-3 group-hover:scale-110 transition-transform duration-300">4</div>
                <div className="text-black font-semibold text-lg mb-2">Cloud Certifications</div>
                <div className="text-sm text-gray-500">AWS, Azure, DevOps, DCD Academy</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                <div className="text-4xl font-bold text-mint-600 mb-3 group-hover:scale-110 transition-transform duration-300">2+</div>
                <div className="text-black font-semibold text-lg mb-2">Years Experience</div>
                <div className="text-sm text-gray-500">In data center operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-mint-200/50 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">Professional Summary</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Proven track record in deploying, maintaining, and troubleshooting hardware and 
                  networking systems in secure environments. Skilled in Linux-based tools, server 
                  maintenance, and advanced networking protocols.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Adept at collaborating with cross-functional teams to resolve critical technical 
                  issues and optimize data center operations. Passionate about working with 
                  cutting-edge technologies and contributing to global-scale infrastructure projects.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-mint-100 text-mint-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-mint-200 transition-colors">Singapore Based</span>
                  <span className="bg-mint-100 text-mint-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-mint-200 transition-colors">Multilingual</span>
                  <span className="bg-mint-100 text-mint-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-mint-200 transition-colors">Global Scale</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-mint-500 to-mint-700 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6">Languages</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">English</span>
                    <div className="w-24 h-3 bg-white/30 rounded-full">
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Mandarin</span>
                    <div className="w-24 h-3 bg-white/30 rounded-full">
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Cantonese</span>
                    <div className="w-24 h-3 bg-white/30 rounded-full">
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Bahasa Melayu</span>
                    <div className="w-24 h-3 bg-white/30 rounded-full">
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">Professional Experience</h2>
          
          <div className="space-y-8">
            {/* Current Role */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-mint-600 transition-colors">Cloud Infrastructure Trainee</h3>
                  <p className="text-xl text-mint-600 font-semibold mb-2">DBS Bank</p>
                  <p className="text-gray-500">January 2024 - Present • Singapore</p>
                </div>
                <span className="bg-mint-100 text-mint-800 px-4 py-2 rounded-full text-sm font-medium mt-4 md:mt-0 self-start animate-pulse">
                  Current Role
                </span>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3 hover:text-black transition-colors">
                  <span className="text-mint-500 mt-1 text-lg">🔧</span>
                  Configured and deployed containerized solutions with Mirantis Kubernetes Engine on Linux-based systems
                </li>
                <li className="flex items-start gap-3 hover:text-black transition-colors">
                  <span className="text-mint-500 mt-1 text-lg">☁️</span>
                  Provisioned and managed multiple VMs in Oracle Private Cloud, troubleshooting OS-related issues
                </li>
                <li className="flex items-start gap-3 hover:text-black transition-colors">
                  <span className="text-mint-500 mt-1 text-lg">📋</span>
                  Documented technical processes and configurations for operational continuity
                </li>
                <li className="flex items-start gap-3 hover:text-black transition-colors">
                  <span className="text-mint-500 mt-1 text-lg">🤝</span>
                  Collaborated with deployment teams on infrastructure projects and provided process improvements
                </li>
              </ul>
            </div>

            {/* Previous Role */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-mint-600 transition-colors">Data Center Engineer</h3>
                  <p className="text-xl text-mint-600 font-semibold mb-2">Leaseweb</p>
                  <p className="text-gray-500">May 2022 - December 2023 • Singapore</p>
                </div>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mt-4 md:mt-0 self-start">
                  1.7 Years
                </span>
              </div>
              <div className="bg-mint-50 border border-mint-200 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-mint-800 font-semibold">
                  <span className="text-lg">🎯</span>
                  Key Achievement: 40% reduction in downtime
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3 hover:text-black transition-colors">
                  <span className="text-mint-500 mt-1 text-lg">🖥️</span>
                  Installed, configured, and troubleshot server hardware and network devices
                </li>
                <li className="flex items-start gap-3 hover:text-black transition-colors">
                  <span className="text-mint-500 mt-1 text-lg">🔌</span>
                  Executed server racking, cable management, equipment maintenance, and inventory management
                </li>
                <li className="flex items-start gap-3 hover:text-black transition-colors">
                  <span className="text-mint-500 mt-1 text-lg">🛠️</span>
                  Provided remote hands support including power cycles, component swaps, and hardware upgrades
                </li>
                <li className="flex items-start gap-3 hover:text-black transition-colors">
                  <span className="text-mint-500 mt-1 text-lg">🎫</span>
                  Operated ticket-based system for technical issue resolution and vendor collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Data Center Operations */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🏢</div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-mint-600 transition-colors">Data Center Operations</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Server racking & cabling</li>
                <li>• Hardware troubleshooting</li>
                <li>• System maintenance</li>
                <li>• Network gear deployment</li>
              </ul>
            </div>

            {/* Linux & Networking */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🐧</div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-mint-600 transition-colors">Linux & Networking</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Linux OS configuration</li>
                <li>• TCP/IP, DNS, VPN</li>
                <li>• Network topology design</li>
                <li>• Troubleshooting tools</li>
              </ul>
            </div>

            {/* Cloud & Virtualization */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">☁️</div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-mint-600 transition-colors">Cloud & Virtualization</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Oracle Private Cloud</li>
                <li>• AWS, Azure, GCP</li>
                <li>• VM provisioning</li>
                <li>• Hypervisors (Oracle VM)</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-mint-600 transition-colors">Communication</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cross-functional teams</li>
                <li>• Technical documentation</li>
                <li>• Process improvement</li>
                <li>• Multilingual support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-3xl font-bold text-black mb-8 flex items-center gap-3">
                🎓 Education
              </h3>
              <div className="space-y-8">
                <div className="group">
                  <h4 className="text-xl font-semibold text-black group-hover:text-mint-600 transition-colors">Cloud Infrastructure Engineering</h4>
                  <p className="text-mint-600 font-medium text-lg">Nanyang Technological University</p>
                  <p className="text-gray-500">2023</p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-semibold text-black group-hover:text-mint-600 transition-colors">Bachelor of Marketing</h4>
                  <p className="text-mint-600 font-medium text-lg">University of Hertfordshire</p>
                  <p className="text-gray-500">Minor in International Trade • 2015</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-mint-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-3xl font-bold text-black mb-8 flex items-center gap-3">
                🏆 Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-200 hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl">🟠</span>
                  <div>
                    <div className="font-semibold text-black">AWS Certified Cloud Practitioner</div>
                    <div className="text-sm text-gray-500">Amazon Web Services • 2025</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200 hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl">🔵</span>
                  <div>
                    <div className="font-semibold text-black">Azure Fundamentals</div>
                    <div className="text-sm text-gray-500">Microsoft • 2025</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-mint-50 rounded-xl border border-mint-200 hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl">🟢</span>
                  <div>
                    <div className="font-semibold text-black">DevOps Foundation</div>
                    <div className="text-sm text-gray-500">DevOps Institute • 2024</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200 hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl">🟣</span>
                  <div>
                    <div className="font-semibold text-black">Data Center Design Awareness</div>
                    <div className="text-sm text-gray-500">DCD Academy • 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-mint-500 to-mint-700 rounded-3xl p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
              <p className="text-xl mb-8 text-mint-100">
                Interested in discussing cloud infrastructure opportunities? 
                I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hello@bingxian.io" 
                  className="bg-white text-mint-600 px-8 py-4 rounded-full font-semibold hover:bg-mint-50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg"
                >
                  📧 Email Me
                </a>
                <a 
                  href="https://linkedin.com/in/bingxian" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-mint-600 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-500 bg-white/50 backdrop-blur-sm">
        <p>&copy; 2024 Bing Xian Lim. Cloud Infrastructure Specialist.</p>
      </footer>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ModernResumeLanding />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
