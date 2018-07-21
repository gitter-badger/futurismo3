import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people </h1>
    <Img sizes={data.background.sizes} />
    <p>{data.site.siteMetadata.title} </p>
    <p>{data.site.siteMetadata.desc} </p>
    <p>Welcome to your new Gatsby site. </p>
    <p>Now go build something great. </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
