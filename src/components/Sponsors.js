import React from "react"

import './Sponsors.scss';

// Sponsors
//import Orbit from "../images/sponsors/Orbit.png";
//import Folderly from "../images/sponsors/Folderly.jpg";
//import TrueSource from "../images/sponsors/TrueSource.png";
import AlternativeAssets from "../images/sponsors/AlternativeAssets.svg";
import SaaSBox from "../images/sponsors/SaaSBox.png";

const sponsors = [
  {
    name: "Alternative Assets",
    link: "https://alternativeassets.club/?ref=indieworldwide.co",
    image: AlternativeAssets,
  },
  {
    name: "SaasBox",
    link: "https://saasbox.net/?ref=indieworldwide.co",
    image: SaaSBox,
  },
/*
  {
    name: "TrueSource",
    link: "https://www.truesource.io/?ref=indieworldwide.co",
    image: TrueSource,
  },
  {
    name: "Orbit.love",
    link: "https://orbit.love/?ref=indieworldwide.co",
    image: Orbit,
  },
  {
    name: "Folderly",
    link: "https://folderly.com/?ref=indieworldwide.co",
    image: Folderly,
  },
 */
]

const Sponsors = () => {
  return (
    <section className="Sponsors">
      <h3 className="Title">Sponsored By</h3>
      <div className="SponsorLogos"> 
        {sponsors.map((sponsor, idx) =>
          <a key={idx} className="Sponsor" href={sponsor.link}>
            <img alt={sponsor.name} src={sponsor.image} className="Image" />
          </a>
        )}
      </div>
      {/*
      <h4 className="Subtitle">Interested in Sponsoring?</h4>
      <div className="SponsorshipCTA">
        <a className="Button" href="mailto:sponsorships@indieworldwide.co">{"Contact Us"}</a>
      </div>
     */}
    </section>
  );
}

export default Sponsors;
