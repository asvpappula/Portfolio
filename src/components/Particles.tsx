
import { useEffect, useRef, useState } from 'react';

interface ParticlesProps {
  className?: string;
}

const Particles: React.FC<ParticlesProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;
    let particles: Particle[] = [];
    let textFragments: TextFragment[] = [];
    let streaks: Streak[] = [];
    
    canvas.width = width;
    canvas.height = height;

    // Tech-inspired words and fragments
    const techWords = [
      "CREATE", "DESIGN", "BUILD", "CODE", "INNOVATE", 
      "X2E9", "VOID", "0x3F", "SYNC", "DATA", "LINK",
      "FUTURE", "TECH", "AI", "DEV", "BYTE"
    ];

    // Neon colors
    const neonColors = [
      'rgba(255, 41, 117, 0.7)', // Pink
      'rgba(41, 121, 255, 0.7)', // Blue
      'rgba(149, 41, 255, 0.7)', // Purple
      'rgba(41, 255, 213, 0.7)', // Cyan
    ];

    class Particle {
      x: number;
      y: number;
      radius: number;
      baseRadius: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      trail: Array<{x: number, y: number, opacity: number}>;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseRadius = Math.random() * 1.5 + 0.5;
        this.radius = this.baseRadius;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.color = neonColors[Math.floor(Math.random() * neonColors.length)];
        this.opacity = Math.random() * 0.5 + 0.1;
        this.trail = [];
      }

      update(mouseX: number, mouseY: number) {
        // Add slight mouse influence
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = 0.01 * (1 - distance / 200);
          this.speedX += dx * force / distance;
          this.speedY += dy * force / distance;
        }

        // Add to trail
        this.trail.push({x: this.x, y: this.y, opacity: this.opacity});
        if (this.trail.length > 5) {
          this.trail.shift();
        }

        // Update position
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        // Dampen speed over time
        this.speedX *= 0.99;
        this.speedY *= 0.99;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw trail
        for (let i = 0; i < this.trail.length; i++) {
          const point = this.trail[i];
          const trailOpacity = point.opacity * (i / this.trail.length);
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, this.radius * (i / this.trail.length), 0, Math.PI * 2);
          ctx.fillStyle = this.color.replace('0.7', `${trailOpacity * 0.3}`);
          ctx.fill();
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace('0.7', `${this.opacity}`);
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color.replace('0.7', '1');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'transparent';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class TextFragment {
      x: number;
      y: number;
      text: string;
      opacity: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.text = techWords[Math.floor(Math.random() * techWords.length)];
        this.opacity = Math.random() * 0.1 + 0.03; // Very faint
        this.size = Math.random() * 20 + 10;
        this.color = neonColors[Math.floor(Math.random() * neonColors.length)];
        this.speedX = Math.random() * 0.1 - 0.05;
        this.speedY = Math.random() * 0.1 - 0.05;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x < -100) this.x = width + 100;
        if (this.x > width + 100) this.x = -100;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;

        // Subtle opacity pulsation
        this.opacity = Math.max(0.03, Math.min(0.13, this.opacity + Math.sin(Date.now() * 0.001) * 0.01));
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.size}px "Inter", monospace`;
        ctx.fillStyle = this.color.replace('0.7', `${this.opacity}`);
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    class Streak {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      width: number;
      color: string;
      opacity: number;
      speed: number;
      length: number;
      progress: number;

      constructor() {
        this.startX = Math.random() * width;
        this.startY = Math.random() * height;
        const angle = Math.random() * Math.PI * 2;
        this.length = Math.random() * 200 + 100;
        this.endX = this.startX + Math.cos(angle) * this.length;
        this.endY = this.startY + Math.sin(angle) * this.length;
        this.width = Math.random() * 2 + 0.5;
        this.color = neonColors[Math.floor(Math.random() * neonColors.length)];
        this.opacity = Math.random() * 0.3 + 0.1;
        this.speed = Math.random() * 0.005 + 0.002;
        this.progress = 0;
      }

      update() {
        this.progress += this.speed;
        if (this.progress > 1) {
          this.progress = 0;
          this.startX = Math.random() * width;
          this.startY = Math.random() * height;
          const angle = Math.random() * Math.PI * 2;
          this.endX = this.startX + Math.cos(angle) * this.length;
          this.endY = this.startY + Math.sin(angle) * this.length;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const currentProgress = this.progress > 0.5 ? 1 - this.progress : this.progress;
        const x1 = this.startX + (this.endX - this.startX) * Math.max(0, this.progress * 2 - 0.5);
        const y1 = this.startY + (this.endY - this.startY) * Math.max(0, this.progress * 2 - 0.5);
        const x2 = this.startX + (this.endX - this.startX) * Math.min(1, this.progress * 2);
        const y2 = this.startY + (this.endY - this.startY) * Math.min(1, this.progress * 2);
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = this.color.replace('0.7', `${this.opacity * (currentProgress * 2)}`);
        ctx.lineWidth = this.width;
        ctx.stroke();

        // Add glow effect
        ctx.shadowBlur = 5;
        ctx.shadowColor = this.color.replace('0.7', '1');
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      particles = [];
      textFragments = [];
      streaks = [];
      
      // Create particles
      const particleCount = Math.min(Math.floor(width * height / 15000), 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      // Create text fragments
      const textCount = Math.min(Math.floor(width * height / 50000), 15);
      for (let i = 0; i < textCount; i++) {
        textFragments.push(new TextFragment());
      }

      // Create light streaks
      const streakCount = Math.min(Math.floor(width * height / 80000), 8);
      for (let i = 0; i < streakCount; i++) {
        streaks.push(new Streak());
      }
    };

    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 0.2 * (1 - (distance / maxDistance));
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y, 
              particles[j].x, particles[j].y
            );

            gradient.addColorStop(0, particles[i].color.replace('0.7', `${opacity}`));
            gradient.addColorStop(1, particles[j].color.replace('0.7', `${opacity}`));

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Apply a subtle blur to the entire canvas
      // ctx.filter = 'blur(1px)';  // This might cause performance issues on some browsers
      
      // Draw background with very low opacity and blur
      ctx.fillStyle = 'rgba(15, 15, 26, 0.1)';
      ctx.fillRect(0, 0, width, height);
      // ctx.filter = 'none';

      // Draw streaks
      streaks.forEach(streak => {
        streak.update();
        streak.draw(ctx);
      });

      // Draw text fragments
      textFragments.forEach(text => {
        text.update();
        text.draw(ctx);
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(mousePosition.x, mousePosition.y);
        particle.draw(ctx);
      });

      // Connect particles with lines
      connectParticles(ctx);

      // Loop animation
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
      
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    init();
    animate();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full z-[-1] opacity-80 ${className}`} 
    />
  );
};

export default Particles;
