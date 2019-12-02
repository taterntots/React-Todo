import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }

    render() {
        return (
            <form>
                <input type='text' name='task' />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;