import styled from "styled-components"

export const ButtonColor = styled.div`
  font-size: 1em;
  background-color: ${(props) => props.color};
  width: 3rem;
  height: 3rem;
  margin: 0.1rem;

  cursor: pointer;

  border: ${(props) =>
      props.selected ? props.theme.catalog.colorHover : props.theme.color}
    solid 0.15rem;
  transition: border 0.3s;

  :hover {
    border: ${(props) => props.theme.colorInvert} solid 0.15rem;
    transition: border 0.3s;
  }
`
