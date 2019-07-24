import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTodo, getATodo } from '../../store/actions/todosActions'

const TodoList = ({todos, auth, deleteTodo, getATodo}) => {
    let display
    if (todos) {
		display = ( todos.map( todo => {
            if (todo.authorId === auth.uid) {
				return (
					<li className="collection-item" key={ todo.id } >
                        <div>Time: { todo.time }</div>
                        <div>Activity: { todo.activity }</div>
                        <div>Location: { todo.location }</div>
						
						<Link to={'/planner/' + todo.id}>
							<i className='material-icons edit'>edit</i>
						</Link>

                        <Link to='/planner' onClick={ () => deleteTodo(todo.id) }>
							<i className='material-icons delete'>delete</i>
						</Link>
					</li>
				)
            }
        }))
    } 
    
    return (
        <div className="todos collection">
            <h5 className="center">Build your itinerary here!</h5>
            <p className="center">Welcome to Travelust's online itinerary builder to make your own custom itinerary template for travel.</p>
            <ol>
				{ display }
			</ol>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
	return {
        deleteTodo: (id) => { dispatch(deleteTodo(id))},
        getATodo: (id) => { dispatch(getATodo(id))}
	}
}

export default connect(null, mapDispatchToProps)(TodoList)