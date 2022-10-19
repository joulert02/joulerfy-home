import React, { Fragment } from "react"
import Header from "../header/header"
import "../../../_shared/generic.scss"
import "./layout.scss"

const Layout = props => {
  const isLoguerUser = props.isLoguerUser

  return (
    <Fragment>
      <div className="background-container"></div>
      <Header isLoguerUser={isLoguerUser} />
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout
