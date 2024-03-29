import React from "react"

import Button from "../components/Button"
import EmailListSignup from "../components/EmailListSignup"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import PodcastEmbed from "../components/PodcastEmbed"
import Seo from "../components/seo"
import Sponsors from "../components/Sponsors"
import Summary from "../components/Summary"

const IndexPage = () => (
  <Layout>
    <Seo title="The Indie Worldwide Podcast" />
    <Hero
      header={"Indie Worldwide Podcast"}
      subheader={"Season two is dropping soon!"}
    />
    <EmailListSignup headline={"Get an email when the next episode comes out."} />
    <PodcastEmbed />
    <Sponsors />
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
