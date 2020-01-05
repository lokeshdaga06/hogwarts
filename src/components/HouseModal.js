import React, { Component } from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
class HouseModal extends Component {
    state = {};
    render() {
        return (
            <ModalContainer>
                <div className="container">
                    <div
                        id="modal"
                        className="col-12 mx-auto p-5"
                        style={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <h5
                            className="text-center"
                            style={{ color: "black", fontWeight: "bold" }}
                        >
                            Congratulations !!!
                        </h5>
                        <p className="text-center" style={{ color: "green" }}>
                            Welcome to {this.props.selectedHouse}
                        </p>
                        <img
                            src={this.props.selectedImage}
                            style={{
                                height: "100%",
                                width: "100%",
                                borderRadius: 8
                            }}
                            alt="image"
                        />
                        <Link style={{ alignSelf: "center" }} to="/">
                            <ButtonContainer
                                style={{
                                    backgroundColor: "black",
                                    alignSelf: "center"
                                }}
                                onClick={() => this.props.closeHouseModal()}
                            >
                                Done
                            </ButtonContainer>
                        </Link>
                    </div>
                </div>
            </ModalContainer>
        );
    }
}

export default HouseModal;

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    #modal {
        background: white;
    }
`;
