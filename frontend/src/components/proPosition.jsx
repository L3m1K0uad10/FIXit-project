import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


function getFirstDigit(number) {
    const numberString = number.toString();
    const firstDigitString = numberString[0];
    const firstDigit = parseInt(firstDigitString, 10);
    return firstDigit;
}

export default function Position(props) {

    const style = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: props.connectivity == "offline" ? "#F41313" : "#26F56D",
        borderColor: props.connectivity == "offline" ? "#F41313" : "#26F56D",
    }

    const thumbtackStyle = {
        gridColumn: getFirstDigit(props.distance),
        gridRow: props.position
    }

    console.log(getFirstDigit(props.distance), props.position)

    return (
        <div className = "position-thumbtack" style = {thumbtackStyle}>
            <FontAwesomeIcon className = "location-dot" icon =  {faLocationDot} />
            <div style = {style}></div>
        </div>
    )
}