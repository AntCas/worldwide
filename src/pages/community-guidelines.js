import React from "react"

import EmailListSignup from "../components/EmailListSignup"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import NextEventCTA from "../components/NextEventCTA"
import PodcastEmbed from "../components/PodcastEmbed"
import Seo from "../components/seo"
import Videos from "../components/Videos"

import "./community-guidelines.scss";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero
      header={"Community Guidelines"}
    />
    <section className="Guidelines">
      <h2>Rules of engagement:</h2>
      <ul>
        <li>Don't be an a**hole</li>
        <li>Keep it professional, keep it friendly</li>
        <li>Criticize ideas, not the people who come up with them<br />
          <div className="SubList">
            <strong>bad:</strong> This idea is dumb and so are you for coming up with it.<br />
            <strong>good:</strong>{` I don't think this will work because of X, have you tried Y?`}
          </div>
        </li>
        <li>{`Don't spam, we have `}<div className="Slack">#launch-alert</div> and <div className="Slack">#share-your-social-media</div> for dropping links. Please pick the one best channel in Slack to post in and always provide context.</li>
      </ul>
      <h2>{`Here's a quick tour of our Slack channels:`}</h2>
      <ul>
        <li><div className="Slack">#introduce-yourself</div>{` post here first to let everyone know who you are and what you're working on`}</li>
        <li><div className="Slack">#help-and-feedback</div>{` general help on whatever you're working on.`}</li>
        <li><div className="Slack">#launch-alert</div> is for new product launches</li>
        <li><div className="Slack">#roast-my-landing-page</div> is for landing page feedback</li>
        <li><div className="Slack">#share-your-social-media</div> drop a link to your twitter, linkedin, tiktok, etc here</li>
      </ul>
      <h2>{`If you're not sure where to start, try:`}</h2>
      <ul>
        <li>Replying to posts in <div className="Slack">#introduce-yourself</div></li>
        <li>Giving feedback in places like <div className="Slack">#roast-my-landing-page</div> & <div className="Slack">#help-and-feedback</div></li>
        <li>Posting your new products in <div className="Slack">#launch-alert</div> and your best Twitter posts in <div className="Slack">#share-your-social-media</div></li>
        <li>Sharing what tasks you checked off your to-do list today in <div className="Slack">#done-today</div></li>
      </ul>
      <h2>
        {`Let's be good citizens of this community and keep it a positive space for everyone 💯`}
      </h2>
    </section>
    <div style={{margin: "140px 0" }}>
      <NextEventCTA />
    </div>
    <EmailListSignup headline={"Get motivation & support to help you build your startup."} />
    <Videos />
    <PodcastEmbed />
  </Layout>
)

export default IndexPage
