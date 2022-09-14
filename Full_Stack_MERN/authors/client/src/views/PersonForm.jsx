import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const PersonForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"}>Home</Link>
            <h4>Add a new Author:</h4>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default PersonForm;

