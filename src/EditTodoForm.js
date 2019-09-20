import React, { Component } from 'react';

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.task }
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.addTask(this.state);
  //   this.setState({ task: '' });
  // }

  handleEdit(e) {
    e.preventDefault();
    this.props.updateTask(this.props.id, this.state);
    this.props.hideForm(this.props.id);
  }



  render() {
    return (
      <div className="hidden" id={`${this.props.id}`}>

        <form onSubmit={this.handleEdit}>
   
          <input id="task" name="task" value={this.state.task} onChange={this.handleChange}></input>

        <button>Edit task</button>
        </form>

      </div>
    )
  }
}

export default EditTodoForm;