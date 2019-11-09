import React from "react";
import Profile from "./tdd/react-testing-library/Profile";
import Counter from "./tdd/react-testing-library/Counter";
import TodoItem from "./tdd/todo/TodoItem";
import TodoApp from "./tdd/todo/TodoApp";
import DelayedToggle from "./tdd/react-testing-library/DelayedToggle";
import Main from "./components/Main";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
