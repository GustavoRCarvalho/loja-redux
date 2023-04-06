import { useState } from "react"
import styled from "styled-components"
import ImageProduct from "../../Atoms/Catalog/ImageProduct"

import { productData } from "../../Pages/Product"
import { ListImages } from "../ListsComponents/ListImages"
import useWindowDimensions from "../../utils/windowDimensions"
import CarouselProduct from "../../Atoms/Product/CarouselProduct"

const Container = styled.div`
  display: flex;
  padding: 1rem;
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
  const { imagesList, title } = productData
  const [mainImage, setMainImage] = useState(imagesList[0])
  const { width } = useWindowDimensions()

  return width <= "768" ? (
    <CarouselProduct title={title} imagesList={imagesList} />
  ) : (
    <Container>
      <>
        <ImagesSecondary>
          {ListImages({
            title: title,
            imagesList: imagesList,
            mainImage: mainImage,
            setMainImage: setMainImage,
          })}
        </ImagesSecondary>
        <ImageMain src={mainImage} alt={title} />
      </>
    </Container>
  )
}
