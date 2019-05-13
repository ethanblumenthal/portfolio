import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="footer__logo-box">
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethanblumenthal/" className="footer__link">LinkedIn</a></li>
              <li className="footer__item"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ethanblumenthal" className="footer__link">Medium</a></li>
              <li className="footer__item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ethanblumenthal" className="footer__link">GitHub</a></li>
              <li className="footer__item"><a target="_blank" rel="noopener noreferrer" href="mailto:ethan.blumenthal@gmail.com" className="footer__link">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
        <p className="footer__copyright">Created by {data.site.siteMetadata.author}, © 2019</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
