import React from 'react'
import programador from '../image/programador.jpg'

const Login = () => {
    return (
        <div className="container mt-5 w-25 text-center text-white bg-dark p-5 rounded">
            
            
                <div>
                <img src={programador} className="rounded w-75 mb-2" alt="..." />
                <h1>Login</h1>
                </div>
            <form>

            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">ingrese su email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            <div id="emailHelp" className="form-text">example@gmail.com</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">ingrese su contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            
                <button type="submit" className="btn btn-primary mb-4">Ingresar</button>
            </form>

        </div>
    )
}

export default Login
