import React from "react";
import Profile from "./tdd/react-testing-library/Profile";
import Counter from "./tdd/react-testing-library/Counter";
import TodoItem from "./tdd/todo/TodoItem";

const App: React.FC = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
