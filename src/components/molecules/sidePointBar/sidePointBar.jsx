import React from 'react'
import './sidePointBar.scss'

const SidePointBar = ({ salesPointsInfo, activePoint, onClickMarker }) => {

    return (
        <div className="sidePoints">
            {salesPointsInfo.map((element, index) => {
                return (
                    <div className={activePoint === element ? "info-container active" : "info-container"} key={index} onClick={() => onClickMarker(element)}>
                        <p>{element.nombre}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SidePointBar
