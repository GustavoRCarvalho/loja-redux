import styled from "styled-components"

export const ButtonSize = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.5rem;
    height: 2.5rem;
    margin: 0.5rem;
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