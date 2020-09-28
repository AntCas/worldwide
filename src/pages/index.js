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
  text: "Indie Takeover, Q&A w/ Indie Worldwide Founder Anthony Castrio",
  exactDate: "Oct 3, 11:00AM - 12:30PM EST",
  month: "Oct",
  date: "3",
  url: "https://hopin.to/events/indie-takeover-q-a-with-indie-worldwide-founder-anthony-castrio"
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
