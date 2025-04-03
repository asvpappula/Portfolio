
import { Briefcase, BookOpen, Code, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 animate-slide-in">
      <h2 className="text-3xl font-bold mb-8 cyber-text">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="neon-card">
          <h3 className="text-xl font-semibold mb-4 text-cyber-accent">The Basics</h3>
          <p className="mb-4">
            I'm a passionate Computer Engineering student at UC Santa Cruz with a love for coding and a drive to make an impact. My journey has led me to create websites, dive into hackathons, and even explore the world of dropshipping with my own online stores.
          </p>
          <p>
            Outside of coding, you'll find me working out at the gym, exploring the outdoors, or discovering new food spots with friends.
          </p>
        </div>
        
        <div className="neon-card">
          <h3 className="text-xl font-semibold mb-4 text-cyber-accent">Facts & Figures</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-cyber-neon-blue" />
              <span>Multiple Leadership Roles</span>
            </div>
            <div className="flex items-center space-x-3">
              <BookOpen className="w-5 h-5 text-cyber-neon-blue" />
              <span>Computer Engineering Student</span>
            </div>
            <div className="flex items-center space-x-3">
              <Code className="w-5 h-5 text-cyber-neon-blue" />
              <span>Python, Java, HTML, C++ Expert</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-cyber-neon-blue" />
              <span>Web Developer</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-cyber-accent">Education Timeline</h3>
        <div className="relative border-l-2 border-cyber-primary pl-8 py-4 ml-4">
          {/* Timeline items */}
          <div className="mb-8 relative">
            <div className="absolute -left-[43px] w-6 h-6 bg-cyber-muted rounded-full border-2 border-cyber-primary shadow-[0_0_5px_theme(colors.cyber.primary)]"></div>
            <div className="neon-card">
              <h4 className="text-lg font-medium">Bachelor of Science in Computer Engineering</h4>
              <p className="text-cyber-foreground/70">University of California, Santa Cruz</p>
              <p className="text-cyber-primary">September 2023 - Present</p>
              <p className="mt-2">Focusing on Computer Engineering and developing technical skills to solve complex engineering challenges.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-[43px] w-6 h-6 bg-cyber-muted rounded-full border-2 border-cyber-primary shadow-[0_0_5px_theme(colors.cyber.primary)]"></div>
            <div className="neon-card">
              <h4 className="text-lg font-medium">High School Diploma</h4>
              <p className="text-cyber-foreground/70">California High School, San Ramon</p>
              <p className="text-cyber-primary">August 2019 - June 2023</p>
              <p className="mt-2">Developed foundation in computer science and participated in multiple leadership roles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
