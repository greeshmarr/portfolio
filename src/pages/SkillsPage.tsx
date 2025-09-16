import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiMongodb,
  SiJest,
  SiKubernetes,
  SiPostman,
} from "react-icons/si";

export const SkillsPage = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
  const skills = [
    { name: "React", icon: <FaReact />, color: "text-sky-500" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-800" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-600" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500" },
    { name: "Framer Motion", icon: <FaReact />, color: "text-purple-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-600" },
    { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
    { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "text-blue-700" },
    { name: "Jest", icon: <SiJest />, color: "text-red-600" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    { name: "Git", icon: <FaGithub />, color: "text-gray-900" },
    { name: "Figma", icon: <FaFigma />, color: "text-purple-700" },
  ];

  return (
    <>
      <NavBar onNavigate={onNavigate} currentSection="skills" />
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5 }}
  className="relative min-h-screen w-full pt-32 px-8 overflow-hidden"
>
  {/* 🔴 Background bubbles layer */}
  <div className="absolute inset-0 -z-10">
    {/* if you render bubbles, keep them inside this wrapper */}
  </div>

  {/* 🔵 Solid overlay to block background */}
  <div className="absolute inset-0 bg-white -z-0"></div>

  {/* 🟢 Foreground content */}
  <div className="relative z-10 max-w-6xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl font-bold mb-12 mt-4 text-center md:text-6xl text-[oklch(0.21_0.006_285.885)]"
    >
      Skills & Technologies
    </motion.h1>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          whileHover={{
            scale: 1.05,
            y: -3,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 },
          }}
          className="
            relative 
            flex flex-col items-center justify-center 
            p-6 
            rounded-2xl 
            border border-gray-200 
            bg-white shadow-lg
            overflow-hidden
            group
          "
        >
          <span className="absolute inset-0 bg-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

          <div className="relative z-10 flex flex-col items-center justify-center gap-2">
            <motion.div
              whileHover={{ rotate: 8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 8 }}
              className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100"
            >
              <span className={`text-4xl ${skill.color}`}>{skill.icon}</span>
            </motion.div>
            <h4 className="text-lg font-semibold text-gray-900 text-center">
              {skill.name}
            </h4>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.div>

    </>
  );
};
