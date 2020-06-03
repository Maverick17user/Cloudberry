import { hot } from "react-hot-loader/root";
import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./styles/main.sass";

import FinanceWiget from './views/FinanceWiget/FinanceWiget'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={FinanceWiget} />
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default hot(App);