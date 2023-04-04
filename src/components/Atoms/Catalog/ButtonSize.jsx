import styled from "styled-components"

export const ButtonSize = styled.div`
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.5em;
  height: 2.5em;
  margin: 0.5em;
  border-radius: 0.2rem;

  cursor: pointer;

  color: ${(props) => {
    if (props.selected && props.theme.color === "#fff") {
      return props.theme.colorInvert
    } else {
      return props.theme.color
    }
  }};
  background-color: ${(props) =>
    props.selected ? props.theme.catalog.sizeSelect : props.theme.colorInvert};
  transition: background-color 0.3s, color 0.3s;

  :hover {
    color: black;
    background-color: ${(props) =>
      props.selected ? "#b0b000" : props.theme.catalog.sizeSelect};
    transition: background-color 0.3s, color 0.3s;
  }
`
