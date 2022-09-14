import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
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
        <div>
            <PersonForm />
            <hr />
            {loaded && <PersonList people={people} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default Main;