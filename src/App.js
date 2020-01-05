import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import GamePage from "./components/GamePage";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/game" component={GamePage} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
