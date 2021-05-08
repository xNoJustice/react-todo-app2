import React from "react";
import { UPDATE_TODO } from "../TodosReducer";
import {
  List,
  ListItem,
  TextField,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Done } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";

export const InputEditTodo = (props) => {
  const handleUpdate = (id) => {
    if (id === null) return;
    props.todosDispatch({
      type: UPDATE_TODO,
      payload: { id: id, todo: props.todoEdit },
    });
    props.setTodoEdit("");
    props.setTodoEditId("");
    props.setEditMode(false);
  };

  const cancelEditMode = () => {
    props.setTodoEdit("");
    props.setTodoEditId("");
    props.setEditMode(false);
  };

  return (
    <List>
      <ListItem>
        <TextField
          name="editTodo"
          label="Edit Todo"
          color="secondary"
          multiline
          value={props.todoEdit}
          error={props.todoEdit.length > 255}
          helperText={
            props.todoEdit.length > 255
              ? "To do can contain up to 255 characters."
              : " "
          }
          onChange={(e) => props.setTodoEdit(e.target.value)}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => cancelEditMode()} edge="end">
            <CloseIcon color="secondary" />
          </IconButton>
          <IconButton onClick={() => handleUpdate(props.todoEditId)} edge="end">
            <Done />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
