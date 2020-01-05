import React from "react";
import "../App.css";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import dubmledoreImage from "../img/dumbledore.gif";
import grifyImage from "../img/grify.gif";
import soundfile from "../assets/hogwarts.mpeg";

var backgroundImage = {
    width: "100%",
    height: "800px",
    backgroundImage: "url('img/castleImage.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWelcomeThings: false
        };
        this.audio = new Audio(soundfile);
    }
    componentWillMount() {
        this.audio.addEventListener(
            "ended",
            function() {
                this.currentTime = 0;
                this.audio.load();
                this.audio.play();
            },
            false
        );
        this.audio.load();
        this.audio.play();

        setTimeout(() => {
            this.setState({ showWelcomeThings: true });
        }, 3000);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div style={backgroundImage}>
                        {this.state.showWelcomeThings ? (
                            <div>
                                <img
                                    src={dubmledoreImage}
                                    style={{
                                        height: "200px",
                                        width: "200px",
                                        position: "absolute",
                                        right: 80,
                                        top: 80,
                                        borderRadius: 8
                                    }}
                                    alt="image"
                                />
                                <img
                                    src={grifyImage}
                                    style={{
                                        height: "200px",
                                        width: "200px",
                                        position: "absolute",
                                        bottom: 80,
                                        left: 80,
                                        borderRadius: 8
                                    }}
                                    alt="image"
                                />
                                <p>Welcome to hogwarts</p>
                                <p>
                                    Whether you come back by page or by the big
                                    screen,
                                    <br></br>
                                    Hogwarts will always be there to welcome you
                                    home.
                                </p>
                                <p>
                                    Wanna know which house you belong? <br></br>{" "}
                                    Click on Button below.
                                </p>
                                <Link to="/game">
                                    <ButtonContainer>Lets Play</ButtonContainer>
                                </Link>{" "}
                            </div>
                        ) : (
                            undefined
                        )}
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;
