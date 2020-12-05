import React from "react"
import './Summary.scss';

const Summary = ({header, description}) => (
  <section className="Summary">
    <h2 className="Title">{header}</h2>
    <p className="Description">{description}</p>
  </section>
)

export default Summary
