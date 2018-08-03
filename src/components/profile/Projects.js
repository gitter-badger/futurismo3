import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const ProjectsPage = ({ fluid }) => (
  <section id="projects" className="main style1">
    <div className="grid-wrapper">
      <div className="col-6">
        <header className="major">
          <h2>プロジェクト・実績</h2>
        </header>
        <p>
          取り組んできたプロジェクトの実績について紹介します。<br />
          日々の小さな実績は、併設しているブログもご覧ください。
        </p>
        <ul className="actions">
          <li>
            <Link to="/profile/projects" className="button">
              More
            </Link>
          </li>
          <li>
            <Link to="/" className="button">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-6">
        <span className="image fit">
          <Img fluid={fluid} alt="works" />
        </span>
      </div>
    </div>
  </section>
)

export default ProjectsPage
