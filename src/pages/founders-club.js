import React, { useState } from "react"

import EmailListSignup from "../components/EmailListSignup"
import FAQ from "../components/FAQ"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Summary from "../components/Summary"
import Testimonials from "../components/Testimonials"

import "./founders-club.scss";

// Founder Photos for Testimonials
import Dan from "../images/testimonials/Dan.png";
import Matt from "../images/testimonials/Matt.png";
import Richard from "../images/testimonials/Richard.jpeg";
import Volkan from "../images/testimonials/Volkan.jpg";

const testimonials = [
  {
    testimonial: "Get feedback, get asked hard questions, and get that extra push to keep going.",
    name: "Dan Bogachek",
    bio: "Founder, Handwrite, $10k+/month",
    image: Dan,
    backlink: "https://handwrite.io/"
  },
  {
    testimonial: "I'm LOVING this, the people participating are awesome. I meet with my my first match weekly.",
    name: "Matt Gale",
    bio: "Founder, FBARS.app",
    image: Matt,
    backlink: "https://fbars.app/beta-offer"
  },
  {
    testimonial: "Indie Worldwide gives me the opportunity to talk to peers that I normally wouldn't get.",
    name: "Volkan Kaya",
    bio: "Founder, Versoly",
    image: Volkan,
    backlink: "https://versoly.com/"
  },
  {
    testimonial: "It's been incredible getting a community together to make the startup journey less lonely and more fun.",
    name: "Richard Kong",
    bio: "Founder, Gravity Tales, acquired $2M",
    image: Richard,
    backlink: "https://twitter.com/snowingpines",
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
    answer: "You'll be kicked out of the club. Please give your match at least 2-days notice if you need to re-schedule (barring a true emergency).",
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

const IndexPage = () => {
  const [activeClass, setActiveClass] = useState('Shake');

  return (
    <Layout>
      <SEO title="Founders' Club" />
      <section className="FoundersClubHero">
        <h2 className="HeroHeader">Meet 150+ top indie makers from around the world.</h2>
        <h3 className="Subheader">{`We're shipping products and making revenue on our own terms. Take your business to the next level with `}<strong>personalized introductions to other top-performers.</strong></h3>
      </section>
      <div className="FoundersClubCTA">
        <a className="Button" href="https://anthony169666.typeform.com/to/TIIKLIRf">{"Get your matches for $60 / year"}</a>
        <p className="SpecialOffer">{"12 seats left, $80/yr for next 50."}</p>
      </div>
      <div className="FeaturedTestimonial">{`"The high-signal matches are amazing. Worth paying for."`}<strong>{` Dru Riley, Trends.vc, $20k+/month`}</strong></div>
      <Testimonials testimonials={testimonials} />
      <Summary
        header={"What is Founders' Club?"}
        description={"Once a week, I'll send you a carefully selected introduction to a founder who I think has the potential to change your business. The average member of Founders' Club has made at least $30,000 in lifetime revenue and many $100k+."}
      />
      <FAQ faq={FAQItems} />
      <div className="FoundersClubCTA">
        <a className="Button" href="https://anthony169666.typeform.com/to/TIIKLIRf">{"Get your first match"}</a>
      </div>
      <div className="EmailSignup">
        <EmailListSignup />
      </div>
    </Layout>
  )
};

export default IndexPage
