import React from 'react'
import Layout from '../components/Layout'

const Blog = () => {
  return (
    <Layout color="#777" title="Blog">
      <section className="section-stories">
        <div className="row">
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ethanblumenthal/level-up-your-web-development-skills-with-typescript-b8f70da8712" className="story__link">
            <div className="story">
              <figure className="story__shape">
                <img src="https://s3.us-east-2.amazonaws.com/ethan-blumenthal-portfolio/nat-6.jpg" alt="TypeScript" className="story__img" />
                <figcaption className="story__caption">TypeScript</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">Level Up Your Web Development Skills With TypeScript</h3>
                <p>Want to level up your web development skills? Then TypeScript just might be the answer. TypeScript is an open source programming language that is developed and maintained by Microsoft. You can think of TypeScript as a wrapper around JavaScript, built on top of ES6, that gives you extended functionality. However, TypeScript must still be compiled to JavaScript in order to run in the browser...</p>
              </div>
            </div>
          </a>
        </div>

        <div className="row">
          <div className="story">
            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ethanblumenthal/hello-world-graphql-edition-dc4bf1a59cc" className="story__link">
              <figure className="story__shape">
                <img src="https://s3.us-east-2.amazonaws.com/ethan-blumenthal-portfolio/nat-7.jpg" alt="GraphQL" className="story__img" />
                <figcaption className="story__caption">GraphQL</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">Build next generation APIs with GraphQL</h3>
                <p>GraphQL is the new kid on the block when it comes to API design. If you’re looking to improve the flow of data in your applications, then the time is right to explore this exciting new technology. GraphQL allows users to declaratively fetch data by specifying exactly what they want. As applications have become increasingly complex, data has become heavily nested, creating headaches for developers...</p>
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
