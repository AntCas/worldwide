import React, { useState } from "react"

import Slider from "react-slick";
// required by react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Dan from "../images/testimonials/Dan.png";
import Dru from "../images/testimonials/Dru.jpg";
import Marc from "../images/testimonials/Marc.jpg";
import Volkan from "../images/testimonials/Volkan.jpg";
import Heliodor from "../images/testimonials/Heliodor.jpg";

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
    testimonial: "As a founder of an early stage remote company Indie Worldwide gives me the opportunity to talk to peers that I normally wouldn't get. The calls are great and I love how passionate Anthony is for the Indie Hackers space.",
    name: "Volkan Kaya",
    bio: "Founder, Versoly",
    image: Volkan,
    backlink: "https://versoly.com/"
  },
  {
    testimonial: "Worldwide is an excellent resource for bootstrapping your company! It's an amazing group of talented and experienced people helping each other move their businesses forward. I finish every session feeling energized with insightful and actionable next steps.",
    name: "Heliodor Jalba",
    bio: "Founder, HostedMetrics.com",
    image: Heliodor,
    backlink: "https://hostedmetrics.com"
  },
]

const Testimonials = () => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * Math.floor(testimonials.length)));

  const Items = testimonials.map((data, i) => {
    return (
    <div
      key={i}
      index={i}
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
    </div>
    )
  });

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    initialSlide: selected,
    lazyLoad: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 500,
    afterChange: current => setSelected(current),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="Testimonials">{Items}</Slider>
  );
}

export default Testimonials
