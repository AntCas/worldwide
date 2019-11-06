import React, { useState } from "react"

import Button from "./Button";

import './Hero.scss';

const nextEvent = {
  date: "November 19th",
  url: "https://www.mixily.com/event/3761852409542822844"
}

const Hero = ({ siteTitle }) => {
  const [degrees, setDegrees] = useState(0);

  const mouseMoveCallback = e => {
    const { width, height } = e.target.getBoundingClientRect();
    const yPosition = e.clientY - e.target.offsetTop;
    const xPosition = e.clientX - e.target.offsetLeft;

    let mouseXpercentage = ((xPosition / width) - .5) * -100;
    let mouseYpercentage = ((yPosition / height) - .5) * -100;
    let degrees = Math.atan(mouseXpercentage/mouseYpercentage) * (360/Math.PI)

    setDegrees(degrees);
  };

  return (
    <section
      className="Hero"
      onMouseMove={mouseMoveCallback}
    >
      <div className="HeroInner" style={{background: `linear-gradient(${degrees}deg, rgba(197,30,231,.3) 0%, rgba(4,14,28,.3) 33%)`}}>
        <h2 className="HeroHeader">Worldwide</h2>
        <h3 className="Subheader">where indie hackers meet</h3>
        <Button
          className="CTA"
          text={`Next Meetup: ${nextEvent.date}`}
          link={nextEvent.url} />
      </div>
    </section>
  )
}

export default Hero;
