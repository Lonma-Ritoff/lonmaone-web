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
    const videoSource = "https://res.cloudinary.com/dswcrbbwu/video/upload/v1619640677/projetcarrera.fr/videos/ProjetCarrera.fr_-_LandingVideo_-_HEVC_-_min_mljgt9.mov"
    return (
      <>
      <Header location={this.props.location}>
      </Header>
      <SEO
      title="Site web"
      description="ProjetCarrera est un projet mené par deux étudiants d'Epitech, passionnés de voitures depuis longtemps. Le but est de réaliser une voiture autonome, basée sur un chassis de modélisme, qui peut éviter des obstacles.">
      </SEO>
      <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video system.
            </video>

            
        </div>
        <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>Projet Carrera</h1>
                    <p>Découvrez dès maintenant notre projet de voiture autonome.</p>
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