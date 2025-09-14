import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";

export const ExperiencePage = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Synamedia",
      period: "2022 - Present",
      location: "Bengaluru",
      description:
        "Developing production-ready OTT and Smart TV applications using ReactJS and TypeScript. Built core UI modules, integrated spatial navigation, and optimized performance, reducing initial load time by 25%.",
      achievements: [
        "Developed and maintained Smart TV apps for Samsung & LG using ReactJS, JavaScript, and spatial navigation",
        "Implemented core UI features including content carousels, search, settings, and video player overlays",
        "Optimized rendering and lazy-loaded routes/assets, improving performance and reducing initial load time by 25%",
        "Integrated key-based navigation with @noriginmedia/norigin-spatial-navigation for enhanced focus flow",
        "Worked on multiple POCs to run web apps on the Synamedia Senza cloud-powered streaming platform",
        "Explored Generative AI tools (GitHub Copilot, Anima) to automate Figma-to-React conversions and speed up delivery",
      ],
      skills: [
        "ReactJS",
        "TypeScript",
        "Redux",
        "JavaScript (ES6+)",
        "CSS",
        "HTML",
        "GenAI",
      ],
    },
    {
      title: "Software Engineer",
      company: "Synamedia",
      period: "2022",
      location: "Bengaluru",
      description:
        "Developed internal Admin Console for managing product configurations and analytics. Built full-stack features with ReactJS, Node.js, and MongoDB, and migrated services to AWS serverless for improved scalability and efficiency.",
      skills: ["ReactJS", "Node.js", "MongoDB", "Auth0", "AWS Lambda", "API Gateway", "DynamoDB", "Jest", "PyTest"],
      achievements: [
      "Developed and maintained internal Admin Console application for operations and admin teams",
      "Implemented full-stack features using ReactJS, Node.js, and MongoDB",
      "Integrated OAuth 2.0 authentication with Auth0, enabling secure role-based access control",
      "Enhanced login flow with refresh token support and session management",
      "Migrated server architecture to AWS Lambda, API Gateway, and DynamoDB, reducing infrastructure costs and improving scalability",
      "Implemented unit and integration testing using Jest and PyTest to ensure reliability"
    ],
    },
    {
      title: "Software Developer",
      company: "Tata Consultancy Services",
      period: "2020 - 2022",
      location: "Bengaluru",
      description: "Worked on Identity and Access Management (IAM) solution, building secure REST APIs for credential management and user provisioning using Java and Spring Boot.",
      achievements: [
      "Developed REST APIs for IAM services including credential management and user provisioning",
      "Implemented role-based access control ensuring security compliance",
      "Collaborated with cross-functional teams to deliver end-to-end IAM features",
      "Contributed to improving system reliability and audit readiness"
    ],
      skills: ["Java", "Python", "REST APIs", "IAM", "MySQL"],
    },
  ];

  return (
    <>
      <NavBar onNavigate={onNavigate} currentSection="experience" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="min-h-screen bg-white pt-24 px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-12 mt-4 text-center md:text-6xl"
          >
            Professional Experience
          </motion.h1>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="backdrop-blur-lg bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] p-6 rounded-2xl border border-[oklch(0.92_0.004_286.32)]"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[oklch(0.21_0.006_285.885)]">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-[oklch(0.373_0.034_259.733)]">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-[oklch(0.373_0.034_259.733)] mt-2 md:mt-0 md:text-right">
                    <span>{exp.period}</span>
                    {exp.location && <span className="block">{exp.location}</span>}
                  </div>
                </div>

                <p className="text-[oklch(0.269_0_0)] mb-4">
                  {exp.description}
                </p>

                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-[oklch(0.21_0.006_285.885)] mb-2">
                      Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-[oklch(0.269_0_0)]">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="mr-2 text-sky-600">●</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-sky-600 text-white rounded-full"
                    >
                      {skill}
                    </span>
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