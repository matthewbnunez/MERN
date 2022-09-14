import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const PersonForm = (props) => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res => navigate("/"))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return (
        <div class="m-5">
            <h1 class="mb-3">Favorite authors</h1>
            <Link className="btn btn-primary mb-3" to={"/"}>Home</Link>
            <h4 class="mb-3">Add a new Author:</h4>
            <form class="mb-3" onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p class="text-danger" key={index}>{err}</p>)}
                <p>
                    <label>First Name</label><br />
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </p>
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    )
}

export default PersonForm;

