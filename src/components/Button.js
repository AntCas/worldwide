import React from "react"
import PropTypes from "prop-types"

import './Button.scss';

const Button = ({text, link, className}) => (
  <a className={`Button ${className}`} href={link}>
    {text}
  </a>
)

Button.propTypes = {
  text: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
}

export default Button;
