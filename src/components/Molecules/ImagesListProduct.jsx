import { useState } from "react"
import styled from "styled-components"
import ImageProduct from "../Atoms/Catalog/ImageProduct"

import { productData } from "../Pages/Product"

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

const ImageProductSecundary = styled(ImageProduct)`
    border: ${props => props.selected ? "1px solid "+props.theme.product.selectedColor : ""};
    margin-bottom: 1rem;
    cursor: pointer;
`

export default function ImagesListProduct() {
    const {imagesList, title} = productData
    const [mainImage, setMainImage] = useState(imagesList[0])

    const ListSecondary = (list) => 
        list.map((src, index) => {
            const isSelected = mainImage === src;
            return <ImageProductSecundary 
                src={src} 
                key={index} 
                alt={title} 
                onClick={()=>{setMainImage(src)}} 
                selected={isSelected}/>
        })

    return (
        <Container>
            <ImagesSecondary>
                {ListSecondary(imagesList)}
            </ImagesSecondary>
            <ImageMain src={mainImage} alt={title}/>
        </Container>
    )
}