import React from 'react'
import { useEffect, useState } from 'react';
import "../styles/personajes.css";

const Personajes = async () => {
    
    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
        obtenerPersonajes();
    }, [])

    const obtenerPersonajes = async () =>{
        const url = 'https://rickandmortyapi.com/api/character/'

        const res = await fetch(url);
        console.log(res);
        const data = await res.json();
        console.log(data);
        const {results} = data;
        console.log(results);
        setPersonaje (results);
    }

    console.log(personaje);
    
    
    return (
        <div>
            <h1>Personajes Rick and Morty</h1>
            <hr />
            {
                personaje.map(per => (

                    <div className="card" key={per.id}>
                        <img className="card-img-top" src={per.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{per.name}</h5>
                            <p className="card-text">{per.species}</p>
                            <a href="/" className="btn btn-primary">...Más</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
    
}

export default Personajes
