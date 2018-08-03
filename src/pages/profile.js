import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/profile/layout'
import Top from '../components/profile/Top'
import About from '../components/profile/About'
import Works from '../components/profile/Works'
import Skills from '../components/profile/Skills'

const ProfilePage = props => (
  <div>
    <Layout>
      <Top fluid={props.data.background.childImageSharp.fluid} />
      <About fixed={props.data.me.childImageSharp.fixed} />
      <Works fluid={props.data.works.childImageSharp.fluid} />
      <Skills fixed={props.data.skills.childImageSharp.fixed} />
    </Layout>
  </div>
)

export const query = graphql`
  query TopPageQuery {
    background: file(relativePath: { regex: "/bg.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    me: file(relativePath: { regex: "/me-round.jpg/" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    works: file(relativePath: { regex: "/pic03.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    skills: file(relativePath: { regex: "/pic05.jpg/" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default ProfilePage
