import React, { Component } from "react";

class CreateTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    // this.setState = this.setState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.props.counselor_id, this.props.patient_id, this.state.task)
  }

  render() {
    console.log(this.state.task);
    return (
      <div>
        <h1>Create Task for Patient</h1>
        <form>
          <input
            type="field"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateTaskForm;
