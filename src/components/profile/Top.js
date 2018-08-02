import React from 'react'
import Img from 'gatsby-image'

const TopPage = ({ fluid }) => (
  <div className="toppage">
    <Img className="toppage-bg" fluid={fluid} />
    <p>
      You're visiting:<br />
      <span>
        Create a future<br />
        with <br />
        Tsunemichi Harada<br />
      </span>
      A enthusiastic technology hacker
    </p>
  </div>
)

export default TopPage
