import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import GamePage from "./components/GamePage";
import soundfile from "../src/assets/hogwarts.mpeg";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.audio = new Audio(soundfile);
    }
    componentDidMount() {
        this.audio.play();
        this.audio.addEventListener(
            "ended",
            function() {
                this.audio = new Audio(soundfile);
                this.currentTime = 0;
                this.audio.play();
            },
            false
        );
    }
    render() {
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
}

export default App;
