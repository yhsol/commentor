import React, { Suspense, lazy } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

const Count = lazy(() => import("./pages/Count"));
const Recent = lazy(() => import("./pages/Recent"));
const Detail = lazy(() => import("./pages/Detail"));
const Main = lazy(() => import("./pages/Main"));
const Viewd = lazy(() => import("./pages/Viewd"));
const SearchResult = lazy(() => import("./pages/SearchResult"));

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem auto;
  font-size: 3rem;
`;

interface RouterComponentProps {}

function RouterComponent() {
  return (
    <Router>
      <>
        <Suspense fallback={<Loading>loading..</Loading>}>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/count/" component={Count} />
            <Route path="/recent" component={Recent} />
            <Route path="/viewd" component={Viewd} />

            <Route path="/search" component={SearchResult} />
            <Route path="/detail/:id" component={Detail} />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </>
    </Router>
  );
}

export default RouterComponent;
