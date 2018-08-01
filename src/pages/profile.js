import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/profile/layout'
import Top from '../components/profile/Top'

const ProfilePage = props => (
  <div>
    <Layout>
      <Top fluid={props.data.file.childImageSharp.fluid} />
    </Layout>
  </div>
)

export const query = graphql`
  query TopPageQuery {
    file(relativePath: { regex: "/bg.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

/*
import About from '../components/profile/About'
import Works from '../components/profile/Works'
import Skills from '../components/profile/Skills'
import Projects from '../components/profile/Projects'
import Contact from '../components/profile/Contact'
import ProfilePage from './profile';

const ProfilePage = () => (
  <div>
    <Layout>
      <Top />
      <About />
      <Works />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  </div>
)
*/

export default ProfilePage
