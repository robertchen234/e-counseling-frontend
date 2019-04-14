import React from "react";
const List = props =>
  props.taskList.length > 0
    ? props.taskList.map((task, i) => (
        <div key={i}>
          <p>
            <input type="checkbox" />
            {task}
          </p>
        </div>
      ))
    : null;
export default List;
