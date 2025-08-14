import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const trailRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = trailRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      opacity: number;
      size: number;
      vx: number;
      vy: number;
    }> = [];

    const handleMouseMove = (e: MouseEvent) => {
      particles.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: Math.random() * 4 + 2,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      });

      if (particles.length > 20) {
        particles.shift();
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.opacity -= 0.03;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.size *= 0.99;

        if (particle.opacity <= 0) {
          particles.splice(index, 1);
          return;
        }

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${particle.opacity})`);
        gradient.addColorStop(0.5, `rgba(147, 51, 234, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={trailRef}
      className="fixed inset-0 pointer-events-none z-10 mix-blend-screen dark:mix-blend-lighten opacity-60"
    />
  );
}