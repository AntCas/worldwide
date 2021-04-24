import React from "react"

import './Sponsors.scss';

const Sponsors = ({sponsors}) => {
  return (
    <section className="Sponsors">
      <h3 className="Title">Sponsored By</h3>
      <div className="SponsorLogos"> 
        {sponsors && sponsors.map((sponsor, idx) => 
          <a key={idx} className="Sponsor" href={sponsor.link}>
            <img alt={sponsor.name} src={sponsor.image} className="Image" />
          </a>
        )}
      </div>
      <h4 className="Subtitle">Interested in Sponsoring?</h4>
      <div className="SponsorshipCTA">
        <a className="Button" href="mailto:sponsorships@indieworldwide.co">{"Contact Us"}</a>
      </div>
    </section>
  );
}

export default Sponsors;
