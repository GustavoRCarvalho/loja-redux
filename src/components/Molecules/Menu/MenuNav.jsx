import styled from "styled-components"
import ButtonMenu from "../../Atoms/Menu/ButtonMenu"
import { themeChange } from "../../../store/userSlice"
import Switch from "react-switch"
import { useDispatch, useSelector } from "react-redux"

const Nav = styled.nav`
  height: 3rem;
  line-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function MenuNav(props) {
  const { themeColorBlack } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  function handleChange() {
    dispatch(themeChange())
  }

  return (
    <Nav {...props}>
      <ButtonMenu to="/">Home</ButtonMenu>
      <ButtonMenu to="/roupas/todos">Roupas</ButtonMenu>
      <ButtonMenu to="/roupas/moletons">Moletons</ButtonMenu>
      <ButtonMenu to="/about">About</ButtonMenu>
      <ButtonMenu to="/error">Error</ButtonMenu>
      <Switch onChange={handleChange} checked={themeColorBlack} />
    </Nav>
  )
}
