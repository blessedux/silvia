import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RoadmapSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center bg-black text-white p-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-3/5">
          <img 
            src="/roadmap.png" 
            alt="Roadmap" 
            className="max-w-[570px] w-full h-auto rounded-2xl shadow-lg border border-gray-700" 
          />
        </div>
        <div className="w-full md:w-2/5 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Transformando la Vida de Nuestros Mayores</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Con nuestra plataforma, miles de adultos mayores en la comuna de Vitacura podrán acceder a beneficios municipales de forma sencilla, mantener conversaciones significativas con una IA personalizada, y recibir el apoyo que necesitan. Este es solo el comienzo de una revolución en el cuidado y acompañamiento de nuestros mayores, donde la tecnología se convierte en un puente hacia una vida más plena y conectada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;