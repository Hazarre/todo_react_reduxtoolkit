import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice'
import {colorsFilterReducer, statusFilterReducer} from '../features/filters/filtersSlice'
// import filtersSlice from '../features/filters/filtersSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
    colorsFilter: colorsFilterReducer,
    statusFilter: statusFilterReducer
  },
});
