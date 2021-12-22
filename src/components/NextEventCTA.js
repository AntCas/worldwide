import React from "react"
import PropTypes from "prop-types"

import './NextEventCTA.scss';
import ArrowRight from "../assets/arrow-right.svg";

const Button = ({text, startDate, endDate, link, className}) => {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timezone: 'short' };
  return (
    <section className="NextEventCTAWrapper">
      <a className={`NextEventCTA ${className}`} href={link}>
        <div className="NextEvent">NEXT EVENT</div>
        <div className="EventButton">
          <div className="DateIcon">
            <div className="Month">{startDateObj.toLocaleDateString('en-US', {month: 'short'})}</div>
            <div className="Date">{startDateObj.toLocaleDateString('en-US', {day: 'numeric'})}</div>
          </div>
          <div className="Info">
            <div className="EventTitle">{text}</div>
            <div className="ExactDate">{
              `${startDateObj.toLocaleDateString('en-US', {month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})} \
                → ${endDateObj.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', timeZoneName: 'short'})}`}
            </div>
          </div>
          <div className="ArrowWrapper">
            <ArrowRight className="Arrow" />
          </div>
        </div>
      </a>
    </section>
  )
}

Button.propTypes = {
  text: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
}

export default Button;
