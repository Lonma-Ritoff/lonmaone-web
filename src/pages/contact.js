import React from 'react'
import get from 'lodash/get'
import Header from '../components/header'
import SubHeader from '../components/sub-header'

class ContactIndex extends React.Component {
  render() {
    return (
      <>

      <Header location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2 className="section-headline">A propos</h2>
          </div>
        </div>
      </Header>
      <SubHeader></SubHeader>
      <div>         
          <section id="About" className="content-section">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="block-heading">
                    <h2>Nous contacter</h2>
                  </div>
                  <p className="lead">Une question ? N'hésitez pas.</p>
                </div>
              </div>
            </div>
          </section>
        <div className="row justify-content-md-center text-center">
      </div>
      </div>
      </>
    )
  }
}
export default ContactIndex