import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people </h1>
    {/* <Img sizes={data.background.sizes} /> */}
    <p>{data.site.siteMetadata.title} </p>
    <p>{data.site.siteMetadata.desc} </p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing post={node} />
    ))}
  </Layout>
)

const PostListing = () => <div>hello</div>

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
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          html
        }
      }
    }
  }
`
