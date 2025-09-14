import { motion } from 'framer-motion';

export const BackgroundText = () => {
  return (
    <div className="absolute box-border caret-transparent flex justify-center outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] overflow-hidden bottom-0 inset-x-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
        className="text-transparent text-[160px] font-black bg-clip-text bg-[linear-gradient(oklab(0.556_0_0_/_0.1)_0px,oklab(0_0_0_/_0)_100%)] box-border hidden leading-[160px] min-h-0 min-w-0 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] -mb-10 md:text-[256px] md:block md:leading-[256px] md:min-h-[auto] md:min-w-[auto]"
      >
        GREESHMA
      </motion.div>
    </div>
  );
};
