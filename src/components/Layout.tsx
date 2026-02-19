import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Kill all ScrollTriggers on route change to prevent conflicts
    ScrollTrigger.getAll().forEach(st => st.kill());
    
    // Refresh after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#1B1C20]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
