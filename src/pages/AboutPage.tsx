import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar } from "../components/NavBar";
import GreeshmaResume from "../assets/GreeshmaRR_Resume.pdf";

const AnimatedHeading = () => {
  const messages = ["About Me", "Hello, I'm Greeshma 👩‍💻", "Full Stack Senior Software Engineer"];
  const [messageIndex, setMessageIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Wait 3 seconds before transitioning to the next message
    return () => clearTimeout(timeout);
  }, [messageIndex, messages.length]);

  return (
    <div className="flex justify-center items-center h-24">
      <AnimatePresence mode="wait">
        <motion.h2
          key={messageIndex}
          className="text-4xl font-bold text-[oklch(0.98,0.01,290)] text-center md:text-5xl whitespace-nowrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {messages[messageIndex].split("").map((char, index) => (
            <motion.span key={index} variants={itemVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export const AboutPage = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
  return (
    <>
      <NavBar onNavigate={onNavigate} currentSection="about" />
      <div className="relative min-h-screen pt-24 px-4 overflow-hidden">
        {/* Background Image from Hero Section */}
        <div className="fixed inset-0 z-0">
          <img
            src="https://c.animaapp.com/mfi8re3pnzI1Rr/assets/image-1.png"
            className="w-screen h-screen object-cover"
            alt="Background"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative max-w-6xl mx-auto py-12 z-10"
        >
          <AnimatedHeading />
          
          <div className="flex flex-col items-center gap-8 mb-16">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full md:w-2/3 text-center text-[oklch(0.92,0.004,286.32)]"
            >
              <p className="text-lg leading-relaxed mb-4">
                I'm a passionate engineer with <strong className="text-[oklch(0.7,0.06,240)]">5+ years</strong> of experience who loves building user-centric applications from start to finish. I'm passionate about exploring new technologies and taking full ownership of projects. My expertise lies in front-end development using React and JavaScript, but I also have hands-on experience with back-end technologies that allow me to create robust, full-stack solutions. 
              </p>
              
              <p className="text-lg leading-relaxed">
                As a passionate professional, my journey has been marked by a commitment to excellence. I was honored with the <strong className="text-[oklch(0.7,0.06,240)]">India Site Excellence Award</strong> and <strong className="text-[oklch(0.7,0.06,240)]">featured in the company's newsletter</strong> for my teamwork and technical achievements in Sep 2025.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-full max-w-sm"
            >
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center"
          >
            <a
              href={GreeshmaResume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'oklch(0.7, 0.06, 240)',
                color: 'oklch(0.2, 0.01, 290)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
              }}
            >
              View Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};