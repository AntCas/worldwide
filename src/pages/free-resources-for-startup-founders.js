import React from "react"

import Button from "../components/Button"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import NextEventCTA from "../components/NextEventCTA"
import PartnerDeals from "../components/PartnerDeals"
import Seo from "../components/seo"
import Summary from "../components/Summary"

// Company Logos
import Stripe from "../images/partner-logos/stripe.svg";
import Twilio from "../images/partner-logos/twilio.png";
import Sendgrid from "../images/partner-logos/sendgrid.png";
import AWS from "../images/partner-logos/aws.png";
import MongoDB from "../images/partner-logos/mongodb.svg";
import Postmark from "../images/partner-logos/postmark.png";
import Peachscore from "../images/partner-logos/peachscore.svg";


const partnerDeals = [
  {
    company: "Stripe",
    description: "50% off Stripe Atlas.",
    value: "$250",
    logo: Stripe,
    what: "Register a business and open a bank account in the USA.",
  },
  {
    company: "Mongo DB",
    description: "$3,600 free credits.",
    value: "$3,600",
    logo: MongoDB,
    what: "Cloud hosted database for web-scale apps.",
  },
  {
    company: "Postmark",
    description: "$75 free credits.",
    value: "$75",
    logo: Postmark,
    what: "Send transactional emails that don't bounce.",
  },
  {
    company: "Stripe",
    description: "$580 waived processing fees.",
    value: "$580",
    logo: Stripe,
    what: "Payments processing infrastructure.",
  },
  {
    company: "Twilio",
    description: "$500 in free credits.",
    value: "$500",
    logo: Twilio,
    what: "Programmatic texting and calls.",
  },
  {
    company: "Sendgrid",
    description: "$1,000 in free credits.",
    value: "$1,000",
    logo: Sendgrid,
    what: "Marketing & transactional email api.",
  },
  {
    company: "AWS Activate",
    description: "$5,000 in free credits.",
    value: "$5,000",
    logo: AWS,
    what: "Cloud hosting and technical support.",
  },
  {
    company: "Peachscore",
    description: "First year free.",
    value: "$300",
    logo: Peachscore,
    what: "Warm intro's to startup investors.",
  },
]

const PartnerDealsPage = () => (
  <Layout>
    <Seo />
    <Hero
      header={"Partner Deals"}
      subheader={""}
    />
    <Summary
      header={"Deals for Indie Worldwide Startups."}
      description={"We've partnered with all of these companies and more to get free and discounted resources for your startup."}
    />
    <PartnerDeals deals={partnerDeals} />
    <div className="CTA" style={{margin: '48px auto 0'}}>
      <Button
        text={"Claim Free Resources"}
        link={"/founders-club"}
      />
    </div>
    <div style={{margin: "140px 0 0 0" }}>
      <NextEventCTA />
    </div>

  </Layout>
)

export default PartnerDealsPage
