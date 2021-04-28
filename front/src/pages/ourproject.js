import React from 'react'
import get from 'lodash/get'
import Header from '../components/header'
import SubHeader from '../components/sub-header'

class OurProjectIndex extends React.Component {
  render() {

    return (
        <>
        <Header location={this.props.location}>
          <div style={{ background: '#fff' }}>
            <div className="wrapper">
              <h2 className="section-headline">Le projet</h2>
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
                      <h2>ProjetCarrera</h2>
                    </div>
                    <p class="lead">Le projet Carrera est un projet mené par deux étudiants d'EPITECH Paris, passionnés d'automobile tous les deux et pour qui le but est de réaliser une voiture autonome, capable de se diriger sans aide humaine et capable d'éviter des obstacles.</p>
                  </div>
                </div>
              </div>
            </section>
           
            <section id="Services" class="content-section text-center">
              <div class="container">
                <div class="block-heading">
                  <h2>xx</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
    // return (
    //   <Header location={this.props.location}>
    //     <div style={{ background: '#fff' }}>
    //       <div className="wrapper">
    //         <h2 className="section-headline">Le projet</h2>
    //       </div>
    //     </div>
    //   </Header>
    // )
  }
}
export default OurProjectIndex