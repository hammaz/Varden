import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Building, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    navn: '',
    epost: '',
    telefon: '',
    emne: '',
    melding: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      // Details animation
      gsap.fromTo(
        detailsRef.current,
        { y: 16, opacity: 0 },
          {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );

      // Map animation
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 1.02 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );
    }, section);

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
      href: '#',
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

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="relative bg-[#F6F5F2] min-h-screen z-[100]"
    >
      <div className="px-[6vw] py-[10vh]">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Heading + Details */}
          <div>
            {/* Heading */}
            <div ref={headingRef} className="mb-12">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1C20] mb-4">
                La oss snakke.
              </h2>
              <p className="font-body text-base md:text-lg text-[rgba(27,28,32,0.7)]">
                Send en forespørsel, så tar vi kontakt innen 1–2 dager.
              </p>
            </div>

            {/* Contact Details */}
            <div ref={detailsRef} className="space-y-6">
              {contactDetails.map((detail, index) => (
                <a
                  key={index}
                  href={detail.href}
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
                    <p className="font-mono text-xs uppercase tracking-wider text-[rgba(27,28,32,0.5)] mb-1">
                      {detail.label}
                    </p>
                    <p className="font-body text-sm md:text-base text-[#1B1C20] link-underline">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div ref={formRef} className="lg:sticky lg:top-[12vh] lg:self-start">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-[#1B1C20]/5">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#D96C4A]/10 flex items-center justify-center mx-auto mb-4">
                    <Mail size={28} className="text-[#D96C4A]" />
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
                      Navn
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
                        E-post
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
                      Emne
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
                      Melding
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
                    className="w-full btn-primary py-4"
                  >
                    Send melding
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Image */}
      <div ref={mapRef} className="w-full h-[32vh] mt-8">
        <img
          src="/contact_map.jpg"
          alt="Kart over Oslo"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ContactSection;
