import React from "react"

import Button from "../components/Button"
import EmailListSignup from "../components/EmailListSignup"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import NextEventCTA from "../components/NextEventCTA"
import SEO from "../components/seo"
import Summary from "../components/Summary"

import "./community.scss";

// Comments
import CelebrateAndrew from "../images/comments/celebrate-andrew.png";
import CelebrateGreg from "../images/comments/celebrate-greg.png";
import CelebrateMiriam from "../images/comments/celebrate-miriam.png";
import DiscussAnthony from "../images/comments/discuss-anthony.png";
import DiscussHarvey from "../images/comments/discuss-harvey.png";
import LaunchKavya from "../images/comments/launch-kavya.png";
import LaunchLevi from "../images/comments/launch-levi.png";
import RecommendErik from "../images/comments/recommend-erik.png";
import RecommendHannah from "../images/comments/recommend-hannah.png";
import RecommendOlu from "../images/comments/recommend-olu.png";
import TroubleshootDaniel from "../images/comments/troubleshoot-daniel.png";
import TroubleshootRox from "../images/comments/troubleshoot-rox.png";

const sections = [
  {
    headline: "Celebrate Success",
    description: "Winning is more fun when you have someone to share it with.",
    images: [CelebrateAndrew, CelebrateGreg, CelebrateMiriam ]
  },
  {
    headline: "Discuss",
    description: "The best advice comes from other founders who've done what you're trying to do.",
    images: [DiscussAnthony, DiscussHarvey]
  },
  {
    headline: "Boost Your Launch",
    description: "Get feedback and support before, during, and after your product launch on any platform.",
    images: [LaunchKavya, LaunchLevi]
  },
  {
    headline: "Get Those Warm Intro's",
    description: "Hiring? Shopping for a product? Get recommendations from people you trust. Save weeks of your time.",
    images: [RecommendErik, RecommendHannah, RecommendOlu]
  },
  {
    headline: "Troubleshoot",
    description: "Bust through tricky problems in any part of your business with a team that supports you. Just because you're a solo-founder doesn't mean you're alone.",
    images: [TroubleshootDaniel, TroubleshootRox]
  }
]

const CommunityPage = () => (
  <Layout>
    <SEO />
    <Hero
      header={"Slack Group"}
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
          <div className="Images">
            {s.images.map(i => (
              <img alt={'slack comment screenshot'} src={i} className="Comment" />
            ))}
          </div>
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
