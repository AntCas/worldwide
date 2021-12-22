import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SocialLinks from './SocialLinks';

import Logo from "../assets/iw-logo.svg";
import UnitaBadge from "../assets/unita-badge.svg";

import './Footer.scss';

const Footer = ({ siteTitle }) => (
  <footer className="Footer">
    <a className="Badge" href="https://www.unita.co/communities/indie-worldwide/">
      <UnitaBadge alt="Unita Top 10 Community Badge" />
    </a>
    <div className="FooterContent">
      <h1 className="FooterLogo">
        <Link to="/">
           <Logo alt="Indie Worldwide Logo" />
        </Link>
      </h1>
      <p className="Copyright">
        © {new Date().getFullYear()} Indie Worldwide &
        <a href="https://formico.io"> Formico, LLC</a>
      </p>
      <SocialLinks />
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
