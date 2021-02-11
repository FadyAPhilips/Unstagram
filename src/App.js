import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Routes/Home";

const Container = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #b2f5ea;
`;

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
