import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Link to="/page-2/">Go to page 2</Link>
    <iframe title="YouTube PlayList" width="560" height="315" src="https://www.youtube.com/embed/flaEA2CPQWU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </Layout>
)

export default IndexPage
