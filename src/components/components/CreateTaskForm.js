import React from "react";
import { Button, Form, TextArea } from "semantic-ui-react";

class CreateTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.setState = this.setState.bind(this);
    this.handleChange = this.changeHandler.bind(this);
    this.handleSubmit = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    // console.log(e);
    this.props.parentSubmit(this.state);
    this.setState({
      task: ""
    });
    e.target.reset();
  }

  render() {
    return (
      <div>
        <h1>Create Task</h1>
        <form>
            <label>Name</label>
            <input type='text' placeholder='name' />
        </form>
      </div>
    );
  }
}
export default CreateTaskForm;
