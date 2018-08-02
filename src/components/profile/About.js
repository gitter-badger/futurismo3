import React from 'react'
import Img from 'gatsby-image'

const AboutPage = ({ fixed }) => (
  <div className="about">
    <h3 className="topic">About Me</h3>
    <div className="pure-g">
      <Img
        classname="about-me pure-u-sm-1 pure-u-md-1-3"
        fixed={fixed}
        alt="me"
      />
      <p className="pure-u-3-5 pure-u-sm-1 pure-u-md-2-3">test test test</p>
    </div>
  </div>
)

export default AboutPage
