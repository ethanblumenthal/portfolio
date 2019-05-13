import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="navigation">
      <h1>
        <Link className="navigation__title" to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      <nav>
        <ul className="navigation__nav-list">
          <li>
            <Link className="navigation__nav-item" to="/">Home</Link>
          </li>
          <li>
            <Link className="navigation__nav-item" to="/projects">Projects</Link>
          </li>
          <li>
            <Link className="navigation__nav-item" to="/blog">Blog</Link>
          </li>
          <li>
            <Link className="navigation__nav-item" to="/about">About</Link>
          </li>
          <li>
            <Link className="navigation__nav-item" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
