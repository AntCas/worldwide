import React, { useState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import ArrowRight from "../assets/arrow-right.svg";

import './EmailListSignup.scss';

const EmailListSignup = ({headline, inputText}) => {
  const [email, setEmail] = useState();
  const [result, setResult] = useState();
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const resetState = () => {
    setResult('');
    setMessage('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult('');
    try {
      const { result, msg } = await addToMailchimp(email)
      setResult(result);
      if (msg.includes('subscribed')) setMessage('This email is already subscribed.');
      else setMessage(msg.replace(/\d|( - )/g, ''));

      if (result === 'success') {
        setEmail('');
        window.history.pushState({}, '', '/');
        window.location.replace('/post-signup');
      }
    } catch (e) {
      setResult('error');
      setMessage("Ouch, hit an error. This form breaks on browsers with strict privacy settings.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleInputChange = event => {
    resetState();
    const target = event.target
    const { value } = target;
    setEmail(value);
  }

  return (
    <section className="EmailListSignup" id="Subscribe">
      <h2 className="EmailSignupHeader">{headline}</h2>
      <form
        onSubmit={handleSubmit}
        className={`${result === 'error' ? 'Error' : ''} ${isLoading && 'Disabled'}`}
      >
        <fieldset disabled={isLoading}>
          <input
            className="EmailInput"
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder={inputText ? inputText : "Enter your email"}
          />
          <button className="Submit" type="submit">
            <ArrowRight className="Arrow" />
          </button>
        </fieldset>
      </form>
      <p className="Message">{message}</p>
    </section>
  );
}

export default EmailListSignup;
