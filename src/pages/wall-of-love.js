import React from "react"
import { Helmet } from "react-helmet"
import { Parser } from 'html-to-react'

import Button from "../components/Button"
import EmailListSignup from "../components/EmailListSignup"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import NextEventCTA from "../components/NextEventCTA"
import Seo from "../components/seo"
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

import "./wall-of-love.scss";

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

// Embed Tweets
const rawHTML = `
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I second this. 💯<br><br>The Founders&#39; Club <a href="https://twitter.com/AnthonyCastrio?ref_src=twsrc%5Etfw">@AnthonyCastrio</a> has put together is just amazing.<br><br>I already met several great folks, and with some of them, we&#39;re talking about possible partnerships/cooperations.<br><br>The best decision I made this year.</p>&mdash; Robert Balazsi (@robertbalazsi) <a href="https://twitter.com/robertbalazsi/status/1491864155640541184?ref_src=twsrc%5Etfw">February 10, 2022</a></blockquote> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I was a lucky recipient of a free year of Founders’ Club and I’m so grateful for it. <br><br>FC has been an awesome way to meet amazing founders all around the world. <a href="https://t.co/eFYXdYnAuA">https://t.co/eFYXdYnAuA</a></p>&mdash; Ricky (@TheRickyIO) <a href="https://twitter.com/TheRickyIO/status/1471201170903474182?ref_src=twsrc%5Etfw">December 15, 2021</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">another great founder conversation courtesy of founders club <a href="https://twitter.com/indie_worldwide?ref_src=twsrc%5Etfw">@indie_worldwide</a> <br><br>if you are not a member yet get in touch with <a href="https://twitter.com/AnthonyCastrio?ref_src=twsrc%5Etfw">@AnthonyCastrio</a> and beg him for an invite<br><br>and then ask him to connect you with <a href="https://twitter.com/sullydoesitall?ref_src=twsrc%5Etfw">@sullydoesitall</a> so you can chat about <a href="https://twitter.com/joinentre?ref_src=twsrc%5Etfw">@joinentre</a></p>&mdash; Greg Fragin (@GFragin) <a href="https://twitter.com/GFragin/status/1481036720359579654?ref_src=twsrc%5Etfw">January 11, 2022</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Just met @meet__chopra through <a href="https://twitter.com/indie_worldwide?ref_src=twsrc%5Etfw">@indie_worldwide</a> Founders&#39; Club. <br><br>We had a nice chat on product marketing and gave each other tips on how to grow our products.<br><br>Being social on web feels great. Instead of only consuming content, try to meet new people and help each other.<br><br>✌️</p>&mdash; Jim Zarkadas (@JimZarkadas) <a href="https://twitter.com/JimZarkadas/status/1316028041378689024?ref_src=twsrc%5Etfw">October 13, 2020</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/AnthonyCastrio?ref_src=twsrc%5Etfw">@AnthonyCastrio</a>&#39;s new project Founders Club (<a href="https://twitter.com/indie_worldwide?ref_src=twsrc%5Etfw">@indie_worldwide</a>) just launched on <a href="https://twitter.com/ProductHunt?ref_src=twsrc%5Etfw">@producthunt</a> - Personalised intros to other founders at similar stages with similar interests. This is well worth it, highly recommend!<a href="https://t.co/S7KU9oAQu1">https://t.co/S7KU9oAQu1</a></p>&mdash; John McGowan (HNEE) (@johnnywandering) <a href="https://twitter.com/johnnywandering/status/1336685070485217281?ref_src=twsrc%5Etfw">December 9, 2020</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I have been part of Indie Worldwide Founders Club. <a href="https://twitter.com/AnthonyCastrio?ref_src=twsrc%5Etfw">@AnthonyCastrio</a> takes the pain to connect you with awesome other founders . It has been grt getting to know some awesome pple.if you are an early entrepreneur, riddled with self doubts, Founders club will be good invstmt to do <a href="https://t.co/PgqywrTigL">https://t.co/PgqywrTigL</a></p>&mdash; Ram Srinivasan (@srama79) <a href="https://twitter.com/srama79/status/1415941932270776321?ref_src=twsrc%5Etfw">July 16, 2021</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/AnthonyCastrio?ref_src=twsrc%5Etfw">@AnthonyCastrio</a> one year since I joined <a href="https://twitter.com/indie_worldwide?ref_src=twsrc%5Etfw">@indie_worldwide</a> and still going strong. Anthony is incredible in keeping the community active and engaged.</p>&mdash; Oras Al-Kubaisi (@orask) <a href="https://twitter.com/orask/status/1489676397488615428?ref_src=twsrc%5Etfw">February 4, 2022</a></blockquote>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">another great founders club call from <a href="https://twitter.com/indie_worldwide?ref_src=twsrc%5Etfw">@indie_worldwide</a> <br>spoke to <a href="https://twitter.com/robertbalazsi?ref_src=twsrc%5Etfw">@robertbalazsi</a> and got a demo for his amazing data scraping <a href="https://twitter.com/hashtag/NoCode?src=hash&amp;ref_src=twsrc%5Etfw">#NoCode</a> tool <a href="https://twitter.com/datagrab_io?ref_src=twsrc%5Etfw">@datagrab_io</a> <br>check it out if you are in the data capture space and keep supporting founders</p>&mdash; Greg Fragin (@GFragin) <a href="https://twitter.com/GFragin/status/1488568695588798479?ref_src=twsrc%5Etfw">February 1, 2022</a></blockquote>
`;

const WallOfLove = () => (
  <Layout>
    <Seo />
    <Helmet>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Helmet>

    <Hero
      header={"Wall of Love"}
    />
    <EmailListSignup
      headline={"Join a community of startup founders who are forging their own path."}
      inputText={"Enter your email to get started"}
    />
    <div className="NiceTweets">
      {Parser().parse(rawHTML)}
    </div>
    <div className="TestimonialsWrapper">
      <Testimonials testimonials={testimonials} />
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

export default WallOfLove
