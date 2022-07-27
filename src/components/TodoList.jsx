import React from "react";
import Todo from "./Todo";
import "../components/TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todo-item-container">
      <ol className="todo-list"></ol>
      {props.filteredTodos.map((todo) => (
        <Todo
          setTodos={props.setTodos}
          todos={props.todos}
          key={todo.id}
          text={todo.text}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
