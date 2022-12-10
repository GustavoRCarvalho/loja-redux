import styled from "styled-components";
import ButtonMenu from "../../Atoms/Menu/ButtonMenu";

const Nav = styled.nav`
    background-color: ${props => props.theme.menu.backgroudColor};
    height: 3rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen 
        and (min-width: ${props => props.theme.device.mobileMin})
        and (max-width: ${props => props.theme.device.mobileMax}) {
        display: none;
    }
`

export default function MenuDesktop () {

    return (
        <Nav>
            <ButtonMenu to="/">
                Home
            </ButtonMenu>
            <ButtonMenu to="/roupas/todos">
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