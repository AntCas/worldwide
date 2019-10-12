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
        <p>Worldwide is a community for makers who can't get to an in-person meetup group or want to expand their circle beyond their local area.</p>
        <p>We host online video chats with 5-6 other makers at a time where you can make friends, and get advice.</p>
        <p>100% online.</p>
      </li>
      <li className="BreakdownItem">
        <h3>Q&A's</h3>
        <p>Open sessions with founders who've built companies with minimal funding.</p>
        <p>Ask anything you want and find out how they made their business a success.</p>
        <p>Interested in doing a Q&A?</p>
        <Button text="Contact Us" className="Contact" link=""/>
      </li>
      <li className="BreakdownItem">
        <h3>Community</h3>
        <p>Worldwide is all over the web. Join us wherever it's most convenient for you</p>
        <div className="SocialLinksWrapper">
          <SocialLinks dark={true} />
        </div>
      </li>
    </ul>
  </section>
)

export default Summary
