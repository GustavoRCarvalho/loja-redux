import { useState } from "react";
import styled from "styled-components";
import ImageProduct from "../Atoms/Product/ImageProduct";
import PriceProduct from "../Atoms/Product/PriceProduct";
import TitleProduct from "../Atoms/Product/Title";

const Card = styled.div`
    color: ${props => props.theme.catalog.color};
    width: 15rem;
    height: 100%;
    margin: 2rem;

    :hover {
        cursor: pointer;
    }
`

export default function Product (props) {
    const [hover, serHover] = useState(false)

    return (
        <Card onMouseEnter={_ => serHover(true)} onMouseLeave={_ => serHover(false)}>
            <ImageProduct alt={props.product.title} src={hover ? props.product.imageHover : props.product.image}/>
            <TitleProduct hover={hover}>{props.product.title}</TitleProduct>
            <PriceProduct>{props.product}</PriceProduct>
        </Card>
    )
}