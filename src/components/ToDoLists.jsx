import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <li className="list">{props.text}</li>
        <i
          class="fas fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
      </div>
    </>
  );
};

export default ToDoList;
