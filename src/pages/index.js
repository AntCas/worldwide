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
  text: "No-Code Business Acquired After 3 Weeks, Q&A w/ Louis Vieira",
  exactDate: "August 14, 11:00AM - 12:30PM EST",
  month: "Aug",
  date: "14",
  url: "https://hopin.to/events/no-code-business-acquired-after-3-weeks-q-a-w-louis-vieira"
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
