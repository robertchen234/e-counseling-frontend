import React, { Component } from "react";
import List from './List'

class CreateTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskList: []
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
   
    let newList = [this.state.task, ...this.state.taskList]
    this.setState({
      taskList: newList,
    })

    this.setState({task: ""})
  }

  render() {
    console.log(this.state.task);
    return (
      <div className="outer">
        <div className="inner">
          <h1>Create Task to Complete for Next Session</h1>
          <form onSubmit={this.handleSubmit} className="create-task" >
            <input
              type="field"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
          <h3 className="center">All the tasks:</h3>
          <List taskList={this.state.taskList} />
            
            {this.props.tasks.map(task => (
              <p><input type="checkbox"/>{task.task}</p>
            ))}

        </div>
      </div>
    );
  }
}

export default CreateTaskForm;