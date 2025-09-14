import { motion } from 'framer-motion';

export const CTAButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className="fixed items-center backdrop-blur-2xl bg-transparent caret-transparent gap-x-2 flex outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] gap-y-2 text-center z-[51] border px-4 py-2.5 rounded-[3.35544e+07px] border-solid border-[oklch(0.92_0.004_286.32)] left-6 top-8 hover:bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] transition-all duration-300"
    >
      {/* <motion.img
        alt="Fastfolio"
        src="https://c.animaapp.com/mfi8re3pnzI1Rr/assets/4.png"
        className="text-transparent aspect-[auto_24_/_24] box-border max-w-full object-contain outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-6"
        whileHover={{ rotate: 10 }}
        transition={{ duration: 0.2 }}
      />
      <span className="text-sm font-medium box-border caret-transparent hidden leading-5 min-h-0 min-w-0 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] md:block md:min-h-[auto] md:min-w-[auto]">
        Build your AI portfolio
      </span>
      <span className="text-sm font-medium box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] md:hidden md:min-h-0 md:min-w-0">
        Build yours
      </span> */}
      <motion.img
        src="https://c.animaapp.com/mfi8re3pnzI1Rr/assets/icon-1.svg"
        alt="Icon"
        className="box-border caret-transparent hidden h-4 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-4 md:block"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};
