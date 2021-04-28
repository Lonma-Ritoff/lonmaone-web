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
          <section id="About" className="content-section">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="block-heading">
                    <h2>L'équipe</h2>
                  </div>
                  <p className="lead">L'équipe derrière le projet Carrera.</p>
                </div>
              </div>
            </div>
          </section>
        <div className="row justify-content-md-center text-center">
        <div className="col-lg-4">
          <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/20517603?s=400&u=ab382b2ad7d777a2b4f6cf75665914f41a060e9e&v=4" alt="Anthoni Marie" width="400" height="400"></img>
          <h2>Anthoni Marie</h2>
          <p>Passionné d'automobile et informatique depuis mon enfance, ce projet me tient particulièrement à coeur !</p>
          <p><a className="btn btn-secondary" href="https://anthoni-marie.fr" role="button">En savoir plus</a></p>
        </div>
        <div className="col-lg-4">
          <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/57350282?s=400&u=c2755e786dc536ff093a6508ca64f7a9e0bc0ad0&v=4" alt="Brice Toffolon" width="400" height="400"></img>
          <h2>Brice Toffolon</h2>
          <p>Desc de brice.</p>
          <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/brice-toffolon/" role="button">En savoir plus</a></p>
          </div>
      </div>
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