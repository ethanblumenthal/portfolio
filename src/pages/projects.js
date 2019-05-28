import React from 'react'
import Layout from '../components/Layout'

const Projects = () => {
  return (
    <Layout color="#777" title="Projects">
      <section className="page-projects" id="section-projects">
        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">Hype Swipe</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>React Native & Firebase</li>
                    <li>CSS Animations</li>
                    <li>Push Notifications</li>
                    <li>One Time Passwords</li>
                    <li>Serverless Computing</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                      <div className="card__info-box">
                          <p className="card__info-title">Hype Swipe</p>
                          <p className="card__info-description">Find new places to explore near you.</p>
                      </div>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/ethanblumenthal/hype-swipe" className="btn btn--white u-margin-bottom-medium">View Code</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">Product Loop</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Node & Express</li>
                      <li>Payments with Stripe</li>
                      <li>Webhooks with Sendgrid</li>
                      <li>Data Caching with Redis</li>
                      <li>Automated Testing with Jest</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__info-box">
                      <p className="card__info-title" style={{ fontSize: '5rem' }}>Product Loop</p>
                      <p className="card__info-description">Get email feedback on your product.</p>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ethanblumenthal/product-loop" className="btn btn--white u-margin-bottom-medium">View Code</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://product-loop.herokuapp.com/" className="btn btn--white">Demo App</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">Code Along</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>React & Redux</li>
                      <li>Streaming with RTMP</li>
                      <li>Google OAuth</li>
                      <li>Higher Order Components</li>
                      <li>Middlewares</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__info-box">
                      <p className="card__info-title">Code Along</p>
                      <p className="card__info-description">Live stream your coding sessions.</p>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ethanblumenthal/code-along" className="btn btn--white u-margin-bottom-medium">View Code</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://code-along-1.herokuapp.com/" className="btn btn--white">Demo App</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="u-center-text">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ethanblumenthal" className="btn-text">View all &rarr;</a>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
