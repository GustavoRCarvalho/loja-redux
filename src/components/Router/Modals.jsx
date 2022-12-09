import { useSelector } from "react-redux";
import { Cart, FiltersMobile, MenuMobile } from '../Pages'

export default function Modals() {
    const {modalCart, modalMenu, modalFilters} = useSelector(state => state.modal)
    
    return (
        <>
            {modalCart ? <Cart /> : null}
            {modalMenu ? <MenuMobile /> : null}
            {modalFilters ? <FiltersMobile /> : null}
        </>
    )
}