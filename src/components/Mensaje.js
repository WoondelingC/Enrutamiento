import React from 'react'
import logo from '../image/logo.png'
const Mensaje = () => {
    return (
        <div className="container w-50">
            <h1 className="text-center p-5">Bienvenidos Geeks</h1>
            <div className="text-center">
                <img src={logo} className="w-50" alt="..." />
                </div>
        </div>
    )
}

export default Mensaje
