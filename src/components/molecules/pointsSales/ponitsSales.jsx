import React, { useState } from 'react'
import { InfoWindow, Marker } from 'react-google-maps'

const PonitsSales = ({ salesPointsInfo, onClickMarker }) => {

    const [isShowInfo, setIsShowInfo] = useState(false)
    const [idMarker, setIdMarker] = useState('')

    return (
        salesPointsInfo.map((element, index) => {
            return <div key={index}>
                <Marker
                    // icon="https://d22vncnylxqwjd.cloudfront.net/mis-puntos/static/planeta-0d1adb6e546ecc03210db4e0075b6e8e.svg"
                    options={{class:"mateoP"}}
                    onClick={() => {
                        onClickMarker(element);
                        setIsShowInfo(true);
                        setIdMarker(index)
                    }}
                    styles={{widht:"100px"}}
                    position={{ lat: element.latitude, lng: element.longitude }}
                >
                    {isShowInfo && idMarker === index && <InfoWindow onCloseClick={()=>setIsShowInfo(false)} className="asd"><div><p>PERRRO</p><p>PERRRO</p><p>PERRRO</p><p>PERRRO</p></div></InfoWindow>}
                </Marker>
            </div>
        })
    )
}

export default PonitsSales
