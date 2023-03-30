import { useDispatch } from "react-redux"
import styled from "styled-components"
import { modalMenu } from "../../store/modalSlice"
import { BackgroundModal } from "../Atoms/BackgroundModal"
import MenuModal from "../Organisms/MenuModal"

const Background = styled(BackgroundModal)`
  justify-content: start;
`

export default function MenuMobile() {
  const dispatch = useDispatch()

  function handleClose(id) {
    if (id === "modalMenu") {
      dispatch(modalMenu())
    }
  }

  return (
    <Background
      id="modalMenu"
      onClick={({ target: { id } }) => handleClose(id)}
    >
      <MenuModal />
    </Background>
  )
}
