import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Baloo Chettan 2", cursive'
  }
});

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={responsiveFontSizes(theme)}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
