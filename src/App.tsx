import { hot } from "react-hot-loader/root";
import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import "./styles/main.scss";

import UserCreateForm from './views/auth/UserCreateForm'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UserCreateForm} />
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default hot(App);