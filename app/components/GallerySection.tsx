import React, { useEffect, useRef, useState } from 'react';

const IMAGES = [
  '/elder-silvia.png',
  '/silvia-whatsappneckalce.png',
  '/silvia-wearable.png',
  '/silvia-wearable-back.png',
];

const GALLERY_TEXT =
  'Siempre tendrás acceso a tu IA personal a través de tu dispositivo wearable tipo collar, y también podrás enviar mensajes o realizar llamadas a tu compañero personal mediante WhatsApp cuando lo necesites.';

const positions = [
  { left: '30%', top: '30%', transform: 'translate(-50%, -50%)' }, // 1st image: left of center
  { left: '50%', top: '30%', transform: 'translate(-50%, -50%)' }, // 2nd image: center
  { left: '70%', top: '30%', transform: 'translate(-50%, -50%)' }, // 3rd image: right of center
  { left: '50%', top: '10%', transform: 'translate(-50%, -50%)' }, // 4th image: above center
];

const GallerySection: React.FC = () => {
  const [fades, setFades] = useState(Array(IMAGES.length).fill(0));
  const [fadeText, setFadeText] = useState(0);
  const [fadeOut, setFadeOut] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom < 0 || rect.top > windowHeight) {
        setFades(Array(IMAGES.length).fill(0));
        setFadeText(0);
        setFadeOut(1);
        return;
      }
      const sectionHeight = rect.height;
      const scrolled = windowHeight - Math.max(0, rect.top);
      const fraction = Math.max(0, Math.min(1, scrolled / (sectionHeight + windowHeight)));
      // Each image fades in one by one, and stays visible
      const fadeStep = 0.7 / IMAGES.length; // 70% of scroll for all images, making fade slower
      const newFades = IMAGES.map((_, i) => {
        const start = i * fadeStep;
        const end = start + fadeStep;
        if (fraction < start) return 0;
        if (fraction >= end) return 1;
        // Fade in within this segment
        return (fraction - start) / fadeStep;
      });
      // Ensure all previous images stay fully visible
      for (let j = 0; j < newFades.length; j++) {
        if (fraction >= (j + 1) * fadeStep) newFades[j] = 1;
      }
      setFades(newFades);
      // Fade in text after all images are visible
      setFadeText(fraction < 0.7 ? 0 : fraction < 0.85 ? (fraction - 0.7) / 0.15 : 1);
      // Fade out all: last 15%
      setFadeOut(fraction < 0.85 ? 1 : 1 - (fraction - 0.85) / 0.15);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[600px] flex items-center justify-center bg-black overflow-hidden"
      style={{ opacity: fadeOut, transition: 'opacity 0.7s' }}
    >
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Silvia gallery ${i + 1}`}
          className="absolute max-h-[320px] max-w-[40vw] rounded-xl shadow-lg transition-opacity duration-1000 z-0"
          style={{
            opacity: fades[i],
            ...positions[i],
            zIndex: 1 + i, // ensure stacking order
            ...(positions[i]?.transform ? { transform: positions[i].transform } : {}),
          }}
        />
      ))}
      {/* Descriptive text: center, always on top */}
      <div
        className="absolute left-1/2 top-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center font-semibold drop-shadow-lg transition-opacity duration-700 z-20 bg-black/60 px-6 py-4 rounded-xl"
        style={{ opacity: fadeText }}
      >
        {GALLERY_TEXT}
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-lg">Explora nuestra galería de imágenes que muestran las características de nuestra plataforma.</p>
        <p className="text-xl text-gray-300 mt-4">Nuestra función de IA conversacional en WhatsApp permite a los usuarios mayores inscribirse en beneficios municipales en la comuna de Vitacura en Santiago. En el futuro, planeamos crear un dispositivo portátil para cada miembro mayor de la comuna para mejorar su experiencia.</p>
      </div>
    </div>
  );
};

export default GallerySection;
