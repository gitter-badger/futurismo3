import React from 'react'

import Navigation from './Navigation'
import Footer from './Footer'

import '../../css/profile/main.scss'
import '../../css/profile/profile.css'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <Navigation />
        {children}
        <script src="https://embed.small.chat/T0GSX24ADGC2JS0Y2W.js" async />
        <Footer />
      </div>
    )
  }
}

export default Template
