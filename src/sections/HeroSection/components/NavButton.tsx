import { motion } from 'framer-motion';

export type NavButtonProps = {
  iconSrc: string;
  text: string;
  onClick: () => void;
};

export const NavButton = (props: NavButtonProps) => {
  return (
    <motion.button 
      onClick={props.onClick}
      whileHover={{ 
        scale: 1.05,
        y: -3,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      className="
        relative 
        flex flex-col items-center justify-center 
        w-28 h-28 
        p-4 
        rounded-2xl 
        text-gray-800 font-semibold 
        bg-gradient-to-br from-white to-gray-50 
        shadow-lg 
        transition-all duration-300 ease-in-out
        overflow-hidden
        group
      "
    >
      {/* Background overlay for hover effect */}
      <span className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

      <div className="relative z-10 flex flex-col items-center justify-center gap-2">
        <motion.img
          src={props.iconSrc}
          alt="Icon"
          className="w-12 h-12 shrink-0 text-blue-600 transition-transform duration-300 group-hover:rotate-6"
          whileHover={{ rotate: 6 }}
          transition={{ duration: 0.2 }}
        />
        <span className="text-sm md:text-md text-center transition-colors duration-300 group-hover:text-gray-900">
          {props.text}
        </span>
      </div>
    </motion.button>
  );
};