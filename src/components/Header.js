import React, { Component } from 'react'
import { Link } from 'gatsby'

class Header extends Component {
  borderBottom(title) {
    return this.props.title === title ? '3px solid currentColor' : ''
  }

  renderDesktop() {
    return (
      <header className="desktop">
        <h1>
          <Link className="desktop__title" style={{ color: this.props.color }} to="/">Ethan Blumenthal</Link>
        </h1>
        <nav>
          <ul className="desktop__list">
            <li><Link className="desktop__item" to="/"
              style={{ color: this.props.color, borderBottom: this.borderBottom('Home') }}>Home</Link></li>
            <li><Link className="desktop__item" to="/projects"
              style={{ color: this.props.color, borderBottom: this.borderBottom('Projects') }}>Projects</Link></li>
            <li><Link className="desktop__item" to="/blog"
              style={{ color: this.props.color, borderBottom: this.borderBottom('Blog') }}>Blog</Link></li>
            <li><Link className="desktop__item" to="/about"
              style={{ color: this.props.color, borderBottom: this.borderBottom('About') }}>About</Link></li>
            <li><Link className="desktop__item" to="/contact"
              style={{ color: this.props.color, borderBottom: this.borderBottom('Contact') }}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }

  renderMobile() {
    return (
      <header className="mobile">
        <input type="checkbox" className="mobile__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="mobile__button">
          <span className="mobile__icon">&nbsp;</span>
        </label>
        <div className="mobile__background">&nbsp;</div>

        <nav className="mobile__nav">
          <ul className="mobile__list">
            <li className="mobile__item"><Link className="mobile__link" to="/"><span>01</span>Home</Link></li>
            <li className="mobile__item"><Link className="mobile__link" to="/projects"><span>02</span>Projects</Link></li>
            <li className="mobile__item"><Link className="mobile__link" to="/blog"><span>03</span>Blog</Link></li>
            <li className="mobile__item"><Link className="mobile__link" to="/about"><span>04</span>About</Link></li>
            <li className="mobile__item"><Link className="mobile__link" to="/contact"><span>05</span>Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }

  render() {
    return (
      <div>
        {window.innerWidth > 900 ? this.renderDesktop() : this.renderMobile()}
      </div>
    )
  }
}

export default Header