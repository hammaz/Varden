import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, TrendingUp, Award, ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const OmOss = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Oppmerksom',
      description: 'På samfunnets, kundens, ansattes og selskapets behov.',
    },
    {
      icon: Users,
      title: 'Varig',
      description: 'Vi viser en trygg vei mot målet, bygget stein på stein.',
    },
    {
      icon: TrendingUp,
      title: 'Fremoverlent',
      description: 'Alltid i utvikling med fokus på vekst og forbedring.',
    },
    {
      icon: Award,
      title: 'Solid',
      description: 'Robust økonomi og pålitelig prosjektgjennomføring.',
    },
  ];

  const team = [
    {
      name: 'Martin Stuge Bånerud',
      role: 'Daglig leder',
      phone: '+47 477 18 505',
      email: 'msb@varden-entreprenor.no',
    },
    {
      name: 'Nils H. Stenhammer',
      role: 'Prosjektdirektør',
      phone: '+47 951 20 167',
      email: 'nhs@varden-entreprenor.no',
    },
    {
      name: 'Sirin Skjerve Molle',
      role: 'Prosjektdirektør',
      phone: '+47 951 20 017',
      email: 'ssm@varden-entreprenor.no',
    },
    {
      name: 'Tor G. Unneland',
      role: 'Akkvisisjons- og kontraktsleder',
      phone: '+47 951 20 161',
      email: 'tu@varden-entreprenor.no',
    },
    {
      name: 'Jørgen Moger',
      role: 'KS/HMS-leder bedrift',
      phone: '+47 982 81 331',
      email: 'jm@varden-entreprenor.no',
    },
    {
      name: 'Bjarne Brenden',
      role: 'Innkjøpsleder',
      phone: '+47 951 20 000',
      email: 'bb@varden-entreprenor.no',
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
                Om oss
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6F5F2] mb-6 leading-tight">
                Robust og fremoverlent
              </h1>
              <p className="font-body text-base md:text-lg text-[rgba(246,245,242,0.72)] leading-relaxed mb-6">
                Etter lærerike år med prosjektgjennomføring hos store riksentreprenører, 
                ble Varden Entreprenør AS stiftet i april 2008.
              </p>
              <p className="font-body text-base text-[rgba(246,245,242,0.72)] leading-relaxed">
                Grunntankene for å starte og bygge opp eget entreprenørselskap var: 
                verdiskapning, kompetanse, risikostyring, soliditet, utvikling og vekst, 
                kultur- og lagbygging, trygge arbeidsplasser og varig selskap.
              </p>
            </div>
            <div className="animate-section relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/section5_tettpa.jpg"
                alt="Varden Entreprenør team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 px-[6vw] bg-[rgba(246,245,242,0.02)]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
              Vår historie
            </h2>
            <div className="accent-rule mx-auto" />
          </div>

          <div className="animate-section grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <p className="font-display text-4xl md:text-5xl font-bold text-[#D96C4A] mb-4">2008</p>
              <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">Grunnlagt</h3>
              <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                Varden Entreprenør AS ble stiftet i april med to ansatte og en drøm om å bygge noe eget.
              </p>
            </div>
            <div className="text-center p-6">
              <p className="font-display text-4xl md:text-5xl font-bold text-[#D96C4A] mb-4">100%</p>
              <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">Ansatteid</h3>
              <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                Vi er 100 % eid av ansatte gjennom Varden Gruppen AS. Hver ansatt er med på å forme selskapet.
              </p>
            </div>
            <div className="text-center p-6">
              <p className="font-display text-4xl md:text-5xl font-bold text-[#D96C4A] mb-4">50+</p>
              <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">Prosjekter</h3>
              <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                Fra den spede begynnelsen har vi vokst og gjennomført over 50 vellykkede prosjekter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
              Hva VARDEN betyr
            </h2>
            <p className="font-body text-base text-[rgba(246,245,242,0.72)]">
              Navnet VARDEN ble valgt fordi vi ønsker å bygge og drive et selskap som 
              står for det vi forbinder med fysiske Varder i naturen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="animate-section p-6 bg-[rgba(246,245,242,0.03)] border border-[rgba(246,245,242,0.08)] rounded-lg hover:border-[rgba(246,245,242,0.15)] transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#D96C4A]/10 flex items-center justify-center mb-4">
                  <value.icon size={22} className="text-[#D96C4A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-[6vw] bg-[rgba(246,245,242,0.02)]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
              Vårt team
            </h2>
            <p className="font-body text-base text-[rgba(246,245,242,0.72)]">
              Vårt lag er sammensatt av dedikerte ansatte med ulik bakgrunn, alder, 
              kompetanse, nasjonalitet, etnisitet og kjønn, som utfyller hverandre 
              til beste for våre kunder og selskapet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="animate-section p-6 bg-[rgba(246,245,242,0.03)] border border-[rgba(246,245,242,0.08)] rounded-lg"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#D96C4A] mb-4">
                  {member.role}
                </p>
                <div className="space-y-2">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-[rgba(246,245,242,0.6)] hover:text-[#F6F5F2] transition-colors"
                  >
                    <Phone size={14} />
                    <span className="font-body text-sm">{member.phone}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-[rgba(246,245,242,0.6)] hover:text-[#F6F5F2] transition-colors"
                  >
                    <Mail size={14} />
                    <span className="font-body text-sm">{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-6">
                Sertifiseringer
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D96C4A]/10 flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-[#D96C4A]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-1">
                      Miljøfyrtårn
                    </h3>
                    <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                      Varden Entreprenør er Miljøfyrtårn-sertifisert. Vi tar miljøansvar 
                      på alvor og jobber kontinuerlig med å redusere vårt fotavtrykk.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D96C4A]/10 flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-[#D96C4A]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-1">
                      ISO 9001
                    </h3>
                    <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                      Kvalitetsstyringssystem som sikrer at vi leverer i henhold til 
                      kundens krav og forventninger.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D96C4A]/10 flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-[#D96C4A]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-1">
                      ISO 14001
                    </h3>
                    <p className="font-body text-sm text-[rgba(246,245,242,0.72)]">
                      Miljøstyringssystem som hjelper oss å minimere den negative 
                      påvirkningen på miljøet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/section7_byggervidere.jpg"
                alt="Varden Entreprenør sertifiseringer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-[6vw] bg-[rgba(246,245,242,0.02)]">
        <div className="max-w-4xl mx-auto text-center animate-section">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#F6F5F2] mb-4">
            Bli en del av teamet
          </h2>
          <p className="font-body text-base text-[rgba(246,245,242,0.72)] mb-8 max-w-2xl mx-auto">
            Vi investerer i kompetanse, sikkerhet og et arbeidsmiljø der folk vil bli. 
            Vil du bli med på laget?
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

export default OmOss;
