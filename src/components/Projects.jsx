import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Recipeapp from '../images/Recipeapp.png';
import Voyage from '../images/Voyage.png';
import Juggernut from '../images/Juggernut.png';
import SayitImg from '../images/SayitImg.webp';
import Habitual from '../images/Habitual.png';
// import Hero from './Hero';


const projects = [
  {
    title: "Recipe Diary",
    description:
      "RESTful recipe manager with CRUD, auth, and personalized dashboards.",
    image: Recipeapp,
    demo: "https://recipe-applicationv1.netlify.app/",
    code: "https://github.com/aditi2605/Recipe-App",
  },
  {
    title: "Voyage",
    description:
      "Travel planner with user registration, wish-lists, and destination search.",
    image: Voyage,
    demo: "https://voyage-v2.netlify.app",
    code: "https://github.com/aditi2605/voyage-react/",
  },
  {
    title: "Juggernaut Bistro",
    description:
      "Fusion bistro branding and design using Photoshop and stock assets.",
    image: Juggernut,
    demo: "https://voyaga-react.netlify.app/",
    code: "https://github.com/aditi2605/Projects/tree/main/Juggernaut-Cafe",
  },
  {
    title: "Sayit",
    description:
      "Anonymous forum with likes, emoticon reactions, and commenting.",
    image: SayitImg,
    demo: "",
    code: "https://github.com/aditi2605/SayIt",
  },
  {
    title: "Habitual",
    description:
      "Habit tracker app with CRUD and personalized dashboard features.",
    image: Habitual,
    demo: "https://fabulous-mandazi-cf3f12.netlify.app/",
    code: "https://github.com/aditi2605/lap2_project",
  },
];

export default function Projects() {

  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="bg-[#f5ebe0] py-20 px-6 text-indigo-900">
      {/* <Hero scrollToProjects={() => projectRef.current?.scrollIntoView({ behavior: 'smooth' })} /> */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects <span className="text-yellow-400">I've Built</span> </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-md border border-indigo-200 cursor-pointer"
            onClick={() => setSelected(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-indigo-700 mb-4">
              {project.description.slice(0, 80)}...
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-indigo-600 hover:underline">View More</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-xl relative text-indigo-900">
            <button
              className="absolute top-2 right-3 text-lg font-bold"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="rounded mb-4 w-full h-full object-cover mt-14"
            />
            <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
            <p className="mb-4 text-sm">{selected.description}</p>
            <div className="flex gap-4">
              {selected.demo && (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  🔗 Live Demo
                </a>
              )}
              <a
                href={selected.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
