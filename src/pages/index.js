import React from "react"

import Button from "../components/Button"
import EmailListSignup from "../components/EmailListSignup"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import NextEventCTA from "../components/NextEventCTA"
import PodcastEmbed from "../components/PodcastEmbed"
import Seo from "../components/seo"
import Sponsors from "../components/Sponsors"
import Summary from "../components/Summary"
import Testimonials from "../components/Testimonials"
import Videos from "../components/Videos"

// Testimonials
//import Dan from "../images/testimonials/Dan.png";
import Dru from "../images/testimonials/Dru.jpg";
import Marc from "../images/testimonials/Marc.jpg";
import Volkan from "../images/testimonials/Volkan.jpg";
import Heliodor from "../images/testimonials/Heliodor.jpg";
import Miriam from "../images/testimonials/Miriam.png";
import Aprilynne from "../images/testimonials/Aprilynne.png";


const testimonials = [
  /*
  {
    testimonial: "Get feedback, get asked hard questions, and get that extra push to keep going.",
    name: "Dan Bogachek",
    bio: "Founder, Handwrite",
    image: Dan,
    backlink: "https://handwrite.io/"
  },
 */
  {
    testimonial: "You'll meet so many others who can help you out - there are really only upsides to joining!",
    name: "Aprilynne Alter",
    bio: "Founder, Tenderfoot",
    image: Aprilynne,
    backlink: "https://tenderfoot.io/"
  },
  {
    testimonial: "I was ready for the next event before the first one was over.",
    name: "Dru Riley",
    bio: "Founder, Trends.vc",
    image: Dru,
    backlink: "https://join.trends.vc/"
  },
  {
    testimonial: "Coffee, exercise, & Indie Worldwide are my tools to being a productive indie hacker.",
    name: "Marc LG",
    bio: "Founder, PowerImporter.com",
    image: Marc,
    backlink: "https://www.powerimporter.com/"
  },
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
  {
    testimonial: "A next level community with a little bit of everything. The crowd is inspirational and curious.",
    name: "Miriam Dorsett",
    bio: "Founder, Quoka",
    image: Miriam,
    backlink: "https://twitter.com/eduovrignorance"
  },
]

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero
      header={"Go Farther, Together."}
    />
    <EmailListSignup
      headline={"Join a community of startup founders who are forging their own path."}
      inputText={"Enter your email to get started"}
    />
    <Testimonials testimonials={testimonials} responsive={true} />
    <Summary
      header={"A community for bootstrapped founders."}
      description={"We host virtual meetups and challenges where you can make friends, meet co-founders, find new clients, and get advice."}
    />
    <div style={{margin: "140px 0 0 0" }}>
      <NextEventCTA />
    </div>
    <Videos />
    <Sponsors />
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
