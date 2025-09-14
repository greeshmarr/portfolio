import { Main } from "./sections/Main";
import { Section } from "./components/Section";
import { RouteAnnouncer } from "./components/RouteAnnouncer";

export const App = () => {
  return (
    <body className="text-[oklch(0.141_0.005_285.823)] text-base not-italic normal-nums font-normal accent-auto bg-[oklch(1_0_0)] box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc min-h-[1000px] outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] text-start indent-[0px] normal-case visible border-separate font-ui_sans_serif">
      <Main />
      <Section />
      <RouteAnnouncer />
    </body>
  );
};
