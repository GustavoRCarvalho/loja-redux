import styled from "styled-components"

const DescriptionComponent = styled.p`
  color: ${(props) => props.theme.product.colorDescription};
  font-size: 1.1em;
  display: block;
`

export default function Description(props) {
  return <DescriptionComponent>{props.description}</DescriptionComponent>
}
