import React from 'react'
import {useParams} from 'react-router-dom'

const Hello = () => {
    const {textColor} = useParams()
    const {backgroundColor} = useParams()
    return (
        <h2 style={{background: backgroundColor, color: textColor}}>The word is: Hello</h2>
    )
}

export default Hello