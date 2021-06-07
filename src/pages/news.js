import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './news.module.css'
import Header from '../components/Header'
import ArticlePreview from '../components/article-preview'
import SubHeader from '../components/sub-header'
import SEO from '../components/seo';
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

class BlogIndex extends React.Component {
  render() {

    return (
      <>
      <Header location={this.props.location}></Header>
      <SEO
      title="Actualités"
      description="Découvrez les dernières mises à jour du projet carrera ! Nous sommes disponibles sur Instagram.">
      </SEO>
      <SubHeader>
        <div style={{ background: '#fff' }}>
        <section className="content-section">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="block-heading">
                    <h2>Les dernières actualités</h2>
                  </div>
                  <p className="lead">Restez informés, suivez nous sur Instagram (lonmaritoff).</p>
                </div>
              </div>
            </div>
            <InstagramFeed token={process.env.INSTAGRAM_TOKEN}  counter="6"/>
          </section>
        </div>
        </SubHeader>
        </>
    )
  }
}

export default BlogIndex