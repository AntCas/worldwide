import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import ArrowRight from "../assets/arrow-right.svg";

import './EmailListSignup.scss';

const EmailListSignup = () => {
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const { result } = await addToMailchimp(email)
    console.log(result);
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }

  const handleInputChange = event => {
    const target = event.target
    const { value, name } = target;
    setEmail(value);
  }

  return (
    <section className="EmailListSignup">
      <h2>Keep in the Know</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="EmailInput"
          type="text"
          name="email"
          onChange={handleInputChange}
          placeholder="Email here"
        />
        <button className="Submit" type="submit">
          <ArrowRight className="Arrow" />
        </button>
      </form>
    </section>
  );
}

export default EmailListSignup;
