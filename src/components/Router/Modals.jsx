import { useSelector } from "react-redux";
import { Cart } from '../Pages'
import MenuMobile from "../Pages/MenuMobile";

export default function Modals() {
    const {modalCart, modalMenu} = useSelector(state => state.modal)
    
    return (
        <>
            {modalCart ? <Cart /> : null}
            {modalMenu ? <MenuMobile /> : null}
        </>
    )
}