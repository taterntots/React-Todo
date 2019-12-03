import React from 'react';

const Todo = props => {
    // const completion = event => {
    //     event.target.classList.toggle('task-completed');
    //     if (props.task.completed === false) {
    //         props.task.completed = true;
    //     }else if(props.task.completed === true) {
    //         props.task.completed = false;
    //     }
    //     console.log(props.task.completed);
    // }

    return (
        <div className={`task ${props.task.completed ? 'completed' : ''}`}
            key={props.task.id}
            onClick={event => {
                props.toggleComplete(props.task.id)
            }}>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Todo;