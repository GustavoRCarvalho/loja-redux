import { useDispatch } from "react-redux"
import styled from "styled-components"
import { updateCartProductQuantity } from "../../store/cartSlice"

import ImageProduct from "../Atoms/Catalog/ImageProduct"
import ButtonQuantity from "../Atoms/Product/ButtonQuantity"
import Title from "../Atoms/Product/Title"

const ProductContainer =  styled.div`
    display: flex;

    padding: 1rem;
`

const ProductInfo =  styled.div`
    display: flex;
    flex-direction: column;
`

const Image = styled(ImageProduct)`
    width: 7rem;
    padding-inline: 0.5rem;
`

const ColorSize = styled.span`

`

const Quantity = styled(ButtonQuantity)`
    width: 6rem; 
`

const Price = styled.span`
    color: ${props => props.theme.catalog.color};
    font-size: 1.2rem;
`

export default function CartProduct({product, product: {image, title, color, size, price, quantity}}) {
    const dispatch = useDispatch()

    let titleColor
    for (const [key] of Object.entries(color)){
        titleColor = key
    }
    
    function quantityPlus(quantity, number = 0) {
        console.log(quantity)
        let newNumber = Number(quantity) + number; 
        dispatch(updateCartProductQuantity({newNumber, product}))
    }

    return (
        <ProductContainer>
            <Image src={image} alt={title}/>
            <ProductInfo>
                <Title fontSize="1rem">{title.toString()}</Title>
                <ColorSize>
                    {
                    `(${titleColor} ${size})`
                    }
                </ColorSize>
                <Quantity quantity={quantity} quantityPlus={quantityPlus}/>
                <Price>R$ {price.toString()}</Price>
            </ProductInfo>
        </ProductContainer>
    )
}