import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SocialLinks from './SocialLinks';

import './Footer.scss';

const Footer = ({ siteTitle }) => (
  <header className="Footer">
    <div className="FooterContent">
      <h1 className="FooterLogo">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <p className="Copyright">
        © {new Date().getFullYear()} Worldwide, 
        <a href="https://formico.io"> Formico, LLC</a>
      </p>
      <SocialLinks />
    </div>
  </header>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
