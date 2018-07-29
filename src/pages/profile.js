import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)

export const query = graphql`
  query {
  }
`
