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
        <h2 className="HeroHeader">Welcome to Indie Worldwide</h2>
        <h3 className="Subheader">A online meetup group for hackers, makers, and founders</h3>
        <NextEventCTA
          text={nextEvent.text}
          exactDate={nextEvent.exactDate}
          month={nextEvent.month} 
          date={nextEvent.date}
          link={nextEvent.url}
          className="CTA"
        />
      </div>
    </section>
  )
}

export default Hero;
