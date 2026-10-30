import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import App from './App';
import './styles/global.css';

gsap.registerPlugin(ScrollTrigger);

function MotionController() {
  const location = useLocation();

  // One Lenis instance, synchronised with GSAP's ticker and ScrollTrigger.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.12, smoothWheel: true, wheelMultiplier: 0.88, touchMultiplier: 1.08 });
    const tick = (time) => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  // Rebuild page-specific motion after every client-side route change.
  useEffect(() => {
    window.scrollTo(0, 0);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('[data-reveal], [data-stagger] > *, .hero-copy > *, .page-hero-copy > *', { clearProps: 'all' });
        return;
      }

      const hero = document.querySelector('.home-hero, .page-hero');
      if (hero) {
        const copy = hero.querySelectorAll('.eyebrow, h1, p, .hero-actions');
        gsap.fromTo(copy, { y: 32, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 1.05, stagger: 0.12, ease: 'power3.out', delay: 0.12
        });
        const image = hero.querySelector('.hero-photo, .page-hero-photo');
        if (image) gsap.fromTo(image, { scale: 1.12 }, { scale: 1.015, duration: 2, ease: 'power2.out' });
      }

      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, { y: 42, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.95, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true }
        });
      });

      gsap.utils.toArray('[data-stagger]').forEach((group) => {
        gsap.fromTo(group.children, { y: 34, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.11, ease: 'power3.out',
          scrollTrigger: { trigger: group, start: 'top 86%', once: true }
        });
      });

      gsap.utils.toArray('.statement-photo, .page-hero-photo, .about-photo img').forEach((el) => {
        gsap.fromTo(el, { yPercent: -4 }, {
          yPercent: 4, ease: 'none',
          scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: 0.7 }
        });
      });

      gsap.to('.scroll-progress', {
        scaleX: 1, ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.2 }
      });

      // Magnetic hover with a soft elastic return (desktop pointers only).
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        gsap.utils.toArray('[data-magnetic]').forEach((el) => {
          const move = (event) => {
            const rect = el.getBoundingClientRect();
            const dx = event.clientX - rect.left - rect.width / 2;
            const dy = event.clientY - rect.top - rect.height / 2;
            gsap.to(el, { x: dx * 0.075, y: dy * 0.075, rotateX: -dy * 0.018, rotateY: dx * 0.018, transformPerspective: 700, duration: 0.45, ease: 'power3.out', overwrite: true });
          };
          const reset = () => gsap.to(el, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 0.85, ease: 'elastic.out(1, 0.45)', overwrite: true });
          el.addEventListener('pointermove', move);
          el.addEventListener('pointerleave', reset);
          el._ministryMagneticCleanup = () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', reset); };
        });
      }

      ScrollTrigger.refresh();
    });
    return () => {
      document.querySelectorAll('[data-magnetic]').forEach(el => el._ministryMagneticCleanup?.());
      ctx.revert();
    };
  }, [location.pathname]);

  return null;
}

function Root() {
  return <BrowserRouter><MotionController/><App/></BrowserRouter>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><Root/></React.StrictMode>);
