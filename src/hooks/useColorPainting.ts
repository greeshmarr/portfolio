import { useCallback, useRef, useEffect } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
  saturation: number;
  lightness: number;
  alpha: number;
}

interface MousePosition {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
}

export const useColorPainting = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const isActiveRef = useRef(false);
  const lastTimeRef = useRef(0);
  const paletteIndexRef = useRef(0);
  const lastMouseActivityRef = useRef(0);

  // Exact Toukoum colors - vibrant pastels like in the screenshot
  const allPalettes = [
    // Main vibrant pastel palette from screenshot
    [
      { h: 280, s: 80, l: 75 }, // vibrant purple
      { h: 340, s: 85, l: 80 }, // vibrant pink
      { h: 200, s: 90, l: 70 }, // vibrant blue
      { h: 120, s: 75, l: 80 }, // vibrant green
      { h: 60, s: 85, l: 75 },  // vibrant yellow
      { h: 180, s: 80, l: 75 }, // vibrant cyan
    ],
    // Secondary vibrant palette
    [
      { h: 300, s: 75, l: 78 }, // magenta
      { h: 30, s: 80, l: 82 },  // orange
      { h: 220, s: 85, l: 72 }, // blue
      { h: 140, s: 70, l: 85 }, // lime
      { h: 50, s: 90, l: 80 },  // gold
      { h: 160, s: 75, l: 78 }, // teal
    ],
    // Third vibrant palette
    [
      { h: 320, s: 85, l: 76 }, // rose
      { h: 40, s: 88, l: 78 },  // peach
      { h: 260, s: 80, l: 74 }, // violet
      { h: 80, s: 75, l: 82 },  // chartreuse
      { h: 200, s: 90, l: 76 }, // sky blue
      { h: 350, s: 82, l: 80 }, // coral
    ]
  ];

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const easeOutQuart = (t: number) => {
    return 1 - Math.pow(1 - t, 4);
  };

  const createPoint = (x: number, y: number, vx: number, vy: number) => {
    const now = Date.now() * 0.001;
    
    // Cycle through palettes every 8 seconds for variety
    const currentPalette = allPalettes[Math.floor((Date.now() / 8000)) % allPalettes.length];
    
    const idx = paletteIndexRef.current % currentPalette.length;
    const nextIdx = (idx + 1) % currentPalette.length;
    const blend = (Math.sin(now * 0.8) + 1) * 0.5;

    const c1 = currentPalette[idx];
    const c2 = currentPalette[nextIdx];

    // Smooth color interpolation
    let hue = lerp(c1.h, c2.h, blend);
    if (Math.abs(c2.h - c1.h) > 180) {
      if (c2.h > c1.h) {
        hue = lerp(c1.h + 360, c2.h, blend) % 360;
      } else {
        hue = lerp(c1.h, c2.h + 360, blend) % 360;
      }
    }

    const saturation = lerp(c1.s, c2.s, blend);
    const lightness = lerp(c1.l, c2.l, blend);

    // More frequent palette changes for dynamic colors
    if (Math.random() < 0.12) {
      paletteIndexRef.current = nextIdx;
    }

    return {
      x,
      y,
      vx: vx * 0.6, // Moderate velocity for flowing movement
      vy: vy * 0.6,
      life: 1,
      maxLife: 3000 + Math.random() * 1000, // 3-4 seconds fade time
      size: Math.random() * 37.5 + 30, // Half of existing brush thickness
      hue: hue + (Math.random() - 0.5) * 20, // More hue variation
      saturation: Math.max(60, saturation + (Math.random() - 0.5) * 20),
      lightness: Math.max(60, lightness + (Math.random() - 0.5) * 15),
      alpha: 0.4 + Math.random() * 0.3 // High visibility
    };
  };

  const updatePoints = (deltaTime: number) => {
    const points = pointsRef.current;
    const dt = deltaTime;
    
    for (let i = points.length - 1; i >= 0; i--) {
      const point = points[i];
      
      // Gradual velocity decay for flowing effect
      point.vx *= 0.99;
      point.vy *= 0.99;
      
      // Add swirling motion like in Toukoum
      const age = 1 - point.life;
      const swirl = age * 0.05; // Increased swirl effect
      point.vx += Math.sin(age * 3) * swirl;
      point.vy += Math.cos(age * 3) * swirl;
      
      point.x += point.vx * dt * 0.016;
      point.y += point.vy * dt * 0.016;
      point.life -= dt / point.maxLife;
      
      if (point.life <= 0) {
        points.splice(i, 1);
      }
    }
  };

  const drawPoints = (ctx: CanvasRenderingContext2D) => {
    const points = pointsRef.current;
    
    // Use source-over for vibrant colors
    ctx.globalCompositeOperation = 'source-over';
    
    points.forEach(point => {
      const progress = Math.max(0, point.life);
      const easedProgress = easeOutQuart(progress);
      const alpha = point.alpha * easedProgress;
      const size = point.size * (0.3 + easedProgress * 0.7);
      
      if (size < 8 || alpha < 0.01) return;
      
      // Create large, soft gradients for watercolor effect
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, size * 2.5
      );
      
      const centerAlpha = alpha * 0.8;
      const midAlpha = alpha * 0.4;
      const edgeAlpha = 0;
      
      const centerColor = `hsla(${point.hue}, ${point.saturation}%, ${point.lightness}%, ${centerAlpha})`;
      const midColor = `hsla(${point.hue}, ${point.saturation * 0.9}%, ${point.lightness + 5}%, ${midAlpha})`;
      const edgeColor = `hsla(${point.hue}, ${point.saturation * 0.7}%, ${point.lightness + 10}%, ${edgeAlpha})`;
      
      gradient.addColorStop(0, centerColor);
      gradient.addColorStop(0.3, midColor);
      gradient.addColorStop(1, edgeColor);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const drawTrail = () => {
    const mouse = mouseRef.current;
    if (!isActiveRef.current) return;
    
    const dx = mouse.x - mouse.prevX;
    const dy = mouse.y - mouse.prevY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 1) {
      // Create more points for denser, flowing trails
      const steps = Math.min(Math.ceil(distance / 4), 8);
      for (let i = 0; i < steps; i++) {
        const t = i / steps;
        const x = lerp(mouse.prevX, mouse.x, t);
        const y = lerp(mouse.prevY, mouse.y, t);
        
        // Large organic spread for flowing effect
        const angle = Math.random() * Math.PI * 2;
        const spread = Math.random() * 50;
        const offsetX = Math.cos(angle) * spread;
        const offsetY = Math.sin(angle) * spread;
        
        // Velocity based on mouse movement for natural flow
        const vx = dx * 0.05 + offsetX * 0.1;
        const vy = dy * 0.05 + offsetY * 0.1;
        
        pointsRef.current.push(createPoint(x + offsetX, y + offsetY, vx, vy));
      }
      
      // Keep reasonable number of points
      if (pointsRef.current.length > 200) {
        pointsRef.current.splice(0, pointsRef.current.length - 200);
      }
    }
  };

  const animate = useCallback((currentTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;
    
    // Check if the mouse has been inactive based on its position
    const isMouseMoving = mouseRef.current.x !== mouseRef.current.prevX || mouseRef.current.y !== mouseRef.current.prevY;
    
    if (isMouseMoving) {
        lastMouseActivityRef.current = currentTime;
    }
    
    let backgroundAlpha = 0.005; // Base subtle fade for painting
    
    const timeSinceLastActivity = currentTime - lastMouseActivityRef.current;
    const fadeDelay = 500; // Delay before fade starts
    const fadeDuration = 3000; // Duration of the smooth fade-out
    
    if (timeSinceLastActivity > fadeDelay) {
        const fadeProgress = Math.min(1, (timeSinceLastActivity - fadeDelay) / fadeDuration);
        backgroundAlpha = lerp(0.005, 1, fadeProgress); // Lerp to 1 for a complete fade
    }
    
    ctx.fillStyle = `rgba(255, 255, 255, ${backgroundAlpha})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Clear the canvas completely once the fade is complete
    if (timeSinceLastActivity > fadeDelay + fadeDuration) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    updatePoints(deltaTime);
    drawTrail();
    drawPoints(ctx);
    
    mouseRef.current.prevX = mouseRef.current.x;
    mouseRef.current.prevY = mouseRef.current.y;
    
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const mouse = mouseRef.current;
    
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    
    isActiveRef.current = true;
  }, []);

  const handleMouseEnter = useCallback(() => {
    isActiveRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isActiveRef.current = false;
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    
    resizeCanvas();
    animationRef.current = requestAnimationFrame(animate);
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animate, handleMouseMove, handleMouseEnter, handleMouseLeave, resizeCanvas]);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pointsRef.current = [];
  }, []);

  return { canvasRef, clearCanvas };
};
