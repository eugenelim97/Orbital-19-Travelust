import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class Planner extends Component {
    render() {
        const { auth, todos } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="container white">
                <TodoList todos={todos} auth={auth} />
                <AddTodo />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: state.firestore.ordered.todos,
        auth: state.firebase.auth,
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'todos', orderBy: ['time', 'asc'] },
    ])
)(Planner)
