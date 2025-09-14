import { NavButton } from "./NavButton";
import { motion } from "framer-motion";
import icon3 from "../../../assets/icon-3.svg";
import icon4 from "../../../assets/icon-4.svg";
import icon5 from "../../../assets/icon-5.svg";
import icon6 from "../../../assets/icon-6.svg";
import icon7 from "../../../assets/icon-7.svg";

export const NavigationGrid = ({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) => {
  const navItems = [
    {
      iconSrc: icon3,
      text: "Experience",
      action: () => onNavigate("experience"),
    },
    {
      iconSrc: icon5,
      text: "Skills",
      action: () => onNavigate("skills"),
    },
    {
      iconSrc: icon4,
      text: "Projects",
      action: () => onNavigate("projects"),
    },
    {
      iconSrc: icon6,
      text: "Publications",
      action: () => onNavigate("publications"),
    },
    {
      iconSrc: icon7,
      text: "Contact",
      action: () => onNavigate("contact"),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
      className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-2xl outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] gap-y-3 w-full mt-4 md:grid-cols-[repeat(5,minmax(0px,1fr))]"
    >
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.2 + index * 0.1,
            ease: "easeOut",
          }}
        >
          <NavButton
            iconSrc={item.iconSrc}
            text={item.text}
            onClick={item.action}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
