import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import './Button.scss';

const Button = ({text, link, className}) => (
  <Link className={`Button ${className}`} to={link}>
    {text}
  </Link>
)

Button.propTypes = {
  text: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
}

export default Button;
