
import { Download, FileText, Calendar, MapPin, Mail, Phone, Globe } from 'lucide-react';

const ResumeSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 animate-slide-in">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold cyber-text">My Resume</h2>
        <button className="neo-button flex items-center">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </button>
      </div>
      
      <div className="neon-card mb-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-2xl font-bold text-cyber-primary mb-2">Adithya Sai Venkat Pappula</h1>
            <h2 className="text-xl mb-3">Computer Engineering Student</h2>
            
            <p className="max-w-lg text-cyber-foreground/80 mb-4">
              A passionate computer engineering student at UC Santa Cruz with a love for coding and a drive to make an impact. Proficient in Python, Java, and HTML, eager to apply technical skills to innovate and solve complex engineering challenges.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 space-y-2">
            <div className="flex items-center text-cyber-foreground/70">
              <Mail className="w-4 h-4 mr-2" />
              <span>pappula.asv@gmail.com</span>
            </div>
            <div className="flex items-center text-cyber-foreground/70">
              <Phone className="w-4 h-4 mr-2" />
              <span>925-968-5111</span>
            </div>
            <div className="flex items-center text-cyber-foreground/70">
              <MapPin className="w-4 h-4 mr-2" />
              <span>San Ramon, CA</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-cyber-accent">Work Experience</h3>
          
          <div className="space-y-6">
            {/* Experience Item 1 */}
            <div className="neon-card">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="text-lg font-medium text-cyber-primary">Co-Founder and Outreach/Developer lead</h4>
                <div className="flex items-center text-cyber-foreground/70 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>January 2021 - June 2023</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between mb-3">
                <span>Unite Hacks</span>
                <div className="flex items-center text-cyber-foreground/70 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              
              <ul className="list-disc pl-5 space-y-1 text-cyber-foreground/90">
                <li>Coded and developed the front end of our hackathon website using HTML, JavaScript, and CSS.</li>
                <li>Assisted students with their coding projects, providing support in debugging code.</li>
                <li>Cultivating partnerships with sponsors to secure financial and logistical backing.</li>
                <li>Leading and managing teams to ensure smooth execution of projects.</li>
                <li>Creating and managing budget sheets to ensure fiscal responsibility.</li>
              </ul>
            </div>
            
            {/* Experience Item 2 */}
            <div className="neon-card">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="text-lg font-medium text-cyber-primary">Youth Leader</h4>
                <div className="flex items-center text-cyber-foreground/70 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2022 - 2023</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between mb-3">
                <span>Greater Tri-Valley Telugu Association</span>
                <div className="flex items-center text-cyber-foreground/70 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Tri Valley, CA</span>
                </div>
              </div>
              
              <ul className="list-disc pl-5 space-y-1 text-cyber-foreground/90">
                <li>Coded and developed the front end of the event website using HTML, JavaScript, and CSS.</li>
                <li>Directed a team in order to provide employment opportunities for community members.</li>
                <li>Crafted emails to businesses, secured sponsorships and venue, raised $20,000, and balanced a complex budget.</li>
                <li>Over 1k members attended the event.</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4 mt-8 text-cyber-accent">Education</h3>
          
          <div className="neon-card">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h4 className="text-lg font-medium text-cyber-primary">Bachelor of Science in Computer Engineering</h4>
              <div className="flex items-center text-cyber-foreground/70 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>September 2023 - Present</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between mb-3">
              <span>University of California, Santa Cruz</span>
              <div className="flex items-center text-cyber-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Santa Cruz, CA</span>
              </div>
            </div>
          </div>
          
          <div className="neon-card mt-6">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h4 className="text-lg font-medium text-cyber-primary">High School Diploma</h4>
              <div className="flex items-center text-cyber-foreground/70 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>August 2019 - June 2023</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between mb-3">
              <span>California High School</span>
              <div className="flex items-center text-cyber-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>San Ramon, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyber-accent">Skills</h3>
          
          <div className="neon-card mb-6">
            <h4 className="font-medium mb-3">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "HTML", "CSS", "C++"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-cyber-muted rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="neon-card mb-6">
            <h4 className="font-medium mb-3">Leadership Skills</h4>
            <div className="flex flex-wrap gap-2">
              {["Event Management", "Teamwork", "Leadership", "Team Management", "Advertising Management"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-cyber-muted rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="neon-card mb-6">
            <h4 className="font-medium mb-3">Business Skills</h4>
            <div className="flex flex-wrap gap-2">
              {["Budgeting", "Finance", "Fundraising", "Business Partnerships"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-cyber-muted rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="neon-card">
            <h4 className="font-medium mb-3">Courses & Certifications</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Capstone: Retrieving, Processing, and Visualizing Data with Python</p>
                <p className="text-sm text-cyber-foreground/70">University of Michigan</p>
                <p className="text-sm text-cyber-primary">Grade: 92%</p>
              </div>
              
              <div>
                <p className="font-medium">Programming for Everybody (Getting Started with Python)</p>
                <p className="text-sm text-cyber-foreground/70">University of Michigan</p>
                <p className="text-sm text-cyber-primary">Grade: 95.68%</p>
              </div>
              
              <div>
                <p className="font-medium">Indian Institute of Technology Guwahati</p>
                <p className="text-sm text-cyber-foreground/70">Certificate Program</p>
                <p className="text-sm text-cyber-primary">Grade: 100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
