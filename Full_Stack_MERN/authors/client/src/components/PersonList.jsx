import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


const PersonList = (props) => {
    const { removeFromDom } = props;

    const deletePerson = (personId) => {
        axios.delete(`http://localhost:8000/api/people/${personId}`)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th colspan="2">Action available</th>
                    </tr>
                </thead>
                <tbody>
                    {props.people.map((person, idx) => {
                        return <tr key={idx}>
                            <td>
                                {person.lastName}, {person.firstName}
                            </td>
                            <td>
                                <Link className="btn btn-warning" to={"/people/" + person._id + "/edit"}>Edit</Link>
                            </td>
                            <td>
                                <button class="btn btn-danger"onClick={(e) => { deletePerson(person._id) }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default PersonList;


