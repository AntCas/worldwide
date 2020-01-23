import React, { useState } from "react"

import Button from "./Button";

import './Hero.scss';

const nextEvent = {
  date: "January 29th",
  url: "https://hopin.to/events/worldwide-2020-meetup-1"
}

const Hero = ({ siteTitle }) => {
  const [degrees, setDegrees] = useState(0);

  return (
    <section
      className="Hero"
    >
      <div className="HeroInner">
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
