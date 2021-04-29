import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './news.module.css'
import Header from '../components/Header'
import ArticlePreview from '../components/article-preview'
import SubHeader from '../components/sub-header'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <>
      <Header location={this.props.location}></Header>
      <SubHeader>
        <div style={{ background: '#fff' }}>
        <section className="content-section">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="block-heading">
                    <h2>Les dernières actualités</h2>
                  </div>
                  <p className="lead">Restez informés, suivez nous sur Instagram.</p>
                </div>
              </div>
            </div>
            <InstagramFeed token={process.env.INSTAGRAM_TOKEN}  counter="6"/>
          </section>
          {/* <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Les dernières nouveautés</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div> */}
        </div>
        </SubHeader>
        </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
  }
`
