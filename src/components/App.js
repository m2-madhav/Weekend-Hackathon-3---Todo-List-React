import React, { useState } from "react";
import "./../styles/App.css";
import ToDoList from "./ToDoLists";

function App() {
  const [inputList, setInputList] = useState(" ");

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const [Items, setItems] = useState([]);
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(" ");
  };

  const deleteItem = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div id="main">
        <div id="center_div">
          <br />
          <h1>ToDO List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {Items.map((itemVal, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
