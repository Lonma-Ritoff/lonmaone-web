import React from 'react'
import get from 'lodash/get'
import Header from '../components/header'
import SubHeader from '../components/sub-header'
import { Card, CardDeck } from 'react-bootstrap';
import { GiBrain, GiSchoolBag, GiStoneCrafting, GiCarWheel } from "react-icons/gi";
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

                <div class="card-deck">
                  <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <GiBrain size={32} />
                      <h5 class="card-title">Autonome</h5>
                      <p class="card-text">xx.</p>
                    </div>
                  </div>
                  <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                    <GiSchoolBag size={32} />
                      <h5 class="card-title">Par des étudiants</h5>
                      <p class="card-text">xx.</p>
                    </div>
                  </div>
                  <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                    <GiStoneCrafting size={32} />
                      <h5 class="card-title">Basé sur du modelisme</h5>
                      <p class="card-text">xx.</p>
                    </div>
                  </div>
                  <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <GiCarWheel size={32} />
                      <h5 class="card-title">Unique</h5>
                      <p class="card-text">xx.</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </section>
            <br></br>
            <section id="Services" class="content-section text-center">
              <div class="container">
                <div class="block-heading">
                  <h2>Le projet, en vrai</h2>
                  <p>Directement à EPITECH ! (photos...)</p>
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