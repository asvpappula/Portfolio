
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Particles from '@/components/Particles';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderSection = () => {
    switch (activeTab) {
      case 0:
        return <HomeSection onNavigate={setActiveTab} />;
      case 1:
        return <AboutSection />;
      case 2:
        return <SkillsSection />;
      case 3:
        return <ProjectsSection />;
      case 4:
        return <ExperienceSection />;
      case 5:
        return <ResumeSection />;
      case 6:
        return <ContactSection />;
      default:
        return <HomeSection onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-cyber-background text-cyber-foreground overflow-hidden">
      <Particles />
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="pl-20 min-h-screen">
        <div className="container mx-auto py-10 px-4 min-h-screen flex items-center">
          <div className="content-container w-full animate-blur-in">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
