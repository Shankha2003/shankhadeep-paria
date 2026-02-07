
import React, { useEffect, useRef } from 'react';

const GridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    const ACCENT_COLOR = '#FEB05D'; // Warm Orange from theme
    const STAR_COUNT = 150;
    const SHOOTING_STAR_CHANCE = 0.015; // Probability per frame

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.opacity = Math.random();
        this.twinkleSpeed = 0.01 + Math.random() * 0.02;
      }

      draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        this.opacity += this.twinkleSpeed;
        if (this.opacity > 1 || this.opacity < 0.2) {
          this.twinkleSpeed = -this.twinkleSpeed;
        }

        const baseColor = isDark ? 255 : 43; // White in dark, Charcoal in light
        ctx.fillStyle = `rgba(${baseColor}, ${baseColor}, ${baseColor}, ${this.opacity * 0.3})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;

      constructor(width: number) {
        this.reset(width);
      }

      reset(width: number) {
        this.x = Math.random() * width;
        this.y = -50;
        this.length = 80 + Math.random() * 150;
        this.speed = 10 + Math.random() * 15;
        this.opacity = 1;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2; // roughly 45 degrees
      }

      update(width: number, height: number) {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= 0.015;

        if (this.opacity <= 0 || this.x > width || this.y > height) {
          return false; // mark for removal
        }
        return true;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        const gradient = ctx.createLinearGradient(0, 0, -this.length, 0);
        gradient.addColorStop(0, `${ACCENT_COLOR}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'rgba(254, 176, 93, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-this.length, 0);
        ctx.stroke();
        ctx.restore();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: STAR_COUNT }, () => new Star(canvas.width, canvas.height));
      shootingStars = [];
    };

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw static/twinkling stars
      stars.forEach(star => star.draw(ctx, isDark));

      // Randomly spawn shooting stars
      if (Math.random() < SHOOTING_STAR_CHANCE && shootingStars.length < 3) {
        shootingStars.push(new ShootingStar(canvas.width));
      }

      // Update and draw shooting stars
      shootingStars = shootingStars.filter(star => {
        const active = star.update(canvas.width, canvas.height);
        if (active) star.draw(ctx);
        return active;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-100"
    />
  );
};

export default GridBackground;
