import React from 'react';
import { FaUser, FaLaptopCode, FaRoad, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { label: 'About', id: 'about', icon: <FaUser /> },
  { label: 'Tech', id: 'tech', icon: <FaLaptopCode /> },
  { label: 'Journey', id: 'journey', icon: <FaRoad /> },
  { label: 'Projects', id: 'projects', icon: <FaFolderOpen /> },
  { label: 'Contact', id: 'contact', icon: <FaEnvelope /> },
];

const Nav = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <div className="fixed z-[9999] bottom-4 right-4 flex-col items-center gap-4 hidden sm:flex">
        {/* Desktop (vertical) */}
        {navItems.map((item) => (
            <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="w-12 h-12 bg-indigo-700 text-white hover:bg-yellow-400 hover:text-indigo-900 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-110"
            title={item.label}
            >
            {item.icon}
            </button>
        ))}
        </div>

        <div className="sm:hidden fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-[#1e1b4b] px-4 py-2 rounded-xl shadow-md flex gap-3 z-[9999]">
        {/* Mobile (horizontal) */}
        {navItems.map((item) => (
            <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-white hover:text-yellow-400 text-xl transition"
            title={item.label}
            >
            {item.icon}
            </button>
        ))}
        </div>
    </>
  );
};

export default Nav;
