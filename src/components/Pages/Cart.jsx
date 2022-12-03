import { useDispatch } from "react-redux"
import { closeModalCart } from "../../store/modalSlice"
import { BackgroundModal } from "../Atoms/Modal"
import CartModal from "../Organisms/CartModal"

export default function Cart() {
    const dispatch = useDispatch()

    function handleClose(id) {
        if (id === "modalCart") {
            dispatch(closeModalCart())
        }
    }
    
    return (
        <BackgroundModal id="modalCart" onClick={({target: {id}}) => {handleClose(id)}}>
            <CartModal />
        </BackgroundModal>
    )
}