function seededRandom(seed: number) {
  const x = Math.sin(seed * 999.7) * 10000;
  return x - Math.floor(x);
}

export function ParticleField({ count = 32 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: (seededRandom(i + 1) * 100).toFixed(3),
    top: (seededRandom(i + 50) * 100).toFixed(3),
    size: (1 + seededRandom(i + 100) * 2.5).toFixed(2),
    duration: (8 + seededRandom(i + 150) * 10).toFixed(2),
    delay: (seededRandom(i + 200) * 8).toFixed(2),
    opacity: (0.2 + seededRandom(i + 250) * 0.4).toFixed(3),
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="animate-float absolute rounded-full bg-white"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
