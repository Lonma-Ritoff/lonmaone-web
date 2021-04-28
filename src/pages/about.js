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
          <img className="rounded mx-auto d-block" src="https://i.imgur.com/XV8PT2o.jpg" alt="Anthoni Marie" width="150" height="150" style={{borderRadius:'5%', width:'unset'}}></img>
          <h2>Anthoni Marie</h2>
          <p>Passionné d'automobile et informatique depuis mon enfance, ce projet me tient particulièrement à coeur !</p>
          <p><a className="btn btn-secondary" href="https://anthoni-marie.fr" role="button">En savoir plus</a></p>
        </div>
        <div className="col-lg-4">
          <img className="rounded mx-auto d-block" src="https://i.imgur.com/O2kwQ67.jpg" alt="Brice Toffolon" width="150" height="150" style={{borderRadius:'5%', width:'unset'}}></img>
          <h2>Brice Toffolon</h2>
          <p>Féru de sport automobile depuis mon plus jeune âge, ce projet melant informatique et le monde de l'automobile. Ce projet réunit deux de mes plus grandes passions.</p>
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