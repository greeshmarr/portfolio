import { motion } from 'framer-motion';

export const SearchForm = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      className="relative box-border caret-transparent max-w-lg outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-full"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="items-center backdrop-blur-lg bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] box-border caret-transparent flex outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] border mx-auto pl-6 pr-2 py-2.5 rounded-[3.35544e+07px] border-solid border-[oklch(0.922_0_0)] hover:bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.4)] transition-all duration-300"
      >
        <input
          type="text"
          placeholder="Ask me anything…"
          className="text-[oklch(0.269_0_0)] bg-transparent box-border caret-transparent block outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-full p-0 placeholder:text-[oklch(0.5_0_0)]"
        />
        <motion.button
          type="submit"
          aria-label="Submit question"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-white items-center bg-sky-600 caret-transparent flex justify-center opacity-70 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] text-center p-2.5 rounded-[3.35544e+07px] hover:opacity-100 transition-opacity duration-200"
        >
          <img
            src="https://c.animaapp.com/mfi8re3pnzI1Rr/assets/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-5"
          />
        </motion.button>
      </motion.div>
    </motion.form>
  );
};
