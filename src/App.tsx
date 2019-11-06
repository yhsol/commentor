import React from "react";
import Profile from "./tdd/react-testing-library/Profile";
import Counter from "./tdd/react-testing-library/Counter";
import TodoItem from "./tdd/todo/TodoItem";
import TodoApp from "./tdd/todo/TodoApp";

const App: React.FC = () => {
  return (
    <div>
      <TodoApp />
    </div>
  );
};

export default App;
