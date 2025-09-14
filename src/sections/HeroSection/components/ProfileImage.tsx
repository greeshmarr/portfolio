import heroImage from "../../../assets/hero.png";

export const ProfileImage = () => {
  return (
    <div className="relative box-border caret-transparent h-52 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-48 z-10 overflow-hidden md:h-72 md:w-72">
      <img
        alt="Hero memoji"
        src={heroImage}
        className="text-transparent aspect-[auto_2000_/_2000] box-border max-w-full object-cover outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] w-[2000px]"
      />
    </div>
  );
};
