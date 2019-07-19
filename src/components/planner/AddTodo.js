import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        time: null,
        activity: null,
        location: null,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
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
                    
                    <h5 className="center">Add new activity</h5>
                    <label htmlFor="time">Time:</label>
                    <input text="text" id="time" onChange={this.handleChange} value={this.state.time} placeholder="Starting Time"/>
                    <label htmlFor="activity">Activity:</label>
                    <input text="text" id="activity" onChange={this.handleChange} value={this.state.activity} placeholder="Name of Activity"/>
                    <label htmlFor="cost">Location:</label>
                    <input text="text" id="location" onChange={this.handleChange} value={this.state.cost} placeholder="Location"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddTodo