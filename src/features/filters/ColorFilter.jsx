import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColor, removeColor } from "./filtersSlice";

export const colorsList = ["green", "blue", "orange", "purple", "red"];

export function ColorFilter() {
  const colorsFilter = useSelector((state) => state.colorsFilter);
  const dispatch = useDispatch();

  function handleColorFilter(e) {
    if (e.target.checked) {
      dispatch(addColor(e.target.value));
    } else {
      dispatch(removeColor(e.target.value));
    }
  }

  return (
    <ul className="colorsfilter__ul">
      <h3>Color</h3>
      {colorsList.map((color) => (
        <li className="colorsfilter_li" key={color + "-li"}>
          <input
            type="checkbox"
            key={color}
            value={color}
            id={color}
            checked={colorsFilter.includes(color)}
            onChange={(e) => handleColorFilter(e)}
          ></input>
          <label htmlFor={color} key={color + "-label"} style={{ color }}>
            {" "}
            {color}{" "}
          </label>
        </li>
      ))}
    </ul>
  );
}
