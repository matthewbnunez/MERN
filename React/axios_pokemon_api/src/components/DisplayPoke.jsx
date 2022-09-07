import React from 'react'

const DisplayPoke = (props) => {
    return (
        <div>
            {props.pokemon.map((item, i)=>{
                return(<div key={i}>{item.name} </div>)
            })}

        </div>
    )
}

export default DisplayPoke