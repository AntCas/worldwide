import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SocialLinks from './SocialLinks';

import './header.scss';

const Header = ({ siteTitle }) => (
  <header className="SiteHeader">
    <div className="HeaderContent">
      <h1 className="HeaderLogo">
        <Link to="/">
          {siteTitle}
        </Link>
        <SocialLinks />
      </h1>
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
