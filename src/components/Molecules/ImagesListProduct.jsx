import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import ImageProduct from "../Atoms/Catalog/ImageProduct"

const Container = styled.div`
    display: flex;
`

const ImageMain = styled(ImageProduct)`
    width: 30rem;
    height: 45rem;
`

const ImagesSecondary = styled.div`
    padding-inline: 1rem;
    width: 6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImageProductSecundary = styled(ImageProduct)`
    padding-bottom: 1rem;
    cursor: pointer;
`

export default function ImagesListProduct() {
    const {product: {imagesList,title}} = useSelector(state => state.product)
    const [mainImage, setMainImage] = useState("") 

    useEffect(()=>{
        setMainImage(imagesList[0])
    },[imagesList])

    console.log("renderizou")

    const ListSecondary = (list) => 
        list.map((src, index) =>
            <ImageProductSecundary src={src} key={index} alt={title} onClick={()=>{setMainImage(src)}}/>
        )

    return (
        <Container>
            <ImagesSecondary>
                {ListSecondary(imagesList)}
            </ImagesSecondary>
            <ImageMain src={mainImage} alt={title}/>
        </Container>
    )
}