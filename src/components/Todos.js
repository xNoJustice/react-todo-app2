import React, { useState, useEffect, useReducer } from "react";
import AppContext from "../AppContext";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import todosReducer from "../TodosReducer";

import { InputNewTodo } from "./InputNewTodo";
import { InputSearchTodo } from "./InputSearchTodo";
import { InputEditTodo } from "./InputEditTodo";
import { TodoList } from "./TodoList";
import { TodoFilter } from "./TodoFilter";

export default function Todos() {
  const [todos, todosDispatch] = useReducer(
    todosReducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [todoEdit, setTodoEdit] = useState("");
  const [todoEditId, setTodoEditId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [todoSearch, setTodoSearch] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState("");
  const [filter, setFilter] = useState("SHOW_ALL");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (id) => {
    if (id === null) return;
    let edit = todos.filter((todo) => todo.id === id);
    setTodoEdit(edit[0].todo);
    setTodoEditId(edit[0].id);
    setEditMode(true);
  };

  useEffect(() => {
    const handleFilter = (filter) => {
      switch (filter) {
        case "SHOW_ALL":
          setFilter("SHOW_ALL");
          setFilteredTodos(todos);
          break;
        case "SHOW_ACTIVE":
          setFilter("SHOW_ACTIVE");
          setFilteredTodos(todos.filter((todo) => todo.done === false));
          break;
        case "SHOW_COMPLETED":
          setFilter("SHOW_COMPLETED");
          setFilteredTodos(todos.filter((todo) => todo.done === true));
          break;
        default:
          break;
      }
    };
    handleFilter(filter);
  }, [todos, filter]);

  return (
    <AppContext.Provider value={{ todos, todosDispatch }}>
      <>
        <Container maxWidth="md">
          <Box m={2} pt={5} style={{ paddingBottom: "50px" }}>
            <Typography variant="h3" align="center" margin={5}>
              Welcome to Todo APP
            </Typography>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="stretch"
            >
              <InputNewTodo todosDispatch={todosDispatch} />
              <InputSearchTodo
                todos={filteredTodos !== "" ? filteredTodos : todos}
                searchMode={searchMode}
                setSearchMode={setSearchMode}
                todoSearch={todoSearch}
                setTodoSearch={setTodoSearch}
                setFilteredTodos={setFilteredTodos}
              />
            </Grid>
            {editMode ? (
              <InputEditTodo
                todosDispatch={todosDispatch}
                todoEdit={todoEdit}
                setTodoEdit={setTodoEdit}
                todoEditId={todoEditId}
                setTodoEditId={setTodoEditId}
                setEditMode={setEditMode}
              />
            ) : (
              <TodoList
                todos={filteredTodos !== "" ? filteredTodos : todos}
                todosDispatch={todosDispatch}
                handleEdit={handleEdit}
              />
            )}
          </Box>
        </Container>
        <TodoFilter
          todos={todos}
          todosDispatch={todosDispatch}
          filter={filter}
          setFilter={setFilter}
          setFilteredTodos={setFilteredTodos}
        />
      </>
    </AppContext.Provider>
  );
}
