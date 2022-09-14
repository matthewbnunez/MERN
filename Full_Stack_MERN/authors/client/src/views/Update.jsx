import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
    
const Update = (props) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
    }, [id]);
    
    const updatePerson = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/people/${id}`, {
            firstName,
            lastName
        })
            .then(res => navigate("/"))
            .catch(err => console.error(err));
    }
    
    return (
        <div class="m-5">
            <h1 class="mb-3">Favorite authors</h1>
            <Link className="btn btn-primary mb-3" to={"/"}>Home</Link>
            <h4 class="mb-3">Edit this Author:</h4>
            <form class="mb-3" onSubmit={updatePerson}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" 
                    name="lastName"
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

