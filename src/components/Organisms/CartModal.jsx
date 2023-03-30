import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { modalCart } from "../../store/modalSlice"
import FinishButton from "../Atoms/Cart/FinishButton"
import { ModalContainer } from "../Atoms/ModalContainer"
import ButtonClose from "../Atoms/Product/ButtonClose"
import CartList from "../Molecules/Cart/CartList"
import { formatterBr } from "../utils/Formaters"

const Modal = styled(ModalContainer)`
  width: 30rem;

  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    width: 80%;
  }

  ::-webkit-scrollbar {
    width: 0rem;
  }
`

const CloseLine = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 0.4rem;
`

const FinishLine = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.4rem;
`

const ListContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  min-height: 85%;
  padding: 0.4rem;
`

const NoProduct = styled.div`
  text-align: center;
`

export default function CartModal() {
  const dispatch = useDispatch()
  const { listCart } = useSelector((state) => state.cart)

  function handleClose() {
    dispatch(modalCart())
  }

  function calcTotal({ data }) {
    let total = 0
    data?.forEach((product) => {
      total += product.price
    })
    return formatterBr.format(total)
  }

  return (
    <Modal>
      <CloseLine>
        <ButtonClose onClick={() => handleClose()} />
      </CloseLine>
      <ListContainer>
        {listCart.length ? (
          <CartList listCart={listCart} />
        ) : (
          <NoProduct>Ops!! Nenhum produto adicionado ao carrinho!</NoProduct>
        )}
        <FinishLine>
          Total: R$ {calcTotal({ data: listCart })}
          <FinishButton />
        </FinishLine>
      </ListContainer>
    </Modal>
  )
}
