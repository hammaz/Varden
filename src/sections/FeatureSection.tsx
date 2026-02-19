import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeatureSectionProps {
  id: string;
  headline: string;
  captionHeadline: string;
  body: string;
  cta: string;
  ctaLink: string;
  image: string;
  zIndex: number;
}

const FeatureSection = ({
  id,
  headline,
  captionHeadline,
  body,
  cta,
  image,
  zIndex,
}: FeatureSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

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
        },
      });

      // ENTRANCE (0%–30%)
      // Image slides in from right
      scrollTl.fromTo(
        imageRef.current,
        { x: '50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      // Headline slides in from left
      scrollTl.fromTo(
        headlineRef.current,
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      // Caption slides up
      scrollTl.fromTo(
        captionRef.current,
        { y: '30vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      // CTA slides up
      scrollTl.fromTo(
        ctaRef.current,
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );

      // SETTLE (30%–70%): Hold positions

      // EXIT (70%–100%)
      // Image exits to left
      scrollTl.fromTo(
        imageRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      // Headline exits to left
      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      // Caption exits down
      scrollTl.fromTo(
        captionRef.current,
        { y: 0, opacity: 1 },
        { y: '12vh', opacity: 0, ease: 'power2.in' },
        0.74
      );

      // CTA exits down
      scrollTl.fromTo(
        ctaRef.current,
        { y: 0, opacity: 1 },
        { y: '8vh', opacity: 0, ease: 'power2.in' },
        0.76
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className="section-pinned bg-[#1B1C20]"
      style={{ zIndex }}
    >
      {/* Right Image Panel */}
      <div
        ref={imageRef}
        className="absolute right-0 top-0 w-full md:w-[46vw] h-full"
      >
        <img
          src={image}
          alt={headline}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20] via-transparent to-transparent md:hidden" />
      </div>

      {/* Left Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-[6vw] md:pr-0">
        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(44px,5.2vw,84px)] font-bold text-[#F6F5F2] uppercase tracking-tight leading-[0.95] max-w-[90vw] md:max-w-[44vw] mt-[12vh] md:mt-[16vh]"
        >
          {headline}
        </h2>

        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-[4vh]">
          {/* Caption Block */}
          <div ref={captionRef} className="max-w-[500px] md:max-w-[34vw]">
            <div className="accent-rule mb-4" />
            <h3 className="font-display text-xl md:text-2xl font-semibold text-[#F6F5F2] mb-3">
              {captionHeadline}
            </h3>
            <p className="font-body text-sm md:text-base text-[rgba(246,245,242,0.72)] leading-relaxed">
              {body}
            </p>
          </div>

          {/* CTA Button */}
          <button
            ref={ctaRef}
            onClick={scrollToContact}
            className="btn-primary self-start md:self-auto"
          >
            {cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
