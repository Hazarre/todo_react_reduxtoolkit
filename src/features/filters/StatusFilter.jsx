import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectStatus } from "./filtersSlice";

const statusList = ["all", "active", "completed"];

export function StatusFilter() {
  const statusFilter = useSelector((state) => state.statusFilter);
  const dispatch = useDispatch();

  function handleStatusFilter(e) {
    dispatch(selectStatus(e.target.value));
  }

  return (
    <ul className="statusfilter__ul">
      <h3>Status</h3>
      {statusList.map((status) => (
        <li className="statusfilter__li" key={status + "-li"}>
          <input
            type="radio"
            key={status}
            id={status}
            name={status}
            value={status}
            checked={statusFilter === status}
            onChange={(e) => handleStatusFilter(e)}
          ></input>
          <label htmlFor={status} key={status + "-label"}>
            {" "}
            {status}{" "}
          </label>
        </li>
      ))}
    </ul>
  );
}
