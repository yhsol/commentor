import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Count from "./pages/Count";
import Recent from "./pages/Recent";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Main from "./pages/Main";

interface Props {}

function RouterComponent() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/count" component={Count} />
          <Route path="/recent" component={Recent} />
          <Route path="/search" component={Search} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
}

export default RouterComponent;
