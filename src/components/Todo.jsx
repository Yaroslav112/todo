import React from "react";
import "../components/Todo.css";

const Todo = (props) => {
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };

  const completeHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.text}
        <hr className="todo-line" />
      </li>
      <div className="buttons-container">
        <button onClick={completeHandler} className="complete-button">
          ✓
        </button>
        <button onClick={deleteHandler} className="trash-button">
          ❌
        </button>
      </div>
    </div>
  );
};

export default Todo;
