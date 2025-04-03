
import { useState } from 'react';
import { Send, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'Thanks for reaching out. I\'ll get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 animate-slide-in">
      <h2 className="text-3xl font-bold mb-8 cyber-text">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="neon-card">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-cyber-muted border border-cyber-primary/30 rounded-md focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-cyber-muted border border-cyber-primary/30 rounded-md focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-cyber-muted border border-cyber-primary/30 rounded-md focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-colors"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-cyber-muted border border-cyber-primary/30 rounded-md focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="neo-button w-full flex items-center justify-center"
              >
                {isLoading ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div>
          <div className="neon-card mb-6">
            <h3 className="text-xl font-semibold mb-4 text-cyber-accent">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-cyber-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:alex@cybersomething.dev" className="text-cyber-foreground/70 hover:text-cyber-primary">
                    alex@cybersomething.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <ExternalLink className="w-5 h-5 mr-3 text-cyber-primary mt-1" />
                <div>
                  <p className="font-medium">Website</p>
                  <a href="https://cybersomething.dev" target="_blank" rel="noopener noreferrer" className="text-cyber-foreground/70 hover:text-cyber-primary">
                    cybersomething.dev
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="neon-card">
            <h3 className="text-xl font-semibold mb-4 text-cyber-accent">Social Media</h3>
            
            <div className="flex flex-col space-y-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-cyber-muted rounded-md hover:bg-cyber-muted/80 transition-colors"
              >
                <Github className="w-5 h-5 mr-3 text-cyber-primary" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-cyber-muted rounded-md hover:bg-cyber-muted/80 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-3 text-cyber-primary" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
