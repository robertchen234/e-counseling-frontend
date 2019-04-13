import React from "react";

class CreateTaskForm extends React.Component {
  state = {
    task: ""
  };

  handleChange = () => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit() {
    if (this.state.task.length < 10) {
      alert("Please enter a task longer than 10 characters");
    } else {
      console.log(this.state.task);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="input"
            id="task"
            value={this.state.task}
            onChange={this.handleChange()}
          />
          <input type="submit" value="create task" />
        </form>
      </div>
    );
  }
}

export default CreateTaskForm;
