import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Tjenester', id: 'section2' },
    { label: 'Prosjekter', id: 'section3' },
    { label: 'Om oss', id: 'section5' },
    { label: 'Samfunnsansvar', id: 'section6' },
  ];

  return (
    <>
      {/* Fixed Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1B1C20]/90 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-[6vw] py-5">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-[#F6F5F2] hover:text-[#D96C4A] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <button
            onClick={() => scrollToSection('section1')}
            className="font-display text-xl font-bold tracking-tight text-[#F6F5F2] hover:text-[#D96C4A] transition-colors"
          >
            VARDEN
          </button>

          {/* Contact CTA */}
          <button
            onClick={() => scrollToSection('kontakt')}
            className="btn-primary hidden sm:block"
          >
            Kontakt
          </button>
          
          {/* Mobile contact icon */}
          <button
            onClick={() => scrollToSection('kontakt')}
            className="sm:hidden text-[#F6F5F2] hover:text-[#D96C4A] transition-colors"
            aria-label="Contact"
          >
            <span className="font-mono text-xs uppercase tracking-wider">Kontakt</span>
          </button>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-[#1B1C20] transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col px-[6vw] py-5">
          {/* Menu Header */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[#F6F5F2] hover:text-[#D96C4A] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <span className="font-display text-xl font-bold tracking-tight text-[#F6F5F2]">
              VARDEN
            </span>
            <div className="w-6" /> {/* Spacer for alignment */}
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-display text-4xl md:text-6xl font-bold text-[#F6F5F2] hover:text-[#D96C4A] transition-colors text-left"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="flex flex-col gap-4 pb-8">
            <div className="accent-rule" />
            <p className="font-mono text-sm text-[rgba(246,245,242,0.72)]">
              post@varden-entreprenor.no
            </p>
            <p className="font-mono text-sm text-[rgba(246,245,242,0.72)]">
              +47 951 20 000
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
