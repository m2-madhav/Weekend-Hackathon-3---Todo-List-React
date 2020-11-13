import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <li className="list">{props.text} .</li>

        <button
          className="delete"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          del
        </button>
      </div>
    </>
  );
};

export default ToDoList;
