import { Link } from "react-router-dom"
import styled from "styled-components"

const Button = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 4vw;
  list-style: none;
  background-color: ${(props) => props.theme.menu.backgroudColor};
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.menu.fontSize};
  font-weight: "600";
  text-decoration: none;

  :hover {
    background-color: ${(props) => props.theme.menu.activeBackgroundColor};
    cursor: pointer;
  }

  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    background-color: transparent;
    border-radius: 0.3rem;
  }
`

export default function ButtonMenu(props) {
  return <Button {...props}>{props.children}</Button>
}
