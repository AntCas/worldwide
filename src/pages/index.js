import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Videos from "../components/Videos"
import Summary from "../components/Summary"
import Testimonials from "../components/Testimonials"
import EmailListSignup from "../components/EmailListSignup"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Summary />
    <Testimonials />
    <Videos />
    <EmailListSignup />
  </Layout>
)

export default IndexPage
