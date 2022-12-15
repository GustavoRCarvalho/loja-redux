import styled from "styled-components";
import CartButton from "../Molecules/Cart/CartButton";
import MenuButtonMobile from "../Molecules/Menu/MenuButtonMobile";
import MenuNav from "../Molecules/Menu/MenuNav";

const MenuDesktop = styled(MenuNav)`
    @media screen 
            and (min-width: ${props => props.theme.device.mobileMin})
            and (max-width: ${props => props.theme.device.mobileMax}) {
            display: none;
        }
`

export default function Menu (props) {

    return (
        <>
            <MenuButtonMobile />
            <MenuDesktop />
            <CartButton />
        </>
    )
}