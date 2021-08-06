import React from 'react'
import { BrowserRouter,
        Route, 
        Switch
    } from 'react-router-dom'

import Navbar from '../components/Navbar';
import Login from '../components/Login.js'
import Heroes from '../components/Heroes';
import Mensaje from '../components/Mensaje';



function AppRouter(){
    return(
        <BrowserRouter>
            <Navbar />            
            <Switch>
            <Route exact path="/heroes" component ={Heroes} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/inicio" component={Mensaje} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter