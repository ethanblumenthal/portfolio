module.exports = {
  siteMetadata: {
    title: 'Ethan Blumenthal',
    author: 'Ethan Blumenthal'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp'
  ]
}
