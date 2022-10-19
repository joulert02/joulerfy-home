import { Link } from "gatsby"
import React from "react"
import IconSpotify from "../../../assets/images/spotiryicon.png"
import GenericButton from "../../atoms/genericButton/genericButton"
import LoginForm from "../../molecules/loginForm/loginForm"
import "./SinIng.scss"

const SinIngForm = () => {
  return (
    <>
      <header className="Header-login">
        <Link to="/">
          <img src={IconSpotify} alt="logo"></img>
          <h1>JoulerFy</h1>
        </Link>
      </header>

      <section className="login-section">
        <div className="form-container">
          <span>Para continuar, inicia sesión en Spotify.</span>
          <GenericButton
            type="button"
            content="continue with spotify"
            className="green"
          />
          <div className="divider">
            <strong className="divider-title">o</strong>
          </div>
          <LoginForm />
          <Link to="#" className="forget-password">
            ¿Forget your password?
          </Link>
          <div className="divider"></div>
          <span className="register-text">¿Do not count?</span>
          <GenericButton
            type="link"
            content="Register in JoulerFi"
            redirect="register"
            className="white"
          />

          <div className="divider"></div>

          <p className="terms-conditions">
            Si haces clic en iniciar sesión con Facebook y no eres usuario de
            Spotify, pasarás a estar registrado y aceptas los{" "}
            <a href="temrs-and-conditions" target="_blank">
              Términos y Condiciones
            </a>{" "}
            y la{" "}
            <a href="provacy-policy" target="_blank">
              Política de Privacidad
            </a>{" "}
            de Spotify.
          </p>
        </div>
      </section>
    </>
  )
}

export default SinIngForm
