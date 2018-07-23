import React from 'react'
import { graphql } from 'gatsby'
import Sidebar from '../components/sidebar'
import '../css/poole.css'
import '../css/hyde.css'

export default ({ data }) => (
  // TODO Header をいれるとシンタックスエラーになる
  <div className="theme-base-01">
    <Sidebar
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.desc}
    />
  </div>
)

export const query = graphql`
  query SidebarQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`
