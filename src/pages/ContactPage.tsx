import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";

export const ContactPage = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      label: "Email",
      value: "greeshmarr23@gmail.com",
      link: "mailto:greeshmarr23@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/greeshma-r-r-05290a190/",
      link: "https://www.linkedin.com/in/greeshma-r-r-05290a190/",
    },
    {
      label: "GitHub",
      value: "github.com/greeshmarr",
      link: "https://github.com/greeshmarr",
    },
  ];

  return (
    <>
      <NavBar onNavigate={onNavigate} currentSection="contact" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white pt-32 px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 mt-4 text-center md:text-6xl">
            Get In Touch
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="backdrop-blur-lg bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] p-6 rounded-2xl border border-[oklch(0.92_0.004_286.32)]"
            >
              <h2 className="text-2xl font-semibold text-[oklch(0.21_0.006_285.885)] mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex flex-col"
                  >
                    <span className="text-sm text-[oklch(0.373_0.034_259.733)] mb-1">
                      {info.label}
                    </span>
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 hover:text-sky-700 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[oklch(0.21_0.006_285.885)] mb-4">
                  Let's Connect!
                </h3>
                <p className="text-[oklch(0.269_0_0)]">
                  I’m open to full-time opportunities and would be glad to discuss how my experience can help your team. Reach out anytime using the form or the links above.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-lg bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] p-6 rounded-2xl border border-[oklch(0.92_0.004_286.32)]"
            >
              <h2 className="text-2xl font-semibold text-[oklch(0.21_0.006_285.885)] mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-[oklch(0.373_0.034_259.733)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-transparent border border-[oklch(0.92_0.004_286.32)] rounded-lg focus:outline-none focus:border-sky-600 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-[oklch(0.373_0.034_259.733)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-transparent border border-[oklch(0.92_0.004_286.32)] rounded-lg focus:outline-none focus:border-sky-600 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-[oklch(0.373_0.034_259.733)] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-transparent border border-[oklch(0.92_0.004_286.32)] rounded-lg focus:outline-none focus:border-sky-600 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-[oklch(0.373_0.034_259.733)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-transparent border border-[oklch(0.92_0.004_286.32)] rounded-lg focus:outline-none focus:border-sky-600 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
