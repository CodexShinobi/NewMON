import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
export default function BookingBanner() {
  return <section className="booking-banner" data-reveal>
    <div className="booking-orbit" aria-hidden="true"><span/><span/><span/></div>
    <div className="booking-content"><span className="eyebrow"><Sparkles size={13}/> YOUR NEXT FAVOURITE LOOK STARTS HERE</span><h2>Make time for<br/><em>beautiful.</em></h2><p>Let's create something that feels like you.</p><a className="button button-gold magnetic" data-magnetic href="https://wa.me/919771865006?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noreferrer">Book on WhatsApp <ArrowUpRight size={16}/></a></div>
  </section>;
}
