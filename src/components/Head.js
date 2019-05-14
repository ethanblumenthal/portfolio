import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title }) => {
  return (
    <Helmet title={`${title} | Ethan Blumenthal`} />
  )
}

export default Head
