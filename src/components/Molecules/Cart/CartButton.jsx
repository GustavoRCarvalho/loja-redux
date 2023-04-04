import styled from "styled-components"
import ButtonIcon from "../../Atoms/Menu/ButtonIcon"

import { AiOutlineShoppingCart } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { modalCart } from "../../../store/modalSlice"

const Button = styled(ButtonIcon)`
  background-color: #d86dff;

  position: fixed;
  margin: 0.4rem;
`

const IconCart = styled(AiOutlineShoppingCart)`
  height: 1.5rem;
  width: 1.5rem;
`

const ButtonLine = styled.div`
  top: 10%;
  left: 100%;
  position: absolute;
  display: flex;

  justify-content: flex-end;
`

export default function CartButton() {
  const dispatch = useDispatch()

  function handleOpen() {
    dispatch(modalCart())
  }

  return (
    <ButtonLine>
      <Button onClick={() => handleOpen()}>
        <IconCart />
      </Button>
    </ButtonLine>
  )
}
