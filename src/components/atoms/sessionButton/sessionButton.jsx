import { Link } from "gatsby"
import React from "react"
import "./sessionButton.scss"

const SessionButton = ({ type, text, redirect }) => {
  return (
    <Link className={type} to={redirect}>
      {text}
    </Link>
  )
}

export default SessionButton
