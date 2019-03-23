// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router"; // react-router v4
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
const store = configureStore(/* provide initial state if any */);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => <div>Match</div>} />
        <Route exact path="/test" render={() => <div>test</div>} />
        <Route exact path="/test2" render={() => <div>test2</div>} />
        <Route render={() => <div>Miss</div>} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
