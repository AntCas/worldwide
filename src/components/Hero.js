import React from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';

import NextEventCTA from "./NextEventCTA";

import './Hero.scss';

const nextEvent = {
  text: "Indie Worldwide - Weekend Meetup II",
  exactDate: "Saturday, May 16 at 10 am – 11:30 am EDT",
  month: "May",
  date: "16",
  url: "https://hopin.to/events/indie-worldwide-weekend-meetup-ii"
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
        <p className="BackupCTA" onClick={() => scrollTo('#Subscribe')}>{`Can't make it?`}</p>
      </div>
    </section>
  )
}

export default Hero;
