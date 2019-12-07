import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";
import RouterComponent from "./components/RouterComponent";
import InputForm from "./utils/InputForm";
import ReducerSample from "./tdd/typescript/ReducerSample";
import SearchHeader from "./components/SearchHeader";
import Header from "./components/Header";
import TodoList from "./tdd/redux/components/TodoList";
import TodoInsert from "./tdd/redux/components/TodoInsert";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <TodoInsert />
        <TodoList />
      </>
    </ThemeProvider>
  );
}

export default App;
