'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiChip, HiUserGroup, HiBookOpen, HiPlusCircle } from 'react-icons/hi';
import HeroSection from './components/HeroSection';
import ValuePropSection from './components/ValuePropSection';
import BenefitsSection from './components/BenefitsSection';
import GallerySection from './components/GallerySection';
import RoadmapSection from './components/RoadmapSection';
import DemoSection from './components/DemoSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [error, setError] = useState<string | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef(null);
  const demoRef = useRef(null);
  const roadmapRef = useRef(null);
  const valuePropRef = useRef(null);
  const heroTriggerRef = useRef(null);
  const valuePropTriggerRef = useRef(null);
  const featuresTriggerRef = useRef(null);
  const galleryTriggerRef = useRef(null);
  const roadmapTriggerRef = useRef(null);
  const demoTriggerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('hero');
  const contentRef = useRef(null);

  useEffect(() => {
    // Clean up previous triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Hero section: visible at the top
    ScrollTrigger.create({
      trigger: heroTriggerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveSection('hero'),
      onEnterBack: () => setActiveSection('hero'),
    });

    // Value prop section
    ScrollTrigger.create({
      trigger: valuePropTriggerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveSection('valueprop'),
      onEnterBack: () => setActiveSection('valueprop'),
    });

    // Benefits section: after hero
    ScrollTrigger.create({
      trigger: featuresTriggerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveSection('features'),
      onEnterBack: () => setActiveSection('features'),
    });

    // Gallery section: after benefits
    ScrollTrigger.create({
      trigger: galleryTriggerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveSection('gallery'),
      onEnterBack: () => setActiveSection('gallery'),
    });

    // Memory repository section
    ScrollTrigger.create({
      trigger: roadmapTriggerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveSection('roadmap'),
      onEnterBack: () => setActiveSection('roadmap'),
    });

    // Demo section: after benefits
    ScrollTrigger.create({
      trigger: demoTriggerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveSection('demo'),
      onEnterBack: () => setActiveSection('demo'),
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [activeSection]);

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
        {/* Invisible scroll triggers for each section */}
        <div className="min-h-screen" ref={heroTriggerRef}></div>
        <div className="min-h-screen" ref={valuePropTriggerRef}></div>
        <div className="min-h-screen" ref={featuresTriggerRef}></div>
        <div className="min-h-screen" ref={galleryTriggerRef}></div>
        <div className="min-h-screen" ref={roadmapTriggerRef}></div>
        <div className="min-h-screen" ref={demoTriggerRef}></div>

        {/* Single fixed, centered container for the active section */}
        <div ref={contentRef} className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          {activeSection === 'hero' && (
            <HeroSection titleRef={titleRef} subtitleRef={subtitleRef} />
          )}
          {activeSection === 'valueprop' && <ValuePropSection />}
          {activeSection === 'features' && <BenefitsSection />}
          {activeSection === 'gallery' && <GallerySection />}
          {activeSection === 'roadmap' && <RoadmapSection />}
          {activeSection === 'demo' && <DemoSection />}
        </div>

        {/* Mobile scrollable content */}
        <div className="md:hidden">
          <div className="min-h-screen flex items-center justify-center">
            <HeroSection titleRef={titleRef} subtitleRef={subtitleRef} />
          </div>
          <div className="min-h-screen flex items-center justify-center">
            <ValuePropSection />
          </div>
          <div className="min-h-screen flex items-center justify-center">
            <BenefitsSection />
          </div>
          <div className="min-h-screen flex items-center justify-center">
            <GallerySection />
          </div>
          <div className="min-h-screen flex items-center justify-center">
            <RoadmapSection />
          </div>
          <div className="min-h-screen flex items-center justify-center">
            <DemoSection />
          </div>
        </div>
      </div>
    </div>
  );
} 