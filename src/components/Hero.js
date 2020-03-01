import React from "react"

import NextEventCTA from "./NextEventCTA";

import './Hero.scss';

const nextEvent = {
  text: "Indie Worldwide - March 2020 Meetup",
  exactDate: "Thursday, 12 March 2020 - 8:00PM CEST",
  month: "March",
  date: "12",
  url: "https://hopin.to/events/indie-worldwide-march-2020-meetup"
}

const Hero = ({ siteTitle }) => {
  return (
    <section className="Hero">
      <div className="HeroInner">
        <h2 className="HeroHeader">Worldwide</h2>
        <h3 className="Subheader">where indie hackers meet</h3>
        <NextEventCTA
          text={nextEvent.text}
          exactDate={nextEvent.exactDate}
          month={nextEvent.month} 
          date={nextEvent.date}
          link={nextEvent.url}
        />
      </div>
    </section>
  )
}

export default Hero;
