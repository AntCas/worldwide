import React from "react"

import Button from "./Button";

import './Hero.scss';

const nextEvent = {
  date: "March 12th",
  url: "https://hopin.to/events/indie-worldwide-march-2020-meetup"
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
