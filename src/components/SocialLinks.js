import PropTypes from "prop-types"
import React from "react"

import Email from "../assets/email.svg";
import Facebook from "../assets/facebook.svg";
import IH from "../assets/ih.svg";
import Slack from "../assets/slack.svg";
import Twitter from "../assets/twitter.svg";
import YouTube from "../assets/youtube.svg";

import './SocialLinks.scss';

const SocialLinks = ({ siteTitle, dark }) => {
  const fill = dark ? 'black' : 'white';
  const links = [
    {
      title: "YouTube",
      url: "https://www.youtube.com/channel/UCMps9pFrqetqXMCEZqkiQ-g/",
      icon: <YouTube style={{fill}} />
    },
    {
      title: "Twitter",
      url: "https://twitter.com/indie_worldwide",
      icon: <Twitter style={{fill}} />
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/groups/indie.worldwide/",
      icon: <Facebook style={{fill}} />
    },
    {
      title: "Slack",
      url: "https://join.slack.com/t/indieworldwide/shared_invite/enQtNzYzNTUwMjc2ODgyLTBjNTRiMmMwYWQ2MmQ5OGYyNTk2OWIwN2Q1OTcyOGJjM2M3MzEwYjc5OThjNTlmMWZhNTU0NDAyYjRkNDQ0Zjk",
      icon: <Slack style={{fill}} />
    },
    {
      title: "Indie Hackers",
      url: "https://www.indiehackers.com/product/worldwide",
      icon: <IH style={{fill}} />
    },
    {
      title: "Mailing List",
      url: "https://formico.typeform.com/to/yN96tS",
      icon: <Email style={{fill}} />
    },
  ];

  const socialLinks = links.map((item, i) => (
    <li key={i}>
      <a href={item.url} title={item.title}>
        {item.icon}
      </a>
    </li>
  ))

  return (
    <nav className="SocialLinks">
      <ul className="LinkList">
        { socialLinks }
      </ul>
    </nav>
  )
}

SocialLinks.propTypes = {
  siteTitle: PropTypes.string,
  dark: PropTypes.bool
}

export default SocialLinks;
