
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

const ExperienceCard: React.FC<{ experience: ExperienceItem; index: number }> = ({ experience, index }) => {
  return (
    <div className="neon-card relative overflow-hidden group animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="absolute top-0 right-0 w-20 h-20 bg-cyber-primary opacity-10 rounded-bl-full"></div>
      
      <h3 className="text-xl font-semibold mb-1 text-cyber-primary">{experience.position}</h3>
      <h4 className="text-lg mb-3">{experience.company}</h4>
      
      <div className="flex items-center text-sm mb-2 text-cyber-foreground/70">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{experience.period}</span>
      </div>
      
      <div className="flex items-center text-sm mb-4 text-cyber-foreground/70">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{experience.location}</span>
      </div>
      
      <ul className="list-disc pl-5 space-y-2">
        {experience.description.map((item, i) => (
          <li key={i} className="text-cyber-foreground/90">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Unite Hacks",
      position: "Co-Founder and Outreach/Developer lead",
      period: "January 2021 - June 2023",
      location: "San Francisco, CA",
      description: [
        "Coded and developed the front end of our hackathon website using HTML, JavaScript, and CSS.",
        "Assisted students with their coding projects, providing support in debugging code and troubleshooting issues in Python, Java, and various other programming languages.",
        "Cultivating partnerships with sponsors to secure financial and logistical backing.",
        "Orchestrating impactful hackathons through effective advertising strategies.",
        "Leading and managing teams to ensure smooth execution of projects."
      ]
    },
    {
      company: "National STEM Honor Society (NSTEM)",
      position: "Vice President",
      period: "2021 - 2023",
      location: "San Francisco, CA",
      description: [
        "NSTEM Outreach and Social Media Manager. Responsible for researching and promoting internship and volunteering opportunities.",
        "Personally contacted numerous companies regarding sponsorships. Researched and demonstrated activities that were relevant to STEM.",
        "Posted on our Twitter account, sent emails to members, and posted on our website."
      ]
    },
    {
      company: "Greater Tri-Valley Telugu Association",
      position: "Youth Leader",
      period: "2022 - 2023",
      location: "Tri Valley, CA",
      description: [
        "Coded and developed the front end of the event website using HTML, JavaScript, and CSS.",
        "Directed a team in order to provide employment opportunities for community members.",
        "Crafted emails to businesses, secured sponsorships and venue, raised $20,000, and balanced a complex budget.",
        "Over 1k members attended the event.",
        "Learned and strengthened management, decision-making, and communication skills."
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 animate-slide-in">
      <h2 className="text-3xl font-bold mb-8 cyber-text">Work Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 cyber-text">Current Role</h2>
        
        <div className="neon-card">
          <h3 className="text-xl font-semibold mb-1 text-cyber-primary">Outreach Coordinator</h3>
          <h4 className="text-lg mb-3">Slug AI, Santa Cruz</h4>
          
          <div className="flex items-center text-sm mb-2 text-cyber-foreground/70">
            <Calendar className="w-4 h-4 mr-2" />
            <span>September 2023 - Present</span>
          </div>
          
          <p className="mb-4">
            Leading client acquisition, organized events, crafted speaker notes, and drove branch visibility through targeted advertising and strategic partnerships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
