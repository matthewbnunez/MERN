import React from 'react'

const TodoListDisplay = (props) => {

    const handleDelete = (deleteIdx)=> {
        const filteredList = props.TodoList.filter((eachItem, i)=> i !== deleteIdx)
        props.onUpdate(filteredList)
    }

    const handleUpdate = (e, updateIdx)=> {
        const listCopy = [...props.TodoList]
        listCopy[updateIdx].todoCompleted = e.target.checked
        props.onUpdate(listCopy)
    }

    return (
        <div>
            {
                props.TodoList.map((eachTodo, i) => {
                    return (
                        <p>
                            {eachTodo.todo}
                            {eachTodo.todoCompleted}
                            <input type="checkbox" checked={eachTodo.todoCompleted} onChange={(e) => handleUpdate(e, i)} />
                            <button onClick={()=>handleDelete(i)}> Delete</button>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default TodoListDisplay