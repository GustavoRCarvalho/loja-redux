import styled from "styled-components"

const QuantityInput = styled.input`
  outline: none;
  border: none;
  background: transparent;
  width: 2rem;

  font-size: 1.3rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
`

const QuantityButton = styled.span`
  background: transparent;
  color: #a1a1a1;
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
  background-color: rgba(0, 0, 0, 0.35);
  min-height: 4rem;

  border-radius: 0.3rem;
`

export default function ButtonQuantity(props) {
  const { quantity, quantityPlus } = props

  return (
    <QuantityConteiner {...props}>
      <QuantityButton
        onClick={() => {
          quantityPlus(quantity, -1)
        }}
      >
        {" "}
        -{" "}
      </QuantityButton>
      <QuantityInput
        value={quantity}
        onChange={({ target: { value } }) => {
          quantityPlus(value)
        }}
      />
      <QuantityButton
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
