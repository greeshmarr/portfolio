import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";

export const ProjectAndPublicationsPage = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
  const projects = [
    {
      title: "Code generator using LLM",
      description:
        "A code generator that uses LLM to generates server code and testcases in Node.Js. This was part of a hacakthon we participated in.",
      tech: ["Node.js", "OpenAi (LLM)", "JavaScript"],
      status: "Live",
      link: "https://github.com/greeshmarr/hackathon_repo",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing modern frontend practices with Framer Motion, animations, and responsive design.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "Live",
      link: "https://github.com/greeshmarr/my-portfolio",
    },
    {
      title: "Network Slicing ML Research",
      description:
        "Research on ML-based network slicing for 5G at IIT Patna, focused on resource allocation for EVs. Published in Springer and indexed on Google Scholar.",
      tech: ["Python", "TensorFlow", "ML Algorithms", "Data Visualization"],
      status: "Published",
      link: "",
    },
    {
      title: "Omnifood - AI Powered Meal Subscription",
      description:
        "Built a fully responsive landing page for Omnifood, a modern AI-powered meal subscription service. Implemented mobile-first design, reusable components, and smooth animations to deliver a polished user experience.",
      tech: ["HTML5", "CSS3", "JavaScript", "Flexbox", "CSS Grid", "Netlify"],
      status: "Live",
      link: "https://github.com/greeshmarr/omnifood",
    },
  ];

  const publications = [
    {
      title:
        "Machine Learning based Network Slicing and Resource Allocation for Electric Vehicles (EVs)",
      authors:
        "Rohit Kumar Gupta, Anurag Choubey, Shlok Jain, Greeshma R R, Rajiv Misra",
      journal:
        "Proceedings of the 5th International Conference on Internet of Things and Connected Technologies (ICIoTCT)",
      year: "2020",
      type: "Conference Paper",
      abstract:
        "This paper employs unsupervised machine learning for clustering EVs into network slices (infotainment, safety, and charge-state) and develops a slice leader–based resource allocation algorithm using RSUs that improves throughput and reduces latency in EV communication networks.",
      link: "https://link.springer.com/chapter/10.1007/978-3-030-76736-5_31",
    },
    {
      title:
        "Quality Assessment of Crops through Disease Detection using Machine Learning",
      authors: "Greeshma R R, Co-authors (as listed in IJCSE 2020)",
      journal:
        "International Journal of Computer Science and Engineering (IJCSE)",
      year: "2020",
      type: "Journal Paper",
      abstract:
        "This paper presents a machine learning-based approach for assessing crop quality by detecting plant diseases from image data. Using classification algorithms and image preprocessing techniques, the study improves disease detection accuracy and provides insights for enhancing crop yield and agricultural productivity.",
      link: "https://mail.ijcseonline.org/pdf_paper_view.php?paper_id=5039&19-IJCSE-07830-24.pdf",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500";
      case "Published":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research Paper":
        return "bg-blue-500";
      case "Conference Paper":
        return "bg-green-500";
      case "Article":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 5 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <NavBar onNavigate={onNavigate} currentSection="projects" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white pt-24 px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Projects Section */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-8 mt-18 text-center md:text-6xl text-[oklch(0.21_0.006_285.885)]"
          >
            Projects
          </motion.h1>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  x: 2,
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
                className="
                  relative z-10 isolate
                  p-6 rounded-2xl
                  border border-gray-200
                  bg-white
                  shadow-lg
                  transition-all duration-200 cursor-pointer
                  overflow-visible
                "
              >
                {/* Decorative Bubbles */}
                <span className="absolute -top-4 -left-4 w-12 h-12 bg-sky-200 rounded-full opacity-40 blur-xl" />
                <span className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-200 rounded-full opacity-40 blur-xl" />

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <h3 className="text-xl font-semibold text-[oklch(0.21_0.006_285.885)]">
                    {project.title}
                  </h3>
                  <motion.span
                    variants={tagVariants}
                    className={`px-2 py-1 text-xs text-white rounded-full ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </motion.span>
                </div>

                <p className="text-[oklch(0.269_0_0)] mb-4 relative z-10">
                  {project.description}
                </p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-4 relative z-10"
                  variants={sectionVariants}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      variants={tagVariants}
                      className="px-2 py-1 text-xs bg-[oklch(0.373_0.034_259.733)] text-white rounded"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors duration-200 relative z-10"
                  >
                    View Project →
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          <div className="my-16 border-t border-gray-200" />

          {/* Publications Section */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-8 mt-12 text-center md:text-6xl text-[oklch(0.21_0.006_285.885)]"
          >
            Publications
          </motion.h1>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  x: 2,
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
                className="
                  relative z-10 isolate
                  p-6 rounded-2xl
                  border border-gray-200
                  bg-white
                  shadow-lg
                  transition-all duration-200 cursor-pointer
                  overflow-visible
                "
              >
                {/* Decorative Bubbles */}
                <span className="absolute -top-3 -left-5 w-14 h-14 bg-pink-200 rounded-full opacity-40 blur-xl" />
                <span className="absolute -bottom-5 -right-4 w-12 h-12 bg-indigo-200 rounded-full opacity-40 blur-xl" />

                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[oklch(0.21_0.006_285.885)] mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-[oklch(0.373_0.034_259.733)] mb-1">
                      <span className="font-medium text-[oklch(0.21_0.006_285.885)]">
                        Authors:
                      </span>{" "}
                      {pub.authors}
                    </p>
                    <p className="text-sm text-[oklch(0.373_0.034_259.733)]">
                      <span className="font-medium text-[oklch(0.21_0.006_285.885)]">
                        Journal:
                      </span>{" "}
                      {pub.journal} • {pub.year}
                    </p>
                  </div>
                  <motion.span
                    variants={tagVariants}
                    className={`px-3 py-1 text-xs text-white rounded-full ${getTypeColor(
                      pub.type
                    )} mt-2 md:mt-0`}
                  >
                    {pub.type}
                  </motion.span>
                </div>

                <p className="text-[oklch(0.269_0_0)] mb-4 italic relative z-10">
                  {pub.abstract}
                </p>

                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors duration-200 relative z-10"
                >
                  Read Publication →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
