import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const TopPage = ({ fluid }) => (
  <Img
    fluid={fluid}
    style={{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    }}
  />
)

export default TopPage
