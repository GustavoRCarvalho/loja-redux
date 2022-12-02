import { useState } from "react"
import styled from "styled-components"
import ImageProduct from "../../Atoms/Catalog/ImageProduct"

import { productData } from "../../Pages/Product"
import { ListImages } from "../ListsComponents/ListImages"

const Container = styled.div`
    display: flex;
    padding: 2em;
    height: 45rem;
`

const ImageMain = styled(ImageProduct)`
    width: 30rem;
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