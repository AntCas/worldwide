import React from "react"
import { ReactTypeformEmbed } from 'react-typeform-embed';

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
    <ReactTypeformEmbed style={{position: 'relative', display: 'inline-block', height: "480px"}} url="https://formico.typeform.com/to/yN96tS" />;
  </Layout>
)

export default IndexPage
