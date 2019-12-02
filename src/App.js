import React from 'react';

const tasks = [
  {
    name: 'Eat all the pizza',
    id: 1
  },
  {
    name: 'Walk the pupper',
    id: 2
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  addTask = newTaskText => {
    const newTask = {
      name: newTaskText,
      id: Date.now(),
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
