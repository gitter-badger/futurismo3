import React from 'react'
import Link from 'gatsby-link'
import { push as Menu } from 'react-burger-menu'

const Navigation = () => (
  <Menu>
    <Link className="menu-item" to="/profile">
      Top
    </Link>
    <Link className="menu-item" to="/profile/about">
      About
    </Link>
    <Link className="menu-item" to="/profile/works">
      Works
    </Link>
    <Link className="menu-item" to="/profile/skills">
      Skills
    </Link>
    <Link className="menu-item" to="/profile/projects">
      Projects
    </Link>
    <Link className="menu-item" to="/">
      Blog
    </Link>
    <Link className="menu-item" to="/profile/contact">
      Contact
    </Link>
  </Menu>
)

export default Navigation
