import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import {
  Title,
  Subtitle,
  Button,
  Column,
  Columns
} from "../components/UI";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const posts = data.allMarkdownRemark.nodes;

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`

  const { previous, next } = data

  return (
    <Layout 
      location={location} 
      title={siteTitle}
      description={siteDescription}
    >
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Columns isDesktopReversed>
        <Column isTwoThirds className="episode">
          <Link to="/">
            <StaticImage
              className="showart"
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
              src="../images/showart.png"
              width={600}
              height={600}
              quality={100}
              alt="Show Art"
            />
          </Link>
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2 itemProp="headline">{post.frontmatter.title}</h2>
              <p>{post.frontmatter.date}</p>
            </header>

            <audio controls style={{width: '100%',marginBottom: '20px'}}>
              <source src={post.frontmatter.fileURL} type="audio/mpeg" />
            </audio>

            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            
            <Button
              href={post.frontmatter.youtube}
              backgroundColor="#F1C40F"
            >
              Watch Episode on YouTube
            </Button>
          </article>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Column>
        <Column isOneThird>
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <Title>
                      <h5>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h5>
                    </Title>
                    <Subtitle>
                      <p>{post.frontmatter.date}</p>
                      <p>{post.excerpt}</p>
                    </Subtitle>
                  </article>
                </li>
              )
            })}
          </ol>
        </Column>
      </Columns>

    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        html
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          fileURL
          youtube
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        fileURL
        youtube
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
