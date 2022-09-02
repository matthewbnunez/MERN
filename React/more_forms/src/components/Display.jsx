import React from 'react'

const Display = (props) => {
    return (
        <div>
            <div>Your Form Data</div>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Confirm Password: {props.confirmPassword}</p>
        </div>
    )
}

export default Display