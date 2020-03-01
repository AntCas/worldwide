import React, { useState } from "react"

import './Testimonials.scss';

const testimonials = [
  {
    testimonial: "Probably the best meet-up I’ve ever been a part of. The community just rocks. I’ll definitely be attending the next event.",
    name: "Bob Job",
    bio: "Founder of CoolCo",
    image: "",
    backlink: ""
  },
  {
    testimonial: "Probably the best meet-up I’ve ever been a part of. The community just rocks. I’ll definitely be attending the next event.",
    name: "Bob Job",
    bio: "Founder of CoolCo",
    image: "",
    backlink: ""
  },
  {
    testimonial: "Probably the best meet-up I’ve ever been a part of. The community just rocks. I’ll definitely be attending the next event.",
    name: "Bob Job",
    bio: "Founder of CoolCo",
    image: "",
    backlink: ""
  },
]

const Testimonials = () => {
  const [selected, setSelected] = useState(1);

  const Items = testimonials.map((data, i) => {
    console.log(data, i, selected);
    return (
    <li
      key={i}
      onClick={() => setSelected(i)}
      className={`Testimonial${i === selected ? ' isActive' : ''}`}
    >
      <p className="Text">{`"${data.testimonial}"`}</p>
      <a className="Attribution" href={data.backlink}>
        <div className="Image">image</div>
        <div className="Info">
          <div className="Name">{data.name}</div>
          <div className="Bio">{data.bio}</div>
        </div>
      </a>
    </li>
    )
  });

  return (
    <ul className="Testimonials">{Items}</ul>
  );
}

export default Testimonials
