import React, {useState} from 'react'
import DisplayPoke from './DisplayPoke'
import axios from 'axios'

const FetchPoke = () => {
    const [pokemon, setPokemon] = useState()

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(response => {
            setPokemon(response.data)
        })
        .catch()
    }

    return (
        <div>
            <h1>Fetch Pokemon</h1>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            {
                pokemon?
                <DisplayPoke pokemon = {pokemon}/>:
                <h1>Fetch a Pokemon</h1>
            }
        </div>
    )
}

export default FetchPoke