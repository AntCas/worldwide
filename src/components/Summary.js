import React from "react"

import SocialLinks from "./SocialLinks";
import Button from "./Button";

import './Summary.scss';

const Summary = () => (
  <section className="Summary">
    <h2>A online meetup group for hackers, makers, and founders.</h2>
    <ul className="Breakdown">
      <li className="BreakdownItem">
        <h3>Meetups</h3>
        <p>Worldwide was started to provide a community to everyone who doesn't live near an in-person meetup group or isn't able to get to one. We host online video chats with 5-6 other makers at a time where you can ask questions, make friends, and get advice.<br/><br/>100% online.</p>
      </li>
      <li className="BreakdownItem">
        <h3>Q&A's</h3>
        <p>Open sessions with founders who've built companies with minimal funding. Ask anything you want and find out how they made their business a success.</p>
        <p>Interested in doing a Q&A?</p>
        <Button text="Contact Us" link="" size=""/>
      </li>
      <li className="BreakdownItem">
        <h3>Community</h3>
        <ul>
          <SocialLinks />
        </ul>
      </li>
    </ul>
  </section>
)

export default Summary
