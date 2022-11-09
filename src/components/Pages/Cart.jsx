import { useDispatch } from "react-redux"
import styled from "styled-components"
import { closeModalCart } from "../../store/modalSlice"
import CartModal from "../Organisms/CartModal"

const BackgroundModal = styled.div`
    backdrop-filter: blur(3px);

    position: absolute;
    height: 100%;
    width: 100%;

    top: 0;
    left: 0;

    display: flex;
    justify-content: flex-end;
`

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