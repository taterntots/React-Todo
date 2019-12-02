import React from 'react';

const Todo = props => {
    const completion = event => {
        event.target.classList.toggle('task-completed')
    }

    return (
        <div className='task' onClick={completion}>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Todo;