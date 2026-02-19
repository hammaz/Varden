import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  HardHat, 
  ClipboardCheck, 
  AlertTriangle,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const KsHms = () => {
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

  const hmsAreas = [
    {
      icon: HardHat,
      title: 'Sikkerhet først',
      description: 'Ingen jobb er så viktig at den ikke kan gjøres sikkert. Vi har nulltoleranse for ulykker.',
    },
    {
      icon: ClipboardCheck,
      title: 'Rutiner og prosedyrer',
      description: 'Tydelige rutiner for alle arbeidsoperasjoner, med fokus på forebygging og kontinuerlig forbedring.',
    },
    {
      icon: AlertTriangle,
      title: 'Risikovurdering',
      description: 'Grundig vurdering av risiko før alle oppdrag, med tiltak for å eliminere eller redusere farer.',
    },
    {
      icon: Users,
      title: 'Kompetanse og opplæring',
      description: 'Løpende opplæring og sertifisering av alle ansatte i HMS-relaterte temaer.',
    },
  ];

  const qualityAreas = [
    {
      icon: Shield,
      title: 'Kvalitetssikring',
      description: 'Systematisk kvalitetssikring på alle nivåer, fra planlegging til overtakelse.',
    },
    {
      icon: BookOpen,
      title: 'Dokumentasjon',
      description: 'Full sporbarhet gjennom grundig dokumentasjon av alle prosesser og leveranser.',
    },
    {
      icon: TrendingUp,
      title: 'Kontinuerlig forbedring',
      description: 'Vi evaluerer og forbedrer stadig våre prosesser for å øke kvaliteten.',
    },
    {
      icon: Award,
      title: 'Sertifiseringer',
      description: 'ISO 9001-sertifisert kvalitetsstyringssystem som sikrer høy standard.',
    },
  ];

  const stats = [
    { value: '0', label: 'Alvorlige ulykker siste 5 år' },
    { value: '100%', label: 'Ansatte med HMS-opplæring' },
    { value: 'ISO', label: '9001 og 14001 sertifisert' },
    { value: 'Miljø', label: 'fyrtårn-sertifisert' },
  ];

  return (
    <div className="bg-[#1B1C20] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-section">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#D96C4A] mb-4">
                KS / HMS
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6F5F2] mb-6 leading-tight">
                Trygghet fra dag én
              </h1>
              <p className="font-body text-base md:text-lg text-[rgba(246,245,242,0.72)] leading-relaxed mb-6">
                Sikkerhet og kvalitet er hjørnesteiner i alt vi gjør. Vi har etablert 
                grundige rutiner og systemer som sikrer at alle prosjekter gjennomføres 
                på en trygg og profesjonell måte.
              </p>
              <div className="accent-rule" />
            </div>
            <div className="animate-section relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/section4_trygghet.jpg"
                alt="Varden Entreprenør HMS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-[6vw] bg-[rgba(246,245,242,0.02)]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
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

      {/* HMS Section */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section max-w-3xl mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
              Helse, miljø og sikkerhet
            </h2>
            <p className="font-body text-base text-[rgba(246,245,242,0.72)]">
              Vår HMS-policy er klar: Ingen jobb er så viktig at den ikke kan gjøres sikkert. 
              Vi jobber systematisk for å skape et trygt arbeidsmiljø for alle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hmsAreas.map((area, index) => (
              <div
                key={area.title}
                className="animate-section flex items-start gap-4 p-6 bg-[rgba(246,245,242,0.03)] border border-[rgba(246,245,242,0.08)] rounded-lg hover:border-[rgba(246,245,242,0.15)] transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#D96C4A]/10 flex items-center justify-center flex-shrink-0">
                  <area.icon size={22} className="text-[#D96C4A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 md:py-24 px-[6vw] bg-[rgba(246,245,242,0.02)]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section max-w-3xl mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
              Kvalitetssystem
            </h2>
            <p className="font-body text-base text-[rgba(246,245,242,0.72)]">
              Vårt kvalitetssystem sikrer at alle prosjekter leveres i henhold til 
              avtalte krav og spesifikasjoner. Vi dokumenterer og følger opp alt arbeid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityAreas.map((area, index) => (
              <div
                key={area.title}
                className="animate-section flex items-start gap-4 p-6 bg-[rgba(246,245,242,0.03)] border border-[rgba(246,245,242,0.08)] rounded-lg hover:border-[rgba(246,245,242,0.15)] transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#D96C4A]/10 flex items-center justify-center flex-shrink-0">
                  <area.icon size={22} className="text-[#D96C4A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/section6_forutsigbarhet.jpg"
                alt="Varden Entreprenør Code of Conduct"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20]/60 to-transparent" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-6">
                Code of Conduct
              </h2>
              <p className="font-body text-base text-[rgba(246,245,242,0.72)] mb-6">
                Vår etiske retningslinjer beskriver hvordan vi forventer at våre ansatte 
                og samarbeidspartnere opptrer. Vi har nulltoleranse for korrupsjon, 
                diskriminering og andre etiske brudd.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D96C4A] mt-2" />
                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                    <strong className="text-[#F6F5F2]">Integritet:</strong> Vi handler ærlig og etisk i alle situasjoner
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D96C4A] mt-2" />
                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                    <strong className="text-[#F6F5F2]">Respekt:</strong> Vi behandler alle med respekt og verdighet
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D96C4A] mt-2" />
                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                    <strong className="text-[#F6F5F2]">Ansvarlighet:</strong> Vi tar ansvar for våre handlinger
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D96C4A] mt-2" />
                  <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                    <strong className="text-[#F6F5F2]">Miljø:</strong> Vi jobber for å minimere miljøpåvirkningen
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://varden-entreprenor.no/code-of-conduct/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#D96C4A] hover:text-[#F6F5F2] transition-colors"
                >
                  Les full Code of Conduct
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-16 md:py-24 px-[6vw] bg-[rgba(246,245,242,0.02)]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
              Miljø og bærekraft
            </h2>
            <p className="font-body text-base text-[rgba(246,245,242,0.72)]">
              Som Miljøfyrtårn-sertifisert bedrift tar vi miljøansvar på alvor. 
              Vi jobber kontinuerlig med å redusere vårt fotavtrykk.
            </p>
          </div>

          <div className="animate-section grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#D96C4A]/10 flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-[#D96C4A]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
                Miljøfyrtårn
              </h3>
              <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                Sertifisert miljøledelsessystem som sikrer systematisk miljøarbeid.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#D96C4A]/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={28} className="text-[#D96C4A]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
                Energieffektivitet
              </h3>
              <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                Vi fokuserer på energieffektive løsninger i alle våre prosjekter.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#D96C4A]/10 flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck size={28} className="text-[#D96C4A]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
                Avfallshåndtering
              </h3>
              <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                Systematisk sortering og gjenvinning av byggavfall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-4xl mx-auto text-center animate-section">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
            Spørsmål om våre rutiner?
          </h2>
          <p className="font-body text-base text-[rgba(246,245,242,0.72)] mb-8 max-w-2xl mx-auto">
            Ta kontakt med vår KS/HMS-leder for mer informasjon om våre 
            kvalitets- og sikkerhetsrutiner.
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

export default KsHms;
