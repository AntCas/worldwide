import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Videos from "../components/Videos"
import Summary from "../components/Summary"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Summary />
    <Videos />
  </Layout>
)

export default IndexPage
