import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { CLEAR_TODO } from "../TodosReducer";

export const TodoFilter = (props) => {
  let activeTodoCount =
    props.filter !== "SHOW_ALL"
      ? props.todos.reduce((count, todo) => {
          return todo.done ? count : count + 1;
        }, 0)
      : props.todos.reduce((count, todo) => {
          return todo.done ? count : count + 1;
        }, 0);

  return (
    <AppBar
      position="fixed"
      style={{
        top: "auto",
        bottom: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="md">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Typography component="span">
              {activeTodoCount > 1
                ? activeTodoCount + " todos left"
                : activeTodoCount + " todo left"}
            </Typography>
            <Button
              color="primary"
              variant="contained"
              disabled={props.filter === "SHOW_ALL"}
              onClick={() => props.setFilter("SHOW_ALL")}
            >
              All
            </Button>
            <Button
              color="primary"
              variant="contained"
              disabled={props.filter === "SHOW_ACTIVE"}
              onClick={() => props.setFilter("SHOW_ACTIVE")}
            >
              Active
            </Button>
            <Button
              color="primary"
              variant="contained"
              disabled={props.filter === "SHOW_COMPLETED"}
              onClick={() => props.setFilter("SHOW_COMPLETED")}
            >
              Completed
            </Button>
            <Button
              color="primary"
              variant="contained"
              disabled={activeTodoCount >= props.todos.length}
              onClick={() => props.todosDispatch({ type: CLEAR_TODO })}
            >
              Clear Completed
            </Button>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
