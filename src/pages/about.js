import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Header from '../components/Header'

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <Header />
      <section className="section-about">
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Hello!</h3>
            <p className="paragraph">
            I am a full stack software developer specializing in JavaScript (React and Node) currently seeking a new opportunity. I previously worked in marketing roles in the music and education industries connecting consumers with unique experiences. However, I have always been fascinated by the endless potential for technology and realized that I wanted to build the experiences themselves. Learning to code at Fullstack Academy has launched my journey and I now aim to utilize these skills to contribute to an innovative company improving the world. I look forward to connecting with you soon!
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethanblumenthal/" className="btn-text">Learn more &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img srcSet="img/ethan-1.jpg 300w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Profile"
                className="composition__photo composition__photo--p1"
                src="img/ethan-1.jpg" />
              <img srcSet="img/ethan-2.jpg 300w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Golden Gate Bridge"
                className="composition__photo composition__photo--p2"
                src="img/ethan-2.jpg" />
              <img srcSet="img/ethan-3.jpg 300w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Lennon Wall"
                className="composition__photo composition__photo--p3"
                src="img/ethan-3.jpg" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
