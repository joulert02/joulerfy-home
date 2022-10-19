import React from "react"
import ButtonGeneric from "../../atoms/sessionButton/sessionButton"
import "./sessionContainer.scss"

const SessionContainer = ({ isLoguerUser }) => {
  return (
    <div
      className={`sessionContainer ${
        isLoguerUser ? "sessionContainer--logged" : ""
      }`}
    >
      {isLoguerUser ? (
        <div className="logoutContainer">
          <h2>Hola, Jouler!</h2>

          <ButtonGeneric
            type="button button-session"
            text={"Sign Out"}
            redirect="/"
          />
        </div>
      ) : (
        <div className="logoutContainer">
          <ButtonGeneric
            type="button button-session"
            text={"Sign In"}
            redirect="singin"
          />
        </div>
      )}
    </div>
  )
}

export default SessionContainer
