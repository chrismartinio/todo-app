import React, { Component } from 'react';
import uuid from 'uuid/v4';
import NewTodoForm from './NewTodoForm';
import EditTodoForm from './EditTodoForm';
import Todo from './Todo'


class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.showForm = this.showForm.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  addTask(task) {
    let newTask = { ...task, id: uuid() };
    this.setState(state => ({
      todos: [...state.todos, newTask]
    }));
  }

  updateTask(id, task) {
    

    this.setState(st => {

      let tasks = [...st.todos];
      for (let item of tasks) {

        if (item.id === id) {
          item.task = task.task;
        }
      }

      return {todos: tasks};
    })
  }


  removeTask(id) {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }

  showForm(id) {
    let task = this.state.todos.filter(todo => todo.id === id)
    let taskClass = document.getElementById(`${task[0].id}`)
    taskClass.classList.remove('hidden');
  }

  hideForm(id) {
    let task = this.state.todos.filter(todo => todo.id === id)
    let taskClass = document.getElementById(`${task[0].id}`)
    taskClass.classList.add('hidden');
  }




  render() {
    return (
      <div>
        <NewTodoForm addTask={this.addTask} />

        {
          this.state.todos.map(todo => (
            <>
              <Todo key={todo.id} id={todo.id} task={todo.task} removeTask={this.removeTask} 
              showForm={this.showForm} />
              <EditTodoForm key={todo.id} id={todo.id} task={todo.task} 
              updateTask={this.updateTask} hideForm={this.hideForm}/>
            </>
          ))
        }

      </div >
    )
  }
}

export default ToDoList;