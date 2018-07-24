import React from 'react'
import Link from 'gatsby-link'

import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <div className="posts">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="post">
          <h1 className="post-title">
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h1>
          <span className="post-date">{node.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true }, type: { ne: "page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
