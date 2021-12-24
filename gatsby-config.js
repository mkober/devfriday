module.exports = {
  siteMetadata: {
    title: `Dev Friday Show`,
    author: {
      name: `Mark Koberlein`,
      summary: `Prof. of Interactive Design. Amateur Japan Tour Guide & Batman Historian. HS basketball player & award-winning theater actor.`,
    },
    description: `End your week with the greatest developer podcast on the planet.`,
    siteUrl: `https://devfridayshow.com`,
    social: {
      twitter: `markkoberlein`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/episodes`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,        
        setup: () => ({
          title: 'Dev Friday Show',
          description: 'End your week with the greatest developer podcast on the planet. Hosted by Mark Koberlein and Tim Lytle.',
          feed_url: 'https://devfridayshow.com/rss.xml',
          site_url: 'https://devfridayshow.com',
          custom_namespaces: {
            itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
          },
          custom_elements: [
            { 'language': 'eng' },  
            { 'image': [
              {'url': 'https://devfridayshow.com/images/showart.jpg'}, 
              {'title': 'Dev Friday Show'},
              {'link': 'https://devfridayshow.com'},
            ]},  
            { 'copyright': "\u00A9" + new Date().getFullYear() + " Mark Koberlein & Tim Lytle" },  
            { 'itunes:summary': 'End your week with the greatest developer podcast on the planet. Hosted by Mark Koberlein and Tim Lytle.' },
            { 'itunes:author': 'Mark Koberlein and Tim Lytle' },  
            { 'itunes:image': [
              {_attr: {
                href: 'https://devfridayshow.com/images/showart.jpg',
              }},
            ]},  
            { 'itunes:category': [
              {_attr: {
                text: 'Technology',
              }},   
            ]},  
            { 'itunes:explicit': 'clean' },  
            { 'itunes:type': 'Episodic' },  
            { 'itunes:owner': [ 
              { 'itunes:name': 'Dev Friday Show' }, 
              { 'itunes:email': 'hello@devfridayshow.com' },  
            ]},  
          ],
        }),
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  pubDate: Date(node.frontmatter.date).toString(),
                  language: node.frontmatter.language,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  link: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: node.frontmatter.date + "-"  + node.fields.slug.replace(/\\|\//g,''),
                  custom_elements: [
                    { 'itunes:title': node.frontmatter.title },  
                    { 'itunes:duration': Number(node.frontmatter.minutes)*60+Number(node.frontmatter.seconds) },  
                    { 'content:encoded': node.html },
                    {'enclosure': [
                      {_attr: {
                        url: node.frontmatter.fileURL,
                        length: Number(node.frontmatter.fileSize) * 1000 * 1000, // megabytes to bytes
                        type: "audio/mpeg",
                      }},
                    ]},
                  ],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      fileURL
                      fileSize
                      youtube
                      minutes
                      seconds
                    }
                  }
                }
              }
            `,
            title: "Dev Friday Show",
            link: "https://devfridayshow.com",
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
