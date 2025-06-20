import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1e1b4b] text-white px-6 py-20">
    
  
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center text-white"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white"><span className="text-yellow-500">Get In </span> Touch</h2>
        <p className="text-lg md:text-xl mb-8 text-white">
          I'm currently <span className="text-yellow-500">Open to exciting roles and freelance projects</span>. Whether it's collaboration, mentorship, or a simple hello — I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button 
            onClick={() => window.location.href = 'mailto:aditi.parikh0526@gmail.com'}
            className="bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-800 transition"
          >
            Say Hello
          </button>

          <button 
            onClick={() => window.open('https://www.linkedin.com/in/aditi-parikh05/', '_blank')}
            className="flex items-center gap-2 text-white transition"
          >
            <FaLinkedin className="text-xl text-white" /> LinkedIn
          </button>

          <button 
            onClick={() => window.open('https://github.com/aditi2605', '_blank')}
            className="flex items-center gap-2 text-white transition"
          >
            <FaGithub className="text-xl text-white" /> GitHub
          </button>
        </div>

        <p className="text-sm text-white">📍 Based in London, UK • Available worldwide</p>
      </motion.div>
      
    </section>
  );
}
