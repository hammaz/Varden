import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Hjem', path: '/' },
    { label: 'Tjenester', path: '/tjenester' },
    { label: 'Prosjekter', path: '/prosjekter' },
    { label: 'Om oss', path: '/om-oss' },
    { label: 'KS/HMS', path: '/ks-hms' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Fixed Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1B1C20]/95 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-[6vw] py-5">
          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-[#F6F5F2] hover:text-[#D96C4A] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-mono text-xs uppercase tracking-[0.12em] transition-colors link-underline ${
                  isActive(item.path)
                    ? 'text-[#D96C4A]'
                    : 'text-[#F6F5F2] hover:text-[#D96C4A]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl font-bold tracking-tight text-[#F6F5F2] hover:text-[#D96C4A] transition-colors"
          >
            VARDEN
          </Link>

          {/* Contact CTA */}
          <Link
            to="/kontakt"
            className="btn-primary hidden sm:block"
          >
            Kontakt
          </Link>
          
          {/* Mobile contact icon */}
          <Link
            to="/kontakt"
            className="sm:hidden text-[#F6F5F2] hover:text-[#D96C4A] transition-colors"
            aria-label="Contact"
          >
            <span className="font-mono text-xs uppercase tracking-wider">Kontakt</span>
          </Link>
        </div>
      </header>

      {/* Full-screen Menu Overlay (Mobile) */}
      <div
        className={`fixed inset-0 z-[200] bg-[#1B1C20] transition-transform duration-500 ease-out lg:hidden ${
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
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-xl font-bold tracking-tight text-[#F6F5F2]"
            >
              VARDEN
            </Link>
            <div className="w-6" />
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-display text-4xl font-bold text-left transition-colors ${
                  isActive(item.path)
                    ? 'text-[#D96C4A]'
                    : 'text-[#F6F5F2] hover:text-[#D96C4A]'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-4xl font-bold text-[#F6F5F2] hover:text-[#D96C4A] transition-colors text-left"
            >
              Kontakt
            </Link>
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

export default Header;
