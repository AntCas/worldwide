import React from "react"

import './Hero.scss';

const nextEvent = {
  date: "October 10th",
  url: "https://www.mixily.com/event/5853708572761154126"
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
