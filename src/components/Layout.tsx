import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Bio from "./Bio"
import Subscribe from "../components/Subscribe";

import {
  Column,
  Columns
} from "./UI";

const Layout = ({ location, title, description, children }) => {

  return (
    <Columns>
      <Column isThreeQuarters>
        {children}
      </Column>
      <Column isOneQuarter isGaplessDesktop>
        <Subscribe />
        <Bio />
        <footer>
          ©{new Date().getFullYear()} Mark Koberlein and Tim Lytle
        </footer>
      </Column>
    </Columns>
  )
}

export default Layout
