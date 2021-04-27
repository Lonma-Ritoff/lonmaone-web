import React from 'react'
import get from 'lodash/get'
import Layout from '../components/layout'

class OurProjectIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2 className="section-headline">Le projet</h2>
          </div>
        </div>
      </Layout>
    )
  }
}
export default OurProjectIndex