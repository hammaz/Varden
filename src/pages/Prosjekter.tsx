import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  type: string;
  segment: string;
  status: string;
  image: string;
  year?: string;
}

const Prosjekter = () => {
  const [filter, setFilter] = useState<'alle' | 'pagaende' | 'ferdige'>('alle');

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

  const ongoingProjects: Project[] = [
    {
      id: 1,
      title: 'Kirkegata 15',
      location: 'Kirkegata 15, 0153 Oslo',
      description: 'Modernisering og renovering av deler av bygget (ca. 6 000m²). Ombygging til moderne, fleksibelt kontorlokale.',
      type: 'Rehabilitering',
      segment: 'Kontor',
      status: 'pagaende',
      image: '/section2_oversikt.jpg',
    },
    {
      id: 2,
      title: 'Kongens gate 12',
      location: 'Kongens gate 12, 0153 Oslo',
      description: 'Bygningen skal ombygges/rehabiliteres til et moderne, fleksibelt kontorbygg for TONO. Plan U, 1, 6 og 7.',
      type: 'Rehabilitering',
      segment: 'Kontor',
      status: 'pagaende',
      image: '/section3_varer.jpg',
    },
    {
      id: 3,
      title: 'Nedre Ullevål 9',
      location: 'Nedre Ullevål 9, 0850 Oslo',
      description: 'Ombygging av 2 etasjer i et eksisterende bygg. Arealene har tidligere vært brukt til kontor og møterom.',
      type: 'Ombygging',
      segment: 'Kontor',
      status: 'pagaende',
      image: '/section4_trygghet.jpg',
    },
    {
      id: 4,
      title: 'Egerkvartalet – Ny ventilasjon og kjøling',
      location: 'Karl Johans gate, Oslo',
      description: 'Utskifting av ventilasjonsaggregater på tak og i bygg, ny kjølesentral samt bygging av nye tekniske rom.',
      type: 'Teknisk oppgradering',
      segment: 'Næringsbygg',
      status: 'pagaende',
      image: '/section6_forutsigbarhet.jpg',
    },
    {
      id: 5,
      title: 'Rehabilitering av Ekeberghallene',
      location: 'Kongshavnveien 28, 0193 Oslo',
      description: 'Rehabilitering av et lageranlegg inne i fjellet under Ekeberg, bestående av 48 lagerhaller og kjørebaner.',
      type: 'Rehabilitering',
      segment: 'Lager/logistikk',
      status: 'pagaende',
      image: '/section7_byggervidere.jpg',
    },
  ];

  const completedProjects: Project[] = [
    {
      id: 6,
      title: 'Nordstrand ungdomsskole',
      location: 'Nordstrand, Oslo',
      description: 'Utvidelse av Nordstrand ungdomsskole med nytt bygg med høye miljøambisjoner. Overlevert et halvt år før tiden.',
      type: 'Nybygg',
      segment: 'Skole',
      year: '2025',
      status: 'ferdig',
      image: '/section2_oversikt.jpg',
    },
    {
      id: 7,
      title: 'Tollbodene',
      location: 'Oslo sentrum',
      description: 'Totalrehabilitering av Tollbodene i Oslo sentrum. Historisk bygg med moderne funksjonalitet.',
      type: 'Rehabilitering',
      segment: 'Kontor/kultur',
      year: '2024',
      status: 'ferdig',
      image: '/section3_varer.jpg',
    },
    {
      id: 8,
      title: 'Skur 38',
      location: 'Oslo Havn',
      description: 'Rehabilitering av Skur 38 utført i samspill med Oslo Havn. Kulturminne med nytt liv.',
      type: 'Rehabilitering',
      segment: 'Kulturminne',
      year: '2024',
      status: 'ferdig',
      image: '/section5_tettpa.jpg',
    },
    {
      id: 9,
      title: 'Kilden barnehage',
      location: 'Oslo',
      description: 'Riving og sanering av eksisterende bygningsmasse og nybygg av barnehage prosjektert som plusshus.',
      type: 'Nybygg',
      segment: 'Barnehage',
      year: '2023',
      status: 'ferdig',
      image: '/section4_trygghet.jpg',
    },
    {
      id: 10,
      title: 'Glynitveien 33',
      location: 'Oslo',
      description: 'Rehabilitering og leietakertilpasninger for leietager A2G. Ombruksprosjekt med positiv omtale på Bygg.no.',
      type: 'Rehabilitering',
      segment: 'Kontor',
      year: '2024',
      status: 'ferdig',
      image: '/section6_forutsigbarhet.jpg',
    },
    {
      id: 11,
      title: 'Akersgata 45 / Backegården',
      location: 'Oslo sentrum',
      description: 'Totalrehabilitering av 2 etasjer i Backegården for å sette i stand lokaler til Riksmekleren.',
      type: 'Rehabilitering',
      segment: 'Kontor',
      year: '2023',
      status: 'ferdig',
      image: '/section7_byggervidere.jpg',
    },
    {
      id: 12,
      title: 'Akerselva Atrium',
      location: 'Oslo',
      description: 'Rehabilitering i form av omfattende oppgraderinger og leietagertilpasninger.',
      type: 'Rehabilitering',
      segment: 'Kontor',
      year: '2023',
      status: 'ferdig',
      image: '/section2_oversikt.jpg',
    },
    {
      id: 13,
      title: 'Moldegata 21-23',
      location: 'Oslo',
      description: 'Rehabilitering av 2 etasjer i Bjølsen Studentby.',
      type: 'Rehabilitering',
      segment: 'Studentbolig',
      year: '2023',
      status: 'ferdig',
      image: '/section3_varer.jpg',
    },
    {
      id: 14,
      title: 'Egerkvartalet – Ombygging Urmaker Bjerke',
      location: 'Karl Johans gate, Oslo',
      description: 'Ombygging og delvis bruksendring for ny leietaker, med nye kontorer og klargjøring for butikk.',
      type: 'Ombygging',
      segment: 'Kontor/handelslokale',
      year: '2023',
      status: 'ferdig',
      image: '/section4_trygghet.jpg',
    },
    {
      id: 15,
      title: 'Oslo Skatehall',
      location: 'Oslo',
      description: 'Bygging av Oslo Skatehall – et moderne anlegg for skateboard og rulleskøyter.',
      type: 'Nybygg',
      segment: 'Idrettsanlegg',
      year: '2022',
      status: 'ferdig',
      image: '/section5_tettpa.jpg',
    },
  ];

  const allProjects: Project[] = [...ongoingProjects, ...completedProjects];

  const filteredProjects = filter === 'alle' 
    ? allProjects 
    : filter === 'pagaende' 
      ? ongoingProjects 
      : completedProjects;

  return (
    <div className="bg-[#1B1C20] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section text-center max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#D96C4A] mb-4">
              Våre prosjekter
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6F5F2] mb-6 leading-tight">
              Prosjekter som varer
            </h1>
            <p className="font-body text-base md:text-lg text-[rgba(246,245,242,0.72)] leading-relaxed">
              Vi bygger for folk, ikke bare for tegninger. Det betyr solide materialer, 
              godt håndverk og en overlevering som holder i mange år.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-[6vw] border-y border-[rgba(246,245,242,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section flex flex-wrap items-center justify-center gap-4">
            <Filter size={18} className="text-[rgba(246,245,242,0.5)]" />
            {(['alle', 'pagaende', 'ferdige'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  filter === f
                    ? 'bg-[#D96C4A] text-[#1B1C20]'
                    : 'bg-[rgba(246,245,242,0.05)] text-[rgba(246,245,242,0.72)] hover:bg-[rgba(246,245,242,0.1)]'
                }`}
              >
                {f === 'alle' ? 'Alle prosjekter' : f === 'pagaende' ? 'Pågående' : 'Ferdige'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-section group relative bg-[rgba(246,245,242,0.03)] border border-[rgba(246,245,242,0.08)] rounded-lg overflow-hidden hover:border-[rgba(246,245,242,0.15)] transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20] to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider ${
                      project.status === 'pagaende'
                        ? 'bg-[#D96C4A] text-[#1B1C20]'
                        : 'bg-[rgba(246,245,242,0.15)] text-[#F6F5F2]'
                    }`}>
                      {project.status === 'pagaende' ? 'Pågående' : 'Ferdig'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-[rgba(246,245,242,0.05)] rounded font-mono text-[10px] uppercase tracking-wider text-[rgba(246,245,242,0.6)]">
                      {project.type}
                    </span>
                    <span className="px-2 py-1 bg-[rgba(246,245,242,0.05)] rounded font-mono text-[10px] uppercase tracking-wider text-[rgba(246,245,242,0.6)]">
                      {project.segment}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
                    {project.title}
                  </h3>

                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)] mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-[rgba(246,245,242,0.5)]">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      <span className="font-mono text-[10px]">{project.location}</span>
                    </div>
                    {project.year ? (
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span className="font-mono text-[10px]">{project.year}</span>
                      </div>
                    ) : null}
                  </div>
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
              { value: '50+', label: 'Gjennomførte prosjekter' },
              { value: '15+', label: 'Års erfaring' },
              { value: '100%', label: 'Ansatteid' },
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
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-4xl mx-auto text-center animate-section">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
            Har du et prosjekt i tankene?
          </h2>
          <p className="font-body text-base text-[rgba(246,245,242,0.72)] mb-8 max-w-2xl mx-auto">
            Vi tar på oss oppdrag i alle størrelser. Ta kontakt for en uforpliktende samtale 
            om ditt neste byggeprosjekt.
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

export default Prosjekter;
