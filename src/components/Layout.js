import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/index.scss'

const Layout = props => {
  return (
    <div>
      <Header color={props.color} title={props.title} />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
