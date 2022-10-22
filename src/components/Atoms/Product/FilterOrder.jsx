import styled from "styled-components";
import Select from 'react-select'
import TitleProduct from "./TitleProduct";

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
  width: 19rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function FilterOrder (props) {

    console.log(props.listOrder)
    const defaultOption = props.listOrder[props.listOrder.length - 1]
    
    return (
      <Container>
          <TitleProduct>Ordenar por:</TitleProduct>
          <Select 
          options={props.listOrder} 
          defaultValue={defaultOption} 
          styles={colourStyles}
          />
      </Container>
    )
}