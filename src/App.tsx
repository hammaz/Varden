import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tjenester from './pages/Tjenester';
import Prosjekter from './pages/Prosjekter';
import OmOss from './pages/OmOss';
import KsHms from './pages/KsHms';
import Kontakt from './pages/Kontakt';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <Router>
      <div className="relative">
        {/* Grain overlay */}
        <div className="grain-overlay" />
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tjenester" element={<Tjenester />} />
            <Route path="prosjekter" element={<Prosjekter />} />
            <Route path="om-oss" element={<OmOss />} />
            <Route path="ks-hms" element={<KsHms />} />
            <Route path="kontakt" element={<Kontakt />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
