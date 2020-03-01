import React from "react"

import SocialLinks from "./SocialLinks";
import Button from "./Button";

import './Summary.scss';

const Summary = () => (
  <section className="Summary">
    <h2 className="Title">What is Worldwide?</h2>
    <p className="Description">{`A community for makers who can't get to an in-person meetup group or want to expand their circle beyond their local area. We host online video chats where you can make friends, meet potential co-founders or clients, and get advice. 100% online.`}</p>
  </section>
)

export default Summary
