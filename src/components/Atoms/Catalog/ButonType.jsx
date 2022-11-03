import styled from "styled-components";

export const ButtonType = styled.span`
    color: ${props => props.selected ? props.theme.catalog.colorHover : "#fff"};
    transition: color 0.3s;

    cursor: pointer;

    :hover {
        color: ${props => props.selected ? "#7d182e" : props.theme.catalog.colorHover};
        transition: color 0.3s;
    }
`