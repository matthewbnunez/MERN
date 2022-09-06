import React, { useState } from 'react'

const TodoListForm = (props) => {
    const [todo, setTodo] = useState("");
    const [todoCompleted, setTodoCompleted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.sendRequest({todo, todoCompleted})
    }

    return (
        <div>
            <h1>TodoList Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTodo(e.target.value)}></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoListForm