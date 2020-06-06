module.exports = {
  siteMetadata: {
    title: 'Jessica Peck Portfolio',
    author: 'Jessica Peck',
    description: 'Jessica Peck portfolio site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jessica-peck-portfolio',
        short_name: 'Jessica Peck',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
  ],
}
