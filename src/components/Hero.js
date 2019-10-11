import React from "react"

import './Hero.scss';

const nextEvent = {
  date: "October 22nd",
  url: "https://www.eventbrite.com/e/worldwide-qa-w-juliet-oberding-of-dappity-predictably-well-tickets-76088168761"
}

const Hero = ({ siteTitle }) => (
  <section className="Hero">
    <h2 className="HeroHeader">Worldwide</h2>
    <h3 className="Subheader">where indie hackers meet</h3>
    <a className="CTA" href={nextEvent.url}>
      {`Next Meetup: ${nextEvent.date}`}
    </a>
  </section>
)

export default Hero;
