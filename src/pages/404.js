import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./404.scss";

const NotFoundPage = () => (
  <Layout>
    <section className="NotFound">
      <SEO title="404: Not found" />
      <h1>{`404: Page Not Found`}</h1>
      <p>Hmm, not sure what you were looking for there.</p>
      <Link to="/">Take me home</Link>
    </section>
  </Layout>
)

export default NotFoundPage
