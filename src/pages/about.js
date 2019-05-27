import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout color="#777" title="About">
      <section className="page-about">
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">Hello!</h3>
            <p className="paragraph">
            I am a full stack software developer specializing in JavaScript (React, Node, & GraphQL) currently seeking a new opportunity. I previously worked in marketing roles in the music and education industries, connecting consumers with unique experiences. However, I have always been fascinated by the endless potential for technology and realized that I wanted to build the experiences themselves. Learning to code at Fullstack Academy has launched my journey and I now aim to utilize these skills to contribute to an innovative company. I look forward to connecting with you soon!
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethanblumenthal/" className="btn-text">Learn more &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="profile">
              <img srcSet="https://s3.us-east-2.amazonaws.com/ethan-blumenthal-portfolio/ethan-1.jpg"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Profile"
                className="profile__photo profile__photo--p1"
                src="https://s3.us-east-2.amazonaws.com/ethan-blumenthal-portfolio/ethan-1.jpg" />
              <img srcSet="https://s3.us-east-2.amazonaws.com/ethan-blumenthal-portfolio/ethan-2.jpg"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Golden Gate Bridge"
                className="profile__photo profile__photo--p2"
                src="https://s3.us-east-2.amazonaws.com/ethan-blumenthal-portfolio/ethan-2.jpg" />
              <img srcSet="https://s3.us-east-2.amazonaws.com/ethan-blumenthal-portfolio/ethan-3.jpg"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Lennon Wall"
                className="profile__photo profile__photo--p3"
                src="https://s3.us-east-2.amazonaws.com/ethan-blumenthal-portfolio/ethan-3.jpg" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
