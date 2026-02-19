import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Building2, HardHat, Users, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Hero entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.9 }
      );

      tl.fromTo(
        taglineRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.4'
      );

      tl.fromTo(
        headlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.3'
      );

      tl.fromTo(
        bodyRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

      tl.fromTo(
        ctaRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll animations for sections
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.animate-section').forEach((section) => {
        gsap.fromTo(
          section,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const teaserBlocks = [
    {
      icon: Building2,
      title: 'Tjenester',
      description: 'Totalentreprenør med struktur. Vi koordinerer alle fag fra tidligfase til overtakelse.',
      link: '/tjenester',
      image: '/section2_oversikt.jpg',
    },
    {
      icon: HardHat,
      title: 'Prosjekter',
      description: 'Kvalitet i alle ledd. Se våre pågående og gjennomførte byggeprosjekter.',
      link: '/prosjekter',
      image: '/section3_varer.jpg',
    },
    {
      icon: Users,
      title: 'Om oss',
      description: '100 % eid av ansatte. Lær mer om vår historie, verdier og team.',
      link: '/om-oss',
      image: '/section5_tettpa.jpg',
    },
    {
      icon: Shield,
      title: 'KS/HMS',
      description: 'Sikkerhet og kvalitet i fokus. Våre rutiner for trygg prosjektgjennomføring.',
      link: '/ks-hms',
      image: '/section4_trygghet.jpg',
    },
  ];

  return (
    <div className="bg-[#1B1C20]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
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

        <div className="relative w-full px-[6vw] py-20">
          {/* Center Logo + Tagline */}
          <div className="flex flex-col items-center text-center mb-16">
            <svg
              ref={logoRef}
              viewBox="0 0 200 200"
              className="w-[clamp(140px,18vw,260px)] h-auto mb-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#F6F5F2">
                <polygon points="40,50 160,50 150,35 50,35" />
                <polygon points="35,75 165,75 155,60 45,60" />
                <polygon points="30,100 170,100 160,85 40,85" />
                <polygon points="25,125 175,125 165,110 35,110" />
                <polygon points="20,150 180,150 170,135 30,135" />
                <polygon points="15,175 185,175 175,160 25,160" />
              </g>
              <polygon points="100,20 115,45 85,45" fill="#D96C4A" />
            </svg>

            <p
              ref={taglineRef}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-[rgba(246,245,242,0.72)]"
            >
              Totalentreprenør i Oslo
            </p>
          </div>

          {/* Headline + Body + CTAs */}
          <div className="max-w-3xl mx-auto text-center">
            <h1
              ref={headlineRef}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6F5F2] mb-6 leading-tight"
            >
              Bygg med oversikt.
            </h1>
            <p
              ref={bodyRef}
              className="font-body text-base md:text-lg text-[rgba(246,245,242,0.72)] leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Varden er en robust og fremoverlent totalentreprenør innen rehabiliterings- 
              og nybyggsmarkedet i Oslo og omegn. Vi leverer tidsriktige løsninger med 
              tydelig kommunikasjon, god kvalitet og forutsigbare kostnader.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
                Kontakt oss
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/prosjekter"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[rgba(246,245,242,0.3)] rounded-full text-[#F6F5F2] font-mono text-sm uppercase tracking-wider hover:bg-[rgba(246,245,242,0.05)] transition-colors"
              >
                Se prosjekter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Blocks Section */}
      <section className="py-20 md:py-32 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-section">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
              Hva vi tilbyr
            </h2>
            <div className="accent-rule mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {teaserBlocks.map((block, index) => (
              <div
                key={block.title}
                className="animate-section group relative overflow-hidden rounded-lg bg-[rgba(246,245,242,0.03)] border border-[rgba(246,245,242,0.08)] hover:border-[rgba(246,245,242,0.15)] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20] via-[#1B1C20]/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-10 min-h-[280px] flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-full bg-[#D96C4A]/10 flex items-center justify-center mb-4">
                    <block.icon size={22} className="text-[#D96C4A]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-[#F6F5F2] mb-2">
                    {block.title}
                  </h3>
                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)] mb-4 max-w-md">
                    {block.description}
                  </p>
                  <Link
                    to={block.link}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#D96C4A] hover:text-[#F6F5F2] transition-colors group/link"
                  >
                    Les mer
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-[6vw] bg-[rgba(246,245,242,0.02)]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2008', label: 'Etablert år' },
              { value: '100%', label: 'Ansatteid' },
              { value: '50+', label: 'Gjennomførte prosjekter' },
              { value: '0', label: 'Alvorlige ulykker' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-[#D96C4A] mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-[6vw]">
        <div className="max-w-4xl mx-auto text-center animate-section">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
            La oss diskutere ditt prosjekt
          </h2>
          <p className="font-body text-base text-[rgba(246,245,242,0.72)] mb-8 max-w-2xl mx-auto">
            Vi er klare for å hjelpe deg med alt fra rehabilitering til nybygg. 
            Ta kontakt for en uforpliktende samtale.
          </p>
          <Link to="/kontakt" className="btn-primary inline-flex items-center gap-2">
            Kontakt oss
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
