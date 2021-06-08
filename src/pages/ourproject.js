import React from "react";
import get from "lodash/get";
import Header from "../components/header";
import SubHeader from "../components/sub-header";
import { Card, CardDeck } from "react-bootstrap";
import SEO from "../components/seo";
import {
  GiBrain,
  GiSchoolBag,
  GiStoneCrafting,
  GiCarWheel,
} from "react-icons/gi";
class OurProjectIndex extends React.Component {
  render() {
    return (
      <>
        <Header location={this.props.location}>
          <div style={{ background: "#fff" }}>
            <div classNameName="wrapper">
              <h2 classNameName="section-headline">Découvrez LonmaOne</h2>
            </div>
          </div>
        </Header>
        <SEO
          title="Découvrez LonmaOne"
          description="LonmaOne est un projet mené par deux étudiants d'Epitech, passionnés de voitures depuis longtemps. Le but est de réaliser une voiture autonome, basée sur un chassis de modélisme, qui peut éviter des obstacles."
        ></SEO>
        <SubHeader></SubHeader>
        <div>
          <section id="About" className="content-section">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="block-heading">
                    <h2>LonmaOne</h2>
                  </div>
                  <p className="lead">
                    LonmaOne est un projet mené par le groupe Lonma-Ritoff,
                    fondé par deux étudiants d'EPITECH Paris, passionnés
                    d'automobile tous les deux et pour qui le but est de
                    réaliser une voiture autonome, capable de se diriger sans
                    aide humaine et capable d'éviter des obstacles.
                  </p>
                </div>
                <div className="card-deck mx-auto">
                  <div className="card" style={{width: "auto"}}>
                    <div className="card-body">
                      <GiBrain size={32} />
                      <h5 className="card-title">Autonome</h5>
                    </div>
                  </div>
                  <div className="card" style={{width: "auto"}}>
                    <div className="card-body">
                    <GiSchoolBag size={32} />
                      <h5 className="card-title">Par des étudiants</h5>
                    </div>
                  </div>
                  <div className="card" style={{width: "auto"}}>
                    <div className="card-body">
                    <GiStoneCrafting size={32} />
                      <h5 className="card-title">Basé sur du modelisme</h5>
                    </div>
                  </div>
                  <div className="card" style={{width: "auto"}}>
                    <div className="card-body">
                      <GiCarWheel size={32} />
                      <h5 className="card-title">Unique</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br></br>
          <section id="Services" className="content-section text-center">
            <div className="container">
              <div className="block-heading">
                <h2>Le projet, en vrai</h2>
                <p>
                  Venez le découvrir directement à EPITECH ! Nous sommes
                  régulièrement sur le campus de Paris.
                </p>
              </div>
            </div>
          </section>
          <section id="Services" className="content-section text-center">
            <div className="container">
              <div className="block-heading">
                <h2>Nous suivre</h2>
                <p>
                  Envie de suivre nos activités sur le projet ? N'hésitez pas à nous suivre sur notre page Instagram <a href="https://instagram.com/lonmaritoff">@lonmaritoff</a> !
                  Plus d'infos sur la page <a href="/news">ACTU</a>.
                </p>
              </div>
            </div>
          </section>
          <section id="Services" className="content-section text-center">
            <div className="container">
              <div className="block-heading">
                <h2>Nous aider</h2>
                <p>
                  Si vous aussi vous avez des idées qui pourraient améliorer
                  notre voiture, faites nous en part ! Nous sommes à l'écoute.
                  <br></br>Aussi, si vous voulez nous aider encore plus,
                  partager notre site internet et nos réseaux sociaux est déjà un grand plus !{" "}
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
export default OurProjectIndex;