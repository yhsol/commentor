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
import SearchHeader from "./SearchHeader";
import styled from "styled-components";

interface RouterComponentProps {}

const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

function RouterComponent() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Main} />
          <Switch>
            {/* <SearchHeader /> */}
            <Route path="/count" component={Count} />
            <Route path="/recent" component={Recent} />
            <Route path="/search" component={Search} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
}

export default RouterComponent;
