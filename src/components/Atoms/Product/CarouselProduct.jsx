import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"

const CarouselContainer = styled(Carousel)`
  width: 75%;
  padding: 0;
  padding-top: 1rem;
`

export default function CarouselProduct({ title, imagesList }) {
  return (
    <CarouselContainer>
      {imagesList.map((src, index) => {
        return <img alt={title} key={index} src={src} />
      })}
    </CarouselContainer>
  )
}
