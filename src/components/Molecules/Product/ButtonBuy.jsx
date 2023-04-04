import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { addProductToCart } from "../../../store/cartSlice"
import { modalCart } from "../../../store/modalSlice"
import { updateProductQuantity } from "../../../store/productSlice"
import { productData } from "../../Pages/Product"
import ButtonQuantity from "../../Atoms/Product/ButtonQuantity"

const Container = styled.div`
  background-color: ${(props) => props.theme.product.backgroundBuy};

  border-radius: 0.3rem;
  padding: 0.5rem;
  margin-block: 0.5rem;
  color: #fff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  cursor: pointer;
`

const SpanBuy = styled.span`
  padding-inline: 0.5rem;
`

export default function ButtonBuy() {
  const { id: idProduct, title, price, imagesList } = productData
  const image = imagesList[0]
  const {
    productOptions,
    productOptions: { quantity },
  } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  function quantityPlus(quantity, number = 0) {
    let newNumber = Number(quantity) + number
    dispatch(updateProductQuantity(newNumber))
  }

  function buyButton(idElement, product) {
    if (idElement === "buyButton") {
      dispatch(addProductToCart(product))
      dispatch(modalCart())
    }
  }
  return (
    <Container
      id="buyButton"
      onClick={({ target: { id } }) => {
        buyButton(id, {
          ...productOptions,
          id: idProduct,
          title,
          priceUnit: price,
          price,
          image,
        })
      }}
    >
      <ButtonQuantity
        buyButton={true}
        quantity={quantity}
        quantityPlus={quantityPlus}
      />
      <SpanBuy id="buyButton">Comprar</SpanBuy>
    </Container>
  )
}
