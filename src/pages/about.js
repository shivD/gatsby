import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({pageContext}) => (
  <Layout>
    <SEO title="About Us" />
    <Link to="/">Home  page</Link> 
    <h1>{pageContext.house}</h1>
  </Layout>
)

export default AboutPage 