module.exports = {
  siteMetadata: {
    title: `Futurismo`,
    description: 'beating the averages',
    siteUrl: `https://futurismo.biz`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,

    /* SEO */
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-16438908-2',
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,

    /* Netlify */
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,

    /* PWA */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/public',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
