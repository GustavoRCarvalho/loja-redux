import styled from "styled-components"

const Text = styled.span`
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

  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    background-color: transparent;
    border-radius: 0.3rem;
  }
`

export default function TextMenu(props) {
  return <Text>{props.children}</Text>
}
