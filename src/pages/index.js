import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Header from '../components/Header'


const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <section className="header">
        <Header />
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Ethan Blumenthal</span>
            <span className="heading-primary--sub">Full Stack Software Developer</span>
          </h1>
          <a target="_blank" rel="noopener noreferrer" href="https://www.ethanblumenthal.net/" className="btn btn--white btn--animated">View Resume</a>
        </div>  
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <h3 className="heading-tertiary u-margin-bottom-small">Languages</h3>
              <p className="feature-box__text">JavaScript</p>
              <p className="feature-box__text">TypeScript</p>
              <p className="feature-box__text">Python</p>
              <p className="feature-box__text">C</p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <h3 className="heading-tertiary u-margin-bottom-small">Front End</h3>
              <p className="feature-box__text">CSS3 & Sass</p>
              <p className="feature-box__text">React & Redux</p>
              <p className="feature-box__text">React Router</p>
              <p className="feature-box__text">React Native</p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <h3 className="heading-tertiary u-margin-bottom-small">Back End</h3>
                <p className="feature-box__text">Node & Express</p>
                <p className="feature-box__text">GraphQL & Apollo</p>
                <p className="feature-box__text">PostgreSQL & Sequelize</p>
                <p className="feature-box__text">MongoDB & Mongoose</p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <h3 className="heading-tertiary u-margin-bottom-small">Dev Ops</h3>
              <p className="feature-box__text">Git & GitHub</p>
              <p className="feature-box__text">TravisCI & Heroku</p>
              <p className="feature-box__text">AWS & GCP</p>
              <p className="feature-box__text">Docker & Kubernetes</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
