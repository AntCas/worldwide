import React from "react"

import './Testimonials.scss';

const Testimonials = ({testimonials, responsive}) => {
  const Items = testimonials.map((data, i) => {
    return (
    <div key={i} className={`Testimonial ${responsive && 'Responsive'}`}>
      <p className="Text">{`"${data.testimonial}"`}</p>
      <a className="Attribution" href={data.backlink}>
        <img alt={data.name} src={data.image} className="Image" />
        <div className="Info">
          <div className="Name">{data.name}</div>
          <div className="Bio">{data.bio}</div>
        </div>
      </a>
    </div>
    )
  });

  return (
    <section className="Testimonials">{Items}</section>
  );
}

export default Testimonials
