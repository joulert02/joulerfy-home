import React from 'react'
import ButtonGeneric from '../../atoms/buttonGeneric/buttonGeneric'
import './logoutContainer.scss'

const LogoutContainer = () => {
    return (
        <div>
            <ButtonGeneric type="sesion" text={"SingIn"}/>
            <hr className="separator"/>
            <ButtonGeneric type="sesion" text={"SingOut"}/>
        </div>
    )
}

export default LogoutContainer
