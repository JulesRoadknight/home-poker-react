import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import AppliedRoute from "./components/AppliedRoute";
import Poker from "./containers/Poker";

export default function Routes({ appProps }) {
    return (
        <BrowserRouter>
          <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <Route path="/blog" component={Poker} appProps={appProps} />
            { /* Finally, catch all unmatched routes */ }
            <Route component={Home} />
          </Switch>
        </BrowserRouter>
    );
}