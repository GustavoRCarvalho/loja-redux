import styled from "styled-components";
import ButtonMenu from "../Atoms/Menu/ButtonMenu";

const Nav = styled.nav`
    background-color: ${props => props.theme.menu.backgroudColor};
    height: 5vh;
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Menu (props) {

    return (
        <Nav>
            <ButtonMenu to="/">
                Home
            </ButtonMenu>
            <ButtonMenu to="/roupas">
                Roupas
            </ButtonMenu>
            <ButtonMenu to="/roupas/moletons">
                Moletons
            </ButtonMenu>
            <ButtonMenu to="/about">
                About
            </ButtonMenu>
            <ButtonMenu to="/error">
                Error
            </ButtonMenu>
        </Nav>
    )
}