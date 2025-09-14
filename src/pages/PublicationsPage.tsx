import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";

export const PublicationsPage = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
  const publications = [
    {
      title:
        "Machine Learning based Network Slicing and Resource Allocation for Electric Vehicles (EVs)",
      authors: "Rohit Kumar Gupta, Anurag Choubey, Shlok Jain, Greeshma R R, Rajiv Misra",
      journal: "Proceedings of the 5th International Conference on Internet of Things and Connected Technologies (ICIoTCT)",
      year: "2020",
      type: "Conference Paper",
      abstract:
        "This paper employs unsupervised machine learning for clustering EVs into network slices (infotainment, safety, and charge-state) and develops a slice leader–based resource allocation algorithm using RSUs that improves throughput and reduces latency in EV communication networks.",
      link: "https://link.springer.com/chapter/10.1007/978-3-030-76736-5_31",
    },
    {
      title: "Quality Assessment of Crops through Disease Detection using Machine Learning",
      authors: "Greeshma R R, Co-authors (as listed in IJCSE 2020)",
      journal: "International Journal of Computer Science and Engineering (IJCSE)",
      year: "2020",
      type: "Journal Paper",
      abstract:
        "This paper presents a machine learning-based approach for assessing crop quality by detecting plant diseases from image data. Using classification algorithms and image preprocessing techniques, the study improves disease detection accuracy and provides insights for enhancing crop yield and agricultural productivity.",
      link: "https://mail.ijcseonline.org/pdf_paper_view.php?paper_id=5039&19-IJCSE-07830-24.pdf",
    },
  ];

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

  return (
    <>
      <NavBar onNavigate={onNavigate} currentSection="publications" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white pt-32 px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 mt-4 text-center md:text-6xl">
            Publications
          </h1>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-lg bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] p-6 rounded-2xl border border-[oklch(0.92_0.004_286.32)]"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[oklch(0.21_0.006_285.885)] mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-[oklch(0.373_0.034_259.733)] mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-[oklch(0.373_0.034_259.733)]">
                      {pub.journal} • {pub.year}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs text-white rounded-full ${getTypeColor(
                      pub.type
                    )} mt-2 md:mt-0`}
                  >
                    {pub.type}
                  </span>
                </div>

                <p className="text-[oklch(0.269_0_0)] mb-4 italic">
                  {pub.abstract}
                </p>

                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-sky-600 hover:text-sky-700 transition-colors duration-200"
                >
                  Read Publication →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
