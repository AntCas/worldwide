import React from "react"

import Button from "../components/Button"
import EmailListSignup from "../components/EmailListSignup"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import NextEventCTA from "../components/NextEventCTA"
import SEO from "../components/seo"
import Summary from "../components/Summary"
import Testimonials from "../components/Testimonials"

// Testimonials
import Aprilynne from "../images/testimonials/Aprilynne.png";
import Dan from "../images/testimonials/Dan.png";
import Dru from "../images/testimonials/Dru.jpg";
import Heliodor from "../images/testimonials/Heliodor.jpg";
import Marc from "../images/testimonials/Marc.jpg";
import Matt from "../images/testimonials/Matt.png";
import Miriam from "../images/testimonials/Miriam.png";
import Richard from "../images/testimonials/Richard.jpeg";
import Sukhpal from "../images/testimonials/Sukhpal.jpg";
import Toby from "../images/testimonials/Toby.jpeg";
import Volkan from "../images/testimonials/Volkan.jpg";


const testimonials = [
  {
    testimonial: "Get feedback, get asked hard questions, and get that extra push to keep going.",
    name: "Dan Bogachek",
    bio: "Founder, Handwrite",
    image: Dan,
    backlink: "https://handwrite.io/"
  },
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
  {
    testimonial: "I've met so many awesome people and had my eyes opened talking with all of them.",
    name: "Dan Bogachek",
    bio: "Handwrite.io, $10k+/month",
    image: Dan,
    backlink: "https://handwrite.io/"
  },
  {
    testimonial: `The weekly match-ups have been incredible! The opportunity to meet new people who "get it" is huge.`,
    name: "Aprilynne Alter",
    bio: "Founder, Tenderfoot",
    image: Aprilynne,
    backlink: "https://tenderfoot.io/"
  },
  {
    testimonial: "The high-signal matches are amazing. Worth paying for.",
    name: "Dru Riley",
    bio: "Trends.vc, 20k+/month",
    image: Dru,
    backlink: "https://trends.vc/"
  },
  {
    testimonial: "It's been incredible getting a community together to make the startup journey less lonely and more fun.",
    name: "Richard Kong",
    bio: "Gravity Tales",
    image: Richard,
    backlink: "https://twitter.com/snowingpines",
  },
  {
    testimonial: "Founders' Club is different--it feels like a IRL community.",
    name: "Marc LG",
    bio: "PowerImporter.com",
    image: Marc,
    backlink: "https://www.powerimporter.com/",
  },
  {
    testimonial: "I'm LOVING Founders' Club, the people participating are awesome. I meet with my first match weekly.",
    name: "Matt Gale",
    bio: "FBARS.app",
    image: Matt,
    backlink: "https://fbars.app/beta-offer"
  },
  {
    testimonial: "Meet people that understand you and your struggle, the journey is more awesome together.",
    name: "Toby Allen",
    bio: "StartupMill",
    image: Toby,
    backlink: "https://www.startupmill.co/",
  },
  {
    testimonial: "Everyone has already made money online and understands the difficulties of starting something new.",
    name: "Volkan Kaya",
    bio: "Versoly",
    image: Volkan,
    backlink: "https://versoly.com/"
  },
  {
    testimonial: "Founders' Club is the one place every Indie Hacker should turn to when they feel stuck in their journey.",
    name: "Sukhpal Saini",
    bio: "SaaSBase",
    image: Sukhpal,
    backlink: "https://saasbase.dev/",
  }
]

const WallOfLove = () => (
  <Layout>
    <SEO />
    <Hero
      header={"Wall of Love"}
    />
    <EmailListSignup
      headline={"Join a community of startup founders who are forging their own path."}
      inputText={"Enter your email to get started"}
    />
    <Testimonials testimonials={testimonials} />
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

export default WallOfLove
