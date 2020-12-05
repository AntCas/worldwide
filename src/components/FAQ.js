import React from "react"

import './FAQ.scss';

const FAQ = ({faq}) => {
  const FAQ = faq.map(({question, answer}, i) => {
    return (
    <div
      key={i}
      className="FAQ"
    >
      <p className="Question">{question}</p>
      <p className="Answer">{answer}</p>
    </div>
    )
  });

  return (
    <section className="FAQSection">
      <h2>FAQ</h2>
      {FAQ}
    </section>
  );
}

export default FAQ
