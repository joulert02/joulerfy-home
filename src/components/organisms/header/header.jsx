import React from "react"
import SessionContainer from "../../molecules/sessionContainer/sessionContainer"
import "./header.scss"

const Header = ({ isLoguerUser }) => {
  return (
    <header>
      <a className="header-logo" href="/">
        JoulerFY
      </a>

      <SessionContainer isLoguerUser={isLoguerUser} />
    </header>
  )
}

export default Header
