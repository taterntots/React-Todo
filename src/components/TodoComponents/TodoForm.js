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
                <input type='text' name='task' placeholder='...add task' onChange={this.handleChanges} value={this.state.newTask} />
                <button>Add</button>
                <button>Clear Completed</button>
                {/* <button onClick={props.clearCompleted}>Clear Completed</button> */}
                {/* clearCompleted ={this.clearCompleted}  */}

            </form>
        )
    }
}

export default TodoForm;