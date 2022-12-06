import { useState } from "react"
import styled from "styled-components"
import ImageProduct from "../../Atoms/Catalog/ImageProduct"

import { productData } from "../../Pages/Product"
import { ListImages } from "../ListsComponents/ListImages"

const Container = styled.div`
    display: flex;
    padding: 1rem;
    height: 45rem;

    @media screen and (min-width: ${props => props.theme.device.mobileMin}) and (max-width: ${props => props.theme.device.mobileMax}){
        height: 80vw;
        padding: 0;
        padding-top: 1rem;
    }
`

const ImageMain = styled(ImageProduct)`
    width: 30rem;

    @media screen and (min-width: ${props => props.theme.device.mobileMin}) and (max-width: ${props => props.theme.device.mobileMax}){
        width: 55vw;
    }
`

const ImagesSecondary = styled.div`
    padding-inline: 1rem;
    width: 6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: overlay;

    ::-webkit-scrollbar {
        width: 0rem;
    }
`

export default function ImagesProduct() {
    const {imagesList, title} = productData
    const [mainImage, setMainImage] = useState(imagesList[0])

    return (
        <Container>
            <ImagesSecondary>
                {ListImages({title: title, imagesList: imagesList, mainImage: mainImage, setMainImage: setMainImage})}
            </ImagesSecondary>
            <ImageMain src={mainImage} alt={title}/>
        </Container>
    )
}