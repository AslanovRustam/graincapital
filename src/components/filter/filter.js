import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as operations from "../redux/operations";

export default function FilterSection() {
  const [filterInput, setFilterInput] = useState("");
  const dispatch = useDispatch();

  function handleSubmitForm(e) {
    e.preventDefault();
    dispatch(operations.findUser(filterInput));
    setFilterInput("");
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmitForm}>
          <label>
            please enter userID
            <input
              value={filterInput}
              onChange={(e) => setFilterInput(e.currentTarget.value)}
            ></input>
          </label>
          <button type="submit">Find</button>
        </form>
      </div>
    </>
  );
}
