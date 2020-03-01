import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../assets/iw-logo.svg";
import SocialLinks from './SocialLinks';

import './header.scss';

const Header = ({ siteTitle }) => (
  <header className="SiteHeader">
    <div className="HeaderContent">
      <h1 className="HeaderLogo">
        <Link to="/" >
          <Logo alt="Indie Worldwide Logo" />
        </Link>
      </h1>
      <SocialLinks />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
