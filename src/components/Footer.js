import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__socials">
            <ul className="footer__list">
              <li className="footer__item"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethanblumenthal/" className="footer__link"><i className="fab fa-linkedin"></i></a></li>
              <li className="footer__item"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ethanblumenthal" className="footer__link"><i className="fab fa-medium"></i></a></li>
              <li className="footer__item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ethanblumenthal" className="footer__link"><i className="fab fa-github-square"></i></a></li>
              <li className="footer__item"><a target="_blank" rel="noopener noreferrer" href="mailto:ethan.blumenthal@gmail.com" className="footer__link"><i className="fas fa-envelope-square"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">Created by Ethan Blumenthal, © 2019.
            <br />
            Find the code for this website <a target="_blank" rel="noopener noreferrer" href="https://github.com/ethanblumenthal/portfolio" className="footer__link">here</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
