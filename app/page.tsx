import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="text-lg font-light tracking-wider">
              <span className="text-white">SGS</span>
              <span className="text-gray-400">®—25</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
                About
              </Link>
              <Link href="#education" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
                Education
              </Link>
              <Link href="#research" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
                Research
              </Link>
              <Link href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-sm tracking-[0.3em] text-gray-400 mb-8 uppercase">
              Hey! I'm Santosh.
            </h1>
            <h2 className="text-7xl md:text-8xl font-light leading-none mb-8">
              <div className="text-white">AI Researcher</div>
              <div className="text-gray-300">&</div>
              <div className="text-white">NLP Specialist</div>
            </h2>
          </div>
          
          <div className="max-w-2xl">
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              I'm <span className="text-white">Santosh Gaire Sharma</span>, an AI researcher and NLP specialist.
              Currently pursuing a Master’s program in Information and Computer Science at Doshisha University, with a strong academic foundation from a Bachelor's degree in Computer Engineering from Tribhuvan University. Research interests include areas of Artificial Intelligence, particularly Natural Language Processing.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm tracking-[0.3em] text-gray-400 mb-16 uppercase">
            Education
          </h3>
          
          <div className="space-y-16">
            <div className="group">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-1/3">
                  <h4 className="text-white text-xl font-light mb-2">Master's Degree</h4>
                  <p className="text-gray-400 text-sm">Current</p>
                </div>
                <div className="md:w-2/3">
                  <h5 className="text-white text-lg mb-2">Information & Computer Science</h5>
                  <p className="text-gray-300 mb-3">Doshisha University, Japan</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Co-Creation Informatics Laboratory, focusing on cross-lingual NLP research 
                    and generative AI applications in medical domains.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-1/3">
                  <h4 className="text-white text-xl font-light mb-2">Bachelor's Degree</h4>
                  <p className="text-gray-400 text-sm">2019 — 2024</p>
                </div>
                <div className="md:w-2/3">
                  <h5 className="text-white text-lg mb-2">Computer Science Engineering</h5>
                  <p className="text-gray-300 mb-3">IOE, Tribhuvan University, Nepal</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Foundation in computer science, algorithms, and software engineering 
                    with focus on AI and machine learning applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm tracking-[0.3em] text-gray-400 mb-16 uppercase">
            Expertise
          </h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white text-lg mb-6 font-light">AI & Machine Learning</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Supervised Learning</li>
                <li>Reinforcement Learning</li>
                <li>Generative AI</li>
                <li>Deep Learning</li>
                <li>Large Language Models</li>
                <li>Computer Vision</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg mb-6 font-light">Natural Language Processing</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Text Summarization</li>
                <li>Cross-lingual Processing</li>
                <li>Agentic AI</li>
                <li>Agent Creation</li>
                <li>Medical Domain NLP</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg mb-6 font-light">Software Development</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section id="research" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm tracking-[0.3em] text-gray-400 mb-16 uppercase">
            Selected Research
          </h3>
          
          <div className="space-y-12">
            {/* Current Research */}
            <div className="group cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
                <div>
                  <h4 className="text-white text-xl font-light mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    Cross-lingual Summarization
                  </h4>
                  <p className="text-gray-400 text-sm">Japanese-Nepali Medical Domain</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-gray-500 text-xs tracking-wider">ONGOING</span>
                </div>
              </div>
            </div>
            
            {/* Published Research */}
            <div className="group cursor-pointer">
              <a href="http://ijictdc.kasdc.or.kr/journal/article.php?code=91625&vol=9&no=1&start_page=49&end_page=60" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
                  <div>
                    <h4 className="text-white text-xl font-light mb-2 group-hover:text-gray-300 transition-colors duration-300">
                      Refinetograph
                    </h4>
                    <p className="text-gray-400 text-sm">Machine Learning Approach Toward Image Enhancement</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="text-gray-500 text-xs tracking-wider">PUBLISHED</span>
                  </div>
                </div>
              </a>
            </div> 
          </div>
          
          <div className="mt-16">
            <Link href="https://www.linkedin.com/in/santosh-gaire-sharma-54141a255/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
              View more information about SGS →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-sm tracking-[0.3em] text-gray-400 mb-8 uppercase">
              Looking for a connection?
            </h3>
            <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
              Get in touch
            </h2>
          </div>
          
          {/* Contact Form */}
          <div className="max-w-2xl">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-xs tracking-wider mb-3 uppercase">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-0 border-b border-gray-700 focus:border-white pb-3 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 text-xs tracking-wider mb-3 uppercase">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-0 border-b border-gray-700 focus:border-white pb-3 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-xs tracking-wider mb-3 uppercase">
                  Your Email
                </label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-0 border-b border-gray-700 focus:border-white pb-3 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-xs tracking-wider mb-3 uppercase">
                  Reason to Contact
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-gray-700 focus:border-white pb-3 text-white placeholder-gray-600 focus:outline-none resize-none transition-colors duration-300"
                  placeholder="Tell me about your project, collaboration idea, or reason for reaching out..."
                ></textarea>
              </div>
              
              <div className="pt-8">
                <button 
                  type="submit"
                  className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors duration-300 border-b border-transparent hover:border-gray-300"
                >
                  Send Message →
                </button>
              </div>
            </form>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-12 mt-16 pt-16 border-t border-gray-800">
            <a href="https://www.linkedin.com/in/santosh-gaire-sharma-54141a255/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
              LinkedIn
            </a>
            <a href="https://github.com/Santey624" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
              GitHub
            </a>
            <a href="mailto:gairesantosh509@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wide">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="text-gray-500 text-xs tracking-wider">
              © 2025 Santosh Gaire Sharma. All rights reserved.
            </div>
            <div className="text-gray-500 text-xs tracking-wider mt-4 md:mt-0">
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}