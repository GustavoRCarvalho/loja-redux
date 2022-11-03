import Title from "../Atoms/Product/Title"
import TemplateBackground from "../Atoms/TemplateBackground"

import styled from "styled-components"
import { useSelector } from "react-redux"
import OptionsColor from "../Molecules/OptionsColor"
import OptionsSize from "../Molecules/OptionsSizes"
import PriceProduct from "../Atoms/Catalog/PriceProduct"

const Container = styled.div`
    color: ${props => props.theme.catalog.color};
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const ButtonBuy = styled.div`
    height: 5rem;
    width: 50%;
    background-color: #3f9030;

    border-radius: 0.3rem;
    margin-block: 0.5rem;
    color: #fff;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`

const QuantityButton = styled.span`
    background: transparent;
    color: #a1a1a1;
    transition: color 0.3s;

    :hover {
        color: #fff;
        transition: color 0.3s;
    }
`

const QuantityInput = styled.input`
    border: none;
    background: transparent;
    width: 10%;
`

export default function ProductTemplate () {
    const {product} = useSelector(state => state.product)

    return (
        <TemplateBackground>
            <Container>
                
            </Container>
            <Container>
                <Title>{product.title}</Title>
                <OptionsColor />
                <OptionsSize />
                <PriceProduct {...product} fontSizePrice="2rem" fontSizeOld="1.3rem"/>
                <ButtonBuy>
                    <QuantityButton> - </QuantityButton>
                    <QuantityInput />
                    <QuantityButton> + </QuantityButton>
                    Comprar
                </ButtonBuy>
            </Container>
        </TemplateBackground>
    )
}