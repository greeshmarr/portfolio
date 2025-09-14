import React, { useState } from "react";
import { HeroSection } from "../HeroSection";
import { ExperiencePage } from "../../pages/ExperiencePage";
import { SkillsPage } from "../../pages/SkillsPage";
import { ProjectsPage } from "../../pages/ProjectsPage";
import { PublicationsPage } from "../../pages/PublicationsPage";
import { ContactPage } from "../../pages/ContactPage";
import { ColorPaintingCanvas } from "../../components/ColorPaintingCanvas";

export const Main = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigate = (section: string) => {
    setCurrentPage(section === "hero" ? "home" : section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "experience":
        return <ExperiencePage onNavigate={handleNavigate} />;
      case "skills":
        return <SkillsPage onNavigate={handleNavigate} />;
      case "projects":
        return <ProjectsPage onNavigate={handleNavigate} />;
      case "publications":
        return <PublicationsPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HeroSection onNavigate={handleNavigate} />;
    }
  };

  return (
    <main className="box-border caret-transparent flex flex-col min-h-[1000px] outline-[oklab(0.705_0.00415142_-0.0144141_/_0.5)] relative">
      <ColorPaintingCanvas />
      {renderPage()}
    </main>
  );
};
