import React from "react"

import './NextEventCTA.scss';
import ArrowRight from "../assets/arrow-right.svg";

const Button = ({
  text="Indie Worldwide Meetup - Spring Edition",
  startDate="5/19/2022, 12:00 PM GMT-0400",
  endDate="5/19/2022, 1:30 PM GMT-0400",
  link="https://hopin.com/events/indie-worldwide-indie-hacker-meetup-spring-edition?code=UkVwYuOLvmnvVUbjTGkVezEZj",
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
