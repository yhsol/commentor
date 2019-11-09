import React from "react";
import Profile from "./tdd/react-testing-library/Profile";
import Counter from "./tdd/react-testing-library/Counter";
import TodoItem from "./tdd/todo/TodoItem";
import TodoApp from "./tdd/todo/TodoApp";
import DelayedToggle from "./tdd/react-testing-library/DelayedToggle";

const App: React.FC = () => {
  return (
    <div>
      <DelayedToggle />
    </div>
  );
};

export default App;
