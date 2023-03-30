import styled from "styled-components"

const DescriptionComponent = styled.p`
  color: #dddddd;
  font-size: 1.1em;
  display: block;
`

export default function Title(props) {
  return <DescriptionComponent>{props.description}</DescriptionComponent>
}
