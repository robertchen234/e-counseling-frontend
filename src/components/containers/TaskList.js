import React, { Component } from "react";
import TaskCard from "../components/TaskCard";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item2: "a new message",
      item3: "another message",
      item4: "one more task"
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

export default TaskList;
