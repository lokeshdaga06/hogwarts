import React, { Component } from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
class Modal extends Component {
    state = {};
    render() {
        return (
            <ModalContainer>
                <div className="container">
                    <div
                        id="modal"
                        className="col-6 mx-auto p-5"
                        style={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <h5 style={{ color: "black", fontWeight: "bold" }}>
                            The rules are given below. Please read them
                            carefully.
                        </h5>
                        <ul>
                            <li style={{ color: "black" }}>Enter your name.</li>
                            <li style={{ color: "black" }}>
                                You will be given a house based on your
                                abilities.
                            </li>
                            <li style={{ color: "black" }}>
                                You will be a member of that house.
                            </li>
                        </ul>
                        <ButtonContainer
                            style={{
                                backgroundColor: "black",
                                alignSelf: "flex-end"
                            }}
                            onClick={() => this.props.closeRules()}
                        >
                            Done
                        </ButtonContainer>
                    </div>
                </div>
            </ModalContainer>
        );
    }
}

export default Modal;

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
