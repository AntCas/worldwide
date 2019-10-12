import React from "react"

import Button from "./Button";

import './Hero.scss';

const nextEvent = {
  date: "October 22nd",
  url: "https://www.eventbrite.com/e/worldwide-qa-w-juliet-oberding-of-dappity-predictably-well-tickets-76088168761"
}

const Hero = ({ siteTitle }) => (
  <section className="Hero">
    <h2 className="HeroHeader">Worldwide</h2>
    <h3 className="Subheader">where indie hackers meet</h3>
    <Button
      className="CTA"
      text={`Next Meetup: ${nextEvent.date}`}
      link={nextEvent.url} />
  </section>
)

export default Hero;
