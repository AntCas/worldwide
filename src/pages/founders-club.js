import React, { useState } from "react"

import EmailListSignup from "../components/EmailListSignup"
import FAQ from "../components/FAQ"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Summary from "../components/Summary"
import Testimonials from "../components/Testimonials"

import "./founders-club.scss";

// SVGs
import UpArrow from "../assets/chalk-arrow-up.svg";

// Founder Photos for Testimonials
import Dan from "../images/testimonials/Dan.png";
import Dru from "../images/testimonials/Dru.jpg";
import Matt from "../images/testimonials/Matt.png";
import Richard from "../images/testimonials/Richard.jpeg";

const testimonials = [
  {
    testimonial: "Get feedback, get asked hard questions, and get that extra push to keep going.",
    name: "Dan Bogachek",
    bio: "Founder, Handwrite",
    image: Dan,
    backlink: "https://handwrite.io/"
  },
  {
    testimonial: "The high-signal matches are amazing. Worth paying for.",
    name: "Dru Riley",
    bio: "Founder, Trends.vc",
    image: Dru,
    backlink: "https://join.trends.vc/"
  },
  {
    testimonial: "I'm LOVING this, the people participating are awesome. I meet with my my first match weekly.",
    name: "Matt Gale",
    bio: "Founder, FBARS.app",
    image: Matt,
    backlink: "https://fbars.app/beta-offer"
  },
  {
    testimonial: "It's been incredible getting a community together to make the startup journey less lonely and more fun.",
    name: "Richard Kong",
    bio: "Founder, Gravity Tales",
    image: Richard,
    backlink: "https://twitter.com/snowingpines"
  },
]

const FAQItems = [
  {
    question: "How are matches made?",
    answer: "Matches are made based on lifetime revenue, interests, geographic location, and skills. You will usually be matched with someone who is within an order of magnitude of you on revenue and within a few hours time difference. Sometimes I might break the mold in order to match you with an interesting person who doesn't fit the normal criteria. I use custom software to suggest matches which I carefully review to ensure quality. The goal is no bad matches.",
  },
  {
    question: "How do I change my responses to the sign-up questions?",
    answer: "If you need to update lifetime-revenue, your interests, timezone, self-description or anything else, send me an email at anthony [at] indieworldwide [dot] co.",
  },
  {
    question: "Who's in the club?",
    answer: "The current pool of founders has been pulled from communities like Indie Worldwide, IndieHackers, and ProductHunt as well as startup incubators and my personal network. The average participant has at least $30,000 in lifetime revenue. There is currently no revenue requirement to join the club, but you will be matched only with founders at a similar level to you in terms of revenue most of the time. The club also includes a large and growing number of founders with $100,000+ in lifetime revenue and several who've passed the $1 Million dollar mark.",
  },
  {
    question: "What happens if I don't show up for a match I've scheduled?",
    answer: "You'll be kicked out of the club.",
  },
  {
    question: "Can I get a refund?",
    answer: "Sure, cancel any time by sending me an email at anthony [at] indieworldwide [dot] co and I'll refund you your club dues pro-rated for the number of months since you signed up.",
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
      <Hero
        header={"Burst your bubble"}
        subheader={"Mindful 1-on-1 introductions with founders around the world"}
      />
      <div className="FoundersClubCTA">
        <div className="ButtonArrowWrapper"> 
          <a className="Button" href="https://anthony169666.typeform.com/to/TIIKLIRf">{"Get your matches for $60 / year"}</a>
          <div className="ArrowWrapper">
            <UpArrow className="Arrow" />
            <p
              className={`ArrowLabel ${activeClass}`}
              onClick={() => setActiveClass('Shake')}
              onAnimationEnd={() => setActiveClass('')}
            >Limited to the first 12 signups</p>
          </div>
        </div>
      </div>
      <Testimonials testimonials={testimonials} />
      <Summary
        header={"How?"}
        description={"Matches are carefully selected by an algorithm with close human oversight. Each week you'll be paired with a founder who has similar revenue, shared interests, and/or complimentary skills."}
      />
      <FAQ faq={FAQItems} />
      <EmailListSignup />
    </Layout>
  )
};

export default IndexPage
