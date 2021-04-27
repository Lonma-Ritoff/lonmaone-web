import React from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'

class AboutIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2 className="section-headline">A propos de nous</h2>
          </div>
        </div>
      </Layout>
    )
  }
}
export default AboutIndex