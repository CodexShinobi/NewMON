import React from 'react';
import { ArrowUpRight, Instagram, MapPin, Mail, MessageCircle, Clock3 } from 'lucide-react';
import BookingBanner from '../components/BookingBanner';
export default function Contact(){return <main>
 <section className="page-hero page-hero-contact"><div className="page-hero-photo" style={{backgroundImage:"url('/media/IMG_4535.webp')"}}/><div className="page-hero-shade"/><div className="page-hero-copy"><span className="eyebrow">WE'D LOVE TO HEAR FROM YOU</span><h1>Your next visit<br/>starts <em>here.</em></h1><p>Let's make your next nail appointment a little moment to look forward to.</p></div><span className="page-hero-index">04 — SAY HELLO</span></section>
 <section className="contact-section section-shell"><div className="contact-lead" data-reveal><span className="eyebrow">GET IN TOUCH</span><h2>Let's talk<br/><em>nails.</em></h2><p>Have a question, an idea or ready to book? Reach out and we'll help you plan your visit.</p><a className="button button-gold magnetic" data-magnetic href="https://wa.me/919771865006" target="_blank" rel="noreferrer">Message the studio <ArrowUpRight size={16}/></a></div><div className="contact-details" data-stagger>
  <a href="https://wa.me/919771865006" target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><small>WHATSAPP / CALL</small><strong>+91 97718 65006</strong><p>For appointments and enquiries</p></div><ArrowUpRight/></a>
  <a href="mailto:theministryofnails@gmail.com"><span><Mail/></span><div><small>EMAIL</small><strong>theministryofnails@gmail.com</strong><p>We'd love to hear from you</p></div><ArrowUpRight/></a>
  <div className="contact-static"><span><MapPin/></span><div><small>FIND THE STUDIO</small><strong>Purnea, Bihar, India</strong><p>Contact us for directions and appointment availability.</p></div></div>
  <a href="https://www.instagram.com/theministryofnails/" target="_blank" rel="noreferrer"><span><Instagram/></span><div><small>FOLLOW ALONG</small><strong>@theministryofnails</strong><p>See more of our nail artistry</p></div><ArrowUpRight/></a>
  <div className="contact-static"><span><Clock3/></span><div><small>APPOINTMENTS</small><strong>By prior arrangement</strong><p>Message us to check available timings.</p></div></div>
 </div></section>
 <section className="contact-bottom"><div><span className="eyebrow">A MOMENT FOR YOURSELF</span><h2>We can't wait<br/>to see <em>you.</em></h2><a className="button button-gold magnetic" data-magnetic href="https://wa.me/919771865006?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={16}/></a></div></section>
 <BookingBanner/>
 </main>}
