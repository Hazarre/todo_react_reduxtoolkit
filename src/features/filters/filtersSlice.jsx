import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const colorFilterSlice = createSlice({
  name: "colorFilter",
  initialState: [],
  reducers: {
		addColor: (state,action) => {
			state.push(action.payload)
		},
		removeColor: (state, action) => {
			return state.filter( color => color !== action.payload )
		} 
  },
});

export const { addColor, removeColor } = colorFilterSlice.actions;
export const selectColorFilter = (state) => state.colorFilter;
export const colorsFilterReducer = colorFilterSlice.reducer;

///


export const statusFilterSlice = createSlice({
  name: "statusFilter",
  initialState: "all",
  reducers: {
		selectStatus: (state, action) => {
			console.log(action)
			return action.payload
		}
	},
});

export const { selectStatus } = statusFilterSlice.actions;
export const selectStatusFilter = (state) => state.statusFilter;
export const statusFilterReducer = statusFilterSlice.reducer;
