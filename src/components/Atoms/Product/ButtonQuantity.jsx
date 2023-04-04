import styled from "styled-components"

const QuantityInput = styled.input`
  outline: none;
  border: none;
  background: transparent;
  color: ${(props) => {
    if (props.buyButton || props.theme.color === "#fff") {
      return "#fff"
    } else {
      return "#000"
    }
  }};
  width: 2rem;

  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`

const QuantityButton = styled.span`
  background: transparent;
  color: ${(props) => {
    if (props.buyButton || props.theme.color === "#fff") {
      return "#dbdbdb"
    } else {
      return "#000"
    }
  }};
  transition: color 0.3s;

  :hover {
    color: #fff;
    transition: color 0.3s;
  }

  padding-inline: 0.5rem;
  cursor: pointer;
`

const QuantityConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.product.backgroundQuantity};
  color: ${(props) => props.theme.color};
  min-height: 4rem;

  border-radius: 0.3rem;
`

export default function ButtonQuantity(props) {
  const { buyButton, quantity, quantityPlus } = props

  return (
    <QuantityConteiner {...props}>
      <QuantityButton
        buyButton={buyButton}
        onClick={() => {
          quantityPlus(quantity, -1)
        }}
      >
        {" "}
        -{" "}
      </QuantityButton>
      <QuantityInput
        buyButton={buyButton}
        value={quantity}
        onChange={({ target: { value } }) => {
          quantityPlus(value)
        }}
      />
      <QuantityButton
        buyButton={buyButton}
        onClick={() => {
          quantityPlus(quantity, +1)
        }}
      >
        {" "}
        +{" "}
      </QuantityButton>
    </QuantityConteiner>
  )
}
