import React from "react";
import { Typography, TextField, InputAdornment, Fab } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export const InputSearchTodo = (props) => {
  const handleSearch = (e) => {
    props.setSearchMode(true);
    props.setTodoSearch(e.target.value);

    props.setFilteredTodos(
      props.todos.filter((todo) => todo.todo.includes(e.target.value))
    );
  };

  const cancelSearchMode = () => {
    props.setSearchMode(false);
    props.setTodoSearch("");
    props.setFilteredTodos("");
  };

  return (
    <Typography component="div">
      <TextField
        name="searchTodo"
        label="Search Todo"
        color="secondary"
        multiline
        value={props.todoSearch}
        style={{ width: 200 }}
        error={props.todoSearch.length > 255}
        helperText={
          props.todoSearch.length > 255
            ? "Search query can contain up to 255 characters."
            : " "
        }
        onChange={(e) => handleSearch(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Fab
        size="small"
        color="secondary"
        onClick={() => cancelSearchMode()}
        disabled={!props.searchMode}
        style={{
          display: !props.searchMode ? "none" : "",
          marginTop: "12px",
        }}
      >
        <CloseIcon />
      </Fab>
    </Typography>
  );
};
