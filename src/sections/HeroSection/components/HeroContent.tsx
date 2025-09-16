import { ProfileButton } from "./ProfileButton";
import { motion } from "framer-motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="items-center box-border caret-transparent flex flex-col outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] text-center z-[1] mt-24 mb-8 md:mt-4 md:mb-12"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <ProfileButton />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="text-4xl font-bold box-border caret-transparent leading-10 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] md:text-7xl md:leading-[72px]"
      >
        Hey, I'm Greeshma
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="text-[oklch(0.21_0.006_285.885)] text-xl box-border caret-transparent leading-7 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] mt-1 md:text-2xl md:leading-8"
      >
        Senior Software Engineer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="text-md text-[oklch(0.4_0.006_285.885)] mt-2 max-w-lg md:text-lg"
      >
        I craft scalable, user-first experiences that bring designs to life and backends to scale.
      </motion.p>
    </motion.div>
  );
};