import React, { useEffect, useRef, useState } from 'react';

const PARAGRAPH = `Silvia es un compañero digital diseñado para brindar compañía, conversación y asistencia a adultos mayores, ayudando a combatir la soledad y facilitando el acceso a recursos, recuerdos y apoyo en todo momento.`;
const SPECIAL_WORDS = ['asistencia', 'acceso', 'recuerdos', 'apoyo'];

const ValuePropSection: React.FC = () => {
  const words = PARAGRAPH.split(' ');
  // Find indices of special words (first occurrence only)
  const specialIndices = words.map((w, i) => SPECIAL_WORDS.includes(w.replace(/\W/g, '')) ? i : -1).filter(i => i !== -1);
  const [highlighted, setHighlighted] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Section is fully out of view
      if (rect.bottom < 0 || rect.top > windowHeight) {
        setHighlighted(0);
        return;
      }
      // Calculate scroll fraction within the section
      const sectionHeight = rect.height;
      const visible = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
      const scrolled = windowHeight - Math.max(0, rect.top);
      const fraction = Math.max(0, Math.min(1, scrolled / (sectionHeight + windowHeight)));
      setHighlighted(Math.floor(fraction * specialIndices.length) + (fraction === 1 ? 0 : 0));
    }
    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial
    return () => window.removeEventListener('scroll', onScroll);
  }, [specialIndices.length]);

  return (
    <div ref={sectionRef} className="relative max-w-2xl mx-auto text-white text-center text-xl pointer-events-auto flex items-center justify-center min-h-[400px]">
      {/* Background image */}
      <img 
        src="/silvia-ai.png" 
        alt="Silvia AI" 
        className="absolute inset-0 w-full h-full object-contain opacity-30 z-0 pointer-events-none select-none" 
        style={{ maxHeight: 350, margin: '0 auto', transform: 'translateY(-150px)' }}
      />
      {/* Foreground text */}
      <div className="relative z-10 w-full">
        <p className="text-xl leading-relaxed text-center break-words">
          {words.map((word, i) => {
            const clean = word.replace(/\W/g, '');
            const specialIdx = specialIndices.indexOf(i);
            const isSpecial = specialIdx !== -1;
            const isHighlighted = isSpecial && specialIdx < highlighted;
            return (
              <span
                key={i}
                className={
                  isHighlighted
                    ? 'font-extrabold text-white transition-colors duration-300'
                    : 'text-gray-400 transition-colors duration-300'
                }
                style={{ display: 'inline' }}
              >
                {word}{i < words.length - 1 ? ' ' : ''}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ValuePropSection; 