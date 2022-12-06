import styled from "styled-components"
import TemplateBackground from "../Atoms/TemplateBackground"

import ImagesProduct from "../Molecules/Product/ImagesProduct"
import ProductInfos from "../Organisms/ProductInfos"

const Template = styled(TemplateBackground)`
    @media screen and (max-width: ${props => props.theme.device.laptopMax}) and (min-width: ${props => props.theme.device.mobileMin}){
        flex-direction: column;
        align-items: center;
    }
`

export default function ProductTemplate () {

    return (
        <Template>
            <ImagesProduct />
            <ProductInfos />
        </Template>
    )
}