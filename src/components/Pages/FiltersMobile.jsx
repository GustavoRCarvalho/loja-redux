import { useDispatch } from "react-redux"
import styled from "styled-components"
import { modalFilters } from "../../store/modalSlice"
import { BackgroundModal } from "../Atoms/BackgroundModal"
import FiltersModal from "../Organisms/FiltersModal"

const Background = styled(BackgroundModal)`
  justify-content: start;
`

export default function FiltersMobile() {
  const dispatch = useDispatch()

  function handleClose(id) {
    if (id === "modalFilters") {
      dispatch(modalFilters())
    }
  }

  return (
    <Background
      id="modalFilters"
      onClick={({ target: { id } }) => handleClose(id)}
    >
      <FiltersModal />
    </Background>
  )
}
