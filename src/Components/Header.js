import React from "react"
// import { Link } from "gatsby"
// import { graphql, useStaticQuery } from "gatsby"
import headerStyles from "./scss/header.module.scss"
// import Img from "gatsby-image"
const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query Images {
  //     image: file(relativePath: { eq: "beechlogo.png" }) {
  //       childImageSharp {
  //         fixed(width: 40) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)
  return <header className={headerStyles.header}>header</header>
}

export default Header
