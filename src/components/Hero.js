import React from "react"

import './Hero.scss';

const Hero = ({ header, subheader }) => {
  return (
    <section className="Hero">
      <div className="HeroInner">
        <h2 className="HeroHeader">{header}</h2>
        <h3 className="Subheader">{subheader}</h3>
      </div>
    </section>
  )
}

export default Hero;
