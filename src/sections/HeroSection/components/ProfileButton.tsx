import logoImage from "../../../assets/logo.png";

export const ProfileButton = () => {
  return (
    <div className="box-border caret-transparent z-[100]">
      <button className="text-sm font-medium items-center backdrop-blur-lg bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)]  caret-transparent inline-flex shrink-0 justify-center leading-5 outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] text-nowrap rounded-2xl">
        <img
          alt="Logo"
          src={logoImage}
          className="text-transparent aspect-[auto_100_/_100] box-border max-w-full outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] text-nowrap w-20 md:w-24"
        />
      </button>
    </div>
  );
};
