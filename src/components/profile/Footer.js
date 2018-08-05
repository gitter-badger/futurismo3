import React from 'react'
import moment from 'moment'

const Footer = () => (
  <footer>
    &copy; {moment().format('YYYY')}. Tsunemichi Harada, All rights reserved.
    <br />
  </footer>
)

export default Footer
