import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Header from '../components/header'
import ArticlePreview from '../components/article-preview'
import classes from './index.module.css';
import video from '../../public/static/videos/landing.mp4'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const videoSource = video
    return (
      <>
      <Header location={this.props.location}></Header>
      <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video system.
            </video>

            
        </div>
        <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>Projet Carrera</h1>
                    <p>Plus qu'une passion</p>
                    <button type="button" className="btn btn-outline-dark">En savoir plus</button>
                </div>
            </div>
      </>
      // <Header location={this.props.location}>
      //   <div style={{ background: '#fff' }}>
        
      //     <Helmet title={siteTitle} />
      //     <Hero data={author.node} />
      //     <div className="wrapper">
      //       <h2 className="section-headline">Les dernières nouveautés</h2>
      //       <ul className="article-list">
      //         {posts.map(({ node }) => {
      //           return (
      //             <li key={node.slug}>
      //               <ArticlePreview article={node} />
      //             </li>
      //           )
      //         })}
      //       </ul>
      //     </div>
      //   </div>
      // </Header>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
