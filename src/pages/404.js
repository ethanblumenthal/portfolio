import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFound = () => {
  return (
    <Layout color="#fff" title="404">
      <h1>Page Not Found</h1>
      <p><Link to="/">Head Home</Link></p>
    </Layout>
  )
}

export default NotFound
