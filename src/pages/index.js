import React from 'react'
import Layout from '../components/Layout'

const Index = () => {
  return (
    <Layout color="#fff" title="Home">
      <section className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Ethan Blumenthal</span>
            <span className="heading-primary--sub">Full Stack Software Developer</span>
          </h1>
          <a target="_blank" rel="noopener noreferrer" href="https://s3.us-east-2.amazonaws.com/ethan-blumenthal-portfolio/ethan_blumenthal_resume.pdf" className="btn btn--white btn--animated">View Resume</a>
        </div>  
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <h3 className="heading-tertiary u-margin-bottom-small">Languages</h3>
              <p className="feature-box__text">JavaScript (ES6+)</p>
              <p className="feature-box__text">TypeScript</p>
              <p className="feature-box__text">Python3</p>
              <p className="feature-box__text">Elixir & Phoenix</p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <h3 className="heading-tertiary u-margin-bottom-small">Front End</h3>
              <p className="feature-box__text">HTML5 & CSS3</p>
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
              <p className="feature-box__text">TravisCI & Heroku</p>
              <p className="feature-box__text">Google Cloud Platform</p>
              <p className="feature-box__text">Amazon Web Services</p>
              <p className="feature-box__text">Docker & Kubernetes</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
