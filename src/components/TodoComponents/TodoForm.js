import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }

    handleChanges = event => {
        this.setState({
            newTask: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({
            newTask:''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='task' onChange={this.handleChanges} value={this.state.newTask} />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;