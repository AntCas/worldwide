import React from "react"

import Button from "../components/Button"
import EmailListSignup from "../components/EmailListSignup"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import NextEventCTA from "../components/NextEventCTA"
import Seo from "../components/seo"
import Summary from "../components/Summary"

import "./community.scss";

// Comments
import Celebrate from "../images/comments/celebrate.png";
import Discuss from "../images/comments/discuss.png";
import Launch from "../images/comments/launch.png";
import Recommend from "../images/comments/recommend.png";
import Troubleshoot from "../images/comments/troubleshoot.png";

const sections = [
  {
    headline: "Celebrate Success",
    description: "Winning is more fun when you have someone to share it with.",
    image: [Celebrate],
  },
  {
    headline: "Discuss",
    description: "The best advice comes from other founders who've done what you're trying to do.",
    image: [Discuss],
  },
  {
    headline: "Boost Your Launch",
    description: "Get feedback and support before, during, and after your product launch on any platform.",
    image: [Launch],
  },
  {
    headline: "Get Those Warm Intro's",
    description: "Hiring? Shopping for a solution? Get recommendations from people you trust. Save weeks of your time.",
    image: [Recommend]
  },
  {
    headline: "Troubleshoot",
    description: "Bust through tricky problems in any part of your business with a team that supports you. Just because you're a solo-founder doesn't mean you're alone.",
    image: [Troubleshoot]
  }
]

const CommunityPage = () => (
  <Layout>
    <Seo />
    <Hero
      header={"The Indie Worldwide Slack Group"}
    />
    <EmailListSignup
      headline={"Join a community of startup founders who are forging their own path."}
      inputText={"Enter your email to get started"}
    />
    <div className="SlackCommunity">
      {sections.map((s, idx) => (
        <div className="CommunitySection" key={idx}>
          <div className="Text">
            <h3>{s.headline}</h3>
            <p>{s.description}</p>
          </div>
          <img alt={'slack comment screenshot'} src={s.image} className="Image" />
        </div>
      ))}
    </div>
    <div className="CTA" style={{margin: '48px auto 0'}}>
      <Button
        text={"Meet Founders' Like These."}
        link={"/founders-club"}
      />
    </div>
    <Summary
      header={"A community for bootstrapped founders."}
      description={"We host virtual meetups and challenges where you can make friends, meet co-founders, find new clients, and get advice."}
    />
    <div style={{margin: "140px 0 0 0" }}>
      <NextEventCTA />
    </div>
  </Layout>
)

export default CommunityPage
