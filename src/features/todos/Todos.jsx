import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodoStatus,
  changeTodoColor,
  selectTodos,
} from "./todosSlice";

export const colorsList = ["", "green", "blue", "orange", "purple", "red"];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function Todos() {
  const todos = useSelector(selectTodos);
  const remainingCount = todos.filter(
    (todos) => todos.status === "active"
  ).length;

  const [title, setTitle] = useState("");
  const colorsFilter = useSelector((state) => state.colorsFilter);
  const statusFilter = useSelector((state) => state.statusFilter);
  const dispatch = useDispatch();

  function handleAddTodo(todos) {
    const payload = {
      id: nextTodoId(todos),
      status: "active",
      color: "",
      title,
    };
    dispatch(addTodo(payload));
  }

  return (
    <div className="todo">
      <h2>Todos Remaining: {remainingCount}</h2>

      <ul className="todo__ul">
        {todos
          .filter((todo) => {
            if (colorsFilter.length === 0) return true;
            return colorsFilter.includes(todo.color);
          })
          .filter((todo) => {
            if (statusFilter === "all") return true;
            return statusFilter === todo.status;
          })
          .map((todo) => {
            return <TodoItem todo={todo} key={todo.id} />;
          })}
      </ul>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => handleAddTodo(todos)}>Add Todo</button>
      </div>
    </div>
  );
}

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  function handleSelectColor(color) {
    dispatch(changeTodoColor({ id: todo.id, color: color }));
  }

  return (
    <li className="todo__li">
      <input
        className=""
        id={todo.id}
        type="checkbox"
        checked={todo.status === "completed" ? true : false}
        onChange={() => dispatch(toggleTodoStatus(todo.id))}
      />

      <p className="todo__li-p">{todo.title} </p>

      <select
        className=""
        id={"colors" + todo.id}
        name="colors"
        value={todo.color}
        size="1"
        style={{color: todo.color}}
        onChange={(e) => {
          handleSelectColor(e.target.value);
        }}
      >
        {colorsList.map((color) => (
          <option key={color} value={color} style={{ color }}> 
            {color}
          </option>
        ))}
      </select>

      <button className="" onClick={() => dispatch(deleteTodo(todo.id))}>
        Delete
      </button>
    </li>
  );
}
