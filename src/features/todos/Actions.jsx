import React from "react";
import { useDispatch } from "react-redux";

import {
  markAllCompleted,
  clearCompleted,
} from "./todosSlice";

export default function Actions() {
	const dispatch = useDispatch(); 

	return (
		<ul className="actions__ul">
		<h3>Actions</h3>
		<button className="actions_li" onClick={() => dispatch(markAllCompleted() )}> Mark All Completed </button>
		<button className="actions_li" onClick={() =>dispatch(clearCompleted())}> Clear Completed </button>
		</ul>
		)
}