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
    <SEO title="The Indie Worldwide Podcast" />
    <Hero
      header={"Indie Worldwide Podcast"}
      subheader={"Season two is dropping soon!"}
    />
    <EmailListSignup headline={"Get an email when the next episode comes out."} />
    <PodcastEmbed />
    <Sponsors sponsors={sponsors} />
    <Summary
      header={"What is Worldwide?"}
      description={"A community for makers who can't get to an in-person meetup group or want to expand their circle beyond their local area. We host online video chats where you can make friends, meet co-founders, find new clients, and get advice. 100% online."}
    />
    <div className="CTA" style={{margin: '180px auto 0'}}>
      <Button
        text={"Psst, check out Founders' Club"}
        link={"/founders-club"}
      />
    </div>
  </Layout>
)

export default IndexPage
