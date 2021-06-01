import React from "react"

import EmailListSignup from "../components/EmailListSignup"
import FAQ from "../components/FAQ"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Summary from "../components/Summary"
import Testimonials from "../components/Testimonials"
import TalkingHeads from "../components/TalkingHeads"

import "./founders-club.scss";

// Preview Image
import ogImage from "../images/fc-preview.png";

// Founder Photos for Testimonials
import Dan from "../images/testimonials/Dan.png";
//import Dru from "../images/testimonials/Dru.jpg";
import Marc from "../images/testimonials/Marc.jpg";
import Matt from "../images/testimonials/Matt.png";
import Richard from "../images/testimonials/Richard.jpeg";
import Shakil from "../images/testimonials/Shakil.jpg";
import Sukhpal from "../images/testimonials/Sukhpal.jpg";
import Volkan from "../images/testimonials/Volkan.jpg";
import Toby from "../images/testimonials/Toby.jpeg";

const testimonials = [
  {
    testimonial: "I've met so many awesome people and had my eyes opened talking with all of them.",
    name: "Dan Bogachek",
    bio: "Handwrite.io, $10k+/month",
    image: Dan,
    backlink: "https://handwrite.io/"
  },
/*
  {
    testimonial: "The high-signal matches are amazing. Worth paying for.",
    name: "Dru Riley",
    bio: "Trends.vc, 20k+/month",
    image: Dru,
    backlink: "https://trends.vc/"
  },
 */
  {
    testimonial: "It's been incredible getting a community together to make the startup journey less lonely and more fun.",
    name: "Richard Kong",
    bio: "Gravity Tales, acquired $2M",
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
    testimonial: "I'm LOVING this, the people participating are awesome. I meet with my first match weekly.",
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
  },
  {
    testimonial: "An essential part of my entrepreneurial journey",
    name: "Shakil",
    bio: "ExplodingNiches",
    image: Shakil,
    backlink: "https://explodingniches.com/",
  },
]

const FAQItems = [
  {
    question: "How are matches made?",
    answer: "Matches are made based on lifetime revenue, interests, geographic location, and skills. You will usually be matched with someone who is within an order of magnitude of you on revenue and within a few hours time difference. Sometimes I might break the mold in order to match you with an interesting person who doesn't fit the normal criteria. I use custom software to suggest matches which I carefully review to ensure quality. The goal is no bad matches.",
  },
  {
    question: "How are matches scheduled?",
    answer: "You'll be matched with someone in a similar timezone and from there it will be up to you and your match to find a time that works.",
  },
  {
    question: "What happens if I don't show up for a match I've scheduled?",
    answer: "You'll be kicked out of the club. Please give your match at least 2-days notice if you need to re-schedule (barring a true emergency). To clarify, you'll only get booted if you schedule a time with someone and fail to show up. If you just don't want a match one week that's fine, you can take a break any time.",
  },
  {
    question: "How do I change my responses to the sign-up questions?",
    answer: "If you need to update lifetime-revenue, your interests, timezone, self-description or anything else, send me an email at foundersclub [at] indieworldwide [dot] co.",
  },
  {
    question: "Who's in the club?",
    answer: "The current pool of founders has been pulled from communities like Indie Worldwide, IndieHackers, and ProductHunt as well as startup incubators and my personal network. The average participant has at least $30,000 in lifetime revenue. There is currently no revenue requirement to join the club, but you will be matched with founders at a similar level to you in terms of revenue most of the time. The club also includes a large and growing number of founders with $100,000+ in lifetime revenue and several who've passed the $1 Million dollar mark.",
  },
  {
    question: "What is Indie Worldwide?",
    answer: "Indie Worldwide organizes online meetups for indie makers around the world. Founders' Club is a part of Indie Worldwide and when you sign up for Founders' Club you also get access to the larger Indie Worldwide community.",
  },
]

const SIGNUP_LINK = "https://indieworldwide.typeform.com/to/TIIKLIRf";


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Founders' Club" image={ogImage} />
      <section className="FoundersClubHero">
        <TalkingHeads />
        <h2 className="HeroHeader">Meet profitable indie founders from around the world.</h2>
        <h3 className="Subheader">Carefully made introductions delivered by email every Tuesday.</h3>
      </section>
      <div className="FoundersClubCTA">
        <a className="Button" href={SIGNUP_LINK}>{"Get my first match"}</a>
        <p className="SpecialOffer">{"Club dues are $80 per year."}</p>
      </div>
      <div className="FeaturedTestimonial">{`"The high-signal matches are amazing. Worth paying for."`}<strong>{` Dru Riley, Trends.vc, $20k+/month`}</strong></div>
      <Testimonials testimonials={testimonials} />
      <Summary
        header={"What is Founders' Club?"}
        description={"Once a week, I'll send you a carefully selected introduction to a founder who I think has the potential to change your business. The average member of Founders' Club has made at least $30,000 in lifetime revenue and many $100k+."}
      />
      <FAQ faq={FAQItems} />
      <div className="FoundersClubCTA">
        <a className="Button" href={SIGNUP_LINK}>{"Get your first match"}</a>
      </div>
      <div className="EmailSignup">
        <EmailListSignup />
      </div>
    </Layout>
  )
};

export default IndexPage
