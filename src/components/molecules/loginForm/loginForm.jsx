import { navigate } from "gatsby"
import React, { useState } from "react"
import GenericButton from "../../atoms/genericButton/genericButton"
import GenericCheckBox from "../../atoms/genericCheckBox/genericCheckBox"
import "./loginForm.scss"

const LoginForm = () => {
  /*-----------Input values, if you user SET_FORM_DATA should be equal to name input----------------*/
  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("")
  const [remember, setRemember] = useState(false)

  /*-----------Label errors values----------------*/
  const [genericError, setGenericError] = useState("")
  const [userNameError, setUserNameError] = useState("")
  const [passWordError, setPassWordError] = useState("")
  const [remenberError, setremenberError] = useState("")

  /*--------Method show password--------------*/
  const [typeInputPassword, setTypeInputPassword] = useState("password")
  const SHOW_PASSWORD = () => {
    setTypeInputPassword(typeInputPassword === "password" ? "text" : "password")
  }

  /*--------Method for set the input value in the state--------------*/
  const CLEAN_ERROR_MESSAGE = () => {
    if (userName === "" || userName === null) {
      setUserNameError("")
    }
    if (passWord === "" || passWord === null) {
      setPassWordError("")
    }
    if (remember === false || remember === null) {
      setremenberError("")
    }
  }
  /*--------Method for set the input value in the state--------------*/
  const SET_FORM_DATA = event => {
    let nameInput = event.target.name.toLowerCase()

    if (nameInput === "username") {
      setUserName(event.target.value)
    } else if (nameInput === "password") {
      setPassWord(event.target.value)
    } else if ((nameInput = "remember")) {
      setRemember(event.target.checked)
    }
  }

  /*--------Method for validate form, pending convert in hook for reutilice--------------*/
  const VALIDATE_FORM = () => {
    var emailValidation =
      /^[a-zA-Z0-9.-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    var validationTextRule = /^[a-zA-Z0-9_]+$/

    /*---------UserName validation----------------*/
    if (userName !== "") {
      if (userName.length < 5 || userName.length >= 45) {
        setUserNameError("Debes ingresar un valor entre 5 y 45 carácteres ")
      } else if (!emailValidation.test(userName)) {
        setUserNameError("El valor ingresado es inválido")
      } else {
        setUserNameError("")
      }
    } else {
      setGenericError("Debes ingresar todos los campos")
    }
    if (passWord !== "") {
      /*---------Password validation----------------*/
      if (passWord.length < 5 || (passWord.length >= 45 && passWord !== "")) {
        setPassWordError("Debes ingresar un valor entre 5 y 45 carácteres ")
      } else if (!validationTextRule.test(passWord)) {
        setPassWordError("El valor ingresado es inválido")
      } else {
        setPassWordError("")
      }
      /*---------Checkbox validation----------------*/
      if (remember === false) {
        setremenberError("Debes aceptar los terminos y condiciones")
      } else {
        setremenberError("")
      }
    } else {
      setGenericError("Debes completar todos los campos")
    }
    if (
      userName !== "" &&
      userName.length > 5 &&
      userName.length <= 45 &&
      emailValidation.test(userName) &&
      passWord !== "" &&
      passWord.length > 5 &&
      passWord.length <= 45 &&
      validationTextRule.test(passWord) &&
      remember === true
    ) {
      setGenericError("")
      return true
    } else {
      return false
    }
  }

  /*---------send the data to service after validate----------------*/
  const SEND_DATA = event => {
    event.preventDefault()
    if (VALIDATE_FORM() === true) {
      navigate("/home")
    }
  }

  return (
    <form className="login-form" onChange={CLEAN_ERROR_MESSAGE}>
      <div className="input-container">
        <label className="label-error">{genericError}</label>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your email or user name"
          maxLength="45"
          minLength="2"
          name="userName"
          onChange={SET_FORM_DATA}
        />
        <label className="label-error">{userNameError}</label>
      </div>
      <div className="input-container">
        <input
          type={typeInputPassword}
          placeholder="Enter your password"
          autoComplete="off"
          maxLength="45"
          minLength="2"
          name="passWord"
          className="password-input"
          onChange={SET_FORM_DATA}
        />
        <span className="icon-eye" onClick={SHOW_PASSWORD}>
          &#128065;
        </span>
        <label className="label-error">{passWordError}</label>
      </div>
      <div className="buttons-container">
        <div className="input-container">
          <GenericCheckBox
            labelValue="Térrminos y condiciones"
            name="termsAndConditions"
            onClick={SET_FORM_DATA}
          />
          <label className="label-error">{remenberError}</label>
        </div>
        <GenericButton
          type="button"
          content="Log In"
          className="black send-button"
          onclickAction={SEND_DATA}
        />
      </div>
    </form>
  )
}

export default LoginForm
