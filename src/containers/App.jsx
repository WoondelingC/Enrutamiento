import React from 'react'
import { Heroes } from '../components/Heroes';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import AppRouter from '../routers/AppRouter';
//import Personajes from '../components/Personajes'

const App = () => {
    return (
        <div>
            <AppRouter />
        </div>
    )
}

export default App
