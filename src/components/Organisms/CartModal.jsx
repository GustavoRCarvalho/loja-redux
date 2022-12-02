import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { closeModalCart } from "../../store/modalSlice"
import ButtonClose from "../Atoms/Product/ButtonClose"
import CartList from "../Molecules/Cart/CartList"

const Modal = styled.div`
    background-color: #212021;

    height: 100%;
    width: 30rem;

    position: absolute;
`

const CloseLine = styled.div`
    display: flex;
    justify-content: flex-end;
    
    padding: 0.4rem;
`

export default function CartModal() {
    const dispatch = useDispatch()
    const {listCart} = useSelector(state => state.cart)

    function handleClose() {
        dispatch(closeModalCart())
    }

    return (
        <Modal>
            <CloseLine>
                <ButtonClose onClick={()=>handleClose()}/>
            </CloseLine>
            <CartList listCart={listCart}/>
        </Modal>
    )
}