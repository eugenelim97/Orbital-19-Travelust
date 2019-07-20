import React from 'react'

const TodoList = ({todos, auth}) => {
    return (
        <div className="todos collection">
            <h5 className="center">Build your itinerary here!</h5>
            <p className="center">Welcome to Travelust's online itinerary builder to make your own custom itinerary template for travel.</p>
            { todos && todos.map(todo => {
                if (todo.authorId === auth.uid) {
                    return (
                        <div className="todo collection" key={todo.id}>
                            <div>Time: { todo.time }</div>
                            <div>Activity: { todo.activity }</div>
                            <div>Location: { todo.location }</div>
                            <button>Delete</button>
                        </div>    
                    )}
                })}
        </div>
    )
}

export default TodoList