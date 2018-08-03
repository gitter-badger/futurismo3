import React from 'react'
import Img from 'gatsby-image'

const SkillList = props => (
  <div className="col-3">
    <span className="image fit">
      <Img fixed={props.img} alt="" />
    </span>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
)

export default SkillList
