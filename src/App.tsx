import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";
import RouterComponent from "./components/RouterComponent";
import InputForm from "./utils/InputForm";
import SearchHeader from "./components/SearchHeader";
import Header from "./components/Header";
import Nasa from "./tdd/redux/thunk/Nasa";
import Counter from "./tdd/typescript/Counter";
import MyForm from "./tdd/typescript/MyForm";
import ReducerSample from "./tdd/typescript/ReducerSample";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        {/* <RouterComponent /> */}
        <Counter />
        <MyForm onSubmit={onSubmit} />
        <ReducerSample />
      </>
    </ThemeProvider>
  );
}

export default App;
