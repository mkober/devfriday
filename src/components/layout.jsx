import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, description, children }) => {

  return (
    <div className="global-wrapper">
      <header className="global-header">
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
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
