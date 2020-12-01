import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import ArrowRight from "../assets/arrow-right.svg";

import './EmailListSignup.scss';

const EmailListSignup = () => {
  const [email, setEmail] = useState();
  const [result, setResult] = useState();
  const [message, setMessage] = useState();

  const resetState = () => {
    setResult('');
    setMessage('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { result, msg } = await addToMailchimp(email)
    setResult(result);
    if (msg.includes('subscribed')) setMessage('This email is already subscribed.');
    else setMessage(msg.replace(/\d|( - )/g, ''));

    if (result === 'success') setEmail('');
  }

  const handleInputChange = event => {
    resetState();
    const target = event.target
    const { value } = target;
    setEmail(value);
  }

  return (
    <section className="EmailListSignup" id="Subscribe">
      <h2 className="EmailSignupHeader">Join our community of 1,000+ indie makers.</h2>
      <form onSubmit={handleSubmit} className={`${result === 'error' ? 'Error' : ''}`}>
        <input
          className="EmailInput"
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
        <button className="Submit" type="submit">
          <ArrowRight className="Arrow" />
        </button>
      </form>
      <p className="Message">{message}</p>
    </section>
  );
}

export default EmailListSignup;
