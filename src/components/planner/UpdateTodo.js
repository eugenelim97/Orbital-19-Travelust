import React from 'react'
import { connect } from 'react-redux'
import { getATodo, updateTodo } from '../../store/actions/todosActions'

class UpdateTodo extends React.Component {
	state = {
        time: '',
        activity: '',
        location: ''
    }
	componentDidMount(){
		let {id} = this.props.match.params
		this.props.getATodo(id)
	}

	componentDidUpdate(prevProps) {
	  // Typical usage (don't forget to compare props):
	  if (this.props.getATodoData !== prevProps.getATodoData) {
	    const todo = this.props.getATodoData.data
	    this.setState({
			time: todo.time,
			activity: todo.activity,
			location: todo.location
		})
	  }
	}

	handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } 

	updateTodo = e => {
		e.preventDefault()
		this.props.updateTodo(this.state, this.props.match.params.id)
		this.props.history.push('/planner')
	}	

	render() {
		return (
			<div>
				<div className='center'>
					<h5>Change Activity</h5>
					<div className='container white'>		
						<form>
							<label htmlFor="time">Time:</label>
							<input text="text" id="time" onChange={this.handleChange} value={this.state.time} />
							<label htmlFor="activity">Activity:</label>
							<input text="text" id="activity" onChange={this.handleChange} value={this.state.activity} />
							<label htmlFor="location">Location:</label>
							<input text="text" id="location" onChange={this.handleChange} value={this.state.location} />
							
							<div className='center'>
								<button onClick={ this.updateTodo }>
									Update Activity
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getATodo: (id) => { dispatch(getATodo(id))},
		updateTodo: (updatedTodo, id) => { dispatch(updateTodo(updatedTodo, id)) }
	}
}

const mapStateToProps = (state) => {
	return {
		getATodoData: state.planner
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTodo)