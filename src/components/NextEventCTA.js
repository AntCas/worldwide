import React from "react"

import './NextEventCTA.scss';
import ArrowRight from "../assets/arrow-right.svg";

const Button = ({
  text="Online Meetup for Startup Founders",
  startDate="4/21/2022, 12:00 PM GMT-0400",
  endDate="4/21/2022, 1:30 PM GMT-0400",
  link="https://hopin.com/events/online-meetup-for-startup-founders?code=VulW4BVYWfN8ptiDaDNKW8LMd",
  className
}) => {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
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
