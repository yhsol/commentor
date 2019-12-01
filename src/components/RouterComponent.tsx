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
import Main from "./pages/Main";
import Viewd from "./pages/Viewd";
import SearchResult from "./pages/SearchResult";

interface RouterComponentProps {}

function RouterComponent() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/count" component={Count} />
          <Route path="/recent" component={Recent} />
          <Route path="/viewd" component={Viewd} />

          <Route path="/search" component={SearchResult} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
}

export default RouterComponent;
