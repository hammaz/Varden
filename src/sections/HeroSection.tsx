import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Logo mark animation
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.9 }
      );

      // Mono tagline animation
      tl.fromTo(
        taglineRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.4'
      );

      // Headline animation
      tl.fromTo(
        headlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.3'
      );

      // Body animation
      tl.fromTo(
        bodyRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

      // CTA animation
      tl.fromTo(
        ctaRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([logoRef.current, taglineRef.current, headlineRef.current, bodyRef.current, ctaRef.current], {
              opacity: 1,
              x: 0,
              y: 0,
            });
          },
        },
      });

      // ENTRANCE (0%–30%): Hold - elements already visible from load animation
      // SETTLE (30%–70%): Hold
      // EXIT (70%–100%): Animate out

      // Logo + tagline exit
      scrollTl.fromTo(
        [logoRef.current, taglineRef.current],
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Headline exit
      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      // Body exit
      scrollTl.fromTo(
        bodyRef.current,
        { y: 0, opacity: 1 },
        { y: '12vh', opacity: 0, ease: 'power2.in' },
        0.74
      );

      // CTA exit
      scrollTl.fromTo(
        ctaRef.current,
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.76
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('section2');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="section1"
      className="section-pinned bg-[#1B1C20] flex items-center justify-center z-10"
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(246,245,242,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(246,245,242,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-[6vw]">
        {/* Center Logo + Tagline */}
        <div className="flex flex-col items-center text-center">
          {/* Varden Logo Mark */}
          <svg
            ref={logoRef}
            viewBox="0 0 200 200"
            className="w-[clamp(180px,22vw,320px)] h-auto mb-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Stylized V mark with horizontal bars */}
            <g fill="#F6F5F2">
              {/* Top bar */}
              <polygon points="40,50 160,50 150,35 50,35" />
              {/* Second bar */}
              <polygon points="35,75 165,75 155,60 45,60" />
              {/* Third bar */}
              <polygon points="30,100 170,100 160,85 40,85" />
              {/* Fourth bar */}
              <polygon points="25,125 175,125 165,110 35,110" />
              {/* Fifth bar */}
              <polygon points="20,150 180,150 170,135 30,135" />
              {/* Bottom bar - full width */}
              <polygon points="15,175 185,175 175,160 25,160" />
            </g>
            {/* Accent triangle */}
            <polygon points="100,20 115,45 85,45" fill="#D96C4A" />
          </svg>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-[rgba(246,245,242,0.72)] mb-12"
          >
            Totalentreprenør i Oslo
          </p>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-[8vh] left-[6vw] right-[6vw] flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left: Headline + Body */}
          <div className="max-w-[500px]">
            <h1
              ref={headlineRef}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F6F5F2] mb-4 leading-tight"
            >
              Bygg med oversikt.
            </h1>
            <p
              ref={bodyRef}
              className="font-body text-sm md:text-base text-[rgba(246,245,242,0.72)] leading-relaxed"
            >
              Varden er en robust totalentreprenør innen rehabilitering og nybygg. 
              Vi leverer tidsriktige løsninger med tydelig kommunikasjon, god kvalitet 
              og forutsigbare kostnader.
            </p>
          </div>

          {/* Right: CTA */}
          <button ref={ctaRef} onClick={scrollToNext} className="btn-primary self-start md:self-auto">
            Se tjenester
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[rgba(246,245,242,0.5)]">
            Scroll
          </span>
          <ChevronDown size={16} className="text-[rgba(246,245,242,0.5)] animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
