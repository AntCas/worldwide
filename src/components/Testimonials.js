import React, { useState } from "react"

import Dan from "../images/testimonials/Dan.png";
import Dru from "../images/testimonials/Dru.jpg";
import Marc from "../images/testimonials/Marc.jpg";
import Volkan from "../images/testimonials/Volkan.jpg";

import './Testimonials.scss';

const testimonials = [
  {
    testimonial: "Indie Worldwide has been a fantastic experience for me as a community of entrepreneurs and self starters. Awesome to get feedback, get asked hard questions, and get that extra push to keep going.",
    name: "Dan Bogachek",
    bio: "Founder, Handwrite",
    image: Dan,
    backlink: "https://handwrite.io/"
  },
  {
    testimonial: "...Indie Hackers from around the world bring unique perspectives while showing that we go through common struggles as makers. I was ready for the next event before the first one was over.",
    name: "Dru Riley",
    bio: "Founder, StrongStack",
    image: Dru,
    backlink: "https://strongstack.io/"
  },
  {
    testimonial: "Coffee, exercise, and IH Worldwide are my tools for being a more productive indie hacker. Whenever I get stuck on something, I find helpful feedback and tips. It's a great community!",
    name: "Marc Lavigne-Gagnon",
    bio: "Founder, PaleoTrack",
    image: Marc,
    backlink: "https://marc.lavigne-gagnon.com/"
  },
  {
    testimonial: "As a founder of an early stage remote company Indie Worldwide gives me the opportunity to talk to peers that I normally wouldn't get. The calls are great...",
    name: "Volkan Kaya",
    bio: "Founder, Versoly",
    image: Volkan,
    backlink: "https://versoly.com/"
  },
]

const Testimonials = () => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * Math.floor(testimonials.length)));

  const Items = testimonials.map((data, i) => {
    return (
    <li
      key={i}
      onClick={() => setSelected(i)}
      className={`Testimonial${i === selected ? ' isActive' : ''}`}
    >
      <p className="Text">{`"${data.testimonial}"`}</p>
      <a className="Attribution" href={data.backlink}>
        <img alt={data.name} src={data.image} className="Image" />
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
