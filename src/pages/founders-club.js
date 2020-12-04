import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Summary from "../components/Summary"
import Testimonials from "../components/Testimonials"
import EmailListSignup from "../components/EmailListSignup"

import "./founders-club.scss";

// SVGs
import UpArrow from "../assets/chalk-arrow-up.svg";

// Founder Photos for Testimonials
import Dan from "../images/testimonials/Dan.png";
import Dru from "../images/testimonials/Dru.jpg";
import Marc from "../images/testimonials/Marc.jpg";
import Volkan from "../images/testimonials/Volkan.jpg";
import Richard from "../images/testimonials/Richard.jpeg";
import Matt from "../images/testimonials/Matt.png";

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
      <Summary />
      <EmailListSignup />
    </Layout>
  )
};

export default IndexPage
