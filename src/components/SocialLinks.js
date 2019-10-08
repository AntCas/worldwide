import PropTypes from "prop-types"
import React from "react"

import Email from "../assets/email.svg";
import Facebook from "../assets/facebook.svg";
import IH from "../assets/ih.svg";
import Slack from "../assets/slack.svg";
import Twitter from "../assets/twitter.svg";
import YouTube from "../assets/youtube.svg";

import './SocialLinks.scss';

const links = [
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UCMps9pFrqetqXMCEZqkiQ-g/",
    icon: <YouTube style={{fill: 'white'}} />
  },
  {
    title: "Twitter",
    url: "https://twitter.com/ih_worldwide",
    icon: <Twitter style={{fill: 'white'}} />
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/groups/indie.hackers.worldwide/",
    icon: <Facebook style={{fill: 'white'}} />
  },
  {
    title: "Slack",
    url: "https://app.slack.com/client/TGUK83BPA/",
    icon: <Slack style={{fill: 'white'}} />
  },
  {
    title: "Indie Hackers",
    url: "https://www.indiehackers.com/product/worldwide",
    icon: <IH style={{fill: 'white'}} />
  },
  {
    title: "Mailing List",
    url: "https://formico.typeform.com/to/yN96tS",
    icon: <Email style={{fill: 'white'}} />
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
    <ul className="LinkList">
      { socialLinks }
    </ul>
  </nav>
)

SocialLinks.propTypes = {
  siteTitle: PropTypes.string,
}

export default SocialLinks;
