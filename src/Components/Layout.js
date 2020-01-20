import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./scss/layout.module.scss"

const Layout = props => {
  return (
    <div>
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
