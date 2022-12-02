import { useDispatch } from "react-redux"
import styled from "styled-components"
import { removeProductToCart, updateCartProductQuantity } from "../../../store/cartSlice"

import ImageProduct from "../../Atoms/Catalog/ImageProduct"
import ButtonQuantity from "../../Atoms/Product/ButtonQuantity"
import Title from "../../Atoms/Product/Title"
import ButtonDelete from "../../Atoms/Product/ButtonDelete"

const ProductContainer =  styled.div`
    display: flex;

    padding: 1rem;
`

const ProductInfo =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Image = styled(ImageProduct)`
    width: 7rem;
    padding-inline: 0.5rem;
`

const ColorSize = styled.span`

`

const Quantity = styled(ButtonQuantity)`
    width: 6rem; 
    min-height: 3rem;
`

const QuantityPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Price = styled.span`
    color: ${props => props.theme.catalog.color};
    font-size: 1.2rem;
`

const formatterBr = new Intl.NumberFormat('id');

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
                <QuantityPrice>
                    <Quantity quantity={quantity} quantityPlus={quantityPlus}/>
                    <Price> R$ {formatterBr.format(price)}</Price>
                    <ButtonDelete onClick={()=>{deleteProduct(product)}}/> 
                </QuantityPrice>
            </ProductInfo>
        </ProductContainer>
    )
}