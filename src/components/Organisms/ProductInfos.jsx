import Title from "../Atoms/Product/Title"
import OptionsColor from "../Molecules/OptionsColor"
import OptionsSize from "../Molecules/OptionsSizes"
import PriceProduct from "../Atoms/Catalog/PriceProduct"
import ButtonBuy from "../Atoms/Product/ButtonBuy"
import { productData } from "../Pages/Product"

import styled from "styled-components"

const Container = styled.div`
    color: ${props => props.theme.catalog.color};
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export default function ProductInfos() {
    return (
        <Container>
            <Title>{productData.title}</Title>
            <OptionsColor />
            <OptionsSize />
            <PriceProduct {...productData} fontSizePrice="2rem" fontSizeOld="1.3rem"/>
            <ButtonBuy />
        </Container>
    )
}