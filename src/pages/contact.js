import React from 'react'
import get from 'lodash/get'
import Header from '../components/header'
import SubHeader from '../components/sub-header'
import SEO from '../components/seo';
class ContactIndex extends React.Component {
  render() {
    return (
      <>
      <Header location={this.props.location}>
        <div style={{ background: '#fff' }}>
        <div className="wrapper">
            <h2 className="section-headline">Contacter</h2>
        </div>
        </div>
      </Header>
      <SEO
      title="Contacter"
      description="Une question ? N'hésitez pas, contactez nous dès maintenant !">
      </SEO>
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
            <div className="row justify-content-md-center text-center">
                <div className="col">
                  <img className="rounded mx-auto d-block img-fluid" src="https://res.cloudinary.com/dswcrbbwu/image/upload/v1619695453/projetcarrera.fr/images/IMG_2499_okybmc_xezmat.jpg" alt="Anthoni Marie" width="400" height="400" style={{borderRadius:'5%', width:'70%'}}></img>
                  <br></br>
                  <h4>Où nous trouver ?</h4>
                  <p>Pour les étudiants d'EPITECH, n'hésitez pas à venir découvrir notre voiture directement à EPITECH Paris. Nous sommes en général très souvent au 4ème de Paritalie.</p>
                  <p>Pour d'autres questions, vous pouvez nous contacter par email à <a href="mailto:anthoni.marie@epitech.eu">cette adresse</a>.</p>
                  <p><a className="btn btn-secondary" href="https://anthoni-marie.fr" role="button">En savoir plus</a></p>
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