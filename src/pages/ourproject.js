import React from 'react'
import get from 'lodash/get'
import Header from '../components/header'
import SubHeader from '../components/sub-header'
import { Card, CardDeck } from 'react-bootstrap';
import SEO from '../components/seo';
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
        <SEO
      title="Le projet"
      description="ProjetCarrera est un projet mené par deux étudiants d'Epitech, passionnés de voitures depuis longtemps. Le but est de réaliser une voiture autonome, basée sur un chassis de modélisme, qui peut éviter des obstacles.">
      </SEO>
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
                    </div>
                  </div>
                  <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                    <GiSchoolBag size={32} />
                      <h5 class="card-title">Par des étudiants</h5>
                    </div>
                  </div>
                  <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                    <GiStoneCrafting size={32} />
                      <h5 class="card-title">Basé sur du modelisme</h5>
                    </div>
                  </div>
                  <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                      <GiCarWheel size={32} />
                      <h5 class="card-title">Unique</h5>
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
            <section id="Services" class="content-section text-center">
              <div class="container">
                <div class="block-heading">
                  <h2>Nous aider</h2>
                  <p>Si vous aussi vous avez des idées qui pourraient améliorer notre voiture, faites nous en part ! Nous sommes à l'écoute.<br></br>Aussi, si vous voulez nous aider, partager notre site internet est déjà un grand plus, mais si vous souhaitez aller plus loin, vous pouvez aussi nous faire un petit don sur notre cagnotte PayPal (oui le projet coûte cher... Brice fait ses comptes tous les jours !!!!!, et son banquier aussi...) </p>
                  <a href="https://paypal.me/pools/c/8yZZk3V5rY">Lien vers la cagnotte</a>
                </div>
              </div>
            </section>
        </div>
        </>
      )
  }
}
export default OurProjectIndex