import styled from "styled-components"

export const ButtonSize = styled.div`
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.5em;
    height: 2.5em;
    margin: 0.5em;
    border-radius: 0.2rem;

    cursor: pointer;

    color: ${props => props.selected ? "black" : "white"};;
    background-color: ${props => props.selected ? "yellow" : "black"};
    transition: background-color 0.3s, color 0.3s;

    :hover {
        color: black;
        background-color: ${props => props.selected ? "#b0b000" : "yellow"};
        transition: background-color 0.3s, color 0.3s;
    }
`