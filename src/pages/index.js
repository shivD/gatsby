import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const Boxshaow = styled.div`
  background: ${props => (props.primary ? "#ffa500" : "gray")};
  padding: 40px;
  &:hover {
    opacity: 0.8;
  }
  `;

const HomePage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Link to="/about">About Us</Link>

      <Boxshaow>{data.site.siteMetadata.description}</Boxshaow>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default HomePage
