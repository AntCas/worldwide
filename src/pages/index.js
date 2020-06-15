import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import NextEventCTA from "../components/NextEventCTA"
import SEO from "../components/seo"
import Videos from "../components/Videos"
import Summary from "../components/Summary"
import Testimonials from "../components/Testimonials"
import EmailListSignup from "../components/EmailListSignup"

const nextEvent = {
  text: "Indie Worldwide - Weekend Meetup III",
  exactDate: "June 20, 10:00AM to 11:30AM ET",
  month: "June",
  date: "20",
  url: "https://hopin.to/events/indie-worldwide-weekend-meetup-iii"
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <EmailListSignup />
    <Summary />
    <NextEventCTA
      text={nextEvent.text}
      exactDate={nextEvent.exactDate}
      month={nextEvent.month}
      date={nextEvent.date}
      link={nextEvent.url}
      className="CTA"
    />
    <Testimonials />
    <Videos />
  </Layout>
)

export default IndexPage
