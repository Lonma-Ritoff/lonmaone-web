import React from 'react'
import get from 'lodash/get'
import Header from '../components/header'
import SubHeader from '../components/sub-header'

class AboutIndex extends React.Component {
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
          <section id="About" class="content-section">
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-12">
                  <div class="block-heading">
                    <h2>L'équipe</h2>
                  </div>
                  <p class="lead">L'équipe derrière le projet Carrera.</p>
                </div>
              </div>
            </div>
          </section>
      </div>
      
      </>
    //   <Header location={this.props.location}>
    //     <div id='features' className='text-center'>
    //   <div className='container'>
    //     <div className='col-md-10 col-md-offset-1 section-title'>
    //       <h2>Features</h2>
    //     </div>
    //     <div className='row'>
    //             <div className='col-xs-6 col-md-3'>
    //               <h3>test</h3>
    //               <p>efefef</p>
    //             </div>
    //     </div>
    //   </div>
    // </div>
    //   </Header>
    )
  }
}
export default AboutIndex