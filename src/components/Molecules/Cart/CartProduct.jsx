import { useDispatch } from "react-redux"
import styled from "styled-components"
import { removeProductToCart, updateCartProductQuantity } from "../../../store/cartSlice"

import ImageProduct from "../../Atoms/Catalog/ImageProduct"
import ButtonQuantity from "../../Atoms/Product/ButtonQuantity"
import Title from "../../Atoms/Product/Title"
import ButtonDelete from "../../Atoms/Product/ButtonDelete"
import { formatterBr } from "../../utils/Formaters"

const ProductContainer =  styled.div`
    display: flex;

    padding: 1rem;

    @media screen and (min-width: ${props => props.theme.device.mobileMin}) and (max-width: ${props => props.theme.device.mobileMax}){
        font-size: 0.8rem;
    }
`

const ProductInfo =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Image = styled(ImageProduct)`
    width: 7rem;
    padding-inline: 0.5rem;

    @media screen and (min-width: ${props => props.theme.device.mobileMin}) and (max-width: ${props => props.theme.device.mobileMax}){
        width: 5rem;
    }
`

const ColorSize = styled.span`

`

const Quantity = styled(ButtonQuantity)`
    min-height: 3rem;
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Price = styled.span`
    color: ${props => props.theme.catalog.color};
    font-size: 1.2em;
`

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 60%;
    font-size: 1.2em;

    @media screen and (min-width: ${props => props.theme.device.mobileMin}) and (max-width: ${props => props.theme.device.mobileMax}){
        width: 100%;
    }
`

export default function CartProduct({product, product: {image, title, color, size, price, quantity}}) {
    const dispatch = useDispatch()
    
    function quantityPlus(quantity, number = 0) {
        let newNumber = Number(quantity) + number; 
        dispatch(updateCartProductQuantity({newNumber, product}))
    }

    function deleteProduct(product) {
        dispatch(removeProductToCart(product))
    }

    return (
        <ProductContainer>
            <Image src={image} alt={title}/>
            <ProductInfo>
                <Title fontSize="1rem">{title}</Title>
                <ColorSize>
                    {
                    `(${color} ${size})`
                    }
                </ColorSize>
                <QuantityContainer>
                    <Quantity quantity={quantity} quantityPlus={quantityPlus}/>
                    <PriceContainer>
                        <Price> R$ {formatterBr.format(price)}</Price>
                        <ButtonDelete onClick={()=>{deleteProduct(product)}}/>
                    </PriceContainer>
                </QuantityContainer>
            </ProductInfo>
        </ProductContainer>
    )
}