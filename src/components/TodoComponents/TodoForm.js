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
            newTask: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                   <input className='inputBar' type='text' name='task' placeholder='...add task' autoComplete='off' onChange={this.handleChanges} value={this.state.newTask} />
                    <div className='buttonContainer'>
                        <button className='buttons' onClick={this.handleSubmit}>Add</button>
                        <button className='buttons' onClick={this.props.deleteTasks}>Clear</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;