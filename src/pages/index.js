import React from "react"
import { Link } from "gatsby"

import Button from "../components/Button"
import EmailListSignup from "../components/EmailListSignup"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import NextEventCTA from "../components/NextEventCTA"
import PodcastEmbed from "../components/PodcastEmbed"
import SEO from "../components/seo"
import Sponsors from "../components/Sponsors"
import Summary from "../components/Summary"
import Testimonials from "../components/Testimonials"
import Videos from "../components/Videos"

// Testimonials
import Dan from "../images/testimonials/Dan.png";
import Dru from "../images/testimonials/Dru.jpg";
//import Marc from "../images/testimonials/Marc.jpg";
import Volkan from "../images/testimonials/Volkan.jpg";
import Heliodor from "../images/testimonials/Heliodor.jpg";

// Sponsors
import Orbit from "../images/sponsors/Orbit.png";
import Folderly from "../images/sponsors/Folderly.jpg";


// → 
const nextEvent = {
  text: "Indie Worldwide July Meetup",
  exactDate: "Jul 8, 12:00PM → 1:30PM CDT",
  month: "July",
  date: "8",
  url: "https://hopin.com/events/indie-worldwide-july-meetup"
}

const testimonials = [
  {
    testimonial: "Get feedback, get asked hard questions, and get that extra push to keep going.",
    name: "Dan Bogachek",
    bio: "Founder, Handwrite",
    image: Dan,
    backlink: "https://handwrite.io/"
  },
  {
    testimonial: "I was ready for the next event before the first one was over.",
    name: "Dru Riley",
    bio: "Founder, Trends.vc",
    image: Dru,
    backlink: "https://join.trends.vc/"
  },
/*
  {
    testimonial: "Coffee, exercise, and Indie Worldwide are my tools for being a more productive indie hacker.",
    name: "Marc LG",
    bio: "Founder, PowerImporter.com",
    image: Marc,
    backlink: "https://www.powerimporter.com/"
  },
 */
  {
    testimonial: "Indie Worldwide gives me the opportunity to talk to peers that I normally wouldn't get.",
    name: "Volkan Kaya",
    bio: "Founder, Versoly",
    image: Volkan,
    backlink: "https://versoly.com/"
  },
  {
    testimonial: "I finish every session feeling energized with insightful and actionable next steps.",
    name: "Heliodor Jalba",
    bio: "Founder, HostedMetrics.com",
    image: Heliodor,
    backlink: "https://hostedmetrics.com"
  },
]

const sponsors = [
  {
    name: "Orbit.love",
    link: "https://orbit.love/?ref=indieworldwide.co",
    image: Orbit,
  },
  {
    name: "Folderly",
    link: "https://folderly.com/?ref=indieworldwide.co",
    image: Folderly,
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="A Community of Indie Makers" />
    <Hero
      header={"The online meetup group for indie makers"}
      subheader={<span>Video chats and <Link to="/founders-club">1-on-1 matching</Link> with makers around the world.</span>}
    />
    <EmailListSignup headline={"Join our community of 2,000+ indie founders."} />
    <Testimonials testimonials={testimonials} />
    <NextEventCTA
      text={nextEvent.text}
      exactDate={nextEvent.exactDate}
      month={nextEvent.month}
      date={nextEvent.date}
      link={nextEvent.url}
      className="CTA"
    />
    <Sponsors sponsors={sponsors} />
    <Summary
      header={"What is Worldwide?"}
      description={"A community for makers who can't get to an in-person meetup group or want to expand their circle beyond their local area. We host online video chats where you can make friends, meet co-founders, find new clients, and get advice. 100% online."}
    />
    <Videos />
    <PodcastEmbed />
    <div className="CTA" style={{margin: '180px auto 0'}}>
      <Button
        text={"Psst, check out Founders' Club"}
        link={"founders-club"}
      />
    </div>
  </Layout>
)

export default IndexPage
