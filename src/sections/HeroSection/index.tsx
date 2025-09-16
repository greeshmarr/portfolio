// HeroSection.tsx
import { motion } from "framer-motion";
import { BackgroundText } from "./components/BackgroundText";
import { CTAButton } from "./components/CTAButton";
import { HeroContent } from "./components/HeroContent";
import { SearchForm } from "./components/SearchForm";
import { NavigationGrid } from "./components/NavigationGrid";
import heroImage from "../../assets/hero.png";

export const HeroSection = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }} // This is the new part
      transition={{ duration: 0.5 }}
      className="relative items-center box-border caret-transparent flex flex-col justify-center min-h-[1000px] outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] overflow-hidden pb-10 px-4 md:pb-16"
    >
      <BackgroundText />
      <HeroContent />
      <div className="relative box-border caret-transparent h-64 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-64 z-10 overflow-hidden md:h-78 md:w-78">
        <img
          alt="Hero memoji"
          src={heroImage}
          className="text-transparent aspect-[auto_2000_/_2000] box-border max-w-full object-cover outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-full h-full"
        />
      </div>
      <div className="items-center box-border caret-transparent flex flex-col justify-center outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-full z-10 mt-4">
        {/* <SearchForm /> */}
        <NavigationGrid onNavigate={onNavigate} />
      </div>
      <div className="fixed box-border caret-transparent outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] z-0 left-0 top-0">
        <img
          src="https://c.animaapp.com/mfi8re3pnzI1Rr/assets/image-1.png"
          className="aspect-[auto_1280_/_1000] box-border caret-transparent h-[1000px] max-w-full outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-screen"
        />
      </div>
    </motion.div>
  );
};
