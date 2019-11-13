import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";
import RouterComponent from "./components/RouterComponent";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <RouterComponent />
      </>
    </ThemeProvider>
  );
}

export default App;
