import React from "react"

import Button from "./Button";

import './Hero.scss';

const nextEvent = {
  date: "November 19th",
  url: "https://www.mixily.com/event/3761852409542822844"
}

const Hero = ({ siteTitle }) => (
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

export default Hero;
