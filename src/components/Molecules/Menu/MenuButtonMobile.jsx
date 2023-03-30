import { AiOutlineMenu } from "react-icons/ai"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { modalMenu } from "../../../store/modalSlice"
import ButtonIcon from "../../Atoms/Menu/ButtonIcon"

const Button = styled(ButtonIcon)`
  position: fixed;
  margin: 0.4rem;
  display: none;

  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    display: flex;
  }
`

export default function MenuButtonMobile() {
  const dispatch = useDispatch()

  function handleOpen() {
    dispatch(modalMenu())
  }

  return (
    <Button onClick={() => handleOpen()}>
      <AiOutlineMenu />
    </Button>
  )
}
