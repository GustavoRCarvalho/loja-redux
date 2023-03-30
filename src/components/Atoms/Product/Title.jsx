import styled from "styled-components"

const TitleComponent = styled.title`
  color: ${(props) => props.theme.primaryColor};
  font-weight: 600;
  font-size: 1.2em;
  display: block;
`

export default function Title(props) {
  return (
    <TitleComponent hover={props.hover} {...props}>
      {props.children}
    </TitleComponent>
  )
}
