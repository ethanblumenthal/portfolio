import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'

const Projects = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <section class="section-tours" id="section-tours">
          <div class="u-center-text u-margin-bottom-big">
              <h2 class="heading-secondary">
                  Projects
              </h2>
          </div>

          <div class="row">
              <div class="col-1-of-3">
                  <div class="card">
                      <div class="card__side card__side--front">
                          <div class="card__picture card__picture--1">
                              &nbsp;
                          </div>
                          <h4 class="card__heading">
                              <span class="card__heading-span card__heading-span--1">Hype Swipe</span>
                          </h4>
                          <div class="card__details">
                              <ul>
                                  <li>React Native & Firebase</li>
                                  <li>CSS Animations</li>
                                  <li>Push Notifications</li>
                                  <li>Twilio One Time Passwords</li>
                                  <li>AWS Serverless Computing</li>
                              </ul>
                          </div>
                      </div>
                      <div class="card__side card__side--back card__side--back-1">
                          <div class="card__cta">
                              <div class="card__price-box">
                                  <p class="card__price-value">Hype Swipe</p>
                                  <p class="card__price-only">Find new places to expore around you!</p>
                              </div>
                              <a target="_blank" href="https://github.com/ethanblumenthal/hype-swipe" class="btn btn--white">View Code</a>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-1-of-3">
                  <div class="card">
                      <div class="card__side card__side--front">
                          <div class="card__picture card__picture--2">
                              &nbsp;
                          </div>
                          <h4 class="card__heading">
                              <span class="card__heading-span card__heading-span--2">Product Loop</span>
                          </h4>
                          <div class="card__details">
                              <ul>
                                  <li>Node / Express / MongoDB</li>
                                  <li>Payments with Stripe</li>
                                  <li>Webhooks with Sendgrid</li>
                                  <li>Data Caching with Redis</li>
                                  <li>Automated Testing with Jest</li>
                              </ul>
                          </div>

                      </div>
                      <div class="card__side card__side--back card__side--back-2">
                          <div class="card__cta">
                              <div class="card__price-box">
                                  <p class="card__price-value">Product Loop</p>
                                  <p class="card__price-only">Get insightful email feedback on your product!</p>
                              </div>
                              <a target="_blank" href="https://github.com/ethanblumenthal/product-loop" class="btn btn--white">View Code</a>
                              <a target="_blank" href="https://product-loop.herokuapp.com/" class="btn btn--white">Demo App</a>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-1-of-3">
                  <div class="card">
                      <div class="card__side card__side--front">
                          <div class="card__picture card__picture--3">
                              &nbsp;
                          </div>
                          <h4 class="card__heading">
                              <span class="card__heading-span card__heading-span--3">Code Along</span>
                          </h4>
                          <div class="card__details">
                              <ul>
                                  <li>React / GraphQL / PostgreSQL</li>
                                  <li>Realtime Messaging Protocol</li>
                                  <li>Google & Facebook Oauth</li>
                                  <li>Higher Order Components</li>
                                  <li>Middlewares & Hooks</li>
                              </ul>
                          </div>

                      </div>
                      <div class="card__side card__side--back card__side--back-3">
                          <div class="card__cta">
                              <div class="card__price-box">
                                  <p class="card__price-value">Code Along</p>
                                  <p class="card__price-only">Live stream your coding sessions to followers!</p>
                              </div>
                              <a target="_blank" href="https://github.com/ethanblumenthal/code-along" class="btn btn--white">View Code</a>
                              <a target="_blank" href="https://code-along-1.herokuapp.com/" class="btn btn--white">Demo App</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="u-center-text u-margin-top-huge">
              <a target="_blank" href="https://github.com/ethanblumenthal" class="btn btn--green">View all Projects</a>
          </div>
      </section>
    </Layout>
  )
}

export default Projects
