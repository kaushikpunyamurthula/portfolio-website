import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={themes.blackTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={themes.blackTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
