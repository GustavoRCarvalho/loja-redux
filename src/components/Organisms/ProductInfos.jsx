import TitleProduct from "../Atoms/Product/Title"
import OptionsColor from "../Molecules/Product/OptionsColor"
import OptionsSize from "../Molecules/Product/OptionsSizes"
import PriceProduct from "../Atoms/Catalog/PriceProduct"
import Description from "../Atoms/Product/Description"
import ButtonBuy from "../Molecules/Product/ButtonBuy"
import { productData } from "../Pages/Product"

import styled from "styled-components"

const Container = styled.div`
  color: ${(props) => props.theme.catalog.color};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 1rem;
  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    font-size: 0.8rem;
  }
`

const Title = styled(TitleProduct)`
  font-size: 2em;
`

export default function ProductInfos() {
  return (
    <Container>
      <Title>{productData.title}</Title>
      <OptionsColor />
      <OptionsSize />
      <PriceProduct
        {...productData}
        fontSizePrice="2rem"
        fontSizeOld="1.3rem"
      />
      <ButtonBuy />
      <Description description={productData.description} />
    </Container>
  )
}
