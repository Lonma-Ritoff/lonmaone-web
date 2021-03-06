import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Header from '../components/header'
import ArticlePreview from '../components/article-preview'
import classes from './index.module.css';
import SEO from '../components/seo';

class RootIndex extends React.Component {
  render() {
    const videoSource = "https://res.cloudinary.com/dswcrbbwu/video/upload/v1620921503/projetcarrera.fr/videos/ProjetCarrera.fr_-_LandingVideo_eiade3.mp4"
    return (
      <>
      <Header location={this.props.location}>
      </Header>
      <SEO
      title="Site web"
      description="LonmaOne est un projet mené par le groupe Lonma-Ritoff, fondé par deux étudiants d'Epitech, passionnés de voitures depuis longtemps. Le but est de réaliser une voiture autonome, basée sur un chassis de modélisme, qui peut éviter des obstacles.">
      </SEO>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
      <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} playsinline>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video system.
            </video>

            
        </div>
        <div className={classes.Content}>
                <div className={classes.SubContent} >
                <img className="img-responsive" src="https://res.cloudinary.com/dswcrbbwu/image/upload/v1623079724/projetcarrera.fr/images/lonma-ritoff-transparent-white_umwqlx.png"></img>
                    <h1>LonmaOne</h1><h6>Par le groupe Lonma-Ritoff</h6>
                    <p>Découvrez dès maintenant notre projet de voiture autonome.</p>
                    <a href="https://instagram.com/lonmaritoff">
                      <span style={{fontSize: '4.5rem'}}>
                          <span style={{color: 'white'}}>
                              <i class="fab fa-instagram"></i>
                          </span>
                      </span>
                    </a>
                    <br></br>
                    <a href="/ourproject">
                      <button type="button" className="btn btn-outline-dark">En savoir plus</button>
                    </a>
                </div>
            </div>
      </>
    )
  }
}

export default RootIndex