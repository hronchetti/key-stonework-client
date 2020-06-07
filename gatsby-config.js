module.exports = {
  siteMetadata: {
    title: `Key Stonework`,
    description: `Architectural cast stone solutions`,
    author: `Gary Britten`,
    siteUrl: `http://keystonework.co.uk/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    /* {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    }, */
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/routes.js`,
      },
    },
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        redirect: [`RewriteRule ^(.*[^/])$ /$1/ [L,R=301]`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `key-stonework`,
        start_url: `/`,
        background_color: `#093169`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/img/favicon.png`,
      },
    },
  ],
}
