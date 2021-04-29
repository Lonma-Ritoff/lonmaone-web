import React from 'react'
import get from 'lodash/get'
import Header from '../components/header'
import SubHeader from '../components/sub-header'
import SEO from '../components/seo';

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
      <SEO
      title="A propos"
      description="Découvrez en plus sur le projet Carrera. La voiture autonome développée par deux étudiants.">
      </SEO>
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
          <img className="rounded mx-auto d-block" src="https://res.cloudinary.com/dswcrbbwu/image/upload/v1619695453/projetcarrera.fr/images/anthonimarie_wfnmle_zr6awk.jpg" alt="Anthoni Marie" width="150" height="150" style={{borderRadius:'5%', width:'unset'}}></img>
          <h2>Anthoni Marie</h2>
          <p>Passionné d'automobile et informatique depuis mon enfance, ce projet me tient particulièrement à coeur !</p>
          <p><a className="btn btn-secondary" href="https://anthoni-marie.fr" role="button">En savoir plus</a></p>
        </div>
        <div className="col-lg-4">
          <img className="rounded mx-auto d-block" src="https://res.cloudinary.com/dswcrbbwu/image/upload/v1619695453/projetcarrera.fr/images/bricetoffolon_puhhnv_jdgtv8.jpg" alt="Brice Toffolon" width="150" height="150" style={{borderRadius:'5%', width:'unset'}}></img>
          <h2>Brice Toffolon</h2>
          <p>Féru de sport automobile depuis mon plus jeune âge, ce projet melant informatique et le monde de l'automobile. Ce projet réunit deux de mes plus grandes passions.</p>
          <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/brice-toffolon/" role="button">En savoir plus</a></p>
          </div>
      </div>
      </div>
      </>
    )
  }
}
export default AboutIndex