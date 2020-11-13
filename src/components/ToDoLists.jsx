import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <ol>
          <li className="list">{props.text}</li>
          <i
            class="fas fa-times"
            aria-hidden="true"
            onClick={() => {
              props.onSelect(props.id);
            }}
          />
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
