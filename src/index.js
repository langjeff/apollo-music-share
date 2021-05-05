import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";

import App from "./App";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
