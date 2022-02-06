import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SocialLinks from './SocialLinks';

import Logo from "../assets/iw-logo.svg";
import UnitaBadge from "../assets/unita-badge.svg";

import './Footer.scss';

const Footer = ({ siteTitle }) => (
  <footer className="Footer">
    <div className="FooterContent">
      <div className="FooterLeft">
        <Link className="SiteLink" to="/community-guidelines">Community Guidelines</Link>
        <Link className="SiteLink" to="/founders-club">Founders Club</Link>
        <Link className="SiteLink" to="/free-resources-for-startup-founders">Partner Deals - Free Resources</Link>
        <Link className="SiteLink" to="/podcast">Podcast</Link>
        <Link className="SiteLink" to="/post-signup">Getting Started</Link>
        <Link className="SiteLink" to="/wall-of-love">Wall of Love</Link>
        <a className="SiteLink" href="https://indieworldwide.notion.site/16df0d3322e6496ba524737a647f3639?v=f18f5cccb2fd428580cace4d7d292be2">Events Calendar</a>
      </div>
      <a className="Badge" href="https://www.unita.co/communities/indie-worldwide/">
        <UnitaBadge alt="Unita Top 10 Community Badge" />
      </a>
      <div className="FooterRight">
        <div className="FooterLogo">
          <Link to="/">
             <Logo alt="Indie Worldwide Logo" />
          </Link>
        </div>
        <SocialLinks />
      </div>
    </div>
    <p className="Copyright">
      © {new Date().getFullYear()} Indie Worldwide & <a href="https://formico.io">Formico, LLC</a>
    </p>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
