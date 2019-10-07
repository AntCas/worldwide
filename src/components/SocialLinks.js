import PropTypes from "prop-types"
import React from "react"

import Email from "../assets/email.svg";
import Facebook from "../assets/facebook.svg";
import Slack from "../assets/slack.svg";
import Twitter from "../assets/twitter.svg";
import YouTube from "../assets/youtube.svg";

import './header.scss';

const links = [
  {
    title: "YouTube",
    url: "https://formico.typeform.com/to/yN96tS",
    icon: <YouTube style={{fill: 'white'}} />
  },
  {
    title: "Mailing List",
    url: "https://formico.typeform.com/to/yN96tS",
    icon: <Email style={{fill: 'white'}} />
  },
  {
    title: "Facebook",
    url: "https://formico.typeform.com/to/yN96tS",
    icon: <Facebook style={{fill: 'white'}} />
  },
  {
    title: "Slack",
    url: "https://formico.typeform.com/to/yN96tS",
    icon: <Slack style={{fill: 'white'}} />
  },
  {
    title: "Twitter",
    url: "https://formico.typeform.com/to/yN96tS",
    icon: <Twitter style={{fill: 'white'}} />
  },
];

const socialLinks = links.map((item, i) => (
  <li key={i}>
    <a href={item.url} title={item.title}>
      {item.icon}
    </a>
  </li>
))

const SocialLinks = ({ siteTitle }) => (
  <nav className="SocialLinks">
    <ul>
      { socialLinks }
    </ul>
  </nav>
)

SocialLinks.propTypes = {
  siteTitle: PropTypes.string,
}

export default SocialLinks;
