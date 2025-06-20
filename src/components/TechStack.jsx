import React from 'react';
import { motion } from 'framer-motion';
import {
  SiMongodb, SiReact, SiPrisma, SiPython ,
  SiNextdotjs, SiPostgresql, SiTailwindcss
} from 'react-icons/si';
import { DiNodejs } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { FaJs, FaHtml5, FaCss3 } from "react-icons/fa";

const tech = [
  { name: 'HTML', icon: <FaHtml5  /> },
  { name: 'CSS', icon: <FaCss3 /> },
  { name: 'JavaScript', icon: <FaJs  /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <DiNodejs /> },
  { name: 'Python', icon: <SiPython  /> },
  { name: 'Prisma', icon: <SiPrisma /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> }, 
  { name: 'Azure', icon: <VscAzure  /> }
];

function TechStack() {
  return (
   <section id="tech" className="relative bg-[#f5ebe0] text-[#1e1b4b] py-20 px-4 sm:px-6 md:px-12">

      {/* Top wave transition */}
      <div className="absolute bg-[#1e1b4b] top-0 left-0 w-full overflow-hidden leading-[0] rotate-10">
        <svg
            className="relative block w-full h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
          <path
            d="M985.66,92.83C906.67,72,823.78,28.91,739.84,26.7c-92.23-2.36-174.29,43.53-263.66,49.09C360.64,81.91,272.37,41.85,182,26.8C121.14,17,61.24,23.76,0,34.22V120H1200V95.73C1132.61,103.17,1054.46,108.74,985.66,92.83Z"
            fill="#f5ebe0"
          />
        </svg>
      </div>
      <h3 className="text-3xl font-extrabold text-indigo-900 mb-20">Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {tech.map((item, i) => (
        <motion.div
          key={item.name}
          className="flex flex-col items-center gap-3 text-indigo-900 rounded-xl p-4 hover:bg-yellow-400 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 30, damping: 10, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl md:text-6xl">{item.icon}</div>
          <p className="text-sm font-semibold mt-2">{item.name}</p>
        </motion.div>
      ))}
      </div>
    </section>
  );
}

export default TechStack;

