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
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      className="text-sm font-medium items-center aspect-square backdrop-blur-lg bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] caret-transparent gap-x-2 flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] gap-y-2 text-center text-nowrap w-full border px-4 py-8 rounded-2xl border-solid border-[oklch(0.92_0.004_286.32)] md:p-10 hover:bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.5)] hover:shadow-lg transition-all duration-300"
    >
      <div className="text-[oklch(0.373_0.034_259.733)] items-center box-border caret-transparent gap-x-1 flex flex-col h-full justify-center outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] gap-y-1 text-nowrap">
        <motion.img
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] text-nowrap w-4"
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.2 }}
        />
        <span className="text-xs box-border caret-transparent block leading-4 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] text-nowrap md:text-sm md:leading-5">
          {props.text}
        </span>
      </div>
    </motion.button>
  );
};
