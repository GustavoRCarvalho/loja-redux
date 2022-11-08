import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { closeModalCart } from "../../store/modalSlice"

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

const Modal = styled.div`
    background-color: #212021;

    height: 100%;
    width: 30rem;

    position: absolute;
`

export default function CartModal() {
    const {listCart} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    function handleClose(id) {
        if (id === "modalCart") {
            dispatch(closeModalCart())
        }
    }
    console.log(listCart)

    function listProducts(listCart) {
        return listCart?.map(({id, image, title, color, size, price, quantity}) => {
            let titleColor
            for (const [key] of Object.entries(color)){
                titleColor = key
            }
            return <span>
                    Id: {id.toString()}<br />
                    Image: {image.toString()}<br />
                    Title: {title.toString()}<br />
                    Price: {price.toString()}<br />
                    Color: {titleColor.toString()}<br /> 
                    Size: {size.toString()}<br />
                    Qnt: {quantity.toString()}<br /><br />
            </span>
        })
    }

    return (
        <BackgroundModal id="modalCart" onClick={({target: {id}}) => {handleClose(id)}}>
            <Modal>
            {listProducts(listCart)}
            </Modal>
        </BackgroundModal>
    )
}