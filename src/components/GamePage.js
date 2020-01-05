import React, { Component } from "react";
import { ButtonContainer } from "./Button";
import HouseModal from "./HouseModal";
import gryfindor from "../img/gryfindor.gif";
import slytherin from "../img/slytherin.gif";
import huffflepuff from "../img/huffflepuff.gif";
import ravenclaw from "../img/ravenclaw.gif";

var backgroundImage = {
    width: "100%",
    height: "800px",
    backgroundImage: "url('img/User.gif')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
};

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            selectedHouse: "",
            showHouseModal: false,
            selectedImage: "",
            showLoader: false
        };
    }
    handleName = event => {
        const target = event.target.value;
        this.setState({ name: target });
    };

    closeHouseModal = () => {
        this.setState({ showHouseModal: false, selectedHouse: "" });
    };

    submitForm = () => {
        this.setState({ showLoader: true });
        setTimeout(() => {
            const { name = "" } = this.state;
            if (name && name.length > 0) {
                const data = [
                    {
                        name: "Amit Mundra",
                        house: "Gryffindor",
                        img: gryfindor
                    },
                    {
                        name: "Lokesh Daga",
                        house: "Slytherin",
                        img: slytherin
                    }
                ];
                const filterArray = data.filter(
                    singleData =>
                        name.toUpperCase() === singleData.name.toUpperCase()
                );
                if (filterArray.length > 0) {
                    const selectedHouse = filterArray[0].house;
                    const selectedImage = filterArray[0].img;
                    this.setState({
                        selectedHouse,
                        name: "",
                        showHouseModal: true,
                        selectedImage,
                        showLoader: false
                    });
                } else {
                    const houses = [
                        {
                            house: "Gryffindor",
                            img: gryfindor
                        },
                        {
                            house: "Slytherin",
                            img: slytherin
                        },
                        {
                            house: "Hufflepuff",
                            img: huffflepuff
                        },
                        {
                            house: "Ravenclaw",
                            img: ravenclaw
                        }
                    ];
                    const max = 3;
                    const min = 0;
                    const randomNumber =
                        Math.floor(Math.random() * (max - min + 1)) + min;
                    const selectedHouse = houses[randomNumber];
                    if (selectedHouse && selectedHouse.house) {
                        const selectedHouse = houses[randomNumber].house;
                        const selectedImage = houses[randomNumber].img;
                        this.setState({
                            showLoader: false,
                            selectedHouse,
                            selectedImage,
                            showHouseModal: true
                        });
                    } else {
                        this.setState({ showLoader: false });
                        alert("Something went wrong. Please retry.");
                    }
                }
            }
        }, 3000);
    };
    render() {
        return (
            <div className="App-header">
                <img
                    src={gryfindor}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        top: 0,
                        right: 0
                    }}
                    alt="image"
                />
                <img
                    src={slytherin}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                    alt="image"
                />
                <img
                    src={huffflepuff}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        bottom: 0,
                        right: 0
                    }}
                    alt="image"
                />
                <img
                    src={ravenclaw}
                    style={{
                        height: "50%",
                        width: "400px",
                        position: "absolute",
                        bottom: 0,
                        left: 0
                    }}
                    alt="image"
                />
                <div style={backgroundImage}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            position: "absolute"
                        }}
                    >
                        {!this.state.showLoader ? (
                            <div>
                                <div style={{ marginTop: 16 }}>
                                    Enter your name
                                </div>
                                <input
                                    onChange={this.handleName}
                                    type="text"
                                    className="form-control mb-2 mr-sm-2 mb-sm-0 mt-2"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                />
                                <ButtonContainer
                                    onClick={() => this.submitForm()}
                                    style={{ marginTop: 24, width: 200 }}
                                >
                                    Submit
                                </ButtonContainer>
                            </div>
                        ) : (
                            undefined
                        )}
                        {this.state.showHouseModal ? (
                            <div
                                style={{
                                    position: "absolute",
                                    width: "500px",
                                    top: 0,
                                    bottom: 0
                                }}
                            >
                                <HouseModal
                                    selectedHouse={this.state.selectedHouse}
                                    closeHouseModal={this.closeHouseModal}
                                    selectedImage={this.state.selectedImage}
                                />
                            </div>
                        ) : (
                            undefined
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default GamePage;
