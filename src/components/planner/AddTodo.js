import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../../store/actions/todosActions'

class AddTodo extends Component {
    state = {
        time: '',
        activity: '',
        location: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createTodo(this.state)
        this.setState({
            time: '',
            activity: '',
            location: ''
        })
    } 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p className="center">Add new activity</p>
                    <label htmlFor="time">Time:</label>
                    <input text="text" id="time" onChange={this.handleChange} value={this.state.time} placeholder="Starting Time (for eg. 1200, 2359)"/>
                    <label htmlFor="activity">Activity:</label>
                    <input text="text" id="activity" onChange={this.handleChange} value={this.state.activity} placeholder="Name of Activity"/>
                    <label htmlFor="location">Location:</label>
                    <input text="text" id="location" onChange={this.handleChange} value={this.state.location} placeholder="Location"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (todo) => dispatch(createTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)