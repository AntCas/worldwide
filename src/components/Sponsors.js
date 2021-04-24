import React from "react"

import './Sponsors.scss';

const Sponsors = ({sponsors}) => {
  return (
    <section className="Sponsors">
      <h2 className="Title">Sponsored By</h2>
      <div className="SponsorLogos"> 
        {sponsors && sponsors.map((sponsor, idx) => 
          <a key={idx} className="Sponsor" href={sponsor.link}>
            <img alt={sponsor.name} src={sponsor.image} className="Image" />
          </a>
        )}
      </div>
    </section>
  );
}

export default Sponsors;
