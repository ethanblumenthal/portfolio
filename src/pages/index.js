import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src="img/video.mp4" type="video/mp4" />
            <source src="img/video.webm" type="video/webm" />
          </video>
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Ethan Blumenthal</span>
            <span className="heading-primary--sub">Full Stack Software Developer</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">View Resume</a>
        </div>
      </section>
    </Layout>
  )
}

export default Index
