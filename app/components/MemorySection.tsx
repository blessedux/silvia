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
      className="min-h-screen flex items-center justify-center bg-black text-white p-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Roadmap</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Phase 1: Conversational AI</h3>
            <p className="text-lg">
              Launch a conversational AI that allows elderly users to sign up for municipal benefits in the Vitacura comuna in Santiago. This AI will also gather data and communicate with elderly users.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Phase 2: Memory Repository</h3>
            <p className="text-lg">
              Develop a memory repository to store and analyze data collected from interactions with elderly users, enabling future digital clone creation.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Phase 3: Enhanced Communication</h3>
            <p className="text-lg">
              Improve communication tools and features to better serve the needs of elderly users, ensuring seamless interaction and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection; 