module.exports = {
  siteMetadata: {
    title: `Key Stonework`,
    description: `Architectural cast stone solutions`,
    author: `Gary Britten`,
    siteUrl: `https://keystonework.co.uk`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        redirect: [`RewriteRule ^(.*)/$ /$1 [L,R=301]`],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-170175764-1',
        head: false,
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
        name: `key-stonework`,
        short_name: `key-stonework`,
        start_url: `/`,
        background_color: `#093169`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/img/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
