import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const tasks = [
  {
    name: 'Eat all the pizza',
    id: 1,
    completed: false
  },
  {
    name: 'Walk the pupper',
    id: 2,
    completed: false
  },
  {
    name: 'Finish MVP for today',
    id: 3,
    completed: false
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
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  toggleComplete = taskId => { 
    const todos = this.state.tasks.map(todo => {
      if (todo.id === taskId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos, todo: ''})
  }

  deleteTasks = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(todo => {
          return !todo.completed;
        })
      }
    })
  };

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <TodoList tasks={this.state.tasks} toggleComplete={this.toggleComplete}/>
        <TodoForm addTask={this.addTask} handleClearTodos={this.clearCompletedTodos} deleteTasks={this.deleteTasks} />
      </div>
    );
  }
}

export default App;