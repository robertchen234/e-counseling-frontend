import React from "react";

const TaskCard = props => {
  return (
    <div className="Task-Card">
      {props.tasks.forEach(task => {
        return <li className="Task">{task}</li>;
      })}
    </div>
  );
};
export default TaskCard;
