import styled from "styled-components"

const Container = styled.div`
  background-color: #3f9030;
  color: #fff;

  border-radius: 0.3rem;
  padding: 0.5rem;
  margin-block: 0.5rem;

  font-size: 1em;
  transition: font-size 300ms;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  cursor: pointer;

  :hover {
    font-size: 1.1em;
    transition: font-size 300ms;
  }
`

export default function FinishButton() {
  return <Container>FINALIZAR PEDIDO</Container>
}
