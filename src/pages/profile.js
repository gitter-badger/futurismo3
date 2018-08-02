import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/profile/layout'
import Top from '../components/profile/Top'
import About from '../components/profile/About'

const ProfilePage = props => (
  <div>
    <Layout>
      <Top fluid={props.data.background.childImageSharp.fluid} />
      <div className="content-wrapper content">
        <About fixed={props.data.me.childImageSharp.fixed} />
      </div>
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
  }
`

/*
import Works from '../components/profile/Works'
import Skills from '../components/profile/Skills'
import Projects from '../components/profile/Projects'
import Contact from '../components/profile/Contact'
import ProfilePage from './profile';

const ProfilePage = () => (
  <div>
    <Layout>
      <Works />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  </div>
)
*/

export default ProfilePage
