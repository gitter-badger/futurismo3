import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

export default ({ title, description }) => (
  // TODO 丸い写真を入れる

  <div className="sidebar">
    <div className="container sidebar-sticky">
      <div className="sidebar-about">
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <p className="lead">{description}</p>
      </div>

      <nav className="sidebar-nav">
        <Link className="sidebar-nav-item" to="/">
          Home
        </Link>
        <Link className="sidebar-nav-item" to="/about">
          About
        </Link>
        <Link className="sidebar-nav-item" to="/">
          Bio
        </Link>
        <a
          className="sidebar-nav-item"
          href="https://twitter.com/tsu_nera_s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="sidebar-nav-item"
          href="https://github.com/tsu-nera"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>

      <p>&copy; {moment().format('YYYY')}. All rights reserved.</p>
    </div>
  </div>
)
