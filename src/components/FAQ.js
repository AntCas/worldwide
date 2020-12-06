import React, { useState } from "react"

import './FAQ.scss';

const FAQ = ({faq}) => {
  const [selected, setSelected] = useState();

  const FAQ = faq.map(({question, answer}, i) => {
    return (
    <div
      key={i}
      index={i}
      onClick={() => selected === i ? setSelected('') : setSelected(i)}
      className="FAQ"
    >
      <p className="Question">{`+ ${question}`}</p>
      <p className={`Answer${i === selected ? ' isActive' : ''}`}>{answer}</p>
    </div>
    )
  });

  return (
    <section className="FAQSection">
      <h2>FAQ</h2>
      <div className="Items">
        {FAQ}
      </div>
    </section>
  );
}

export default FAQ
