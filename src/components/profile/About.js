import React from 'react'
import Img from 'gatsby-image'
import MoreButton from './MoreButton'

const AboutPage = ({ fixed }) => (
  <section id="one" className="main style1">
    <div className="grid-wrapper">
      <div className="col-12">
        <span className="image fit">
          <Img fixed={fixed} alt="me" />
        </span>
      </div>
      <div className="col-12">
        <header className="major">
          <h2>こんにちは、原田 経道です。</h2>
        </header>
        <p>
          はじめまして、原田経道(はらだつねみち)と申します。<br />
          フリーランスのWebエンジニアをしています。
        </p>
        <MoreButton url="#" />
      </div>
    </div>
  </section>
)

export default AboutPage
