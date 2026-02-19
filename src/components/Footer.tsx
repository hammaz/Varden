import { Link } from 'react-router-dom';
import { Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    tjenester: [
      { label: 'Totalentreprenør', path: '/tjenester' },
      { label: 'Rehabilitering', path: '/tjenester' },
      { label: 'Nybygg', path: '/tjenester' },
    ],
    prosjekter: [
      { label: 'Pågående', path: '/prosjekter' },
      { label: 'Referanser', path: '/prosjekter' },
      { label: 'Alle prosjekter', path: '/prosjekter' },
    ],
    omOss: [
      { label: 'Vår historie', path: '/om-oss' },
      { label: 'Teamet', path: '/om-oss' },
      { label: 'Karriere', path: '/om-oss' },
    ],
    samfunnsansvar: [
      { label: 'HMS/KS', path: '/ks-hms' },
      { label: 'Bærekraft', path: '/ks-hms' },
      { label: 'Code of Conduct', path: '/ks-hms' },
    ],
  };

  return (
    <footer className="bg-[#1B1C20] pt-16 pb-8 px-[6vw] border-t border-[rgba(246,245,242,0.05)]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          {/* Logo + Tagline Column */}
          <div className="lg:col-span-2">
            {/* Small Logo */}
            <svg
              viewBox="0 0 200 200"
              className="w-16 h-16 mb-4"
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

            <h3 className="font-display text-lg font-semibold text-[#F6F5F2] mb-2">
              Varden Entreprenør AS
            </h3>
            <p className="font-body text-sm text-[rgba(246,245,242,0.72)] mb-6 max-w-[280px]">
              Robust og fremoverlent totalentreprenør innen rehabilitering og nybygg.
            </p>

            {/* Social Link */}
            <a
              href="https://www.linkedin.com/company/varden-entrepren%C3%B8r-as/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[rgba(246,245,242,0.72)] hover:text-[#D96C4A] transition-colors"
            >
              <Linkedin size={18} strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-wider">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Tjenester */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-[rgba(246,245,242,0.5)] mb-4">
              Tjenester
            </h4>
            <ul className="space-y-3">
              {footerLinks.tjenester.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-[rgba(246,245,242,0.72)] hover:text-[#F6F5F2] transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Prosjekter */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-[rgba(246,245,242,0.5)] mb-4">
              Prosjekter
            </h4>
            <ul className="space-y-3">
              {footerLinks.prosjekter.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-[rgba(246,245,242,0.72)] hover:text-[#F6F5F2] transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Om oss */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-[rgba(246,245,242,0.5)] mb-4">
              Om oss
            </h4>
            <ul className="space-y-3">
              {footerLinks.omOss.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-[rgba(246,245,242,0.72)] hover:text-[#F6F5F2] transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Samfunnsansvar */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-[rgba(246,245,242,0.5)] mb-4">
              Samfunnsansvar
            </h4>
            <ul className="space-y-3">
              {footerLinks.samfunnsansvar.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-[rgba(246,245,242,0.72)] hover:text-[#F6F5F2] transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(246,245,242,0.1)] mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <span className="font-body text-xs text-[rgba(246,245,242,0.5)]">
              © 2026 Varden Entreprenør AS
            </span>
            <Link
              to="/personvern"
              className="font-body text-xs text-[rgba(246,245,242,0.5)] hover:text-[#F6F5F2] transition-colors link-underline"
            >
              Personvern
            </Link>
            <a
              href="https://indd.adobe.com/view/719a8500-3c7c-495b-83f6-bb6001e08a58"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-body text-xs text-[rgba(246,245,242,0.5)] hover:text-[#F6F5F2] transition-colors link-underline"
            >
              Digital brosjyre
              <ExternalLink size={10} strokeWidth={1.5} />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-body text-xs text-[rgba(246,245,242,0.4)]">
              Nettside utviklet av
            </span>
            <span className="font-mono text-xs text-[rgba(246,245,242,0.5)]">
              Nettrakett
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
