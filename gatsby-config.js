module.exports = {
  siteMetadata: {
    title: 'Ethan Blumenthal\'s Portfolio',
    author: 'Ethan Blumenthal'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
