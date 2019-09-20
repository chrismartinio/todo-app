import React, { Component } from 'react';
import EditTodoForm from './EditTodoForm';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeTask(this.props.id);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.showForm(this.props.id);
  }

  render() {
    return (
      <div>
        <p>{this.props.task}
          <button className="edit-button" onClick={this.handleEdit}>edit</button>
          <button className="remove-button" onClick={this.handleRemove}>x</button>
        </p>
      </div>
    )
  }
}

export default Todo;

