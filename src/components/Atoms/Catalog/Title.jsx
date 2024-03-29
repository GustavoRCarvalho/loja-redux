import styled from "styled-components"

const TitleComponent = styled.title`
  color: ${(props) =>
    props.hover ? props.theme.catalog.colorHover : props.theme.catalog.color};
  font-weight: ${(props) => props.theme.catalog.fontWeight};
  font-size: 1em;
  display: block;
`

export default function Title(props) {
  return <TitleComponent hover={props.hover}>{props.children}</TitleComponent>
}
