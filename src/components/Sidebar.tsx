
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Home, User, Code, FileText, Briefcase, Download, Mail } from 'lucide-react';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center w-full py-4 px-2 transition-all duration-300",
        isActive 
          ? "bg-cyber-primary text-cyber-foreground"
          : "text-cyber-foreground/70 hover:text-cyber-foreground hover:bg-cyber-muted"
      )}
    >
      <Icon className={cn("w-6 h-6 mb-1", isActive && "animate-pulse")} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
};

interface SidebarProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { icon: Home, label: "Home" },
    { icon: User, label: "About" },
    { icon: Code, label: "Skills" },
    { icon: FileText, label: "Projects" },
    { icon: Briefcase, label: "Experience" },
    { icon: Download, label: "Resume" },
    { icon: Mail, label: "Contact" }
  ];

  return (
    <div className="h-screen fixed left-0 top-0 w-20 bg-cyber-background border-r border-cyber-primary/30 shadow-[5px_0_15px_rgba(33,150,243,0.1)] z-50">
      <div className="h-20 flex items-center justify-center border-b border-cyber-primary/30">
        <div className="w-10 h-10 rounded-full bg-cyber-primary animate-pulse flex items-center justify-center text-cyber-foreground font-bold">
          AP
        </div>
      </div>
      <div className="flex flex-col h-[calc(100%-5rem)]">
        {navItems.map((item, index) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
