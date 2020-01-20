import React from "react"
import { graphql, StaticQuery } from "gatsby"
import backStyles from "./scss/background.module.scss"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "hero2.JPG" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        galleryTwo: file(relativePath: { eq: "img6.JPG" }) {
          childImageSharp {
            fixed(quality: 100, width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        gallery: file(relativePath: { eq: "paint.JPG" }) {
          childImageSharp {
            fixed(quality: 100, width: 400) {
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
          <div className={backStyles.background}>
            <div className={backStyles.divOne}>
              <Img fixed={data.gallery.childImageSharp.fixed} />
            </div>
            <div className={backStyles.divTwo}>
              <Img fixed={data.galleryTwo.childImageSharp.fixed} />
            </div>

            {/* <h1>Beech &amp; Greene</h1>
            <h2>Bristol Painting &amp; Decorating</h2> */}
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default Background
