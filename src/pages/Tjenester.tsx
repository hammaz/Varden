import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building2, 
  HardHat, 
  ClipboardList, 
  Users, 
  TrendingUp, 
  Shield,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Tjenester = () => {
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

  const services = [
    {
      icon: Building2,
      title: 'Totalentreprenør',
      description: 'Som totalentreprenør tar vi det fulle ansvaret for prosjektet ditt. Fra tidligfase til overtakelse koordinerer vi alle fag, sikrer fremdrift, kvalitet og god dialog med alle parter.',
      features: [
        'Koordinering av alle fag',
        'Prosjektledelse og styringsverktøy',
        'Kvalitetssikring gjennom hele prosessen',
        'Tydelig kommunikasjon og rapportering',
      ],
    },
    {
      icon: HardHat,
      title: 'Rehabilitering',
      description: 'Vi har omfattende erfaring med rehabilitering av eksisterende bygg. Fra mindre oppgraderinger til totalrehabilitering, sørger vi for at bygget får nytt liv med moderne standarder.',
      features: [
        'Totalrehabilitering av bygg',
        'Leietakertilpasninger',
        'Energioppgradering',
        'Vedlikehold og fornying',
      ],
    },
    {
      icon: ClipboardList,
      title: 'Nybygg',
      description: 'Vi bygger nye konstruksjoner med fokus på kvalitet, bærekraft og fremtidige behov. Vår erfaring spenner fra kontorbygg til skoler, barnehager og boligprosjekter.',
      features: [
        'Kontor- og næringsbygg',
        'Skoler og barnehager',
        'Boligprosjekter',
        'Offentlige bygg',
      ],
    },
    {
      icon: Users,
      title: 'Prosjektledelse',
      description: 'Våre erfarne prosjektledere sikrer at prosjektet ditt gjennomføres i henhold til plan, budsjett og kvalitetskrav. Vi bruker moderne styringsverktøy for full oversikt.',
      features: [
        'Tids- og kostnadsstyring',
        'Kvalitetskontroll',
        'Risikovurdering',
        'Løpende rapportering',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Kostnadsstyring',
      description: 'Vi gir deg tydelige anslag, faste rutiner for endringer og en økonomirapport som er lett å forstå. Målet er null ubehagelige overraskelser.',
      features: [
        'Detaljerte kostnadsanslag',
        'Økonomisk rapportering',
        'Endringshåndtering',
        'Konkurransedyktige priser',
      ],
    },
    {
      icon: Shield,
      title: 'Kvalitetssikring',
      description: 'Kvalitet er en hjørnestein i alt vi gjør. Vi følger strenge kvalitetsrutiner og sikrer at alle leveranser møter eller overgår forventningene.',
      features: [
        'Kvalitetskontroll på alle nivåer',
        'Dokumentasjon og sporbarhet',
        'Sertifiserte prosesser',
        'Kontinuerlig forbedring',
      ],
    },
  ];

  return (
    <div className="bg-[#1B1C20] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-section">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#D96C4A] mb-4">
                Våre tjenester
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6F5F2] mb-6 leading-tight">
                Totalentreprenør med struktur
              </h1>
              <p className="font-body text-base md:text-lg text-[rgba(246,245,242,0.72)] leading-relaxed mb-8">
                Fra tidligfase til overtakelse koordinerer vi alle fag. Enten det er 
                kontor, skole, barnehage eller bolig, sikrer vi fremdrift, kvalitet og god dialog.
              </p>
              <div className="accent-rule" />
            </div>
            <div className="animate-section relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/section2_oversikt.jpg"
                alt="Varden Entreprenør tjenester"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-[6vw] bg-[rgba(246,245,242,0.02)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-section group p-8 bg-[rgba(246,245,242,0.03)] border border-[rgba(246,245,242,0.08)] rounded-lg hover:border-[rgba(246,245,242,0.15)] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-[#D96C4A]/10 flex items-center justify-center mb-6">
                  <service.icon size={26} className="text-[#D96C4A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#F6F5F2] mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-[rgba(246,245,242,0.72)] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 font-body text-xs text-[rgba(246,245,242,0.6)]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#D96C4A] mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-section order-2 lg:order-1 relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/section6_forutsigbarhet.jpg"
                alt="Varden Entreprenør forutsigbarhet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20]/60 to-transparent" />
            </div>
            <div className="animate-section order-1 lg:order-2">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#D96C4A] mb-4">
                Hvorfor velge oss
              </p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-6">
                Forutsigbarhet i alle prosjekter
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
                    Tydelig kommunikasjon
                  </h3>
                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                    Korte beslutningsveier, fast kontaktperson og et team som løser 
                    problemer før de når deg. Vi tror på ærlige samtaler og forutsigbare prosesser.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
                    Kostnadskontroll
                  </h3>
                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                    Vi gir deg tydelige anslag, faste rutiner for endringer og en 
                    økonomirapport som er lett å forstå. Målet er null ubehagelige overraskelser.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
                    Kvalitet i alle ledd
                  </h3>
                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                    Vi bygger for folk, ikke bare for tegninger. Det betyr solide 
                    materialer, godt håndverk og en overlevering som holder i mange år.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-[6vw] bg-[rgba(246,245,242,0.02)]">
        <div className="max-w-4xl mx-auto text-center animate-section">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
            Klar for å starte ditt prosjekt?
          </h2>
          <p className="font-body text-base text-[rgba(246,245,242,0.72)] mb-8 max-w-2xl mx-auto">
            Ta kontakt for en uforpliktende samtale om ditt prosjekt. 
            Vi hjelper deg fra idé til ferdig bygg.
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

export default Tjenester;
