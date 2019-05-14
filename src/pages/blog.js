import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
// import { graphql, useStaticQuery } from 'gatsby'

const Blog = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allContentfulBlogPost ( sort: { fields:date, order:DESC }) {
  //       edges {
  //         node {
  //           title
  //           slug
  //           body {
  //             id
  //           }
  //           date(formatString: "MMMM Do, YYYY")
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout color="#777" title="Blog">
      <Head title="Blog" />
      <section className="section-stories">
        <div className="row">
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ethanblumenthal/hello-world-graphql-edition-dc4bf1a59cc" className="story__link">
            <div className="story">
              <figure className="story__shape">
                <img src="img/nat-9.jpg" alt="GraphQL" className="story__img" />
                <figcaption className="story__caption">GraphQL</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">Hello World — GraphQL Edition</h3>
                <p>GraphQL is the new kid on the block when it comes to API design. If you’re looking to improve the flow of data in your applications, then the time is right to explore this exciting new technology. GraphQL allows users to declaratively fetch data by specifying exactly what they want. As applications have become increasingly complex, data has become heavily nested, creating headaches for developers...</p>
              </div>
            </div>
          </a>
        </div>

        <div className="row">
          <div className="story">
            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ethanblumenthal/technologies-shaping-the-future-3df36c61761e" className="story__link">
              <figure className="story__shape">
                <img src="img/nat-8.jpg" alt="Future" className="story__img" />
                <figcaption className="story__caption">Future</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">Technologies Shaping the Future</h3>
                <p>We are currently in an age of lightning fast innovation. Since the dawn of the Internet, new technologies have progressed at a pace never before seen in human history. It is an amazing time to partake in building the future. Below are the top five technologies (in no particular order) that I believe are about to change the world....</p>
              </div>
            </a>
          </div>
        </div>

        <div className="u-center-text">
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ethanblumenthal" className="btn-text">Read all &rarr;</a>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
