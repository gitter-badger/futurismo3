import React from 'react'
import Link from 'gatsby-link'

const MoreButton = props => (
  <ul className="actions">
    <li>
      <Link to={props.url} className="button">
        More
      </Link>
    </li>
  </ul>
)

export default MoreButton
