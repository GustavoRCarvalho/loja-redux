import styled from "styled-components"

const Container = styled.div`
  background-color: ${(props) => props.theme.catalog.backgroudColor};
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export default function TemplateBackground(props) {
  return <Container {...props}>{props.children}</Container>
}
