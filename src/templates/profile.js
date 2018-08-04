import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import Layout from '../components/profile/layout'

export default ({ pageContext }) => {
  const { profile } = pageContext

  return (
    <div>
      <Helmet title={`${profile.node.frontmatter.title}`} />
      <Layout>
        <div className="grid-wrapper profile">
          <div className="col-12">
            <Img
              fluid={profile.node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <div className="profile-content">
              <h1>{profile.node.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: profile.node.html }} />
            </div>
            <ul className="actions">
              <li>
                <Link
                  to={`/profile/#${profile.node.frontmatter.name}`}
                  className="button"
                >
                  Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}
