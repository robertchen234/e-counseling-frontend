import React, { Component } from "react";

<<<<<<< HEAD
class CreateTaskForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       task: ""
//     };
//     this.setState = this.setState.bind(this);
//     this.handleChange = this.changeHandler.bind(this);
//     this.handleSubmit = this.submitHandler.bind(this);
//   }

//   changeHandler(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   submitHandler(e) {
//     e.preventDefault();
//     // console.log(e);
//     this.props.parentSubmit(this.state);
//     this.setState({
//       task: ""
//     });
//     e.target.reset();
//   }
=======
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
    e.preventDefault();
    this.props.handleSubmit(this.props.counselor_id, 7, this.state.task);
  }
>>>>>>> rob4

  render() {
    console.log(this.state.task);
    return (
      <div className="outer">
        <div className="inner">
          <h1>Create Task for Patient</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="field"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateTaskForm;
