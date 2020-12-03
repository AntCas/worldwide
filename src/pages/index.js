import React from "react"

import EmailListSignup from "../components/EmailListSignup"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import NextEventCTA from "../components/NextEventCTA"
import PodcastEmbed from "../components/PodcastEmbed"
import SEO from "../components/seo"
import Summary from "../components/Summary"
import Testimonials from "../components/Testimonials"
import Videos from "../components/Videos"

const nextEvent = {
  text: "Indie Worldwide - December Meetup",
  exactDate: "Dec 10th, 1:00PM - 2:30PM EST",
  month: "Dec",
  date: "10",
  url: "https://hopin.com/events/indie-worldwide-december-2020-meetup"
}

const IndexPage = () => (
  <Layout>
    <SEO title="A Community of Indie Makers" />
    <Hero
      header={"Welcome to Indie Worldwide"}
      subheader={"An online meetup group for hackers, makers, and founders"}
    />
    <EmailListSignup />
    <Testimonials />
    <NextEventCTA
      text={nextEvent.text}
      exactDate={nextEvent.exactDate}
      month={nextEvent.month}
      date={nextEvent.date}
      link={nextEvent.url}
      className="CTA"
    />
    <Summary />
    <Videos />
    <PodcastEmbed />
  </Layout>
)

export default IndexPage
