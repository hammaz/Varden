import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  FileText, 
  Send,
  CheckCircle,
  Linkedin
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Kontakt = () => {
  const [formData, setFormData] = useState({
    navn: '',
    epost: '',
    telefon: '',
    emne: '',
    melding: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'E-post',
      value: 'post@varden-entreprenor.no',
      href: 'mailto:post@varden-entreprenor.no',
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+47 951 20 000',
      href: 'tel:+4795120000',
    },
    {
      icon: MapPin,
      label: 'Besøksadresse',
      value: 'Trondheimsveien 135, 0570 Oslo',
      href: 'https://maps.google.com/?q=Trondheimsveien+135+Oslo',
    },
    {
      icon: Building,
      label: 'Postadresse',
      value: 'Postboks 1234, 0100 Oslo',
      href: '#',
    },
    {
      icon: FileText,
      label: 'Org.nr',
      value: '992 574 461',
      href: '#',
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
      name: 'Tor G. Unneland',
      role: 'Akkvisisjons- og kontraktsleder',
      phone: '+47 951 20 161',
      email: 'tu@varden-entreprenor.no',
    },
  ];

  return (
    <div className="bg-[#F6F5F2] min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-[6vw]">
        <div className="max-w-7xl mx-auto">
          <div className="animate-section text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#D96C4A] mb-4">
              Kontakt
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1C20] mb-6 leading-tight">
              La oss snakke
            </h1>
            <p className="font-body text-base md:text-lg text-[rgba(27,28,32,0.7)] leading-relaxed">
              Send en forespørsel, så tar vi kontakt innen 1–2 dager. 
              Vi er klare for å hjelpe deg med ditt neste prosjekt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-section">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-[#1B1C20]/5">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#D96C4A]/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={28} className="text-[#D96C4A]" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#1B1C20] mb-2">
                      Takk for din henvendelse!
                    </h3>
                    <p className="font-body text-sm text-[rgba(27,28,32,0.7)]">
                      Vi kontakter deg snart.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[rgba(27,28,32,0.6)] mb-2">
                        Navn *
                      </label>
                      <input
                        type="text"
                        name="navn"
                        value={formData.navn}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#F6F5F2] border border-[#1B1C20]/10 rounded-lg text-[#1B1C20] text-sm focus:border-[#D96C4A] transition-colors"
                        placeholder="Ditt navn"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-[rgba(27,28,32,0.6)] mb-2">
                          E-post *
                        </label>
                        <input
                          type="email"
                          name="epost"
                          value={formData.epost}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#F6F5F2] border border-[#1B1C20]/10 rounded-lg text-[#1B1C20] text-sm focus:border-[#D96C4A] transition-colors"
                          placeholder="din@epost.no"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-[rgba(27,28,32,0.6)] mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="telefon"
                          value={formData.telefon}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#F6F5F2] border border-[#1B1C20]/10 rounded-lg text-[#1B1C20] text-sm focus:border-[#D96C4A] transition-colors"
                          placeholder="+47 000 00 000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[rgba(27,28,32,0.6)] mb-2">
                        Emne *
                      </label>
                      <input
                        type="text"
                        name="emne"
                        value={formData.emne}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#F6F5F2] border border-[#1B1C20]/10 rounded-lg text-[#1B1C20] text-sm focus:border-[#D96C4A] transition-colors"
                        placeholder="Hva gjelder det?"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-[rgba(27,28,32,0.6)] mb-2">
                        Melding *
                      </label>
                      <textarea
                        name="melding"
                        value={formData.melding}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-[#F6F5F2] border border-[#1B1C20]/10 rounded-lg text-[#1B1C20] text-sm focus:border-[#D96C4A] transition-colors resize-none"
                        placeholder="Fortell oss om ditt prosjekt..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary py-4 flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Send melding
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-section space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="font-display text-lg font-semibold text-[#1B1C20] mb-4">
                  Kontaktinformasjon
                </h3>
                <div className="space-y-4">
                  {contactDetails.map((detail, index) => (
                    <a
                      key={index}
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#1B1C20]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D96C4A]/10 transition-colors">
                        <detail.icon
                          size={18}
                          className="text-[#1B1C20] group-hover:text-[#D96C4A] transition-colors"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[rgba(27,28,32,0.5)] mb-0.5">
                          {detail.label}
                        </p>
                        <p className="font-body text-sm text-[#1B1C20] link-underline">
                          {detail.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Key Contacts */}
              <div>
                <h3 className="font-display text-lg font-semibold text-[#1B1C20] mb-4">
                  Nøkkelkontakter
                </h3>
                <div className="space-y-4">
                  {team.map((member, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg border border-[#1B1C20]/5"
                    >
                      <h4 className="font-display text-base font-semibold text-[#1B1C20]">
                        {member.name}
                      </h4>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#D96C4A] mb-2">
                        {member.role}
                      </p>
                      <div className="space-y-1">
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-2 text-[rgba(27,28,32,0.6)] hover:text-[#1B1C20] transition-colors"
                        >
                          <Phone size={12} />
                          <span className="font-body text-xs">{member.phone}</span>
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-[rgba(27,28,32,0.6)] hover:text-[#1B1C20] transition-colors"
                        >
                          <Mail size={12} />
                          <span className="font-body text-xs">{member.email}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-display text-lg font-semibold text-[#1B1C20] mb-4">
                  Følg oss
                </h3>
                <a
                  href="https://www.linkedin.com/company/varden-entrepren%C3%B8r-as/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 p-4 bg-white rounded-lg border border-[#1B1C20]/5 hover:border-[#D96C4A]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1B1C20]/5 flex items-center justify-center">
                    <Linkedin size={18} className="text-[#1B1C20]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-sm text-[#1B1C20]">LinkedIn</p>
                    <p className="font-mono text-[10px] text-[rgba(27,28,32,0.5)]">
                      Følg oss for oppdateringer
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="animate-section">
        <div className="w-full h-[40vh]">
          <img
            src="/contact_map.jpg"
            alt="Kart over Oslo"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
