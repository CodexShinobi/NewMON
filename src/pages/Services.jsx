import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import BookingBanner from '../components/BookingBanner';
import SectionHeading from '../components/SectionHeading';
const A='/media/';
const services=[
 ['Nail extensions','Length, shape and a finish that feels like you.','IMG_3749.webp','01'],
 ['Nail art','Expressive details, delicate accents or a design that makes a statement.','B612_20220808_124322_136.webp','02'],
 ['Gel & classic finishes','A polished look for everyday confidence and special moments.','IMG_3583.webp','03'],
 ['Custom nail looks','Bring your inspiration. We can explore a look that feels personal.','IMG_1051.webp','04']
];
export default function Services(){return <main>
  <section className="page-hero page-hero-services"><div className="page-hero-photo" style={{backgroundImage:`url("${A}IMG_3749.webp")`}}/><div className="page-hero-shade"/><div className="page-hero-copy"><span className="eyebrow">THE ART OF THE FINISH</span><h1>Find your<br/><em>signature.</em></h1><p>Thoughtful details. Beautifully finished.</p></div><span className="page-hero-index">02 — THE SERVICE MENU</span></section>
  <section className="services-intro section-shell"><SectionHeading eyebrow="THE SERVICE MENU" title={<>A little something<br/><em>for every style.</em></>} copy="Explore the kind of nail artistry we love. For current availability, service details and pricing, get in touch with the studio."/><div className="service-list" data-stagger>{services.map(([name,desc,img,num])=><article className="service-row" key={name}><span className="service-row-num">{num}</span><div className="service-row-img"><img src={A+img} alt={name} loading="lazy"/></div><div className="service-row-text"><h3>{name}</h3><p>{desc}</p></div><a data-magnetic href={`https://wa.me/919771865006?text=${encodeURIComponent('Hi, I would like to know more about '+name+'.')}`} target="_blank" rel="noreferrer" aria-label={`Enquire about ${name}`}><ArrowUpRight/></a></article>)}</div></section>
  <section className="service-note"><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let's make it <em>yours.</em></h2><p>Share a reference, an idea or simply the mood you're after. We'll help you plan your visit.</p><a className="button button-gold magnetic" data-magnetic href="https://wa.me/919771865006?text=Hi%2C%20I%20would%20like%20to%20ask%20about%20your%20services." target="_blank" rel="noreferrer">Ask about a service <ArrowUpRight size={16}/></a></section>
  <BookingBanner/>
</main>}
