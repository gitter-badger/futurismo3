import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const ProjectImage = props => (
  <div>
    <Img fluid={props.data.file.childImageSharp.fluid} />
  </div>
)

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { regex: "/bg.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1240, maxHeight: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ProjectImage
