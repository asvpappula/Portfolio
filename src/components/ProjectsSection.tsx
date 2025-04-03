
import { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
  url?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const projectUrl = project.url || project.demo || '#';
  
  return (
    <div className="neon-card overflow-hidden group relative cursor-pointer">
      <a 
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title} project`}
      ></a>
      
      <div className="relative overflow-hidden h-48 -mx-6 -mt-6 mb-4">
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-background to-transparent z-10"></div>
        <div 
          className="w-full h-full bg-cyber-muted bg-opacity-30 bg-center bg-cover transform group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-cyber-primary">{project.title}</h3>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs px-2 py-1 rounded-full bg-cyber-muted border border-cyber-primary/50 text-cyber-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-cyber-foreground/80 mb-4">{project.description}</p>
      
      <div className="flex justify-end space-x-3 relative z-20">
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-cyber-primary/50 rounded-full hover:bg-cyber-primary/20 transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {project.demo && (
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-cyber-primary/50 rounded-full hover:bg-cyber-primary/20 transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "ResumeTailor AI",
      description: "A futuristic Resume AI optimizer with dark theme and neon accents. Built with React, TypeScript and Chart.js.",
      image: "https://i.imghippo.com/files/QdvY9745yv.png",
      tags: ["React", "TypeScript", "Tailwind"],
      category: "Web Dev",
      github: "#",
      demo: "#",
      url: "https://resume-tailor-ai-beige.vercel.app/"
    },
  ];

  const categories = ["All", "Web Dev", "Mobile", "Data Science", "School Projects", "Personal Projects"];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="container mx-auto px-4 animate-slide-in">
      <h2 className="text-3xl font-bold mb-8 cyber-text">My Projects</h2>
      
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-md transition-all duration-300",
              activeCategory === category
                ? "bg-cyber-primary text-cyber-foreground"
                : "bg-cyber-muted border border-cyber-primary/30 hover:border-cyber-primary"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
