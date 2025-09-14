import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";

export const SkillsPage = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'JavaScript ES6+', 'HTML5/CSS3'],
    },
    {
      category: "Styling & Animation",
      skills: ['Tailwind CSS', 'Framer Motion', 'CSS3 Animation', 'Responsive Design', 'Figma Integration'],
    },
    {
      category: "Backend & APIs",
      skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL']
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS",
        "AWS Lambda",
        "Kubernetes",
        "CI/CD",
        "API Gateway",
        "DynamoDB",
      ],
    },
    {
      category: "Testing & Quality",
      skills: ['Jest', 'React Testing Library', 'PyTest', 'Unit Testing', 'Integration Testing', 'Accessibility'],
    },

  ];

  return (
    <>
      <NavBar onNavigate={onNavigate} currentSection="skills" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white pt-32 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-12 mt-4 text-center md:text-6xl"
          >
            Skills & Technologies
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-lg bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] p-6 rounded-2xl border border-[oklch(0.92_0.004_286.32)]"
              >
                <h3 className="text-lg font-semibold text-[oklch(0.21_0.006_285.885)] mb-4">
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring", // Added spring transition
                        damping: 10,
                        stiffness: 100,
                        delay: index * 0.1 + skillIndex * 0.05
                      }}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};