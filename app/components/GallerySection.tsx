import React, { useEffect, useRef, useState } from 'react';

const IMAGES = [
  '/silvia.png',
  '/elder-silvia.png',
  '/silvia-wearable.png',
  '/silvia-wearable-back.png',
  '/silvia-explainer.png',
  '/silvia-ai.png',
];

const GallerySection: React.FC = () => {
  const [fade1, setFade1] = useState(0);
  const [fade2, setFade2] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom < 0 || rect.top > windowHeight) {
        setFade1(0);
        setFade2(0);
        return;
      }
      const sectionHeight = rect.height;
      const scrolled = windowHeight - Math.max(0, rect.top);
      const fraction = Math.max(0, Math.min(1, scrolled / (sectionHeight + windowHeight)));
      // Fade in first image from 0 to 1 in the first 30% of scroll
      setFade1(fraction < 0.3 ? fraction / 0.3 : 1);
      // Fade in second image from 30% to 60% of scroll
      setFade2(fraction < 0.3 ? 0 : fraction < 0.6 ? (fraction - 0.3) / 0.3 : 1);
      // Both remain visible as you scroll into the next section
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-[500px] flex items-center justify-center bg-black overflow-hidden">
      {/* First image: top left */}
      <img
        src={IMAGES[0]}
        alt="Silvia gallery 1"
        className="absolute left-8 top-8 max-h-[300px] max-w-[40vw] rounded-xl shadow-lg transition-opacity duration-700"
        style={{ opacity: fade1 }}
      />
      {/* Second image: bottom right */}
      <img
        src={IMAGES[1]}
        alt="Silvia gallery 2"
        className="absolute right-8 bottom-8 max-h-[300px] max-w-[40vw] rounded-xl shadow-lg transition-opacity duration-700"
        style={{ opacity: fade2 }}
      />
    </div>
  );
};

export default GallerySection;
