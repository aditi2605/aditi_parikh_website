import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { TbBrandHipchat } from 'react-icons/tb';
// import About from './About';
import TechStack from './TechStack';
import MyJourney from './MyJourney';
import Projects from './Projects';
import Contact from './Contact';
import profileImg from '../images/profile_img_2.png'



function Hero() {

    const scrollToProjects = () => {
        const section = document.getElementById('projects');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <>
        <section id="about" className="relative bg-[#1e1b4b] text-[#f5ebe0] py-20 overflow-hidden">
            <div className='flex justify-center items-center mb-20"'>
              <img
                src={profileImg}
                alt="Aditi Parikh"
                className='w-36 h-36 mb-10 rounded-full object-cover border-4 border-yellow-500 shadow-md item-center'
              />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto relative z-10"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                Hi, I Am <span className="text-yellow-500">Aditi.</span>
                </h1>
               <p className="mt-6 text-lg max-w-2xl mx-auto text-[#f5ebe0] px-4 sm:px-6">
                    I’m a detail-oriented <span className="text-yellow-500">Full Stack Developer</span> with 
                    <span className="text-yellow-500"> 3+ </span> years of experience crafting Scalable, Maintainable and Elegant web applications. 
                    Currently, I’m advancing my Cloud expertise through 
                    <span className="text-yellow-500"> Azure AZ-204 certification</span> while 
                    strengthening  My Problem-solving skills with 
                    <span className="text-yellow-500"> Data Structures And Algorithms</span>.
                </p>
            </motion.div>

            <div className="border-t border-[#f5ebe0]/10 my-10 w-24 mx-auto" />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-center justify-between">
          {[
            { number: 3, suffix: '+', label: 'Years of Experience' },
            { number: 20, suffix: '+', label: 'Projects Completed' },
            { number: 1000, suffix: '+', label: 'Cups of Tea' }
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20 text-left text-sm text-[#ddd] max-w-4xl mx-auto px-4 sm:px-6">

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

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 flex-wrap px-4">

            <button onClick={scrollToProjects} className="bg-indigo-700 text-[#f5ebe0] font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-800 transition">
                    View My Work
            </button>
            <button
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Aditi_Parikh_Resume_.pdf';
                    link.download = 'Aditi_Parikh_Resume_.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }}
                className="border border-indigo-700 text-[#f5ebe0] px-6 py-3 rounded-md hover:bg-indigo-700 hover:text-white transition"
            >
            Download CV
            </button>
            <button
                onClick={() => window.location = 'mailto:aditi.parikh0526@gmail.com'}
                className="border border-indigo-700 px-6 py-3 rounded-md text-[#f5ebe0] hover:bg-indigo-700 hover:text-white font-semibold transition flex items-center justify-center gap-2"
                >
                <TbBrandHipchat className="text-xl" />
                <span>Let's Connect</span>
            </button>

        </div>

          
            {/* Add bottom margin before wave */}
            <div className="mt-32" />
            
      
            {/* All other section below the wave */}
            <TechStack />
            <MyJourney />
            <Projects />
            <Contact />
        </section>

    </>
   
  );
}

export default Hero;
