import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./styles/Global.style.jsx";
import ThemeStyles from "./styles/Theme.style.jsx";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeStyles}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
