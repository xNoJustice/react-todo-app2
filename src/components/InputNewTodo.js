import React, { useState } from "react";
import { Typography, TextField, Fab } from "@material-ui/core";
import { ADD_TODO } from "../TodosReducer";
import AddIcon from "@material-ui/icons/Add";

export const InputNewTodo = (props) => {
  const [todo, setNewTodo] = useState("");
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleCreate = () => {
    if (todo.trim().length === 0) return;
    if (todo.trim().length > 255) return;
    props.todosDispatch({
      type: ADD_TODO,
      payload: { id: Date.now(), todo: todo, done: false },
    });
    setNewTodo("");
  };

  return (
    <Typography component="div">
      <TextField
        name="newTodo"
        label="What needs to be done?"
        color="secondary"
        value={todo}
        error={todo.length > 255}
        helperText={
          todo.length > 255 ? "To do can contain up to 255 characters." : " "
        }
        onChange={handleChange}
        multiline
        style={{ width: 200 }}
      />
      <Fab
        size="small"
        color="secondary"
        onClick={handleCreate}
        style={{ marginTop: "12px" }}
        disabled={todo.length > 255 || todo.length === 0}
      >
        <AddIcon />
      </Fab>
    </Typography>
  );
};
