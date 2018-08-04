import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/profile/layout'
import Top from '../components/profile/Top'
import About from '../components/profile/About'
import Works from '../components/profile/Works'
import Skills from '../components/profile/Skills'
import Projects from '../components/profile/Projects'
import Contact from '../components/profile/Contact'

const ProfilePage = props => (
  <div>
    <Helmet
      title="ホーム | 原田経道のポートフォリオサイト"
      description="フリーランスのWebエンジニア 原田経道(tsu-nera) の ポートフォリオサイト"
    />
    <Layout>
      <Top fluid={props.data.background.childImageSharp.fluid} />
      <About fixed={props.data.me.childImageSharp.fixed} />
      <Works fluid={props.data.works.childImageSharp.fluid} />
      <Skills />
      <Projects fluid={props.data.projects.childImageSharp.fluid} />
      <Contact />
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
    works: file(relativePath: { regex: "/works-thumb.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projects: file(relativePath: { regex: "/projects-thumb.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ProfilePage
