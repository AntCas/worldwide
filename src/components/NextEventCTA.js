import React from "react"
import PropTypes from "prop-types"

import './NextEventCTA.scss';
import ArrowRight from "../assets/arrow-right.svg";

const Button = ({
  text="Indie Worldwide - Meetup for Bootstrapped Founders",
  startDate="2/17/2022, 12:00 PM GMT-0600",
  endDate="2/17/2022, 1:30 PM GMT-0600",
  link="https://hopin.com/events/meetup-for-bootstrapped-founders?code=9S2psdbuZrhIoZialugHGRqxt",
  className
}) => {
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

export default Button;
