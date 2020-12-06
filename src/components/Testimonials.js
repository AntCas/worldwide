import React, { useState } from "react"

import Slider from "react-slick";
// required by react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Testimonials.scss';

import UpArrow from "../assets/chalk-arrow-up.svg";

const Testimonials = ({testimonials}) => {
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
        {data.shoutout &&
          <div className="Shoutout">
            <UpArrow className="Arrow" />
            <p className="ArrowLabel">{data.shoutout}</p>
          </div>
        }
      </a>
    </div>
    )
  });

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
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
        breakpoint: 1200,
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
