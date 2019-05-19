import React from 'react'
import Layout from '../components/Layout'
import ethan1 from '../images/ethan-1.jpg'
import ethan2 from '../images/ethan-2.jpg'
import ethan3 from '../images/ethan-3.jpg'

const About = () => {
  return (
    <Layout color="#777" title="About">
      <section className="section-about">
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Hello!</h3>
            <p className="paragraph">
            I am a full stack software developer specializing in JavaScript (React, Node, & GraphQL) currently seeking a new opportunity. I previously worked in marketing roles in the music and education industries, connecting consumers with unique experiences. However, I have always been fascinated by the endless potential for technology and realized that I wanted to build the experiences themselves. Learning to code at Fullstack Academy has launched my journey and I now aim to utilize these skills to contribute to an innovative company. I look forward to connecting with you soon!
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethanblumenthal/" className="btn-text">Learn more &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img srcSet={ethan1}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Profile"
                className="composition__photo composition__photo--p1"
                src={ethan1} />
              <img srcSet={ethan2}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Golden Gate Bridge"
                className="composition__photo composition__photo--p2"
                src={ethan2} />
              <img srcSet={ethan3}
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Lennon Wall"
                className="composition__photo composition__photo--p3"
                src={ethan3} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
