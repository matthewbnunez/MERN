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
        <div class="m-5">
            <h1 class="mb-3">Favorite authors</h1>
            <Link className="btn btn-primary mb-3" to={"/"}>Home</Link>
            <h4 class="mb-3">Add a new Author:</h4>
            <form class="mb-3" onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </p>
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    )
}

export default PersonForm;

