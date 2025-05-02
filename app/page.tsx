'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [error, setError] = useState<string | null>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const featuresRef = useRef(null);
  const demoRef = useRef(null);

  useEffect(() => {
    // Title fade out
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top top",
        end: "+=200",
        scrub: 1,
        pin: false
      },
      opacity: 0
    });

    // Subtitle fade out
    gsap.to(subtitleRef.current, {
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top top",
        end: "+=200",
        scrub: 1,
        pin: false
      },
      opacity: 0
    });

    // Features section fade in/out
    gsap.fromTo(featuresRef.current, 
      {
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false
        },
        opacity: 1
      }
    );

    // Demo section fade in/out
    gsap.fromTo(demoRef.current, 
      {
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: demoRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false
        },
        opacity: 1
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      {error && (
        <div className="fixed inset-0 flex items-center justify-center text-white">
          Error: {error}
        </div>
      )}
      
      {/* Fixed background */}
      <div className="fixed inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/claritystream-l0Tc5m6BpsE7pgU7PIBYfK5T/"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 'none' }}
          onError={() => setError('Failed to load Spline scene')}
        />
      </div>
      
      {/* Scrollable content */}
      <div className="relative z-50">
        {/* Hero section with fading title */}
        <div className="min-h-screen flex flex-col items-center">
          <div className="text-center mt-20 fixed">
            <h1 ref={titleRef} className="text-6xl md:text-7xl font-bold mb-4 text-white">
              Silvia
            </h1>
            <p ref={subtitleRef} className="text-xl md:text-2xl max-w-2xl text-white">
              Tu asistente de IA para el desarrollo personal y profesional
            </p>
          </div>
        </div>

        {/* Features section */}
        <div ref={featuresRef} className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-white space-y-8">
            <h2 className="text-4xl font-bold text-center mb-8">
              Beneficios y Características
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Asistencia Personalizada</h3>
                <p className="text-lg">Recibe apoyo adaptado a tus necesidades específicas y objetivos personales.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Desarrollo Profesional</h3>
                <p className="text-lg">Mejora tus habilidades y avanza en tu carrera con orientación experta.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Aprendizaje Continuo</h3>
                <p className="text-lg">Accede a recursos y conocimientos actualizados en cualquier momento.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Soporte 24/7</h3>
                <p className="text-lg">Asistencia disponible cuando la necesites, sin límites de horario.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo section */}
        <div ref={demoRef} className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-4xl font-bold text-center mb-8 text-white">
                Demo de Conversación
              </h2>
              <div className="bg-black/50 rounded-lg p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-white">S</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 max-w-[80%]">
                    <p className="text-white">Hola, soy Silvia. ¿En qué puedo ayudarte hoy?</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 justify-end">
                  <div className="bg-white/10 rounded-lg p-4 max-w-[80%]">
                    <p className="text-white">Me gustaría aprender más sobre desarrollo personal</p>
                  </div>
                  <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-white">U</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-white">S</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 max-w-[80%]">
                    <p className="text-white">¡Claro! Podemos trabajar en diferentes áreas como gestión del tiempo, desarrollo de hábitos positivos, y mejora de la productividad. ¿Por cuál te gustaría comenzar?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 