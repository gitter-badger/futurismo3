import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import PostListing from '../components/Posts/PostListing'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people </h1>
    {/* <Img sizes={data.background.sizes} /> */}
    <h3>Posts</h3>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
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
    # background: imageSharp {
    #   sizes(maxWidth: 1240) {
    #     ...GatsbyImageSharpSizes
    #   }
    # }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          html
          excerpt
        }
      }
    }
  }
`
