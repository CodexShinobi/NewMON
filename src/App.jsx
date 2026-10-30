import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Instagram, Facebook, ArrowUpRight, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const nav = [
  ['Home', '/'], ['Our Story', '/about'], ['Services', '/services'],
  ['Gallery', '/gallery'], ['Contact', '/contact']
];
const BOOK = 'https://wa.me/919771865006?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment.';

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <>
    <div className="announcement-bar">
      <span>PURNEA <i>·</i> BIHAR</span>
      <span className="announcement-center">THE ART OF BEAUTIFUL NAILS</span>
      <a href={BOOK} target="_blank" rel="noreferrer">BOOK YOUR VISIT <ArrowUpRight size={13}/></a>
    </div>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Link className="brand-lockup" to="/" aria-label="The Ministry of Nails home">
        <img src="/img/logo.png" alt="The Ministry of Nails" />
        <span className="brand-caption">THE MINISTRY OF NAILS <small>PURNEA · INDIA</small></span>
      </Link>
      <button className="mobile-menu" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>
        {open ? <X size={23}/> : <Menu size={23}/>}
      </button>
      <nav className={`site-navigation ${open ? 'navigation-open' : ''}`} aria-label="Main navigation">
        {nav.map(([label, path]) => <Link key={path} to={path} className={location.pathname === path ? 'active' : ''}>{label}</Link>)}
        <a className="nav-book magnetic" href={BOOK} target="_blank" rel="noreferrer">Book appointment <ArrowUpRight size={15}/></a>
      </nav>
    </header>
  </>;
}

function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand">
        <Link to="/" aria-label="The Ministry of Nails home"><img src="/img/logo.png" alt="The Ministry of Nails logo" /></Link>
        <p>A little time for yourself.<br/>A little art at your fingertips.</p>
      </div>
      <div className="footer-column"><span className="footer-label">EXPLORE</span><Link to="/about">Our story</Link><Link to="/services">Services</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact</Link></div>
      <div className="footer-column"><span className="footer-label">GET IN TOUCH</span><a href="tel:+919771865006">+91 97718 65006</a><a href="mailto:theministryofnails@gmail.com">theministryofnails@gmail.com</a><span>Purnea, Bihar, India</span></div>
      <div className="footer-column footer-social"><span className="footer-label">FOLLOW ALONG</span><a href="https://www.instagram.com/theministryofnails/" target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a><a href="https://m.facebook.com/profile.php?id=100082319511820" target="_blank" rel="noreferrer"><Facebook size={16}/> Facebook</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} THE MINISTRY OF NAILS</span><span>MADE WITH INTENTION</span><a href="#top">BACK TO TOP ↑</a></div>
  </footer>;
}

export default function App() {
  return <>
    <div className="scroll-progress" aria-hidden="true" />
    <div id="top"><Header/></div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
    <Footer/>
  </>;
}
