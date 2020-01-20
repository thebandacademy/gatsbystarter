import React from "react"
import Layout from "../Components/Layout"
import Hero from "../Components/Hero"
import Background from "../Components/Background"
import Social from "../Components/Social"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import indexStyles from "./scss/index.module.scss"
import Button from "../Components/Button"
import stock from "../images/stock/stock1.jpg"

const Index = () => {
  // const data = useStaticQuery(graphql`
  //   query Stock {
  //     stock: file(relativePath: { eq: "stock1.jpg" }) {
  //       childImageSharp {
  //         fixed(width: 400) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout>
      <Hero />
      <section className={indexStyles.welcome}>
        <div className={indexStyles.divOne}>
          <h3>Pellentesque habitant morbi</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo
          </p>

          <Button />
        </div>
        <div className={indexStyles.divTwo}>
          <img src={stock} />
        </div>
      </section>
      <section>
        <Background />
      </section>
      <section>
        <div className={indexStyles.fresh}>
          <h3>Pellentesque habitant morbi</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo
          </p>
        </div>
      </section>
      <section>{/* <Gallery /> */}</section>
      <Social />
    </Layout>
  )
}

export default Index
