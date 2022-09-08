import React, {useState}  from 'react'
import {useNavigate} from 'react-router-dom'

const HeaderForm = () => {
    const [id, setid] = useState("")
    const [category, setCategory] = useState("")
    const navigate = useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault()
        navigate(`/${category}/${id}`)
        clearFrom()
    }

    const clearFrom = () => {
        setid("")
        setCategory("")
    }

    return (
        <div>
            <h1>HeaderForm</h1>
            <form onSubmit={handleSubmit}>
                Search for:
                <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
                    <option hidden>Choose a Category</option>
                    <option value="people">People</option>
                    <option value="planet">Plant</option>
                </select>
                <input type="text" name="id" value={id} onChange={(e) => setid(e.target.value)} />
                <button type="submit">Search!</button>
            </form>
        </div>
    )
}

export default HeaderForm