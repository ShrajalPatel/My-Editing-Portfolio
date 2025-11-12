import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  layer: number;
  isBright: boolean;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const scrollYRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = [
      "rgba(0, 229, 255,",  // cyan
      "rgba(168, 85, 247,", // purple
      "rgba(96, 165, 250,", // blue
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const count = Math.floor((window.innerWidth * window.innerHeight) / 5000);

      for (let i = 0; i < count; i++) {
        const layer = Math.random();
        const isBright = Math.random() < 0.15; // 15% bright particles
        const baseColor = colors[Math.floor(Math.random() * colors.length)];

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: isBright ? Math.random() * 2 + 0.8 : Math.random() * 2.2 + 0.8,
          opacity: isBright ? Math.random() * 0.7 + 0.6 : Math.random() * 0.6 + 0.3,
          color: baseColor,
          layer,
          isBright,
        });
      }
      particlesRef.current = particles;
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    const animate = () => {
      if (!ctx) return;
      timeRef.current += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollY = scrollYRef.current;
      const particles = particlesRef.current;

      particles.forEach((p) => {
        const yOffset = (scrollY * p.layer * 0.3) % canvas.height;
        const y = (p.y - yOffset + canvas.height) % canvas.height;
        const driftX = Math.sin(timeRef.current + p.x * 0.01) * 1.2;
        const twinkle = p.isBright
          ? 0.8 + Math.sin(timeRef.current * 2 + p.x * 0.5) * 0.4
          : 0.7 + Math.sin(timeRef.current * 2 + p.x * 0.5) * 0.2;

        const glow = ctx.createRadialGradient(
          p.x + driftX,
          y,
          0,
          p.x + driftX,
          y,
          p.isBright ? p.size * 6 : p.size * 5
        );

        // Brighter stars have stronger gradient and opacity
        glow.addColorStop(0, `${p.color}${p.opacity * twinkle})`);
        glow.addColorStop(
          0.3,
          `${p.color}${(p.opacity * (p.isBright ? 0.6 : 0.4)) * twinkle})`
        );
        glow.addColorStop(1, `${p.color}0)`);

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x + driftX, y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Constellation lines
      const maxDistance = 140;
      ctx.lineWidth = 0.6;
      particles.forEach((a, i) => {
        const yA = (a.y - (scrollY * a.layer * 0.3)) % canvas.height;
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const yB = (b.y - (scrollY * b.layer * 0.3)) % canvas.height;

          const dx = a.x - b.x;
          const dy = yA - yB;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = 1 - dist / maxDistance;
            const grad = ctx.createLinearGradient(a.x, yA, b.x, yB);
            grad.addColorStop(0, `${a.color}${opacity * 0.3})`);
            grad.addColorStop(1, `${b.color}${opacity * 0.3})`);

            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(a.x, yA);
            ctx.lineTo(b.x, yB);
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll, { passive: true });
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
};

export default AnimatedBackground;
