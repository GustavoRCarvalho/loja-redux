import styled from "styled-components"
import ButtonMenu from "../../Atoms/Menu/ButtonMenu"

const Nav = styled.nav`
  height: 3rem;
  line-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function MenuNav(props) {
  return (
    <Nav {...props}>
      <ButtonMenu to="/">Home</ButtonMenu>
      <ButtonMenu to="/roupas/todos">Roupas</ButtonMenu>
      <ButtonMenu to="/roupas/moletons">Moletons</ButtonMenu>
      <ButtonMenu to="/about">About</ButtonMenu>
      <ButtonMenu to="/error">Error</ButtonMenu>
    </Nav>
  )
}
