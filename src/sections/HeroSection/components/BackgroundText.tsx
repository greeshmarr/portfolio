import { motion } from 'framer-motion';

export const BackgroundText = () => {
  return (
    <div className="absolute box-border caret-transparent flex justify-center overflow-hidden bottom-0 inset-x-0">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.5, ease: 'easeOut' }}
      className="text-transparent text-[160px] font-black bg-clip-text 
                bg-[linear-gradient(oklab(0.62_0_0_/_0.3)_0%,oklab(0.55_0_0_/_0.2)_100%)] 
                hidden leading-[160px] -mb-10 
                md:text-[256px] md:block md:leading-[256px]"
    >
      GREESHMA
    </motion.div>
    </div>
  );
};
