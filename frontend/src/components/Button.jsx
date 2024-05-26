import React from "react";
import styled from 'styled-components';

const ButtonComponent = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    padding: 13px 30px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    border: 1px solid ${props => 
        props.variant === "yale-blue" 
            ? "#023d7bff" 
            : "#1f78b4ff"           
    };
    background-color: ${props => 
        props.variant === "yale-blue" 
            ? "#023d7bff" 
            : "#1f78b4ff"           
    };
    color: ${props => 
        props.variant === "yale-blue" 
            ? "white" 
            : "white"           
    };
    text-transform: uppercase;
`;


const Button = ({type, variant, id, onClick, children}) => {

    return(
        <ButtonComponent 
            type = {type ? type : "button"}
            variant = {variant}
            id = {id}
            onClick = {onClick}
        >
            {children}
        </ButtonComponent>
    )
}

export default Button;