import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {

    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({ task: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">Enter task: </label>
        <input id="task" name="task" value={this.state.task} onChange={this.handleChange}></input>

        <button>Add task</button>

        </form>
      </div>
    )
  }
}


export default NewTodoForm

