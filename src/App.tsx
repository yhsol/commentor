import React from "react";
import Profile from "./tdd/react-testing-library/Profile";

const App: React.FC = () => {
  return (
    <div>
      <Profile username="username" name="name" />
    </div>
  );
};

export default App;
