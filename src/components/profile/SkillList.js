import React from 'react'
import Img from 'gatsby-image'

const SkillList = props => (
  <div className="col-3">
    <span className="image fit">{props.img}</span>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
)

export default SkillList
