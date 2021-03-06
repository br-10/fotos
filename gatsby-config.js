require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'Kalik-Mayence-Fotografie',
    titleAlt: `Benjamin May-Fotografie`,
   
   
    description:"Benjamin May: Fotografie und mehr",
   
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Portfolio`, slug: `/projects` },
          { name: `Texte`, slug: `/texte` },
          { name: `Museen`, slug: `/museum` },
          { name: `About`, slug: `/about` }
        ],
      },
    },
 
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `2315642426`,
    //   },
    // },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kalik-Mayence-Fotografie`,
        short_name: `Kalik`,
        description: `Benjamin May Fotos`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
}
