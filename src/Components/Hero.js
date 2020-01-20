import React from "react"
import { graphql, StaticQuery } from "gatsby"
import heroStyles from "./scss/hero.module.scss"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "heroOne.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        logo: file(relativePath: { eq: "beechlogo.png" }) {
          childImageSharp {
            fixed(width: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.image.childImageSharp.fluid

      return (
        <BackgroundImage fluid={image}>
          <div className={heroStyles.hero}>
            {/* <Img
              id="logo"
              fixed={data.logo.childImageSharp.fixed}
              alt="The band academy Logo"
            /> */}

            <h1>Beech &amp; Greene</h1>
            <h2>Bristol Painting &amp; Decorating</h2>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default Hero
