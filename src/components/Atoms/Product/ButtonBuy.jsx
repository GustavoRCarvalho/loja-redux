
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { addProductToCart } from "../../../store/cartSlice"
import { onModalCart } from "../../../store/modalSlice"
import { updateProductQuantity } from "../../../store/productSlice"
import { productData } from "../../Pages/Product"

const Container = styled.div`
    background-color: #3f9030;

    border-radius: 0.3rem;
    padding: 0.5rem;
    margin-block: 0.5rem;
    color: #fff;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    cursor: pointer;
`
const QuantityInput = styled.input`
    outline: none;
    border: none;
    background: transparent;
    width: 2rem;

    font-size: 1.3rem;
    color: #fff;
    font-weight: 700;
    text-align: center;
`

const QuantityButton = styled.span`
    background: transparent;
    color: #a1a1a1;
    transition: color 0.3s;

    :hover {
        color: #fff;
        transition: color 0.3s;
    }

    padding-inline: 0.5rem;
`

const QuantityConteiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #23541a;
    min-height: 4rem;

    border-radius: 0.3rem;
`

const SpanBuy = styled.span`
    padding-inline: 0.5rem;
`


export default function ButtonBuy() {
    const {id: idProduct, title, price, imagesList} = productData
    const image = imagesList[0]
    const {productOptions,productOptions:{quantity}} = useSelector(state => state.product)
    const dispatch = useDispatch()

    function QuantityPlus(quantity, number) {
        let newNumber = Number(quantity) + number; 
        dispatch(updateProductQuantity(newNumber))
    }

    function BuyButton(idElement, product) {
        if(idElement === "buyButton"){
            dispatch(addProductToCart(product))
            dispatch(onModalCart())
        }
    }

    return (
        <Container id="buyButton" onClick={({target: {id}})=>{BuyButton(id, {...productOptions, id: idProduct, title, price, image})}}>
            <QuantityConteiner>
                <QuantityButton onClick={()=>{QuantityPlus(quantity, -1)}}> - </QuantityButton>
                <QuantityInput value={quantity} onChange={({target:{value}})=>{dispatch(updateProductQuantity(value))}}/>
                <QuantityButton onClick={()=>{QuantityPlus(quantity, +1)}}> + </QuantityButton>
            </QuantityConteiner>
            <SpanBuy id="buyButton">
                Comprar
            </SpanBuy>
        </Container>
    )
}