import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (todos.map(todo => {
        return (
            <div className="todo collection" key={todo.id}>
                <div>Time: { todo.time }</div>
                <div>Activity: { todo.activity }</div>
                <div>Location: { todo.location }</div>
                <button onClick = {() => {deleteTodo(todo.id)}}>Delete</button>
            </div> 
        )
    })) : (
        <p className="center">You have no activities planned!</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos