import React, { Component } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class Todolist extends Component {
    state = {
      todos: [
        {time: '0800', activity: 'Eat Breakfast', location: 'Home', id: 1},
        {time: '0900', activity: 'Travel to mall', location: 'Lot One', id: 2}
      ]
    }
    addTodo = (todo) => {
      todo.id = Math.random();
      let temp = [...this.state.todos, todo];
      this.setState({
        todos: temp
      })
    }
    deleteTodo = (id) => {
      const temp = this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        todos: temp
      })
    }

    render() {
      const { auth } = this.props;
      if (!auth.uid) return <Redirect to='/signin' />
      return (
        <div className="todo-app container white">
            <h4 className="center">Build and customise your itinerary!</h4>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            <AddTodo addTodo={this.addTodo} />
        </div>
      );
    }
  }
  
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Todolist);