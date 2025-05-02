import React from 'react';

type HeroSectionProps = {
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  subtitleRef: React.RefObject<HTMLParagraphElement | null>;
};

const HeroSection: React.FC<HeroSectionProps> = ({ titleRef, subtitleRef }) => (
  <div className="text-center pointer-events-auto">
    <h1 ref={titleRef} className="text-6xl md:text-7xl font-bold mb-4 text-white">
      Silvia
    </h1>
    <p ref={subtitleRef} className="text-xl md:text-2xl max-w-2xl text-white">
      Compañeros de IA para adultos mayores: <br />compañía, conversación y apoyo en todo momento
    </p>
  </div>
);

export default HeroSection; 