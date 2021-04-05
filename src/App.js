import "./App.css";
import React, { useState } from "react";
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from "./components/TodoList";
const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const handleSubmit = event => {
    console.log(content);
    event.preventDefault();
    if (!content && content.length < 1) return;

    const newTodo = {
      id: Math.floor(Math.random() * 42584),
      content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        {/* useState de tutacagız girdiğğimiz todoyu */}
        <input
          className="todo-input"
          onChange={event => {
            setContent(event.target.value);
          }}
          value={content}
        />
        <button className="todo-button">add</button>
      </form>

      {/* todo list */}

      <TodoList todos={todos}></TodoList>
    </div>
  );
};

export default App;
