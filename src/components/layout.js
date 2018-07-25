import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Sidebar from './sidebar'
import '../css/poole.css'
import '../css/hyde.css'
import 'prismjs/themes/prism-okaidia.css'

/* import Helmet from 'react-helmet' */

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            desc
          }
        }
      }
    `}
    render={data => (
      <div className="theme-base-01">
        <Sidebar
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.desc}
        />
        <div className="content container">{children}</div>
      </div>
    )}
  />
)
