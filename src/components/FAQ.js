import React, { useState } from "react"

import './FAQ.scss';

const FAQ = ({faq}) => {
  const [selected, setSelected] = useState(0);

  const FAQ = faq.map(({question, answer}, i) => {
    return (
    <div
      key={i}
      index={i}
      onClick={() => selected === i ? setSelected('') : setSelected(i)}
      onKeyDown={() => selected === i ? setSelected('') : setSelected(i)}
      role="button"
      tabIndex={0}
      className="FAQ"
    >
      <div className="Question">
        <div className="Indicator">{`${i === selected ? '-' : '+'}`}</div>
        <p>{`${question}`}</p>
      </div>
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
