import React from 'react'
import { push as Menu } from 'react-burger-menu'

const Navigation = () => (
  <Menu>
    <a className="menu-item" href="#top">
      Top
    </a>
    <a className="menu-item" href="#about">
      About
    </a>
    <a className="menu-item" href="#works">
      Works
    </a>
    <a className="menu-item" href="#skills">
      Skills
    </a>
    <a className="menu-item" href="#projects">
      Projects
    </a>
    <a className="menu-item" href="/">
      Blog
    </a>
    <a className="menu-item" href="#contact">
      Contact
    </a>
  </Menu>
)

export default Navigation
