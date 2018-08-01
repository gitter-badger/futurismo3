/*
import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import '../css/profile.css'

import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage'

const fullpageOptions = {
  callbacks: ['onLeave'],
}

const FullpageWrapper = fullpageProps => (
  <ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => (
      <div>
        <div className="section">
          <Img
            fluid={props.data.file.childImageSharp.fluid}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
            }}
          />
          <p>Section 1 (welcome to fullpage.js)</p>
          <button onClick={() => fullpageApi.moveSectionDown()}>
            Click me to move down
          </button>
        </div>
        <div className="section">
          <p>Section 2</p>
        </div>
      </div>
    )}
  />
)

ReactDOM.render(
  <FullpageWrapper {...fullpageOptions} />,
  document.getElementById('react-root')
)

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { regex: "/bg.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

*/
