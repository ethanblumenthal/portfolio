import React from 'react'
import Footer from '../components/Footer'
import '../styles/index.scss'

const Layout = props => {
  return (
    <div>
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
