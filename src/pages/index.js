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
  text: "Build and launch your no-code startup, Q&A w/ NoCodery founder",
  exactDate: "Sep 18, 3:00PM - 4:30PM EST",
  month: "Sep",
  date: "18",
  url: "https://hopin.to/events/build-and-launch-your-no-code-startup-q-a-with-goncalo-ceo-of-nocodery"
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
