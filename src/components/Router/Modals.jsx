import { useSelector } from "react-redux";
import {CartModal } from '../Pages'

export default function Modals() {
    const {modalCart} = useSelector(state => state.modal)
    return (
        <>
            {modalCart ? <CartModal /> : null}
        </>
    )
}