import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

function About() {
  return (
    <section className="relative bg-[#1e1b4b] text-[#f5ebe0] py-20 overflow-hidden">
      

      <div className="relative z-10 px-6 md:px-16 lg:px-32 py-20 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-[2.65rem] font-extrabold mb-8 text-center"
        >
          Meet the Developer <span className="text-yellow-400">Behind the Code</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg max-w-3xl mx-auto leading-relaxed text-[#ddd] text-center mb-4"
        >
          I’m a detail-oriented full stack developer with over 3 years of experience building modern web applications. I take pride in crafting solutions that are scalable, maintainable, and elegantly designed.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg max-w-3xl mx-auto leading-relaxed text-[#ddd] text-center"
        >
          Currently, I’m expanding my cloud knowledge as I prepare for the Azure AZ-204 certification and sharpening my problem-solving skills through data structures and algorithms.
        </motion.p>

        <div className="border-t border-[#f5ebe0]/10 my-10 w-24 mx-auto" />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-center">
          {[
            { number: 3, suffix: '+', label: 'Years of Experience' },
            { number: 20, suffix: '+', label: 'Projects Completed' },
            { number: 50, suffix: '+', label: 'Features Built' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
            >
              <h3 className="text-4xl font-extrabold text-yellow-400">
                <CountUp end={item.number} duration={2} />{item.suffix}
              </h3>
              <p className="text-sm text-slate-300">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Fun facts / ethos */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20 text-left text-sm text-[#ddd] max-w-4xl mx-auto">
          {[
            '🧠 Passionate about clean, well-documented code',
            '☕ Coding sessions powered by Hot Chocolate and lo-fi playlists',
            '📍 Based in the UK with a soft spot for digital design & UX',
            '📘 Preparing for Azure Developer Associate (AZ-204)'
          ].map((fact, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              className="hover:text-yellow-300 transition"
            >
              {fact}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
