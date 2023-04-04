import { useDispatch } from "react-redux"
import styled from "styled-components"
import { modalFilters } from "../../store/modalSlice"
import OrderList from "../Atoms/Catalog/OrderList"
import ButtonClose from "../Atoms/Product/ButtonClose"
import FilterColors from "../Molecules/Catalog/FilterColors"
import FilterSizes from "../Molecules/Catalog/FilterSizes"
import FilterTypes from "../Molecules/Catalog/FilterTypes"
import { ModalContainer } from "../Atoms/ModalContainer"

const CloseLine = styled.div`
  display: flex;
  justify-content: start;

  padding: 0.4rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function FiltersModal() {
  const dispatch = useDispatch()

  function handleClose() {
    dispatch(modalFilters())
  }

  return (
    <ModalContainer>
      <CloseLine>
        <ButtonClose onClick={() => handleClose()} />
      </CloseLine>
      <Container>
        <OrderList />
        <FilterTypes />
        <FilterColors />
        <FilterSizes />
      </Container>
    </ModalContainer>
  )
}
