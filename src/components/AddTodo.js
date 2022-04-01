import { createSlice, nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodos } from "../store/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const submit = () => {
      if (text.length > 0) {
    const items = text.split(",")
      dispatch(
        addTodos(
          items.map((item) => ({ id: nanoid(), todo: item, completed: false }))
        )
      );
      setText('')
    }
  };

  return (
    <div className="add-todo">
      <p>to add multiple items write them separated</p>
      <p>
        <i>eg: Egg, Bread, Ham, Chesse</i>
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={submit}>Add</button>
    </div>
  );
};

export default AddTodo;
