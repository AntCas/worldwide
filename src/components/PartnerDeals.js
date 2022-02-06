import React from "react"

import './PartnerDeals.scss';

const Deals = ({deals}) => {
  const Items = deals.map((data, i) => {
    return (
    <div key={i} className="PartnerDeal">
      <img alt={`${data.company} logo`} src={data.logo} className="Logo" />
      <div className="Description">
        <p><span className="Strong">{`${data.company}:`}</span>{` ${data.description}`}</p>
        {/*<p><span className="Strong">{`Value:`}</span>{` ${data.value}`}</p>*/}
        <p>{`${data.what}`}</p>
      </div>
    </div>
    )
  });

  return (
    <section className="PartnerDeals">{Items}</section>
  );
}

export default Deals
