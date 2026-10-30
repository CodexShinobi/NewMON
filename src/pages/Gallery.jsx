import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import BookingBanner from '../components/BookingBanner';
const A='/media/';
const images=['IMG_3749.webp','B612_20220808_124322_136.webp','IMG_3583.webp','IMG_4069.webp','IMG_1051.webp','IMG_3316.webp','IMG_2498.webp','B612_20220809_140457_357.webp','AF1QipMHZ4nctlVHSMIEteTUOLNd82NCwreCs_0wasR0=s512.webp','AF1QipNaPIitr_Rppv7mkSjYBtTg1MkfFeDJJd0YDb2j=w203-h252-k-no.webp','20220802_113608_0001.webp','B612_20220803_190554_965.webp'];
export default function Gallery(){
 const [selected,setSelected]=useState(null);
 const close=()=>setSelected(null);
 const previous=()=>setSelected(i=>(i-1+images.length)%images.length);
 const next=()=>setSelected(i=>(i+1)%images.length);
 useEffect(()=>{
  if(selected===null)return;
  const onKey=(event)=>{if(event.key==='Escape')close();if(event.key==='ArrowLeft')previous();if(event.key==='ArrowRight')next();};
  const old=document.body.style.overflow; document.body.style.overflow='hidden';
  window.addEventListener('keydown',onKey);
  return()=>{document.body.style.overflow=old;window.removeEventListener('keydown',onKey);};
 },[selected]);
 return <main>
  <section className="page-hero page-hero-gallery"><div className="page-hero-photo" style={{backgroundImage:`url("${A}images - 2022-07-29T120329.539.webp")`}}/><div className="page-hero-shade"/><div className="page-hero-copy"><span className="eyebrow">A LITTLE INSPIRATION</span><h1>Our work.<br/><em>Your muse.</em></h1><p>Colour, creativity and a little self-expression.</p></div><span className="page-hero-index">03 — THE NAIL EDIT</span></section>
  <section className="gallery-page section-shell"><div className="gallery-intro" data-reveal><span className="eyebrow">THE MINISTRY NAIL EDIT</span><p>Every set tells a story. Explore a few of the looks we've loved creating — and find inspiration for your next visit.</p></div><div className="gallery-masonry" data-stagger>{images.map((img,i)=><button className={`gallery-tile tile-${i%4}`} key={img} onClick={()=>setSelected(i)} aria-label={`Open nail design ${i+1}`}><img src={A+img} alt={`Nail design ${i+1}`} loading="lazy"/><span>VIEW LOOK <ArrowUpRight size={15}/></span></button>)}</div><p className="gallery-note">YOUR NEXT LOOK COULD BE HERE.</p></section>
  {selected!==null&&<div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Nail design preview" onClick={close}><button className="lightbox-close" aria-label="Close image" onClick={close}><X/></button><button className="lightbox-prev" aria-label="Previous image" onClick={e=>{e.stopPropagation();previous();}}><ChevronLeft/></button><img onClick={e=>e.stopPropagation()} src={A+images[selected]} alt={`Nail design ${selected+1} of ${images.length}`}/><button className="lightbox-next" aria-label="Next image" onClick={e=>{e.stopPropagation();next();}}><ChevronRight/></button><span className="lightbox-count">{String(selected+1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}</span></div>}
  <BookingBanner/>
 </main>;
}
