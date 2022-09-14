import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonList from '../components/PersonList';
import { Link } from 'react-router-dom';



const Main = (props) => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => {
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [people]);

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId));
    }

    return (
        <div class="m-5">
            <h1 class="mb-3">Favorite authors</h1>
            <Link className="btn btn-primary mb-3" to={"/api/people"} >Add an author:</Link>
            <h4 class="mb-3">We have quotes by:</h4>
            {loaded && <PersonList people={people} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default Main;