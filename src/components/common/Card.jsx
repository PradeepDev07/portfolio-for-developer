import React, { useRef, useState } from 'react';

const Card = ({ title, description, badge, children }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-2xl bg-purple-linear p-[1px] shadow-2xl transition-transform hover:scale-[1.01]"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />

      {/* Glass layer */}
      <div className="relative h-full rounded-2xl bg-zinc-950/90 backdrop-blur-xl p-6 border border-white/10 flex flex-col overflow-hidden">
        
        {/* Inner Spotlight for depth */}
        <div
            className="pointer-events-none absolute -inset-px transition duration-300"
            style={{
                opacity,
                background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.05), transparent 40%)`,
            }}
        />

        {/* Badge */}
        {badge && (
          <span className="w-fit inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-purple-300 z-10">
            {badge}
          </span>
        )}

        {/* Title */}
        <h3 className="mt-4 text-xl font-semibold text-white z-10">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-zinc-400 flex-grow z-10">
          {description}
        </p>

        {/* Action / Children */}
        <div className="mt-6 z-10">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
