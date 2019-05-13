import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import layoutStyles from './layout.module.scss'
import '../styles/index.scss'

const Layout = props => {
  return (
    <body className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </body>
  )
}

export default Layout
