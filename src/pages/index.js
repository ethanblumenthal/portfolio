import React from 'react'
import Layout from '../components/Layout'

const Index = () => {
  return (
    <Layout color="#fff" title="Home">
      <section className="page-home">
        <div className="page-home__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Ethan Blumenthal</span>
            <span className="heading-primary--sub">Full Stack Software Developer</span>
          </h1>
          <a target="_blank" rel="noopener noreferrer" href="https://s3.us-east-2.amazonaws.com/ethan-blumenthal-portfolio/ethan_blumenthal_resume.pdf" className="btn btn--white btn--animated">View Resume</a>
        </div>  
        <div className="row">
          <div className="col-1-of-4">
            <div className="skill first">
              <h3 className="heading-tertiary u-margin-bottom-small">Languages</h3>
              <p className="skill__text">JavaScript (ES6+)</p>
              <p className="skill__text">TypeScript</p>
              <p className="skill__text">Python3</p>
              <p className="skill__text">Elixir & Phoenix</p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="skill">
              <h3 className="heading-tertiary u-margin-bottom-small">Front End</h3>
              <p className="skill__text">HTML5 & CSS3</p>
              <p className="skill__text">React & Redux</p>
              <p className="skill__text">React Router</p>
              <p className="skill__text">React Native</p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="skill">
              <h3 className="heading-tertiary u-margin-bottom-small">Back End</h3>
                <p className="skill__text">Node & Express</p>
                <p className="skill__text">GraphQL & Apollo</p>
                <p className="skill__text">PostgreSQL & Sequelize</p>
                <p className="skill__text">MongoDB & Mongoose</p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="skill">
              <h3 className="heading-tertiary u-margin-bottom-small">Dev Ops</h3>
              <p className="skill__text">TravisCI & Heroku</p>
              <p className="skill__text">Google Cloud Platform</p>
              <p className="skill__text">Amazon Web Services</p>
              <p className="skill__text">Docker & Kubernetes</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
