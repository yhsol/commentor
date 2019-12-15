import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";
import RouterComponent from "./components/RouterComponent";
import InputForm from "./utils/InputForm";
import ReducerSample from "./tdd/typescript/ReducerSample";
import SearchHeader from "./components/SearchHeader";
import Header from "./components/Header";
import Nasa from "./tdd/redux/thunk/Nasa";
import Counter from "./tdd/redux/modules/practice/components/Counter";
import Todolist from "./tdd/redux/modules/practice/components/Todolist";
import TodoInsert from "./tdd/redux/modules/practice/components/TodoInsert";

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
