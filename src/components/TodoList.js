import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  FormControlLabel,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { REMOVE_TODO, TOGGLE_TODO } from "../TodosReducer";
import { Edit, Delete } from "@material-ui/icons";
import DoneIcon from "@material-ui/icons/Done";

export const TodoList = (props) => {
  const handleToggleChange = (id) => {
    if (id === null) return;
    props.todosDispatch({
      type: TOGGLE_TODO,
      payload: { id: id },
    });
  };

  const handleRemove = (id) => {
    if (id === null) return;
    props.todosDispatch({
      type: REMOVE_TODO,
      payload: { id: id },
    });
  };

  return (
    <List>
      {props.todos.map((todo) => (
        <ListItem key={todo.id} button>
          <ListItemIcon>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<DoneIcon />}
                  checkedIcon={<DoneIcon />}
                  name=""
                />
              }
              edge="start"
              tabIndex={-1}
              checked={todo.done}
              onClick={() => handleToggleChange(todo.id)}
            />
          </ListItemIcon>
          <ListItemText
            id={todo.id}
            style={{
              textDecoration: todo.done ? "line-through" : "none",
            }}
          >
            {todo.todo}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => props.handleEdit(todo.id)} edge="end">
              <Edit />
            </IconButton>
            <IconButton
              onClick={() => handleRemove(todo.id)}
              color="secondary"
              edge="end"
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
