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
  text: "Indie Worldwide - November Meetup",
  exactDate: "Nov 18, 1:00PM - 1:30PM EST",
  month: "Nov",
  date: "18",
  url: "https://hopin.to/events/indie-worldwide-november-2020-meetup"
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <NextEventCTA
      text={nextEvent.text}
      exactDate={nextEvent.exactDate}
      month={nextEvent.month}
      date={nextEvent.date}
      link={nextEvent.url}
      className="CTA"
    />
    <Summary />
    <Testimonials />
    <Videos />
    <EmailListSignup />
  </Layout>
)

export default IndexPage
