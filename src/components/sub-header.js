import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'

class SubHeader extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
      <Container>
        {children}
      </Container>
      </>
    )
  }
}

export default SubHeader
