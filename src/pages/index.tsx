import * as React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import {
  Title,
  Subtitle,
  Button,
  Column,
  Columns
} from "../components/UI";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata?.description || `Description`;
  
  const firstPost = data.allMarkdownRemark.nodes[0];
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout 
      location={location} 
      title={siteTitle}
      description={siteDescription}
    >
      <Seo title="Latest Episode" />
      
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
              <h2 itemProp="headline">{firstPost.frontmatter.title}</h2>
              <p>{firstPost.frontmatter.date}</p>
            </header>

            <audio controls style={{width: '100%',marginBottom: '20px'}}>
              <source src={firstPost.frontmatter.fileURL} type="audio/mpeg" />
            </audio>

            <section
              dangerouslySetInnerHTML={{ __html: firstPost.html }}
              itemProp="articleBody"
            />
            
            <Button
              href={firstPost.frontmatter.youtube}
              backgroundColor="#F1C40F"
            >
              Watch Episode on YouTube
            </Button>
          </article>
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

export default BlogIndex

export const pageQuery = graphql`
  query {
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
  }
`
