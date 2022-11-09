import { useSelector } from "react-redux"
import styled from "styled-components"
import CartProduct from "../Molecules/CartProduct"

const Modal = styled.div`
    background-color: #212021;

    height: 100%;
    width: 30rem;

    position: absolute;
`

export default function CartModal() {
    const {listCart} = useSelector(state => state.cart)

    console.log(listCart)

    function listProducts(listCart) {
        return listCart?.map((product, index) => {
            return (
                <CartProduct product={product} key={index}/>
            )
        })
    }
    console.log("cartModal")

    return (
        <Modal>
            {listProducts(listCart)}
        </Modal>
    )
}