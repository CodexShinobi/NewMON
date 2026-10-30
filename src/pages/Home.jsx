import React from 'react';
import { ArrowDown, ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import BookingBanner from '../components/BookingBanner';

const A = '/media/';
const BOOK = 'https://wa.me/919771865006?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment.';
const services = [
  { title: 'Nail extensions', tag: 'LENGTH · SHAPE · STYLE', image: 'IMG_3749.webp', note: 'A shape and length that feels like you.' },
  { title: 'Nail art', tag: 'A LITTLE PERSONALITY', image: 'B612_20220808_124322_136.webp', note: 'Expressive details, made personal.' },
  { title: 'Classic finishes', tag: 'TIMELESS DETAILS', image: 'IMG_3583.webp', note: 'Quietly beautiful. Always in style.' }
];
const gallery = ['IMG_4069.webp', 'IMG_3316.webp', 'IMG_1051.webp', 'IMG_2498.webp', 'pg-2 (1).webp'];

export default function Home() {
  return <main className="ministry-home">
    <section className="home-hero">
      <div className="hero-photo" style={{ backgroundImage: `url("/media/pg-2%20(1).webp")` }} />
      <div className="hero-wash" />
      <div className="hero-copy">
        <span className="eyebrow hero-kicker"><Sparkles size={13}/> THE MINISTRY OF NAILS <i>·</i> PURNEA</span>
        <h1>Make a statement.<br/><em>Down to your fingertips.</em></h1>
        <p>Thoughtful nail artistry, beautiful details and a studio experience made around you.</p>
        <div className="hero-actions">
          <a className="button button-gold magnetic" data-magnetic href={BOOK} target="_blank" rel="noreferrer">Book your appointment <ArrowUpRight size={16}/></a>
          <Link className="button button-outline" to="/services">Explore services <ArrowDown size={15}/></Link>
        </div>
      </div>
      <div className="hero-meta"><span>BEAUTY, IN EVERY DETAIL</span><span>NAIL ART · CARE · EXPRESSION</span><span>SCROLL TO DISCOVER ↓</span></div>
      <span className="hero-index">01 / 05</span>
    </section>

    <section className="home-intro section-shell">
      <div className="intro-aside" data-reveal><span className="eyebrow">A PLACE TO EXPRESS YOU</span><span className="vertical-note">DETAIL IS EVERYTHING</span></div>
      <div className="intro-main" data-reveal>
        <span className="micro-label">MORE THAN A NAIL STUDIO</span>
        <h2>Not just nails.<br/>A feeling of <em>you.</em></h2>
        <div className="intro-bottom"><p>We believe your nails are a small canvas for big self-expression. From the first colour to the final detail, every visit is an opportunity to feel confident, cared for and completely yourself.</p><Link className="underlined-link" to="/about">Discover our story <ArrowUpRight size={15}/></Link></div>
      </div>
    </section>

    <section className="home-services section-shell">
      <SectionHeading eyebrow="THE MINISTRY EDIT" title={<>A finish for<br/><em>every mood.</em></>} copy="Whether you love a timeless look or something that turns heads, discover a finish that feels unmistakably yours."/>
      <div className="feature-grid" data-stagger>
        {services.map((item, i) => <Link className={`feature-card feature-${i + 1}`} to="/services" key={item.title} data-magnetic>
          <div className="feature-image"><img src={A + item.image} alt={item.title} loading="lazy"/><span className="feature-index">0{i + 1}</span><span className="feature-arrow"><ArrowUpRight size={21}/></span></div>
          <div className="feature-copy"><span className="feature-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.note}</p></div>
        </Link>)}
      </div>
      <div className="section-end"><Link className="underlined-link" to="/services">Explore all services <ArrowRight size={15}/></Link></div>
    </section>

    <section className="image-statement">
      <div className="statement-photo" style={{ backgroundImage: `url("${A}images - 2022-07-29T120329.539.webp")` }}/><div className="statement-shade"/>
      <div className="statement-copy" data-reveal><span className="eyebrow">YOUR NAILS. YOUR CANVAS.</span><h2>Wear your<br/><em>confidence.</em></h2><Link className="button button-gold magnetic" data-magnetic to="/gallery">See the gallery <ArrowUpRight size={16}/></Link></div>
      <span className="statement-stamp">THE MINISTRY EDIT · 001</span>
    </section>

    <section className="home-gallery section-shell">
      <SectionHeading eyebrow="THE NAIL EDIT" title={<>Little details.<br/><em>Big inspiration.</em></>} copy="A selection of looks from our studio. Save a favourite and bring it along to your next appointment."/>
      <div className="mini-gallery" data-stagger>{gallery.map((img, i) => <Link className={`mini-gallery-item gallery-shot-${i + 1}`} to="/gallery" key={img}><img src={A + img} alt={`Ministry nail look ${i + 1}`} loading="lazy"/><span><ArrowUpRight size={19}/></span></Link>)}</div>
      <div className="section-end"><Link className="underlined-link" to="/gallery">View all nail looks <ArrowRight size={15}/></Link></div>
    </section>
    <BookingBanner/>
  </main>
}