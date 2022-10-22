import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 5vw;
    list-style: none;
    background-color: ${props => props.theme.menu.backgroudColor};
    color: ${props => props.theme.menu.color};
    font-size: ${props => props.theme.menu.fontSize};
    font-weight: "600";
    text-decoration: none;

    :hover {
        background-color: ${props => props.theme.menu.activeBackgroundColor};
        cursor: pointer;
    }
`;

export default function ButtonMenu (props) {

    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}