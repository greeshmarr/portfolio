import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";

export const ProjectsPage = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
  const projects = [
    {
      title: "Code generator using LLM",
      description:
        'A code generator that uses LLM to generates server code and testcases in Node.Js. This was part of a hacakthon we participated in.',
      tech: ['Node.js', 'OpenAi (LLM)', 'JavaScript'],
      status: "Live",
      link: "https://github.com/greeshmarr/hackathon_repo",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing modern frontend practices with Framer Motion, animations, and responsive design.",
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      status: "Live",
      link: "https://github.com/greeshmarr/my-portfolio",
    },
    {
      title: "Network Slicing ML Research",
      description:
        "Research on ML-based network slicing for 5G at IIT Patna, focused on resource allocation for EVs. Published in Springer and indexed on Google Scholar.",
      tech: ['Python', 'TensorFlow', 'ML Algorithms', 'Data Visualization'],
      status: "Published",
      link: "",
    },
    {
      title: "Omnifood - AI Powered Meal Subscription",
      description:
        "Built a fully responsive landing page for Omnifood, a modern AI-powered meal subscription service. Implemented mobile-first design, reusable components, and smooth animations to deliver a polished user experience.",
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'CSS Grid', 'Netlify'],
      status: "Live",
      link: "https://github.com/greeshmarr/omnifood",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500";
      case "In Development":
        return "bg-yellow-500";
      case "Completed":
        return "bg-blue-500";
      case "Research":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      <NavBar onNavigate={onNavigate} currentSection="projects" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white pt-32 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 mt-4 text-center md:text-6xl">
            Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-lg bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] p-6 rounded-2xl border border-[oklch(0.92_0.004_286.32)] hover:bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.5)] transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-[oklch(0.21_0.006_285.885)]">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs text-white rounded-full ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-[oklch(0.269_0_0)] mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-[oklch(0.373_0.034_259.733)] text-white rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-sky-600 hover:text-sky-700 transition-colors duration-200"
                >
                  View Project →
                </a>}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
