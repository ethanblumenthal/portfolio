import React, { Component } from 'react'
import { Link } from 'gatsby'



class Header extends Component {

  borderBottom(title) {
    return this.props.title === title ? '3px solid currentColor' : ''
  }

  render() {
    return (
      <header className="navigation">
        <h1>
          <Link className="navigation__title" style={{ color: this.props.color }} to="/">Ethan Blumenthal</Link>
        </h1>
        <nav>
          <ul className="navigation__nav-list">
            <li>
              <Link className="navigation__nav-item" to="/" style={{ color: this.props.color, borderBottom: this.borderBottom('Home') }}>Home</Link>
            </li>
            <li>
              <Link className="navigation__nav-item" to="/projects" style={{ color: this.props.color, borderBottom: this.borderBottom('Projects') }}>Projects</Link>
            </li>
            <li>
              <Link className="navigation__nav-item" to="/blog" style={{ color: this.props.color, borderBottom: this.borderBottom('Blog') }}>Blog</Link>
            </li>
            <li>
              <Link className="navigation__nav-item" to="/about" style={{ color: this.props.color, borderBottom: this.borderBottom('About') }}>About</Link>
            </li>
            <li>
              <Link className="navigation__nav-item" to="/contact" style={{ color: this.props.color, borderBottom: this.borderBottom('Contact') }}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
