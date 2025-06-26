
import React, { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speed: number;
  rotation: number;
}

const ConfettiEffect = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#fd79a8'];

  useEffect(() => {
    const createConfetti = () => {
      const newConfetti: Confetti[] = [];
      for (let i = 0; i < 50; i++) {
        newConfetti.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -10,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 3,
          speed: Math.random() * 3 + 1,
          rotation: Math.random() * 360,
        });
      }
      setConfetti(newConfetti);
    };

    createConfetti();

    const animateConfetti = () => {
      setConfetti(prev => 
        prev.map(piece => ({
          ...piece,
          y: piece.y + piece.speed,
          rotation: piece.rotation + 2,
        })).filter(piece => piece.y < window.innerHeight + 10)
      );
    };

    const interval = setInterval(animateConfetti, 50);
    const createInterval = setInterval(createConfetti, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(createInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute animate-pulse"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: '2px',
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
