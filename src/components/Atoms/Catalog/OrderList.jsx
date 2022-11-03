import styled from "styled-components";
import Select from 'react-select'
import TitleProduct from "./Title";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../../store/filterSlice";

const styleGlobal = {
  width: "186px",
  fontWeight: "500",
  fontSize: "12px",
  color: '#ada8a8',
  backgroundColor: '#efebeb',}

const colourStyles = {
  control: styles => ({
    ...styles,
    ...styleGlobal,
  }),
  option: (styles) => ({
    ...styles,
    ...styleGlobal,
  }),
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 19rem;
`

export default function OrderList () {
  const { listOrder:{data}, order } = useSelector(state => state.filters)
  const dispatch = useDispatch()

  let defaultOption = order.value ? order : data && data[data.length - 1]

  return (
    data &&
      <Container>
          <TitleProduct>Ordenar por:</TitleProduct>
          <Select 
            options={data} 
            defaultValue={defaultOption} 
            styles={colourStyles}
            onChange={(obj) => {dispatch(updateOrder(obj))}}
          />
      </Container>
  )
}