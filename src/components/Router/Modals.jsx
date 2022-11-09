import { useSelector } from "react-redux";
import { Cart } from '../Pages'

export default function Modals() {
    const {modalCart} = useSelector(state => state.modal)
    return (
        <>
            {modalCart ? <Cart /> : null}
        </>
    )
}