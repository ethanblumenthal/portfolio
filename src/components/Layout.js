import React from 'react'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/index.scss'

const Layout = props => {
  return (
    <div>
      <Head title={props.title} />
      <Header color={props.color} title={props.title} />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
