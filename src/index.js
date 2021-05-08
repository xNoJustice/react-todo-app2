import React from "react";
import ReactDOM from "react-dom";
import Todos from "./components/Todos";
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Grid,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Todos />
    </Grid>
  </ThemeProvider>,
  document.getElementById("root")
);
