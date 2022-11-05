import Title from "../Atoms/Product/Title"
import TemplateBackground from "../Atoms/TemplateBackground"

import styled from "styled-components"
import { useSelector } from "react-redux"
import OptionsColor from "../Molecules/OptionsColor"
import OptionsSize from "../Molecules/OptionsSizes"
import PriceProduct from "../Atoms/Catalog/PriceProduct"
import ButtonBuy from "../Atoms/Product/ButtonBuy"
import ImagesListProduct from "../Molecules/ImagesListProduct"

const Container = styled.div`
    color: ${props => props.theme.catalog.color};
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export default function ProductTemplate () {
    const {product} = useSelector(state => state.product)

    return (
        <TemplateBackground>
            <Container>
                <ImagesListProduct />
            </Container>
            <Container>
                <Title>{product.title}</Title>
                <OptionsColor />
                <OptionsSize />
                <PriceProduct {...product} fontSizePrice="2rem" fontSizeOld="1.3rem"/>
                <ButtonBuy />
            </Container>
        </TemplateBackground>
    )
}