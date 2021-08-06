import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/personajes.css';

const Heroes = () => {

    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
        obtenerPersonaje();
    }, [])

    const obtenerPersonaje = async () => {
        const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json';
        const res = await fetch(url);
        const data = await res.json();
        const { results } = data;
        //console.log(results);
        setPersonaje(results);
    }

    console.log(personaje);

    return (
        <div>
            <h1>Heroes</h1>
            <hr />
            {
                personaje.map(per => (

                    <div className="card bg-dark text-white" key={per.id}>
                        <img className="card-img-top" src={per.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center">{per.name}</h5>
                            <p className="card-text">{per.superhero}</p>
                            <p className="card-text">{per.publisher}</p>
                            <p className="card-text">{per.alter_ego}</p>
                            <a href="/" className="btn btn-primary d-flex justify-content-center">... Más</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Heroes