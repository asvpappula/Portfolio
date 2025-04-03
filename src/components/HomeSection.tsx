
import { ArrowRight } from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (index: number) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full animate-slide-in">
      <h1 className="text-6xl font-bold mb-4 cyber-text">ADITHYA PAPPULA</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Computer Engineering student at UC Santa Cruz with a passion for coding, innovation, and solving complex engineering challenges.
      </p>
      <div className="flex space-x-4">
        <button 
          onClick={() => onNavigate(3)} 
          className="neo-button group"
        >
          View My Work
          <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button 
          onClick={() => onNavigate(6)} 
          className="neo-button group"
        >
          Contact Me
          <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default HomeSection;
