import React from 'react';
export default function SectionHeading({eyebrow,title,copy,light=false}) {
  return <div className={`section-heading ${light?'section-heading-light':''}`} data-reveal>
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
    {copy && <p>{copy}</p>}
  </div>;
}
