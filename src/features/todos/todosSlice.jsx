import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
  { id: 0, status: "active", color: "red", title: "Task zero" },
  { id: 1, status: "active", color: "red", title: "Task one" },
  { id: 2, status: "active", color: "red", title: "Task two" },
  { id: 3, status: "active", color: "red", title: "Task three" },
  { id: 4, status: "active", color: "red", title: "Task four" },
  { id: 5, status: "active", color: "green", title: "Task five" },
  { id: 6, status: "active", color: "green", title: "Task six" },
  { id: 7, status: "active", color: "green", title: "Task seven" },
  { id: 8, status: "active", color: "green", title: "Task eight" },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((_todo) => _todo.id !== action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.status = todo?.status === "completed" ? "active": "completed";
      // return state;
    },
    changeTodoColor: (state, action) => {
      const { id, color } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) todo.color = color;
    },
    markAllCompleted: (state) => {
      state.forEach((todo) => {
        todo.status = "completed";
      });
    },
    clearCompleted: (state) => {
      return state.filter((todo) => todo.status !=="completed");
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoStatus, changeTodoColor,markAllCompleted,clearCompleted } = todosSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.todos.value)`

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;
