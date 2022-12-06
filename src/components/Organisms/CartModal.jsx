import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { modalCart } from "../../store/modalSlice"
import ButtonClose from "../Atoms/Product/ButtonClose"
import CartList from "../Molecules/Cart/CartList"

const Modal = styled.div`
    background-color: #212021;

    height: 100%;
    width: 30rem;

    position: absolute;

    @media screen and (min-width: ${props => props.theme.device.mobileMin}) and (max-width: ${props => props.theme.device.mobileMax}){
        width: 80%
    }
`

const CloseLine = styled.div`
    display: flex;
    justify-content: flex-end;
    
    padding: 0.4rem;
`

const NoProduct = styled.div`
    text-align: center;
`

export default function CartModal() {
    const dispatch = useDispatch()
    const {listCart} = useSelector(state => state.cart)

    function handleClose() {
        dispatch(modalCart())
    }

    return (
        <Modal>
            <CloseLine>
                <ButtonClose onClick={()=>handleClose()}/>
            </CloseLine>
            {listCart.length
                ?   <CartList listCart={listCart}/>
                :   <NoProduct>
                        Ops!! Nenhum produto adicionado ao carrinho!
                    </NoProduct>
            }
        </Modal>
    )
}