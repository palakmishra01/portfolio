import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Award, BookOpen, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "MailQ - Quantum Secure Email",
      description: "First-of-its-kind quantum-secure framework integrating Post-Quantum Cryptography (Kyber), AES encryption, and QKD simulator for future-proof email protection.",
      tech: ["C++", "Quantum Cryptography", "AES", "Kyber"],
      github: "https://github.com/palakmishra01/Quant_Crypt_SIH",
      highlights: ["Multi-layered security", "User-friendly Security Dial", "Modular architecture"]
    },
    {
      title: "Version Controlled Notes",
      description: "CLI-based note-taking app with built-in version control featuring commit, diff, and restore capabilities with AES encryption for data security.",
      tech: ["C++", "AES Encryption", "CLI"],
      github: "https://github.com/palakmishra01/DSA-project-repo",
      highlights: ["Lightweight versioning", "Linked-list based diffs", "No external VCS needed"]
    },
    {
      title: "MONEFY",
      description: "Financial tracking system with real-time multi-currency conversion, automated analytics, and persistent CSV storage for comprehensive expense management.",
      tech: ["C++17", "REST API", "JSON"],
      github: "https://github.com/palakmishra01/MONEFY",
      highlights: ["ExchangeRate API", "Automated reports", "Modular design"]
    },
    {
      title: "PHEME Club Website",
      description: "Official web presence for PHEME club with dynamic pages for events, newsletters, and communication.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/palakmishra01/Pheme-IITJ",
      website: "https://pheme-iitj.vercel.app/",
      highlights: ["Dynamic content", "Enhanced UX", "Resource sharing"]
    }
  ];

  const achievements = [
    { icon: "🏆", text: "220+ LeetCode Problems", highlight: " 120+ daily streak" },
    { icon: "💻", text: "Strong DSA Foundation", highlight: "Peak Rating: 1530 - LeetCode" },
    { icon: "🎯", text: "Top 8% Nationwide", highlight: "AlgoUniversity Tech Fellowship" },
    { icon: "📊", text: "Top 0.25% JEE Mains", highlight: "Top 3% JEE Advanced 2024" }
    
  ];

  const skills = {
    "Languages": ["C/C++", "Python", "JavaScript", "LaTeX"],
    "Web Dev": ["React", "HTML", "CSS", "REST APIs"],
    "Tools": ["Git", "VS Code", "Visual Studio", "Figma"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Palak Mishra
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'achievements', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-purple-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'projects', 'achievements', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Palak Mishra
            </h1>
            {/* <p className="text-xl sm:text-2xl text-purple-300 mb-2">B24EE1050</p> */}
            <p className="text-lg text-gray-400">Electrical Engineering @ IIT Jodhpur</p>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building secure, scalable systems with a focus on cryptography, algorithms, and modern web technologies
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://github.com/palakmishra01" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all hover:scale-105">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/palak-mishra-6253a3328/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all hover:scale-105">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://leetcode.com/u/palakmishra0810/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all hover:scale-105">
              <Code2 size={20} /> LeetCode
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Background</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am a second year student, currently pursuing B.Tech in Electrical Engineering at IIT Jodhpur with a CGPA of 7.79. 
                My journey into software development stems from a deep fascination with cryptography, 
                algorithms, and building systems that matter.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I've worked on quantum-secure communication systems, version control implementations, 
                and full-stack web applications, always focusing on writing clean, efficient code.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">What I Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Develop secure, scalable backend systems using C++ and Python</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Build modern, responsive web applications with React</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Solve complex algorithmic problems daily on LeetCode</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>Explore quantum computing and cryptography applications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Skills & Technologies</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold mb-3 text-pink-400">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-purple-900/40 rounded-full text-sm text-gray-300 border border-purple-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-300 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Github size={20} />
                    </a>
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer"
                         className="text-gray-400 hover:text-purple-400 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-purple-400 font-semibold mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-purple-900/40 rounded-full text-xs text-gray-300 border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
            Achievements
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-purple-300 mb-1">
                      {achievement.text}
                    </h3>
                    <p className="text-pink-400 font-medium">{achievement.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 text-purple-400 text-center">Key Courses</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-start gap-2">
                <BookOpen size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <span>Data Structures & Algorithms</span>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <span>Introduction to Computer Science</span>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <span>Fundamentals of Quantum Information</span>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <span>Probability & Stochastic Processes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
            Get In Touch
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm currently looking for software development opportunities. Whether you have a question 
            or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:b24ee1050@iitj.ac.in" 
               className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all hover:scale-105 w-full sm:w-auto justify-center">
              <Mail size={20} /> b24ee1050@iitj.ac.in
            </a>
            <a href="tel:+919685351911"
               className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all hover:scale-105 w-full sm:w-auto justify-center">
              📱 +91 96853 51911
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/palakmishra01" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/palak-mishra-6253a3328/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="https://leetcode.com/u/palakmishra0810/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
              <Code2 size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2">Built with React & Tailwind CSS</p>
          <p>© 2024 Palak Mishra. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}