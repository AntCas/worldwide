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
  text: "Live Streamed Q&A w/ Richard Kong - Gravity Tales, Scale AI, Shinewith",
  exactDate: "Nov 11, 3:00PM - 5:00PM CST",
  month: "Nov",
  date: "11",
  url: "https://www.mixily.com/event/5836321883268036107"
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
