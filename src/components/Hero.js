import React from "react"

import './Hero.scss';

const Hero = ({ siteTitle }) => {
  return (
    <section className="Hero">
      <div className="HeroInner">
        <h2 className="HeroHeader">Welcome to Indie Worldwide</h2>
        <h3 className="Subheader">A online meetup group for hackers, makers, and founders</h3>
      </div>
    </section>
  )
}

export default Hero;
