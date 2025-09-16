import React from "react";
import { motion } from "framer-motion";

export const ExperienceIndicator = ({ experiences, inViewStates }) => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 hidden md:flex">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{
            scale: inViewStates[index] ? 1 : 0.8,
            opacity: inViewStates[index] ? 1 : 0.6,
          }}
          transition={{ duration: 0.3 }}
          className={`relative flex items-center justify-center cursor-pointer`}
          onClick={() => {
            const element = document.getElementById(`experience-${index}`);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              inViewStates[index] ? "bg-[oklch(0.7,0.06,240)]" : "bg-gray-400"
            }`}
          />
          <span
            className={`absolute left-[-100px] text-sm font-semibold whitespace-nowrap transition-opacity duration-300 ${
              inViewStates[index] ? "opacity-100" : "opacity-0"
            }`}
          >
            {exp.company}
          </span>
        </motion.div>
      ))}
    </div>
  );
};