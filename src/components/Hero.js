import React from "react"

import Button from "./Button";

import './Hero.scss';

const nextEvent = {
  date: "February 13th",
  url: "https://hopin.to/events/indie-worldwide-meetup-february-2020"
}

const Hero = ({ siteTitle }) => {
  return (
    <section className="Hero">
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
