import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import headerStyles from "./scss/header.module.scss"
import Img from "gatsby-image"
const Header = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "beechlogo.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <Img
        id="logo"
        fixed={data.image.childImageSharp.fixed}
        alt="The band academy Logo"
      />
      {/* <h1>Header</h1> */}
    </header>
  )
}

export default Header
