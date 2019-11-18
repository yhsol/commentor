import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";
import RouterComponent from "./components/RouterComponent";
import InputForm from "./utils/InputForm";
import ReducerSample from "./tdd/typescript/ReducerSample";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <RouterComponent />
        <ReducerSample />
      </>
    </ThemeProvider>
  );
}

export default App;
