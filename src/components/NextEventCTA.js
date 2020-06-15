import React from "react"
import PropTypes from "prop-types"

import scrollTo from 'gatsby-plugin-smoothscroll';

import './NextEventCTA.scss';
import ArrowRight from "../assets/arrow-right.svg";

const Button = ({text, exactDate, month, date, link, className}) => (
  <section className="NextEventCTAWrapper">
    <a className={`NextEventCTA ${className}`} href={link}>
      <div className="NextEvent">NEXT EVENT</div>
      <div className="EventButton">
        <div className="DateIcon">
          <div className="Month">{month}</div>
          <div className="Date">{date}</div>
        </div>
        <div className="Info">
          <div className="EventTitle">{text}</div>
          <div className="ExactDate">{exactDate}</div>
        </div>
        <div className="ArrowWrapper">
          <ArrowRight className="Arrow" />
        </div>
      </div>
    </a>
    <p className="BackupCTA" onClick={() => scrollTo('#Subscribe')}>{`Can't make it?`}</p>
  </section>
)

Button.propTypes = {
  text: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
}

export default Button;
