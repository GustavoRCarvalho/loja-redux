import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageProduct from "../Atoms/Catalog/ImageProduct";
import PriceProduct from "../Atoms/Catalog/PriceProduct";
import TitleProduct from "../Atoms/Catalog/Title";

const Card = styled(Link)`
    color: ${props => props.theme.catalog.color};
    width: 15rem;
    height: 100%;
    margin: 2rem;
    text-decoration: none;

    cursor: pointer;
`

export default function Product (props) {
    const [hover, setHover] = useState(false)

    return (
        <Card 
            to={`/roupas/id=${props.product.id}`}
            onMouseEnter={_ => setHover(true)} 
            onMouseLeave={_ => setHover(false)}>
            <ImageProduct alt={props.product.title} src={hover ? props.product.imageHover : props.product.image}/>
            <TitleProduct hover={hover}>{props.product.title}</TitleProduct>
            <PriceProduct {...props.product}/>
        </Card>
    )
}